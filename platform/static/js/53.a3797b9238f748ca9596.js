webpackJsonp([53],{CNCC:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("yv9m"),r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"signin-info"}},[o("el-form",{ref:"Form",staticClass:"demo-ruleForm",style:{height:e.height},attrs:{"label-width":"100px",model:e.form,rules:e.rules}},[o("el-form-item",{attrs:{label:"代理商类型",prop:"agentTypes"}},[o("el-select",{attrs:{placeholder:"请选择代理商类型"},on:{change:function(t){e.getAgentlistM("Form")}},model:{value:e.form.agentTypes,callback:function(t){e.$set(e.form,"agentTypes",t)},expression:"form.agentTypes"}},e._l(e.agentType,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),e.form.agentTypes!==e.signTyper.REGION&&e.form.agentTypes!==e.isShowAgentFollow?o("el-form-item",{attrs:{label:"所属代理商",prop:"agnetNos"}},[o("el-select",{attrs:{placeholder:"请选择所属代理商名称"},on:{change:function(t){e.getAagnetNo("Form")}},model:{value:e.form.agnetNos,callback:function(t){e.$set(e.form,"agnetNos",t)},expression:"form.agnetNos"}},e._l(e.agnetNo,function(e){return o("el-option",{key:e.agent_id,attrs:{label:e.agent_name,value:e.agent_id}})}))],1):e._e(),e._v(" "),o("el-form-item",{attrs:{label:"来源",prop:"fromWheres"}},[o("el-select",{attrs:{placeholder:"请选择来源信息","allow-create":"",filterable:""},on:{change:function(t){e.checkFinishInput("Form")}},model:{value:e.form.fromWheres,callback:function(t){e.$set(e.form,"fromWheres",t)},expression:"form.fromWheres"}},e._l(e.fromWhere,function(e,t){return o("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"所属销售",prop:"sailNos"}},[o("el-select",{attrs:{placeholder:"请选择所属销售信息","allow-create":"",filterable:""},on:{change:function(t){e.checkFinishInput("Form")}},model:{value:e.form.sailNos,callback:function(t){e.$set(e.form,"sailNos",t)},expression:"form.sailNos"}},e._l(e.sailNo,function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})}))],1)],1)],1)},staticRenderFns:[]},s=function(e){o("tKne"),o("qCIe")},a=o("8AGX")(n.a,r,!1,s,"data-v-360a44df",null);t.default=a.exports},qCIe:function(e,t){},tKne:function(e,t){},yv9m:function(e,t,o){"use strict";(function(e){var n=o("USo7"),r=o("Tdl6"),s=o("a2vD"),a=o("6nXL"),i=o("swMD");t.a={props:["fromInfor"],data:function(){return{getShopId:"",merchant:null,height:0,getAgentList:[],agentType:[{name:"行业代理商",id:2},{name:"区域代理商",id:1}],fromWhere:[],agnetNo:[],sailNo:[],beforChange:"",form:{agentTypes:"",fromWheres:"",agnetNos:"",sailNos:"",agentTyId:"",agnetNoId:""},rules:{agentTypes:[{required:!0,message:"请选择代理商类型",trigger:"change"}],fromWheres:[{required:!0,message:"请选择来源信息",trigger:"change"}],agnetNos:[{required:!0,message:"请选择所属代理商名称",trigger:"change"}],sailNos:[{required:!0,message:"请选择所属销售信息",trigger:"change"}]}}},created:function(){var t=this;this.getFromInfoMethods(),this.getLastStep(),this.height=document.documentElement.clientHeight-470+"px",e(window).resize(function(){t.height=document.documentElement.clientHeight-470+"px"})},components:{},computed:{signTyper:function(){return a.n},isShowAgentFollow:function(){return a.n.toString(a.n.REGION)}},methods:{getLastStep:function(){var e=this;if(this.merchant=i.a.getItem("OF_MER_SIGN"),i.a.getItem("OF_MER_SIGN")&&null!==i.a.getItem("OF_MER_SIGN")){this.getShopId=this.merchant.merchant_created_shopid||"";var t={get_shop_info:1,shop_id:this.getShopId};Object(n.c)(t).then(function(t){0===t.ret&&(e.form.agentTypes=a.n.toString(t.data.shopinfo.agent_type)||"",e.form.fromWheres=t.data.shopinfo.from||"",e.form.agnetNos=t.data.shopinfo.agent_name||"",e.form.sailNos=t.data.shopinfo.from_salesman||"",e.form.agentTyId=t.data.shopinfo.agent_type,e.beforChange=t.data.shopinfo.agent_type,e.form.agnetNoId=t.data.shopinfo.agent_id,e.checkFinishInput("Form"))})}},getAgentlistM:function(e){if(""!==this.form.agentTypes){this.getAgentIdMethods(),this.form.agentTyId=this.form.agentTypes;var t=i.a.getItem("OF_MER_CREUID");this.form.agentTypes!==a.n.REGION&&this.form.agentTypes!==a.n.toString(a.n.REGION)||(this.form.agnetNos="",this.form.agnetNoId=""),t?t.merchant_created_shopid&&this.form.agentTyId!==this.beforChange&&(this.form.fromWheres="",this.form.sailNos="",this.form.agnetNoId="",this.form.agnetNos=""):(this.form.fromWheres="",this.form.sailNos="",this.form.agnetNoId="",this.form.agnetNos="")}this.checkFinishInput(e)},getAagnetNo:function(e){this.form.agnetNoId=this.form.agnetNos,this.checkFinishInput(e)},checkFinishInput:function(e){var t=this;""!==this.form.agentTypes&&this.getAgentIdMethods(),this.form.agentTypes===a.n.REGION||this.form.agentTypes===a.n.toString(a.n.REGION)?""!==this.form.agentTypes&&""!==this.form.fromWheres&&""!==this.form.sailNos?this.$refs[e].validate(function(e){e?t.$emit("getSigningInfo",t.form):t.$emit("contGoNext")}):this.$emit("contGoNext"):this.form.agentTypes!==a.n.INDUSTRY&&this.form.agentTypes!==a.n.toString(a.n.INDUSTRY)||(""!==this.form.agentTypes&&""!==this.form.fromWheres&&""!==this.form.agnetNos&&""!==this.form.sailNos&&""!==this.form.agnetNoId?this.$refs[e].validate(function(e){e?t.$emit("getSigningInfo",t.form):t.$emit("contGoNext")}):this.$emit("contGoNext"))},getAgentIdMethods:function(){var e=this;Object(n.a)({get_agent_list:1,agent_type:2}).then(function(t){0===t.ret&&(e.getAgentList=t.data.agent_list,e.getAgentList&&e.getAgentList.length>0&&(e.agnetNo=e.getAgentList))})},getFromInfoMethods:function(){var e=this,t={get_platformer_info:1,platformer_id:s.a.getPlatformerid()};Object(n.b)(t).then(function(t){if(0===t.ret){var o=t.data.platformer;e.sailNo=r.a.jsonToArr(o.salesman_record)||[],e.fromWhere=r.a.jsonToArr(o.from_record)||[]}})}}}}).call(t,o("tra3"))}});