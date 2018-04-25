webpackJsonp([51],{"69TU":function(t,e,n){"use strict";(function(t){var r=n("a2vD"),a=n("6nXL"),i=n("USo7");e.a={props:["shopId"],data:function(){var t=this;return{height:0,ruleForm:{pc_num:2,pad_num:2,cashier_num:2,app_num:2,save_authorize:1,shop_id:""},rules:{pc_num:[{required:!0,validator:function(e,n,r){var a=/^[0-9]\d*$/;return""===a.test(t.ruleForm.pc_num)?r(new Error("请输入登录授权数")):!1===a.test(t.ruleForm.pc_num)?r(new Error("请输入格式正确的整数")):void r()},trigger:"change,input,click"}],pad_num:[{required:!0,validator:function(e,n,r){var a=/^[0-9]\d*$/;return""===a.test(t.ruleForm.pad_num)?r(new Error("请输入登录授权数")):!1===a.test(t.ruleForm.pad_num)?r(new Error("请输入格式正确的整数")):void r()},trigger:"change,input,click"}],cashier_num:[{required:!0,validator:function(e,n,r){var a=/^[0-9]\d*$/;return""===a.test(t.ruleForm.cashier_num)?r(new Error("请输入登录授权数")):!1===a.test(t.ruleForm.cashier_num)?r(new Error("请输入格式正确的整数")):void r()},trigger:"change,input,click"}],app_num:[{required:!0,validator:function(e,n,r){var a=/^[0-9]\d*$/;return""===a.test(t.ruleForm.app_num)?r(new Error("请输入登录授权数")):!1===a.test(t.ruleForm.app_num)?r(new Error("请输入格式正确的整数")):void r()},trigger:"change,input,click"}]},isCantClick:!0}},created:function(){var e=this;this.height=document.documentElement.clientHeight-146+"px",t(window).resize(function(){e.height=document.documentElement.clientHeight-146+"px"}),this.staffId=r.a.getUserid(),this.ruleForm.shop_id=this.$route.query.shopId,this.getServicData()},mounted:function(){this.checkNumNone()},components:{},computed:{refionAgent:function(){return a.p.toString(a.p.REGION)}},methods:{getServicData:function(){var t=this,e={get_shop_info:1,shop_id:this.ruleForm.shop_id};Object(i.c)(e).then(function(e){if(0===e.ret){var n=e.data.shopinfo.authorize;t.ruleForm.pc_num=null!==n.pc_num?n.pc_num:2,t.ruleForm.app_num=null!==n.app_num?n.app_num:2,t.ruleForm.pad_num=null!==n.pad_num?n.pad_num:2,t.ruleForm.cashier_num=null!==n.cashier_num?n.cashier_num:2}})},handleChangePcNum:function(){this.checkNumNone()},handleChangePadNum:function(){this.checkNumNone()},handleChangeCounterNum:function(){this.checkNumNone()},handleChangeAppNum:function(){this.checkNumNone()},checkNumNone:function(){var t=this;this.$refs.ruleForm.validate(function(e){t.isCantClick=!e})},saveInput:function(){var t=this;Object(i.d)(this.ruleForm).then(function(e){0===e.ret&&t.$router.push({path:"/merchantlist/editMerchantDetail",query:{merchantInfo:t.$route.query.shopId}})})},pleaseFinish:function(){this.checkNumNone()},cancelEdit:function(){this.$router.push({path:"/merchantlist/editMerchantDetail",query:{merchantInfo:this.$route.query.shopId}})}}}}).call(e,n("tra3"))},"8t2Z":function(t,e){},YULT:function(t,e){},nKsX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("69TU"),a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"sear-info"}},[r("div",{staticClass:"header"},[r("p",[r("router-link",{attrs:{to:{path:"/merchant/list"}}},[r("span",{staticClass:"black"},[t._v("商户列表")])]),t._v(" "),r("span",{staticClass:"text-green"},[t._v(">")]),t._v(" "),r("router-link",{attrs:{to:{path:"/merchantlist/editMerchantDetail",query:{merchantInfo:t.ruleForm.shop_id}}}},[r("span",{staticClass:"black"},[t._v("商户详情")])]),t._v(" "),r("span",{staticClass:"text-green"},[t._v(">")]),t._v(" "),r("span",{staticClass:"text-green"},[t._v("编辑服务信息")])],1)]),t._v(" "),r("div",{staticClass:"basic-info"},[t._m(0),t._v(" "),r("div",{staticClass:"info-board",style:{height:t.height}},[r("div",[t._v("登录授权数")]),t._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{label:"",prop:"pc_num"}},[r("div",{staticClass:"item-block"},[r("img",{attrs:{src:n("dWqg"),alt:""}}),t._v(" "),r("span",{staticClass:"item-name"},[t._v("PC")]),t._v(" "),r("el-input-number",{attrs:{min:0,label:"描述文字"},on:{change:t.handleChangePcNum},model:{value:t.ruleForm.pc_num,callback:function(e){t.$set(t.ruleForm,"pc_num",e)},expression:"ruleForm.pc_num"}})],1)]),t._v(" "),r("el-form-item",{attrs:{label:"",prop:"pad_num"}},[r("div",{staticClass:"item-block"},[r("img",{attrs:{src:n("8ve9"),alt:""}}),t._v(" "),r("span",{staticClass:"item-name"},[t._v("平板Pad")]),t._v(" "),r("el-input-number",{attrs:{min:0,label:"描述文字"},on:{change:t.handleChangePadNum},model:{value:t.ruleForm.pad_num,callback:function(e){t.$set(t.ruleForm,"pad_num",e)},expression:"ruleForm.pad_num"}})],1)]),t._v(" "),r("el-form-item",{attrs:{label:"",prop:"cashier_num"}},[r("div",{staticClass:"item-block"},[r("img",{attrs:{src:n("QRCU"),alt:""}}),t._v(" "),r("span",{staticClass:"item-name"},[t._v("收银机")]),t._v(" "),r("el-input-number",{attrs:{min:0,label:"描述文字"},on:{change:t.handleChangeCounterNum},model:{value:t.ruleForm.cashier_num,callback:function(e){t.$set(t.ruleForm,"cashier_num",e)},expression:"ruleForm.cashier_num"}})],1)]),t._v(" "),r("el-form-item",{attrs:{label:"",prop:"app_num"}},[r("div",{staticClass:"item-block"},[r("img",{attrs:{src:n("ruh7"),alt:""}}),t._v(" "),r("span",{staticClass:"item-name"},[t._v("手机App")]),t._v(" "),r("el-input-number",{attrs:{min:0,label:"描述文字"},on:{change:t.handleChangeAppNum},model:{value:t.ruleForm.app_num,callback:function(e){t.$set(t.ruleForm,"app_num",e)},expression:"ruleForm.app_num"}})],1)])],1)],1)]),t._v(" "),r("div",{staticClass:"btn-group"},[t.isCantClick?r("div",{staticClass:"save-btn cant-click",on:{click:t.pleaseFinish}},[t._v("保存")]):r("div",{staticClass:"save-btn",on:{click:t.saveInput}},[t._v(" 保存")]),t._v(" "),r("div",{staticClass:"cancel-btn",on:{click:t.cancelEdit}},[t._v("取消")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-bar"},[e("span",{staticClass:"text-strong"},[this._v("服务信息")])])}]};var i=function(t){n("YULT"),n("8t2Z")},s=n("X4nt")(r.a,a,!1,i,"data-v-9a507204",null);e.default=s.exports}});