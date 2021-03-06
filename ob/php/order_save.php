<?php
/*
 * [Rocky 2017-05-12 20:16:27]
 * 订单信息保存类
 */
require_once("current_dir_env.php");
require_once("mgo_order.php");
require_once("mgo_menu.php");
require_once("mgo_stat_food_byday.php");
require_once("redis_id.php");
require_once("const.php");
require_once("mgo_user.php");
require_once("mgo_employee.php");
require_once("mgo_order_status.php");
require_once("mgo_seat.php");
require_once("page_util.php");
require_once("mgo_stat_platform_byday.php");
require_once("mgo_stat_shop_byday.php");
require_once("page_util.php");
//Permission::EmployeePermissionCheck(
//     Permission::CHK_ORDER_W
//);

Permission::PageCheck($_['srctype']);
// 计算订单费用(填充各字段)
function CalOrderFee($orderinfo)
{
    // 各个菜累加
    $food_num_all = 0;
    $food_price_all = (float)0;
    foreach($orderinfo->food_list as $i => $item)
    {
        $food_num_all += (int)$item->food_num;
        $food_price_all += (float)$item->food_price_sum;
    }

    // 座位费用
    $seat_fee = (float)$orderinfo->seat_price * (int)$orderinfo->customer_num;

    // 计算订单费用
    $order_fee = $food_price_all + $seat_fee;

    $orderinfo->food_num_all   = $food_num_all;
    $orderinfo->food_price_all = $food_price_all;
    $orderinfo->order_fee      = $order_fee;
    $orderinfo->order_payable  = (float)$order_fee - (float)$orderinfo->order_waiver_fee; // 应付费用 = 订单费用 - 减免费用
}

function ModifyOrderStatus(&$resp)
{
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $order_id     = $_['order_id'];
    $order_status = $_['order_status'];

    // // 查看当前订单状态
    // $ret = PageUtil::OrderCanModify($order_id);
    // if(0 != $ret)
    // {
    //     LogErr("order err, id:[$order_id], ret:[$ret]");
    //     return $ret;
    // }

    $orderinfo = \Cache\Order::Get($order_id);

    // // 已确认的订单
    // if(OrderStatus::HadConfirmed($orderinfo->order_status))
    // {
    //     if(OrderStatus::CONFIRMED == $order_status
    //         || OrderStatus::CANCEL == $order_status)
    //     {
    //         LogErr("order opr err, order_id:[$order_id]");
    //         return errcode::ORDER_OPR_ERR;
    //     }
    // }

    // 检查餐品库存够不够
    if(OrderStatus::HadConfirmed($order_status))
    {
        $food = PageUtil::CheckFoodStockNum($orderinfo->shop_id, $orderinfo->food_list);
        if(null != $food)
        {
            $resp = (object)array(
                'food_id' => $food->food_id,
                'food_name' => $food->food_name,
            );
            LogErr("not enough, food_id:[{$food->food_id}], food_num_day:[{$food_num_day}], food_sold_num:[{$food_sold_num}]");
            return errcode::FOOD_NOT_ENOUGH;
        }
    }

    $shop_id = \Cache\Login::GetShopId();
    if(!$shop_id || $shop_id != $orderinfo->shop_id)
    {
        LogErr("shop err, shop_id[$shop_id]");
        return errcode::SYS_ERR;
    }

    $mgo = new \DaoMongodb\Order;
    $entry = new \DaoMongodb\OrderEntry;

    $entry->order_id     = $order_id;
    $entry->order_status = $order_status;

    $ret = $mgo->Save($entry);
    if(0 != $ret)
    {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }
    // 更新缓存
    \Cache\Order::Clear($order_id);

    // 通知到golang服务器，再转到店服务器（以便打印处理等）
    $url = Cfg::instance()->orderingsrv->webserver_url;
    //LogDebug("post to:[$url]");
    $ret_json = PageUtil::HttpPostJsonData($url, [
        'OrderId' => (string)$order_id,
        'Opr' => "OrderInfo1496644465",
    ]);

    $ret = json_decode($ret_json);
    if(0 != $ret->Ret)
    {
        LogErr("post err: {$ret->Msg}, url:[$url], ret_json:[$ret_json]");
        return errcode::SYS_ERR;
    }

    // 增加餐品售出数
    PageUtil::UpdateFoodDauSoldNum($order_id);

    $resp = (object)array(
        'order_status' => $order_status
    );
    LogInfo("modift ok");
    return 0;
}

function SaveOrderFoodinfoInfo(&$resp)
{
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $order_id = $_['order_id'];
    $food_info = json_decode($_['food_info']);

    // 查看当前订单状态
    $ret = PageUtil::OrderCanModify($order_id);
    if(0 != $ret)
    {
        LogErr("order err, id:[$order_id], ret:[$ret]");
        return $ret;
    }

    /*
     * 查看当前订单中是否已有些餐品，有就修改，否则插入新的
     */
    $orderinfo = \Cache\Order::Get($order_id);
    if(!$orderinfo)
    {
        LogErr("no order:[{$order_id}]");
        return errcode::ORDER_NOT_EXIST;
    }
    $order_foodinfo = null;
    foreach($orderinfo->food_list as $i => $item)
    {
        if($item->id == $food_info->id)
        {
            $order_foodinfo = $item;
            break;
        }
    }
    LogDebug($order_foodinfo);
    if(null == $order_foodinfo)
    {
        $order_foodinfo = new \DaoMongodb\OrderFoodInfo;
        $info = \Cache\Food::Get($food_info->food_id);
        if(!$info)
        {
            LogErr("no food:[{$food_info->food_id}]");
            return errcode::FOOD_NOT_EXIST;
        }

        $food_price = Util::FenToYuan($info->food_price);
        if(\Cache\Customer::IsVip($orderinfo->customer_id) && $info->food_vip_price > 0)
        {
            $food_price = Util::FenToYuan($info->food_vip_price);
        }

        // 注：其它信息下面填
        $order_foodinfo->id            = \DaoRedis\Id::GenOrderFoodId();
        $order_foodinfo->food_id       = $info->food_id;
        $order_foodinfo->food_name     = $info->food_name;
        $order_foodinfo->food_category = $info->food_category;
        $order_foodinfo->food_unit     = $info->food_unit;
        $order_foodinfo->food_price    = $food_price;

        array_push($orderinfo->food_list, $order_foodinfo);
        LogDebug("add food:" . json_encode($order_foodinfo));
    }

    $food_num = (int)$food_info->food_num;
    if(0 == $food_num)
    {
        LogErr("param err, food_num:[{$food_num}]");
        return errcode::PARAM_ERR;
    }

    $unit_num = (float)$food_info->unit_num;
    if(0 == $unit_num)
    {
        $unit_num = 1;
    }

    $food_price_sum = $order_foodinfo->food_price * $food_num * $unit_num;

    $order_foodinfo->food_price_sum   = $food_price_sum;
    $order_foodinfo->food_num         = $food_num;
    $order_foodinfo->unit_num         = $unit_num;
    $order_foodinfo->food_attach_list = $food_info->food_attach_list;

    CalOrderFee($orderinfo);

    $mgo = new \DaoMongodb\Order;
    $ret = $mgo->Save($orderinfo);
    if(0 != $ret)
    {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }

    $resp = (object)array(
        'orderinfo' => $orderinfo,
        'order_foodinfo' => $order_foodinfo,
    );
    LogDebug($resp);
    LogInfo("ok");
    return 0;
}

function DeleteOrderFood(&$resp)
{
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $order_id = $_['order_id'];
    $order_food_id = $_['order_food_id'];

    $orderinfo = \Cache\Order::Get($order_id);
    if(!$orderinfo)
    {
        LogErr("no food:[{$order_id}]");
        return errcode::ORDER_NOT_EXIST;
    }

    foreach($orderinfo->food_list as $i => &$item)
    {
        if($item->id == $order_food_id)
        {
            unset($orderinfo->food_list[$i]);
            LogDebug($i);
            break;
        }
    }

    $orderinfo->order_time = time();
    CalOrderFee($orderinfo);

    $mgo = new \DaoMongodb\Order;
    $ret = $mgo->Save($orderinfo);
    if(0 != $ret)
    {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }

    $resp = (object)array(
        'orderinfo' => $orderinfo
    );
    LogDebug($resp);
    LogInfo("ok");
    return 0;
}
// 手动打印
function OrderPrintManual(&$resp)
{
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $order_id = $_['order_id'];
    $printer_id = $_['printer_id'];


    // 通知到golang服务器，再转到店服务器（以便打印处理等）
    $url = Cfg::instance()->orderingsrv->webserver_url;
    //LogDebug("post to:[$url]");
    $ret_json = PageUtil::HttpPostJsonData($url, [
        'OrderId' => (string)$order_id,
        'PrinterId' => (string)$printer_id,
        'Opr' => "WebOrderPrintManual1500264796",
    ]);

    $ret = json_decode($ret_json);
    if(0 != $ret->Ret)
    {
        LogErr("post err: {$ret->Msg}, url:[$url], ret_json:[$ret_json]");
        return errcode::SYS_ERR;
    }

    $resp = (object)array(
    );
    LogInfo("ok");
    return 0;
}
//外包PAD端订单信息操作(下单,结账,红冲等)
function MadeOrderStatus(&$resp)
{
    $_ = $GLOBALS["_"];
    if (!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $admin_account = $_['admin_account'];      //操作事件的账号
    $admin_pwd     = md5($_['admin_pwd']);     //操作事件的密码
    $order_id      = $_['order_id'];
    $oper_id       = (int)$_['oper_id'];       //外包操作id(eg:红冲，结账等）
    $account       = $_['account'];              //当前登录账号
    //LogDebug($_);
    if(!$order_id)
    {
        LogErr('no order');
        return errcode::ORDER_NOT_EXIST;
    }
    //找到订单状态信息
    $order_s = new \DaoMongodb\OrderStatus;
    $order_status_info = $order_s->GetOrderById($order_id);

    $oper_reason      = $_['oper_reason'];      //操作原因
    //用于idpad端点餐结账
    $maling_price     = $_['maling_price'];     //抹零金额
    $order_waiver_fee = $_['order_waiver_fee']; //减免金额
    $orderinfo        = \Cache\Order::Get($order_id);
    $shop_id          = $_['shop_id'];
    if(!$shop_id)
    {
        $shop_id   = \Cache\Login::GetShopId();
    }
    if (!$shop_id || $shop_id != $orderinfo->shop_id)
    {
        LogErr("shop err, shop_id[$shop_id]");
        return errcode::SYS_ERR;
    }

    $mgo                     = new \DaoMongodb\Order;
    $entry                   = new \DaoMongodb\OrderEntry;
    $shop                    = new \DaoMongodb\Shop;
    $employee                = new \DaoMongodb\Employee;
    $shop_info               = $shop->GetShopById($shop_id);
    $order_info              = $mgo->GetOrderById($order_id);
    $water_info              = $employee->GetEmployeeByPhone($shop_id, $account);
    if(!$water_info)
    {
        LogErr("employee_info is empty");
        return errcode::USER_NO_EXIST;
    }

    //LogDebug($oper_id);
    switch ($oper_id)
    {
        case 0://结账
//            if($_['srctype'] == 3)
//            {
//                Permission::PadUserPermissionCheck(Position::ORDERING);
//            }
            $order_status = 2;
            $pay_time     = time();
            $pay_status   = 2;
            $userinfo                  = MadeOrderValidation($admin_account, $admin_pwd);
            if(!$userinfo->phone)
            {
                LogErr('user not login');
                return errcode::USER_NOLOGIN;
            }
            $employee_info             = $employee->QueryByShopId($userinfo->userid,$shop_id);
            $employee_id               = $employee_info->employee_id;
            if(!$maling_price)
            {
                $maling_price = 0;
            }
            if(!$order_waiver_fee)
            {
                $order_waiver_fee = 0;
            }
            $paid_price = $order_info->order_payable;

            //保存商户消费额度统计数据
            $platformer     = new \DaoMongodb\StatPlatform;
            $day            = date('Ymd',time());
            $platform_id    = 1;//现在只有一个运营平台id
            $consume_amount = (float)$paid_price;
            //$customer_num   = $order_info->customer_num;
            $platformer->SellNumAdd($platform_id, $day, ['consume_amount'=>$consume_amount]);
            //保存平台消费者数据统计
            $shop_stat      = new \DaoMongodb\StatShop;
            $shop_stat->SellShopNumAdd($shop_id, $day, ['consume_amount'=>$consume_amount], $shop_info->agent_id);
            break;
        case 1://开发票
            $is_invoicing = 1;
            if ($orderinfo->order_status == OrderStatus::PAID)
            {
                $pay_time = time();
            }
            if ($orderinfo->order_status == OrderStatus::FINISH)
            {
                $checkout_time = time();
            }
            break;
        case 2://反结账\

            $userinfo                  = MadeOrderValidation($admin_account, $admin_pwd);
            if(!$userinfo->phone)
            {
                return $userinfo;
            }
            $employee_info             = $employee->QueryByShopId($userinfo->userid,$shop_id);
            if($_['srctype'] == 3)
            {
                Permission::PadUserPermissionCheck(Position::FCHECKOUT, $employee_info);
            }
            $order_status              = 3;
            $checkout_time             = time();
            $employee_id               = $employee_info->employee_id;
            $customer_id               = $order_info->customer_id;
            $made_time                 = time();
            $made_ce_reson             = $oper_reason;
            $paid_price                = $order_info->order_payable;
            //$paid_price                = 0;
            break;
        case 3://退款

            $userinfo                  = MadeOrderValidation($admin_account, $admin_pwd);
            if(!$userinfo->phone)
            {
                return $userinfo;
            }
            foreach ($order_status_info as $s)
            {
                if($s->order_status == 8)
                {
                    $tk_apply_time = $s->apply_time;
                    $tk_made_reson = $s->made_reson;
                }
            }
            if(!$tk_apply_time)
            {
                $tk_apply_time = time();
            }
            $employee_info = $employee->QueryByShopId($userinfo->userid, $shop_id);
            if($_['srctype'] == 3)
            {
                Permission::PadUserPermissionCheck(Position::REFUND, $employee_info);
            }
            $order_status  = 4;
            $employee_id   = $employee_info->employee_id;
            $made_time     = time();
            $apply_time    = $tk_apply_time;
            $made_reson    = $tk_made_reson;
            $made_ce_reson = $oper_reason;
            $is_confirm    = 1;
            $refunds_time  = time();
            $paid_price    = 0;
            break;
        case 4: //红冲
            $userinfo                  = MadeOrderValidation($admin_account, $admin_pwd);
            if(!$userinfo->phone)
            {
                return $userinfo;
            }
            $employee_info             = $employee->QueryByShopId($userinfo->userid,$shop_id);
            if ($orderinfo->is_invoicing != 1)
            {
                return errcode::SYS_BUSY;
            }
            $red_dashed = 1;
            if ($orderinfo->order_status == OrderStatus::PAID)
            {
                $pay_time = time();
            }
            if ($orderinfo->order_status == OrderStatus::FINISH)
            {
                $checkout_time = time();
            }
            $order_status = $orderinfo->order_status;
            $made_ce_reson= $oper_reason;
            $employee_id  = $employee_info->employee_id;
            $customer_id  = $order_info->customer_id;
            $made_time    = time();
            break;
        case 5://关闭订单
//            $userinfo                  = MadeOrderValidation($admin_account, $admin_pwd);
//            if(!$userinfo->phone)
//            {
//                return $userinfo;
//            }
            $userid         = \Cache\Login::GetUserid();
            $employee_info  = $employee->QueryByShopId($userid, $shop_id);
            if($_['srctype'] == 3)
            {
                Permission::PadUserPermissionCheck(Position::CLOSEROREDER, $employee_info);
            }
            //$employee_info = $employee->QueryByShopId($userinfo->userid, $shop_id);
            $order_status  = 6;
            $employee_id   = $employee_info->employee_id;
            $made_time     = time();
            $made_ce_reson = $oper_reason;
            $customer_id   = $order_info->customer_id;
            $close_time    = time();
            $is_confirm    = 1;
            break;
        case 6://下单

            $order_time        = time();
            $is_confirm        = 1;
            $order_sure_status = 2;
            $food_list    = $order_info->food_list;
            $all_num      = count($food_list);
            if ($food_list) {
                // 检查这个单中餐品库存是否足够
                $food_sale = CheckFoodStockSale($shop_id, $food_list);
                $num_sale  = count($food_sale);
                $food      = CheckFoodStockNum($shop_id, $food_list);
                $num_food  = count($food);
                if($all_num == $num_sale+$num_food)
                {
                    $have_visible_food = false;
                }else{
                    $have_visible_food = true;
                }
//                foreach ($food as $v) {
//                    $food_id   = $v->food_id;
//                    $food_name = $v->food_name;
//                    $num       = $v->stock_num_day;
//                }
                if (null != $food || null != $food_sale) {
                    $resp = (object)[
                        'food_num'          => $food,
                        'food_sale'         => $food_sale,
                        'have_visible_food' => $have_visible_food,
                    ];
                    LogErr("food_num not enough or food is sale off,]");
                    return errcode::FOOD_NOT_ENOUGH;
                }
                if($order_info->order_status == \OrderStatus::PAID)
                {
                    //保存商户消费额度统计数据
                    $platformer     = new \DaoMongodb\StatPlatform;
                    $day            = date('Ymd',time());
                    $platform_id    = 1;//现在只有一个运营平台id
                    $consume_amount = (float)$order_info->order_payable;
                    $customer_num   = $order_info->customer_num;
                    $platformer->SellNumAdd($platform_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num]);
                    //保存平台消费者数据统计
                    $shop_stat      = new \DaoMongodb\StatShop;
                    $shop_stat->SellShopNumAdd($shop_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num], $shop_info->agent_id);
                }
            }
            $entry->employee_id  = $water_info->employee_id;
            PageUtil::UpdateFoodDauSoldNum($order_info->order_id);
            break;
        case 7:  //下单并结账
//            if($_['srctype'] == 3)
//            {
//                Permission::PadUserPermissionCheck(Position::ORDEROUT);
//            }
            $order_status = 2;//订单状态
            $pay_status   = 2;//支付状态
            $is_confirm   = 1;//确认状态
            $pay_time     = time();
            PageUtil::UpdateFoodDauSoldNum($order_info->order_id);

            //保存商户消费额度统计数据
            $platformer     = new \DaoMongodb\StatPlatform;
            $day            = date('Ymd',time());
            $platform_id    = 1;//现在只有一个运营平台id
            $consume_amount = (float)$order_info->order_payable;
            $customer_num   = $order_info->customer_num;
            $platformer->SellNumAdd($platform_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num]);
            //保存平台消费者数据统计
            $shop_stat      = new \DaoMongodb\StatShop;
            $shop_stat->SellShopNumAdd($shop_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num], $shop_info->agent_id);
            $entry->employee_id  = $water_info->employee_id;
            break;
        case 8://拒绝退款
//            $userinfo                  = MadeOrderValidation($admin_account, $admin_pwd);
//            if(!$userinfo->phone)
//            {
//                return $userinfo;
//            }
            $userid         = \Cache\Login::GetUserid();
            $employee_info  = $employee->QueryByShopId($userid, $shop_id);
            foreach ($order_status_info as $s)
            {
                if($s->order_status == 8)
                {
                    $tk_apply_time = $s->apply_time;
                    $tk_made_reson = $s->made_reson;
                }
            }
            if(!$tk_apply_time)
            {
                $tk_apply_time = time();
            }
            $apply_time         = $tk_apply_time;
            $made_reson         = $tk_made_reson;
            $order_status       = 5;
            $employee_id        = $employee_info->employee_id;
            $made_time          = time();
            $made_ce_reson      = $oper_reason;
            $customer_id        = $order_info->customer_id;
            $refunds_fail_time  = time();
            $is_confirm         = 1;  //这个属于pad点击后属于已确定

            break;
        case 9://关闭并退款
            $userinfo                  = MadeOrderValidation($admin_account, $admin_pwd);
            if(!$userinfo->phone)
            {
                return $userinfo;
            }
            //$userid         = \Cache\Login::GetUserid();
            //$employee_info  = $employee->QueryByShopId($userid, $shop_id);
            $employee_info = $employee->QueryByShopId($userinfo->userid, $shop_id);
            if($_['srctype'] == 3)
            {
                Permission::PadUserPermissionCheck(Position::CLOSEREFUND, $employee_info);
            }
            $order_status  = 6;
            $employee_id   = $employee_info->employee_id;
            $made_time     = time();
            $made_ce_reson = $oper_reason;
            $is_confirm    = 1;
            $customer_id   = $order_info->customer_id;
            $close_time    = time();
//            foreach ($order_status_info as $s)
//            {
//                if($s->order_status == 8)
//                {
//                    $tk_apply_time = $s->apply_time;
//                    $tk_made_reson = $s->made_reson;
//                }
//            }
//            $employee_info = $employee->QueryByShopId($userinfo->userid, $shop_id);
//            $order_status  = 4;
//            if(!$tk_apply_time)
//            {
//                $tk_apply_time = time();
//            }
//            $apply_time    = $tk_apply_time;
//            $made_reson    = $tk_made_reson;
//            $employee_id   = $employee_info->employee_id;
//            $made_time     = time();
//            $made_ce_reson = $oper_reason;
//            $customer_id   = $order_info->customer_id;
//            $is_confirm    = 1;
//            $refunds_time  = time();
//            $paid_price    = 0;

            break;
        case 10://继续下单

            $order_time        = time();
            $is_confirm        = 1;
            $order_sure_status = 2;
            $food_list         = $order_info->food_list;

            if ($food_list) {
                // 检查这个单中餐品库存是否足够
                $food      = CheckFoodStockNum($shop_id, $food_list);
                $food_sale = CheckFoodStockSale($shop_id, $food_list);
                $food_ids      = [];
                $food_sale_ids = [];
                foreach ($food as $f1) {
                    $food_id  = $f1['food_id'];
                    array_push($food_ids,$food_id);
                }
                foreach ($food_sale as $f2) {
                    $food_sale_id  = $f2['food_id'];
                    array_push($food_sale_ids,$food_sale_id );
                }

                foreach($food_list as  &$v)
                {
                    if(!in_array($v->food_id,$food_ids) && !in_array($v->food_id,$food_sale_ids))
                    {
                        $foodinfo[] = $v;
                    }
                }
                if($order_info->order_status == \OrderStatus::PAID)
                {
                    //保存商户消费额度统计数据
                    $platformer     = new \DaoMongodb\StatPlatform;
                    $day            = date('Ymd',time());
                    $platform_id    = 1;//现在只有一个运营平台id
                    $consume_amount = (float)$order_info->order_payable;
                    $customer_num   = $order_info->customer_num;
                    $platformer->SellNumAdd($platform_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num]);
                    //保存平台消费者数据统计
                    $shop_stat      = new \DaoMongodb\StatShop;
                    $shop_stat->SellShopNumAdd($shop_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num], $shop_info->agent_id);
                }
            }
            foreach ($foodinfo as $f3){
                 $food_price_sum = $f3->food_price_sum;
                 $food_all_price += $food_price_sum;
                 $count_all      += $f3->food_num;
            }

             $all_price =$food_all_price+$order_info->seat_price;
            //改变原来的价格

            $entry->food_list         = $foodinfo;
            $entry->order_fee         = $all_price;
            $entry->order_payable     = $all_price;
            $entry->food_num_all      = $count_all;
            $entry->food_price_all    = $food_all_price;
            $entry->employee_id       = $water_info->employee_id;
            //PageUtil::UpdateFoodDauSoldNum($order_info->order_id);
            break;
        default:
            break;
    }
    $mgo_status                 = new \DaoMongodb\OrderStatus;
    $entry_status               = new \DaoMongodb\OrderStatusEntry;
    $entry->order_id            = $order_id;
    $entry->employee_id         = $employee_id;
    $entry->order_status        = $order_status;
    $entry->order_time          = $order_time;
    $entry->pay_time            = $pay_time;
    $entry->checkout_time       = $checkout_time;
    $entry->close_time          = $close_time;
    $entry->red_dashed          = $red_dashed;
    $entry->is_invoicing        = $is_invoicing;
    $entry->refunds_time        = $refunds_time;
    $entry->pay_status          = $pay_status;
    $entry->maling_price        = $maling_price;
    $entry->paid_price          = $paid_price;
    $entry->is_confirm          = $is_confirm;
    $entry->refunds_fail_time   = $refunds_fail_time;
    $entry->order_waiver_fee    = $order_waiver_fee;
    $entry->order_sure_status   = $order_sure_status;


    $ret     = $mgo->Save($entry);
    if (0 != $ret) {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }
    //保存到订单操作表中
    if(in_array($oper_id,[2,3,4,5,8,9])){ //<<<<<<pad只有这几个操作才有保存状态信息表
        $id = \DaoRedis\Id::GenOrderStatusId();
        $entry_status->id           = $id;
        $entry_status->order_status = $order_status;
        $entry_status->order_id     = $order_id;
        $entry_status->employee_id  = $employee_id;
        $entry_status->customer_id  = $customer_id;
        $entry_status->made_time    = $made_time;
        $entry_status->made_reson   = $made_reson;
        $entry_status->apply_time   = $apply_time;
        $entry_status->made_cz_reson= $made_ce_reson;
        $entry_status->delete       = 0;
        $ret_two = $mgo_status->Save($entry_status);
        if ( 0 != $ret_two) {
            LogErr("Save err");
            return errcode::SYS_ERR;
        }
    }

    $resp = (object)[
        'oper_desc'         => '操作成功',
    ];
    LogInfo("modift ok");
    return 0;
}
//pad操作账号密码
function MadeOrderValidation($admin_account, $admin_pwd)
{
    LogDebug($admin_pwd);

    if(!$admin_account || !$admin_pwd)
    {
        LogErr("param err no admin_account");
        return errcode::PARAM_ERR;
    }
    $user     = new DaoMongodb\User;
    $userinfo = $user->QueryUser($admin_account, $admin_account, $admin_pwd, UserSrc::SHOP);
    if (!$userinfo->phone)
    {
        LogErr("admin_account:[$admin_account], admin_pwd:[$admin_pwd]");
        return errcode::ADMIN_PASWORD_ERR;
    }
    return $userinfo;
}
//pad点餐下单操作
function SaveOrderInfo(&$resp)
{
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }

    $shop_id           = $_['shop_id'];
    $customer_num      = $_['customer_num'];
    $is_order          = $_['is_order'];
    $phone             = $_['phone'];
    $seat_name         = $_['seat_name'];
    $food_list         = $_['food_list'];
    $order_from        = $_['order_from'];
    $order_remark      = $_['order_remark'];
    $maling_price      = $_['maling_price'];
    $plate             = $_['plate'];
    $order_id          = \DaoRedis\Id::GenOrderId();
    $order_water_num   = date('Ymd', time()) . \DaoRedis\Id::GenOrderWNId();
    $pay_status        = PayStatus::NOPAY;   //未支付
    $pay_way           = PayWay::UNKNOWN;   //未确定
    $dine_way          = SALEWAY::EAT;   //默认在店吃
    $order_status      = NewOrderStatus::NOPAY; //未支付状态
    $is_appraise       = APPRAISE::NO;   //未评价
    $shopinfo = \Cache\Shop::Get($shop_id);
    if (!$shopinfo) {
        LogErr("get shopinfo err, shop_id:[$shop_id]");
        return errcode::SHOP_NOT_EXIST;
    }
    if ($food_list) {
        $need_food_list = [];
        //因为一个订单中相同的菜品可能会存在多个(打包,赠送情况)
          foreach ($food_list as $v)
          {
              $need_food_list[$v->food_id]->food_num += $v->food_num;
              $need_food_list[$v->food_id]->food_id   = $v->food_id;
          }
        // 检查餐品库存够不够
        $food = PageUtil::CheckFoodStockNum($shop_id, $need_food_list);
        foreach ($food as $v) {
            $food_id   = $v->food_id;
            $food_name = $v->food_name;
            $num       = $v->stock_num_day;
        }
        if (null != $food) {
            $resp = (object)[
                'food_id'     => $food_id,
                'food_name'   => $food_name,
                'surplus_num' => $num,   //提示限量中剩余的库存
            ];
            LogErr("not enough, food_id:[{$food_id}]");
            return errcode::FOOD_NOT_ENOUGH;
        }
        // 取餐品信息
        $food_all = [];
        foreach ($food_list as $i => &$item) {
            $db_food_info = \Cache\Food::Get($item->food_id);
            if (!$db_food_info || !$item->food_id) {
                LogErr("food err:[{$item->food_id}]");
                return errcode::FOOD_ERR;
            }
            $sale_off = PageUtil::GetFoodSaleOff($db_food_info);
            if(1 == $sale_off)
            {
                $resp = (object)[
                        'food_list' => [
                        'food_name'   => $item->name,]
                ];
                LogErr("Food Sale_off:[{$item->food_id}]");
                return errcode::FOOD_SALE_OFF;
            }
            //先判断该餐品是否属于有规格的餐品，没有提示错误
            if($db_food_info->food_price->type != 2 && $item->weight)
            {
                LogErr("food no spc");
                return errcode::FOOD_NO_SPC;
            }
            $food_price = getPrice($item, $price);//计算单种菜品总价格(包含如果有打包就有打包费,数量也在里面）及菜品单价
            if (null === $food_price) {             //如果菜品没有价格就报错
                LogErr("price error");
                return errcode::ORDER_OPR_ERR;
            }
            if ($item->isgive) {
                $food_price = 0;
            }
            //获取餐品列表信息保存到订单中
            $food_list_all                   = (object)[];
            $food_list_all->food_id          = $db_food_info->food_id;
            $food_list_all->food_name        = $db_food_info->food_name;
            $food_list_all->food_price       = $price;
            $food_list_all->food_category    = $db_food_info->category_id;
            $food_list_all->food_price_sum   = $food_price;
            $food_list_all->food_attach_list = $item->attribute;
            $food_list_all->food_unit        = $db_food_info->food_unit;
            $food_list_all->food_num         = $item->food_num;
            if($item->istake)
            {
                $food_list_all->pack_num         = $item->food_num;
            }
            $food_list_all->is_pack          = $item->istake;
            $food_list_all->is_send          = $item->isgive;
            $food_list_all->send_remark      = $item->giveremark;//赠送理由
            array_push($food_all, $food_list_all);
            $price_all += $food_price;//累计菜品总价
            $count_all += $item->food_num;
        }
        //LogDebug($plate);
        //如果使用的餐牌号就不使用餐桌费用了
        if (!$plate) {
            // 餐位费
            $mgo_seat = new \DaoMongodb\Seat;
            $seatinfo = $mgo_seat->GetSeatID($shop_id, $seat_name);
            if (!$seatinfo->seat_id) {
                LogErr('no seat_id');
                return errcode::SEAT_NOT_EXIST;
            }
            //$seatinfo = \Cache\Seat::Get($seat_id);
            if (SeatPriceType::NO != $seatinfo->price_type) {
                switch ($seatinfo->price_type) {
                    case SeatPriceType::NUM:
                        $seat_price = $seatinfo->price * $customer_num;
                        break;
                    case SeatPriceType::FIXED:
                        $seat_price = $seatinfo->price;
                        break;
                    case SeatPriceType::RATIO:
                        $seat_price = $seatinfo->price / 100 * (float)$price_all;
                        break;
                    default:
                        $seat_price = 0;
                        break;
                }
            } else {
                $seat_price = 0;
            }
        } else {
            $seat_price = 0;
        }
        $all_price = round($price_all,2) + round($seat_price, 2);
    } else {
        $food_list = null;
    }
    $mgo                      = new \DaoMongodb\Order;
    $employee                 = new \DaoMongodb\Employee;
    $employee_info            = $employee->GetEmployeeByPhone($shop_id, $phone);
    $entry                    = new \DaoMongodb\OrderEntry;
    $entry->order_id          = $order_id;
    $entry->order_remark      = $order_remark;
    $entry->shop_id           = $shop_id;
    $entry->order_from        = $order_from;
    $entry->order_water_num   = $order_water_num; //流水号
    $entry->dine_way          = $dine_way;
    $entry->pay_way           = $pay_way;
    $entry->customer_num      = $customer_num;
    $entry->seat_id           = $seatinfo->seat_id;
    $entry->order_status      = $order_status;
    $entry->food_list         = $food_all;
    $entry->order_time        = time();
    $entry->order_remark      = $order_remark;
    $entry->employee_id       = $employee_info->employee_id;
    $entry->food_num_all      = $count_all;
    $entry->food_price_all    = $price_all;
    $entry->maling_price      = $maling_price;
    $entry->delete            = 0;
    $entry->is_appraise       = $is_appraise;
    $entry->order_from        = OrderFrom::SHOUYIN;//<<<<<<这里是用在PAD端的方法所以来源是扫码
    $entry->plate             = $plate;
    $entry->pay_status        = $pay_status;
    $entry->seat_price        = round($seat_price,2);
    $entry->order_fee         = $all_price;
    $entry->order_payable     = $all_price;
    $entry->is_confirm        = IsCoonfirm::Yes;//因为是pad端操作，所以属于已确认
    //$entry->order_payable     = (float)$price_all + (float)$seat_price - (float)$entry->order_waiver_fee;//应付价格=菜品总价+餐位费-减免费 order_waiver_fee可能由服务员修改（与客人端无关）

    $ret = $mgo->Save($entry);
    if (0 != $ret) {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }
    $resp = (object)[
        'order_id'    => $entry->order_id,
        'table_price' => round($seat_price,2),
        'is_order'    => $is_order,
        'all_price'   => $all_price
    ];
    // 增加餐品售出数
    PageUtil::UpdateFoodDauSoldNum($entry->order_id);
    //LogDebug($resp);
    LogInfo("food sold num save ok");
    //收银端推送给收银端
    $ret_json = PageUtil::NotifyOrderChange($shop_id, $order_id, $order_status, time());
    //LogDebug($ret_json);
    $ret_json_obj = json_decode($ret_json);
    //LogDebug($ret_json_obj);
    if(0 != $ret_json_obj->ret)
    {
        LogErr("Order send pad err");
    }
    return 0;
}
//计算点餐菜品总价格(餐品单价及数量和餐盒费总计)
function getPrice($food,&$price){
    $db_food_info = \Cache\Food::Get($food->food_id);
    if(!$db_food_info)
    {
        LogErr("FoodInfo err");
        return null;
    }
    //如果是打包就算出餐盒费用及餐盒数量的总价
    if($food->istake == 1)
    {
        $accessory_price = 0;
        //是否有餐盒费及是否有打包
        if($db_food_info->accessory && $food->food_num){
            $accessory = \Cache\Food::Get($db_food_info->accessory);
            $accessory_price = $accessory->food_price * (int)$food->food_num*(float)$db_food_info->accessory_num;
        }
    }else{
        $accessory_price = 0;
    }
    //如果是配件直接返回价格 //<<<<<<<<<pad端应该没有配件选择的
    if($db_food_info->type == 2)
    {
        return $db_food_info->food_price;
    }

    //算出餐品的价格,spec_type = 0(无规格的价格),1,2,3大中小
    foreach ($db_food_info->food_price->price as $key => $value) {
        if($food->weight == $value->spec_type){
            //取出规格中的普通价格
            $price = $value->original_price;
        }
    }
    if(99999999 == $price){
        LogErr("SpecPrice err");
        return null;
    }
    //算出餐品及餐盒的总价
    $food_price = (float)$price * $food->food_num + (float)$accessory_price;
    return $food_price;
}
//pad端结账操作
function SaveOrderPay(&$resp)
{
    $_ = $GLOBALS["_"];
    if (!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $order_id       = $_['order_id'];
    $pay_way        = $_['pay_way'];
    $shop_id        = $_['shop_id'];
    $paid_price     = $_['paid_price'];
    $account        = $_['account'];
    $customer_name  = $_['custom_name'];//<<<<<<<<<<这是PAD那边传过来的
    $customer_phone = $_['custom_phone'];//<<<<<<<<<<这是PAD那边传过来的
    $cause          = $_['cause'];
    $maling_price   = $_['maling_price'];
    if(!$pay_way)
    {
        $pay_way = 0;
    }
//    LogDebug($_);
//    LogDebug(111111111111111111111111111);
//    LogDebug($pay_way);
    //如果有顾客信息就保存到顾客表，并标明属于pad端用户
    if ($customer_phone)
    {
        $customer       = new \DaoMongodb\Customer;
        $customer_entry = new \DaoMongodb\CustomerEntry;
        $customer_info  = $customer->QueryByPhone($shop_id,$customer_phone);
        if($customer_info->customer_id)
        {
            $customer_id  =  $customer_info->customer_id;
        }else{
            $customer_id                     = DaoRedis\Id::GenCustomerId();
            $customer_entry->shop_id         = $shop_id;
            $customer_entry->customer_id     = $customer_id;
            $customer_entry->phone           = $customer_phone;
            $customer_entry->usernick        = $customer_name;
            $customer_entry->is_pad_customer = 1;
           $ret2 = $customer->Save($customer_entry);
            if (0 != $ret2) {
                LogErr("Save err");
                return errcode::SYS_ERR;
            }
        }
    }else{
        $customer_id = null; //用于保存
    }
    $shopinfo = \Cache\Shop::Get($shop_id);
    if (!$shopinfo->shop_id)
    {
        LogErr("get shopinfo err, shop_id:[$shop_id]");
        return errcode::SHOP_NOT_EXIST;
    }

    $mgo        = new \DaoMongodb\Order;
    $order_info = $mgo->GetOrderById($order_id);
    if (!$order_info->order_id) {
        return errcode::ORDER_NOT_EXIST;
    }
    $employee      = new \DaoMongodb\Employee;
    $employee_info = $employee->GetEmployeeByPhone($shop_id, $account);
    $employee_id   = $employee_info->employee_id;
    //获取订单金额
    $order_fee        = $order_info->order_fee;
    $order_waiver_fee = (float)$order_fee - (float)$paid_price;
    if ($order_waiver_fee < 0)
    {
        LogErr('fee money have no');
        return errcode::FEE_MONEY_ERR;
    }
    $entry           = new \DaoMongodb\OrderEntry;
    $entry->order_id = $order_id;
    $entry->shop_id  = $shop_id;
    $entry->pay_way  = $pay_way;
    $status_entry               = new \DaoMongodb\OrderStatusEntry;
    $status                     = new \DaoMongodb\OrderStatus;
//    $shop                       = new \DaoMongodb\Shop;
//    $shop_info                  = $shop->GetShopById($shop_id);
    if ($pay_way == PayWay::GUAZ)
    {
        $entry->pay_status   = PayStatus::NOPAY;
        $entry->order_status = NewOrderStatus::GUAZ;
        $paid_price          = 0;
        //保存挂账信息
        $status_entry->id           = \DaoRedis\Id::GenOrderStatusId();
        $status_entry->customer_id  = $customer_id;
        $status_entry->order_id     = $order_id;
        $status_entry->order_status = NewOrderStatus::GUAZ;
        $status_entry->employee_id  = $employee_id;
        $status_entry->delete       = 0;
        $status_entry->made_time    = time();
        $status_entry->made_cz_reson= $cause;
        $status->Save($status_entry);
    } else {
        $entry->pay_status   = PayStatus::PAY;
        $entry->order_status = NewOrderStatus::PAY;
        $entry->pay_time     = time();
        //保存结账状态信息
        $status_entry->id           = \DaoRedis\Id::GenOrderStatusId();
        $status_entry->order_status = NewOrderStatus::PAY;
        $status_entry->employee_id  = $employee_id;
        $status_entry->delete       = 0;
        $status_entry->order_id     = $order_id;
        $status_entry->made_time    = time();
        $status->Save($status_entry);
        //保存商户消费额度统计数据
        $platformer     = new \DaoMongodb\StatPlatform;
        $day            = date('Ymd',time());
        $platform_id    = 1;//现在只有一个运营平台id
        $consume_amount = (float)$paid_price;
        $customer_num   = $order_info->customer_num;
        $platformer->SellNumAdd($platform_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num]);
        //保存平台消费者数据统计
        $shop_stat      = new \DaoMongodb\StatShop;
        $shop_stat->SellShopNumAdd($shop_id, $day, ['consume_amount'=>$consume_amount,'customer_num'=>$customer_num], $shopinfo->agent_id);
    }


    //改变并保存订单信息
    $entry->customer_id      = $customer_id;
    $entry->paid_price       = (float)$paid_price;
    $entry->order_waiver_fee = round((float)$order_waiver_fee,2);
    $entry->maling_price     = round($maling_price,2);
    $entry->is_confirm       = IsCoonfirm::Yes;//因为是pad端操作，所以属于已确认订单
    $ret = $mgo->Save($entry);
    if (0 != $ret) {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }
    $resp = (object)[
        'is_pay' => true,
    ];
    //LogDebug($resp);
    LogInfo("save ok");
    return 0;
}
//pa端预结账
function OrderAdvance(&$resp)
{
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $order_id          = $_['order_id'];
    $shop_id           = $_['shop_id'];
    $shopinfo = \Cache\Shop::Get($shop_id);
    if (!$shopinfo) {
        LogErr("get shopinfo err, shop_id:[$shop_id]");
        return errcode::SHOP_NOT_EXIST;
    }
    $userid        = \Cache\Login::GetUserid();
    $employee      = new \DaoMongodb\Employee;
    $employee_info = $employee->QueryByUserId($shop_id, $userid);
    $employee_id   = $employee_info->employee_id;

    $mgo        = new \DaoMongodb\Order;
    $order_info = $mgo->GetOrderById($order_id);
    if(!$order_info->order_id)
    {
        LogErr("no order_id");
        return errcode::ORDER_NOT_EXIST;
    }
   //判断订单状态是否是未支付,因为只有未支付才使用预结账
   if($order_info->order_status != 1)
   {
       LogDebug($order_info->order_status);
       return errcode::ORDER_OPR_ERR;
   }
    $entry              = new \DaoMongodb\OrderEntry;
    $entry->order_id    = $order_id;

    $entry->shop_id      = $shop_id;
    $entry->is_advance   = Advance::YES;
    $entry->employee_id  = $employee_id;//<<<<<<<<<<此处的员工id是用来保存预结账或其他未定的情况,如果有订单状态变化的都是保存到订单状态表的
    $entry->is_confirm   = IsCoonfirm::Yes;//因为是pad端操作，所以属于已确认订单
    $ret = $mgo->Save($entry);
    if (0 != $ret) {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }
    $resp = (object)[

    ];
    //LogDebug($resp);
    LogInfo("save ok");
    return 0;
}
// PAD端检查餐品库存够不够,不够返回所有的不足的餐品
function CheckFoodStockNum($shop_id, $need_food_list)
{
    $food_id_list = [];
    foreach ($need_food_list as $id)
    {
        $food_id_list[] = $id->food_id;
    }
    // 读出当前餐品每天备货量

    $mgo_food = new \DaoMongodb\MenuInfo;
    $list = $mgo_food->GetOrderFoodList(
        $shop_id,
        [
            'food_id_list' => $food_id_list,
        ]
    );
    $id2stock_num_day = [];
    foreach($list as $i => $v)
    {
        if($v->stock_num_day == 0)
        {
            $v->stock_num_day = 99999;
        }
        $id2stock_num_day[$v->food_id] = (int)$v->stock_num_day;
    }
    // 读出当前已售出量
    $mgo_stat = new \DaoMongodb\StatFood;
    $today = date("Ymd");
    $list_two = $mgo_stat->GetStatList([
        'food_id_list' => $food_id_list,
        'shop_id'      => $shop_id,
        'begin_day'    => $today,
        'end_day'      => $today,
    ]);
    // food_id --> 已售出量
    $id2food_sold_num = [];
    foreach($list_two as $i => $v)
    {
        $id2food_sold_num[$v->food_id] = $v->sold_num;
    }
    // 查看餐品存量
    $all_food = [];
    $food_one = [];
    foreach($need_food_list as $food)
    {

        //每日限售量
        $stock_num_day = (int)$id2stock_num_day[$food->food_id];
        //当日出售量
        $food_sold_num = (int)$id2food_sold_num[$food->food_id];
        // 库存够吗？
        if($food->food_num > $stock_num_day - $food_sold_num)
        {

            $food_one['food_name'] = $food->food_name;
            $food_one['food_id']   = $food->food_id;
            $food_one['stock_num_day']   = $stock_num_day - $food_sold_num;
            array_push($all_food,$food_one);
        }
    }
    return $all_food;
}
// PAD端检查餐品是否下架,如果下架返回所有下架的餐品
function CheckFoodStockSale($shop_id, $need_food_list)
{
    $food_id_list = [];
    foreach ($need_food_list as $id)
    {
        $food_id_list[] = $id->food_id;
    }
    // 读出当前餐品每天备货量

    $mgo_food = new \DaoMongodb\MenuInfo;
    $list = $mgo_food->GetOrderFoodList(
        $shop_id,
        [
            'food_id_list' => $food_id_list,
        ]
    );

    $all_food = [];
    $food_one = [];
    foreach($list as $i => $v)
    {
        if($v->sale_off == 1)
        {
            $food_one['food_name'] = $v->food_name;
            $food_one['food_id']   = $v->food_id;
            $food_one['sale_off']   = $v->sale_off;
            array_push($all_food,$food_one);
        }
    }

    return $all_food;
}
$ret = -1;
$resp = (object)array();
if(isset($_['modify_status']))
{
    $ret = ModifyOrderStatus($resp);
}
else if(isset($_['order_save']))
{
    $ret = SaveOrderInfo($resp);
}
else if(isset($_['order_foodinfo_save']))
{
    $ret = SaveOrderFoodinfoInfo($resp);
}
else if(isset($_['order_food_delete']))
{
    $ret = DeleteOrderFood($resp);
}
elseif(isset($_['order_print_manual']))
{
    $ret = OrderPrintManual($resp);
}elseif(isset($_['made_order_status']))
{
    $ret = MadeOrderStatus($resp);
}elseif(isset($_['order_post_pay']))
{
    if($_['srctype'] == 3)
    {
        Permission::PadUserPermissionCheck(Position::CHECKOUT);
    }
    $ret = SaveOrderPay($resp);
}elseif(isset($_['order_advance']))
{
    $ret = OrderAdvance($resp);
}
else
{
    $ret = errcode::PARAM_ERR;
    LogErr("param err");
}
$result = (object)array(
    'ret'  => $ret,
    'msg'  => errcode::toString($ret),
    'data' => $resp
);
LogDebug($result);
if($GLOBALS['need_json_obj'])
{
    Output($result);
}
else
{
    $html =  json_encode($result);
    echo $html;
}
?><?php /******************************以下为html代码******************************/?>

