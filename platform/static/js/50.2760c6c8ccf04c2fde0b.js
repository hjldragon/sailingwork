webpackJsonp([50],{Zu6i:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("k98V"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"signing-info"}},[s("div",{staticClass:"header"},[s("p",[s("router-link",{attrs:{to:{path:"/merchant/list"}}},[s("span",{staticClass:"black"},[t._v("商户列表")])]),t._v(" "),s("span",{staticClass:"text-green"},[t._v(">")]),t._v(" "),s("router-link",{attrs:{to:{path:"/merchantlist/editMerchantDetail",query:{merchantInfo:t.form.shop_id}}}},[s("span",{staticClass:"black"},[t._v("商户详情")])]),t._v(" "),s("span",{staticClass:"text-green"},[t._v(">")]),t._v(" "),s("span",{staticClass:"text-green"},[t._v("编辑签约信息")])],1)]),t._v(" "),s("div",{staticClass:"basic-info"},[t._m(0),t._v(" "),s("div",{staticClass:"info-board",style:{height:t.height}},[s("el-form",{ref:"Form",staticClass:"demo-ruleForm",attrs:{"label-width":"100px",model:t.form,rules:t.rules}},[s("el-form-item",{attrs:{label:"代理商类型",prop:"agentTypes"}},[s("el-select",{attrs:{placeholder:"请选择代理商类型"},on:{change:function(e){t.getAgentlistM("Form")}},model:{value:t.form.agentTypes,callback:function(e){t.$set(t.form,"agentTypes",e)},expression:"form.agentTypes"}},t._l(t.agentType,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),t.form.agentTypes!==t.refionAgent?s("el-form-item",{attrs:{label:"所属代理商",prop:"agnetNos"}},[s("el-select",{attrs:{placeholder:"请选择所属代理商名称"},on:{change:function(e){t.getAgentIdIndus("Form")}},model:{value:t.form.agnetNos,callback:function(e){t.$set(t.form,"agnetNos",e)},expression:"form.agnetNos"}},t._l(t.agnetNo,function(t){return s("el-option",{key:t.agent_id,attrs:{label:t.agent_name,value:t.agent_id}})}))],1):t._e(),t._v(" "),s("el-form-item",{attrs:{label:"来源",prop:"fromWheres"}},[s("el-select",{attrs:{placeholder:"请选择来源信息","allow-create":"",filterable:""},on:{change:function(e){t.checkFinishInput("Form")}},model:{value:t.form.fromWheres,callback:function(e){t.$set(t.form,"fromWheres",e)},expression:"form.fromWheres"}},t._l(t.fromWhere,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),s("el-form-item",{attrs:{label:"所属销售",prop:"sailNos"}},[s("el-select",{attrs:{placeholder:"请选择所属销售信息","allow-create":"",filterable:""},on:{change:function(e){t.checkFinishInput("Form")}},model:{value:t.form.sailNos,callback:function(e){t.$set(t.form,"sailNos",e)},expression:"form.sailNos"}},t._l(t.sailNo,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}))],1)],1)],1)]),t._v(" "),s("div",{staticClass:"btn-group"},[t.isCantClick?s("div",{staticClass:"save-btn cant-click",on:{click:t.pleaseFinish}},[t._v("保存")]):s("div",{staticClass:"save-btn",on:{click:t.saveInput}},[t._v(" 保存")]),t._v(" "),s("div",{staticClass:"cancel-btn",on:{click:t.cancelEdit}},[t._v("取消")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-bar"},[e("span",{staticClass:"text-strong"},[this._v("基础信息")])])}]};var a=function(t){s("aHgH"),s("uIYr")},i=s("X4nt")(n.a,o,!1,a,"data-v-e65de4c8",null);e.default=i.exports},aHgH:function(t,e){},k98V:function(t,e,s){"use strict";(function(t){var n=s("USo7"),o=s("a2vD"),a=s("6nXL"),i=s("Tdl6");e.a={props:["shopId"],data:function(){return{height:0,getAgentList:[],getFromList:[],staffId:"",getAgentId:"",agentType:[{name:"行业代理商",id:2},{name:"区域代理商",id:1}],fromWhere:[],agnetNo:[],sailNo:[],getShopId:"",beforeChnge:"",form:{agentTypes:"",fromWheres:"",agnetNos:"",sailNos:"",agentTypesId:"",agent_id:"",shop_id:""},rules:{agentTypes:[{required:!0,message:"请选择代理商类型",trigger:"change"}],agnetNos:[{required:!0,message:"请选择所属代理商名称",trigger:"change"}],fromWheres:[{required:!0,message:"请选择来源信息",trigger:"change"}],sailNos:[{required:!0,message:"请选择所属销售信息",trigger:"change"}]},isCantClick:!0}},created:function(){var e=this;this.height=document.documentElement.clientHeight-146+"px",t(window).resize(function(){e.height=document.documentElement.clientHeight-146+"px"}),this.staffId=o.a.getPlatformerid(),this.getFromInfoMethods(),this.$route.query.shopId&&(this.getShopId=this.$route.query.shopId,this.initSignInfo())},components:{},computed:{refionAgent:function(){return a.p.toString(a.p.REGION)}},methods:{initSignInfo:function(){var t=this,e={get_shop_info:1,shop_id:this.$route.query.shopId};Object(n.c)(e).then(function(e){0===e.ret&&(t.form.shop_id=e.data.shopinfo.shop_id,e.data.shopinfo.agent_type&&(t.form.agentTypesId=e.data.shopinfo.agent_type,t.form.agentTypes=a.p.toString(t.form.agentTypesId),t.beforeChnge=t.form.agentTypesId,t.getAgentIdMethods(t.form.agentTypesId)),e.data.shopinfo.from&&(t.form.fromWheres=e.data.shopinfo.from),e.data.shopinfo.agent_name&&(t.form.agnetNos=e.data.shopinfo.agent_name),e.data.shopinfo.from_salesman&&(t.form.sailNos=e.data.shopinfo.from_salesman),e.data.shopinfo.agent_id&&(t.form.agent_id=e.data.shopinfo.agent_id),t.checkFinishInput("Form"))})},getAgentlistM:function(t){""!==this.form.agentTypes&&(this.getAgentIdMethods(this.form.agentTypes),this.form.agentTypesId=this.form.agentTypes,this.form.agentTypes===a.p.REGION&&(this.form.agentTypes=a.p.toString(this.form.agentTypes),this.form.agnetNos="",this.form.agent_id="",this.form.fromWheres="",this.form.sailNos=""),this.form.agentTypesId!==this.beforeChnge&&(this.form.fromWheres="",this.form.sailNos="",this.form.agnetNos="",this.form.agent_id="")),this.checkFinishInput(t)},getAgentIdIndus:function(t){this.form.agent_id=this.form.agnetNos,this.checkFinishInput(t)},checkFinishInput:function(t){var e=this;this.refionAgent!==this.form.agentTypes?""!==this.form.agentTypes&&""!==this.form.fromWheres&&""!==this.form.agnetNos&&""!==this.form.sailNos?this.$refs[t].validate(function(t){t&&(e.isCantClick=!1)}):this.isCantClick=!0:""!==this.form.agentTypes&&""!==this.form.fromWheres&&""!==this.form.sailNos?this.isCantClick=!1:this.isCantClick=!0},getAgentIdMethods:function(t){var e=this,s={get_agent_list:1,agent_type:t};Object(n.a)(s).then(function(t){0===t.ret&&(e.getAgentList=t.data.agent_list,e.getAgentList&&e.getAgentList.length>0&&(e.agnetNo=e.getAgentList))})},getFromInfoMethods:function(){var t=this,e={get_platformer_info:1,platformer_id:o.a.getPlatformerid()};Object(n.b)(e).then(function(e){if(0===e.ret){var s=e.data.platformer;t.sailNo=i.a.jsonToArr(s.salesman_record)||[],t.fromWhere=i.a.jsonToArr(s.from_record)||[]}})},saveInput:function(){var t=this,e={save_shop_sign:1,platformer_id:this.staffId,shop_id:this.getShopId,agent_type:this.form.agentTypesId,agent_id:this.form.agent_id,from:this.form.fromWheres,from_salesman:this.form.sailNos};Object(n.d)(e).then(function(e){0===e.ret&&(t.$slnotify({message:"保存成功"}),t.$router.push({path:"/merchantlist/editMerchantDetail",query:{merchantInfo:t.form.shop_id}}))})},pleaseFinish:function(){this.$slnotify({message:"请先完成签约信息编辑"}),this.checkFinishInput("Form")},cancelEdit:function(){this.$router.push({path:"/merchantlist/editMerchantDetail",query:{merchantInfo:this.form.shop_id}})}}}}).call(e,s("tra3"))},uIYr:function(t,e){}});