<?php
/*
 * [Rocky 2017-05-05 11:44:02]
 * 店铺信息保存类
 */
require_once("current_dir_env.php");
require_once("mgo_shop.php");
require_once("permission.php");
//Permission::PageCheck();
$_=$_REQUEST;
//编辑店铺设置
function SaveShopInfo(&$resp)
{
    $_ = $GLOBALS["_"];
    LogDebug($_);
    if (!$_) {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }

//    // 是否有管理员权限
//    $ret = Permission::Check(Permission::CHK_LOGIN|Permission::CHK_ADMIN);
//    if(0 != $ret)
//    {
//        LogErr("permission err, username:" . \Cache\Login::GetUsername());
//        return $ret;
//    }
//    $shop_id = \Cache\Login::GetShopId();
//    if (!$shop_id) {
//        LogErr("shop_id err or maybe not login");
//        return errcode::USER_NOLOGIN;
//    }

    $shop_id             = (string)$_['shop_id'];//<<<<<<<<<<<<<这里是测试数据
    $shop_name           = $_['shop_name'];
    $shop_logo           = $_['shop_logo'];
    $shop_area           = $_['shop_area'];
    $contact             = $_['contact'];
    $address_num         = $_['address_num'];
    $address             = $_['address'];
    $suspend             = $_['suspend'];
    $shop_pay_way        = json_decode($_['shop_pay_way']);
    //$shop_pay_way        = explode(',',$_['shop_pay_way']);//<<<<<<<<后端测试用的
    $pay_time            = json_decode($_['pay_time']);
    //$pay_time            = explode(',',$_['pay_time']);//<<<<<<<<后端测试用的
    $sale_way            = json_decode($_['sale_way']);
    //$sale_way            = explode(',',$_['sale_way']);//<<<<<<<<后端测试用的
    $shop_label          = json_decode($_['shop_label']);
    //$shop_label          = explode(',',$_['shop_label']);//<<<<<<<<后端测试用的
    $open_time           = json_decode($_['open_time']);
    //$open_time          = explode(',',$_['open_time']);//<<<<<<<<后端测试用的
   // $is_invoice_vat      = json_decode($_['is_invoice_vat']);
    $is_invoice_vat->is_invoice = (int)$_['is_invoice'];
    $is_invoice_vat->invoce_type = json_decode($_['invoice_type']);
    //$is_invoice_vat->invoce_type = explode(',',$_['invoice_type']);
    for ($i = 0; $i < count($is_invoice_vat->invoce_type); $i++) {
        $is_invoice_vat->invoce_type[$i] = (int)$is_invoice_vat->invoce_type[$i];
    }
    $invoice_remark      = $_['invoice_remark'];
    $opening_time        = json_decode($_['opening_time']);
    $img_list            = json_decode($_['img_list']);
    //$img_list            = explode(',',$_['img_list']);//<<<<<<<后端测试用的
    $mgo                 = new \DaoMongodb\Shop;
    $entry               = new \DaoMongodb\ShopEntry;
    $entry->shop_id        = $shop_id;
    $entry->shop_name      = $shop_name;
    $entry->contact        = $contact;
    $entry->shop_logo      = $shop_logo;
    $entry->address_num    = $address_num;
    $entry->shop_area      = $shop_area;
    $entry->address        = $address;
    $entry->opening_time   = $opening_time;
    $entry->img_list       = $img_list;
    $entry->suspend        = $suspend;
    $entry->shop_pay_way   = $shop_pay_way;
    $entry->pay_time       = $pay_time;
    $entry->sale_way       = $sale_way;
    $entry->shop_label     = $shop_label;
    $entry->open_time      = $open_time;
    $entry->is_invoice_vat = $is_invoice_vat;
    $entry->invoice_remark = $invoice_remark;
    var_dump($is_invoice_vat);die;
    $ret = $mgo->Save($entry);
    if (0 != $ret) {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }

    $resp = (object)array(
    );
    LogInfo("save ok");
    return 0;
}
//编辑工商管理信息
function SaveShopBusiness(&$resp)
{
    $_ = $GLOBALS["_"];

    LogDebug($_);
    if (!$_) {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
//    // 是否有管理员权限
//    $ret = Permission::Check(Permission::CHK_LOGIN|Permission::CHK_ADMIN);
//    if(0 != $ret)
//    {
//        LogErr("permission err, username:" . \Cache\Login::GetUsername());
//        return $ret;
//    }
    $shop_id = \Cache\Login::GetShopId();
    if (!$shop_id)
    {
        LogErr("shop_id err or maybe not login");
        return errcode::SEAT_NOT_EXIST;
    }
    //$shop_id                               = (string)$_['shop_id'];//<<<<<<<<<<<<<这里是测试数据
    $company_name                          = (string)$_['company_name'];
    $legal_person                          = (string)$_['legal_person'];
    $legal_phone                           = (string)$_['legal_phone'];
    $legal_card                            = (string)$_['legal_card'];
    $legal_card_photo                      = json_decode($_['legal_card_photo']);
    $business_num                          = (string)$_['business_num'];
    $business_date                         = $_['business_date'];
    $business_photo                        = (string)$_['business_photo'];
    $repast_permit_identity                = (string)$_['repast_permit_identity'];
    $repast_permit_year                    = (int)$_['repast_permit_year'];
    $repast_permit_num                     = (string)$_['repast_permit_num'];
    $repast_permit_photo                   = (string)$_['repast_permit_photo'];
    $confirmation                          = (string)$_['confirmation'];
    $business_scope                        = (string)$_['business_scope'];

    $shop_business->company_name           = $company_name;
    $shop_business->legal_person           = $legal_person;
    $shop_business->legal_phone            = $legal_phone;
    $shop_business->legal_card             = $legal_card;
    $shop_business->legal_card_photo       = $legal_card_photo;
    $shop_business->business_date          = $business_date;
    $shop_business->business_num           = $business_num;
    $shop_business->business_photo         = $business_photo;
    $shop_business->repast_permit_identity = $repast_permit_identity;
    $shop_business->repast_permit_year     = $repast_permit_year;
    $shop_business->repast_permit_num      = $repast_permit_num;
    $shop_business->repast_permit_photo    = $repast_permit_photo;
    $shop_business->confirmation           = $confirmation;
    $shop_business->business_scope         = $business_scope;

    $mgo                                   = new \DaoMongodb\Shop;
    $entry                                 = new \DaoMongodb\ShopEntry;
    $entry->shop_id                        = $shop_id;
    $entry->shop_business                  = $shop_business;
    $ret = $mgo->Save($entry);
    if (0 != $ret) {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }

    $resp = (object)array();
    LogInfo("save ok");
    return 0;
}

function SaveShopFoodAttach(&$resp)
{
    Permission::EmployeePermissionCheck(
        Permission::CHK_FOOD_W
    );
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $food_attach_list = json_decode($_['food_attach_list']);
    $shop_id = $shop_id = \Cache\Login::GetShopId();

    $mgo = new \DaoMongodb\Shop;
    $entry = new \DaoMongodb\ShopEntry;

    $entry->shop_id          = $shop_id;
    $entry->food_attach_list = $food_attach_list;

    LogDebug($entry);

    $ret = $mgo->Save($entry);
    if(0 != $ret)
    {
        LogErr("Save Attach err");
        return errcode::SYS_ERR;
    }

    $resp = (object)array(
    );
    LogInfo("save atache ok");
    return 0;
}

function SaveShopFoodUnit(&$resp)
{
    Permission::EmployeePermissionCheck(
        Permission::CHK_FOOD_W
    );
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }

    $food_unit_list = json_decode($_['food_unit_list']);
    $shop_id = $shop_id = \Cache\Login::GetShopId();

    $mgo = new \DaoMongodb\Shop;
    $entry = new \DaoMongodb\ShopEntry;

    $entry->shop_id        = $shop_id;
    $entry->food_unit_list = $food_unit_list;

    LogDebug($entry);

    $ret = $mgo->Save($entry);
    if(0 != $ret)
    {
        LogErr("Save Attach err");
        return errcode::SYS_ERR;
    }

    $resp = (object)array(
    );
    LogInfo("save atache ok");
    return 0;
}

function ShopOpr(&$resp)
{
    // Permission::EmployeePermissionCheck(
    //     Permission::CHK_FOOD_W
    // );
    $_ = $GLOBALS["_"];
    if(!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }

    $opr = $_['opr'];
    $shop_id = $_['shop_id'];

    if(ShopIsSuspend::NO != $opr
        && ShopIsSuspend::BY_SYS_ADMIN != $opr
        && ShopIsSuspend::BY_SHOP_ADMIN != $opr)
    {
        LogErr("param err, opr:[$opr]");
        return errcode::PARAM_ERR;
    }

    $mgo = new \DaoMongodb\Shop;
    $entry = new \DaoMongodb\ShopEntry;

    $entry->shop_id = $shop_id;
    $entry->suspend = $opr;

    LogDebug($entry);

    $ret = $mgo->Save($entry);
    if(0 != $ret)
    {
        LogErr("Save Attach err");
        return errcode::SYS_ERR;
    }

    $resp = (object)array(
    );
    LogInfo("save atache ok");
    return 0;
}
//添加删除餐店标签
function SaveShopLabel(&$resp)
{
    $_ = $GLOBALS['_'];
    if (!$_)
    {
        LogErr("param err");
        return errcode::PARAM_ERR;
    }
    $name = $_['label_name'];
    if (!$name) {
        return errcode::SHOP_LABEL_ERR;
    }
    $all  = json_decode($_[$name]);
    //$all  = explode(',',$_[$name]);
    $all  = array_filter($all);
    //$shop_id = $_['shop_id'];//<<<<<<<<<<<<<<<<<<<<<<<<<<<<测试数据
    $shop_id = \Cache\Login::GetShopId();
    if (!$shop_id)
    {
        LogErr("shop_id err or maybe not login");
        return errcode::USER_NOLOGIN;
    }
    $mgo            = new \DaoMongodb\Shop;
    $entry          = new \DaoMongodb\ShopEntry;
    $entry->shop_id = $shop_id;
    switch ($name)
    {
        case 'shop_label':
            $entry->shop_label = $all;
            break;
        case 'shop_seat_region':
            $entry->shop_seat_region = $all;
            break;
        case 'shop_seat_type':
            $entry->shop_seat_type = $all;
            break;
        case 'shop_seat_shape':
            $entry->shop_seat_shape = $all;
            break;
        case 'shop_composition':
            $entry->shop_composition = $all;
            break;
        case 'shop_feature':
            $entry->shop_feature = $all;
            break;
        case 'food_attach_list':
            $entry->food_attach_list = $all;
            break;
        case 'food_unit_list':
            $entry->food_unit_list = $all;
            break;
        default:
            return errcode::PARAM_ERR;
            break;
    }
    $ret = $mgo->Save($entry);
    if (0 != $ret) {
        LogErr("Save err");
        return errcode::SYS_ERR;
    }

    $resp = (object)[];
    LogInfo("save ok");
    return 0;
}

$ret = -1;
$resp = (object)array();
if(isset($_['shopinfo_save']))
{
    $ret = SaveShopInfo($resp);
}
else if(isset($_['save_food_attach_list']))
{
    $ret = SaveShopFoodAttach($resp);
}
else if(isset($_['save_food_unit_list']))
{
    $ret = SaveShopFoodUnit($resp);
}
else if(isset($_['opr_shop']))
{
    $ret = ShopOpr($resp);
}else if(isset($_['save_label']))
{
    $ret = SaveShopLabel($resp);
}
elseif(isset($_['save_shop_business']))
{
    $ret = SaveShopBusiness($resp);
}
else
{
    $ret = errcode::PARAM_ERR;
    LogErr("param err");
}

$html = json_encode((object)array(
    'ret' => $ret,
    'data' => $resp
));
?><?php /******************************以下为html代码******************************/?>
<?=$html?>