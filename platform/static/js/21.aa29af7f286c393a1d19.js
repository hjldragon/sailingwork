webpackJsonp([21,92,101],{"6nPg":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("m1Wp"),n=i("SCD4"),s=i("lbRB"),l=i("EuEE"),o=i("6nXL"),r={components:{AgentBaseinfo:a.default,AgentShoptable:n.default},data:function(){return{agentinfo:{},agent_id:"",agent_type:""}},created:function(){this.getAgentinfo()},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$refs.agentShopotable.$refs.shoptable.$refs.bodyWrapper;l.a.AdjustHeight(e)})},methods:{getAgentinfo:function(){var t=this;this.agent_id=this.$route.query.agentid||"";var e={agent_info:1,type:1,agent_id:this.agent_id};Object(s.c)(e).then(function(e){0===e.ret&&(t.agentinfo=e.data.agent_info,t.agent_type=t.agentinfo.agent_type)})},goList:function(){var t=void 0;t=this.agent_type===o.f.INDUSTRY,this.$router.push({path:"/agent/list",query:{isindustry:t}})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"agent-detail"}},[i("div",{staticClass:"breadcrumb"},[i("el-breadcrumb",{attrs:{separator:">"}},[i("el-breadcrumb-item",{nativeOn:{click:function(e){t.goList(e)}}},[t._v("代理商列表")]),t._v(" "),i("el-breadcrumb-item",[t._v("代理商详情")])],1)],1),t._v(" "),i("div",{staticClass:"baseinfo-content"},[i("agent-baseinfo",{attrs:{agentinfo:t.agentinfo},on:{"operate-success":t.getAgentinfo}})],1),t._v(" "),i("div",{staticClass:"agent-shop-content"},[i("div",{staticClass:"list"},[i("agent-shoptable",{ref:"agentShopotable",attrs:{agentinfo:t.agentinfo}})],1)])])},staticRenderFns:[]};var g=i("X4nt")(r,c,!1,function(t){i("V2G6")},"data-v-6d2b5477",null);e.default=g.exports},IIc4:function(t,e){},SCD4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Ym9J"),n=i.n(a),s=i("Fzxs"),l=i("EuEE"),o=i("6nXL"),r=i("lbRB"),c={components:{EmptyTable:s.a},props:{agentinfo:{type:Object}},data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-6048e5),t.$emit("pick",[i,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-2592e6),t.$emit("pick",[i,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-7776e6),t.$emit("pick",[i,e])}}]},serviceOptions:[{label:"全部",value:0},{label:o.e.toString(o.e.NO),value:o.e.NO},{label:o.e.toString(o.e.YES),value:o.e.YES},{label:o.e.toString(o.e.TIMEOUT),value:o.e.TIMEOUT}],serviceSelect:0,creatTime:null,list:[],emptyType:1,agent_id:"",shop_id:"",agent_type:1,total:100,listQuery:{page:1,limit:10},isSort:!1,sortLabel:"",sortOrder:1,changeAgentDialogVisible:!1,changeAgentOption:[],selectAgent:"",sucChangeAgentDialog:!1,AgentServiceStatus:o.e,businessType:o.u}},computed:{showAgentSend:function(){return!!this.selectAgent},isListEmpty:function(){return 0===this.list.length}},created:function(){this.agent_id=this.$route.query.agentid||"",this.getList()},watch:{agentinfo:{handler:function(){this.init()},deep:!0}},methods:{init:function(){this.agent_type=this.agentinfo.agent_type,this.getList()},search:function(){this.emptyType=2,this.listQuery.page=1,this.getList()},getList:function(){var t=this,e={get_shop_list:1,agent_id:this.agent_id,page_size:this.listQuery.limit,page_no:this.listQuery.page};if(!l.a.isEmpty(this.creatTime)){var i=this.creatTime[0],a=this.creatTime[1];e.begin_time=parseInt(n()(i).format("X")),e.end_time=parseInt(n()(a).format("X"))+86400}this.isSort&&(e.sort_name=this.sortLabel,e.desc=this.sortOrder),Object(r.g)(e).then(function(e){0===e.ret&&(t.list=e.data.list||[],t.total=e.data.total,t.list=t.list.map(function(t){return t.ctime&&(t.ctime=n()(1e3*t.ctime).format("YYYY.MM.DD")),t.shop_model?t.shop_model_str=o.u.toString(t.shop_model):t.shop_model_str="--",t}))})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},openChangeDialog:function(t){var e=this;this.shop_id=t,this.changeAgentDialogVisible=!0;var i={get_agent_list:1,agent_type:this.agent_type};Object(r.c)(i).then(function(t){0===t.ret&&(e.changeAgentOption=t.data.agent_list)})},hideChangeDialog:function(){this.changeAgentDialogVisible=!1},closeHandler:function(){this.shop_id="",this.selectAgent=""},changeSend:function(){var t=this,e={shop_change_agent:1,shop_id:this.shop_id,agent_id:this.selectAgent};Object(r.h)(e).then(function(e){0===e.ret?(t.getList(),t.hideChangeDialog(),setTimeout(function(){t.opentipDialog()},500)):t.$slnotify({message:o.w.toString(e.ret),duration:1500})})},opentipDialog:function(){this.sucChangeAgentDialog=!0},hidetipDialog:function(){this.sucChangeAgentDialog=!1},sort:function(t){this.sortLabel=t.prop,"descending"===t.order?(this.isSort=!0,this.sortOrder=-1):"ascending"===t.order?(this.isSort=!0,this.sortOrder=1):this.isSort=!1,this.getList()}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"agent-shop-table"}},[a("div",{staticClass:"search-content clearfix"},[t._m(0),t._v(" "),a("div",{staticClass:"search-item fl"},[a("el-date-picker",{attrs:{"unlink-panels":"",editable:!1,type:"daterange","picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.creatTime,callback:function(e){t.creatTime=e},expression:"creatTime"}})],1),t._v(" "),a("div",{staticClass:"search-btn fl",on:{click:t.search}},[t._v("搜索")])]),t._v(" "),a("div",{staticClass:"table-content change-default"},[a("el-table",{ref:"shoptable",attrs:{data:t.list,stripe:""},on:{"sort-change":t.sort}},[a("el-table-column",{attrs:{prop:"ctime",label:"创建时间","min-width":"80",align:"center",sortable:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"adjust-center"},[t._v(t._s(e.row.ctime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"shop_name",label:"商户店铺","min-width":"80",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.shop_name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"店铺账号","min-width":"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.phone))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"telephone",label:"联系电话","min-width":"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.telephone))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"shop_model",label:"营业模式","min-width":"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.shop_model_str))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"form",label:"来源","min-width":"80",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.from))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"opearte",label:"操作","min-width":"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"change-agent-btn",on:{click:function(i){t.openChangeDialog(e.row.shop_id)}}},[t._v("变更代理")])]}}])})],1),t._v(" "),t.isListEmpty?a("empty-table",{attrs:{type:t.emptyType,isSmall:!0}}):t._e()],1),t._v(" "),a("div",{staticClass:"pagination-content change-pagination-default"},[a("el-pagination",{staticClass:"sl-pagination",attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,40],"page-size":t.listQuery.limit,layout:"sizes, jumper, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),a("el-dialog",{staticClass:"nopadding change-agent",attrs:{visible:t.changeAgentDialogVisible,width:"600px",top:"35vh",center:""},on:{close:t.closeHandler,"update:visible":function(e){t.changeAgentDialogVisible=e}}},[a("div",{staticClass:"change-content"},[a("div",{staticClass:"title"},[t._v("变更代理商")]),t._v(" "),a("div",{staticClass:"select"},[a("el-select",{attrs:{placeholder:"请选择代理商"},model:{value:t.selectAgent,callback:function(e){t.selectAgent=e},expression:"selectAgent"}},t._l(t.changeAgentOption,function(t){return a("el-option",{key:t.agent_id,attrs:{label:t.agent_name,value:t.agent_id}})}))],1)]),t._v(" "),a("div",{staticClass:"btn-dialog",attrs:{slot:"footer"},slot:"footer"},[t.showAgentSend?a("div",{staticClass:"btn-Dialogok",on:{click:t.changeSend}},[t._v("确认")]):a("div",{staticClass:"btn-disabled"},[t._v("确认")]),t._v(" "),a("div",{staticClass:"btn-Dialogcancel",on:{click:t.hideChangeDialog}},[t._v("取消")])])]),t._v(" "),a("el-dialog",{staticClass:"nopadding change-tip-dialog",attrs:{visible:t.sucChangeAgentDialog,width:"500px",top:"35vh",center:""},on:{"update:visible":function(e){t.sucChangeAgentDialog=e}}},[a("div",{staticClass:"change-tip-content"},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:i("qrEq"),alt:""}})]),t._v(" "),a("div",{staticClass:"text"},[a("span",[t._v("变更成功!")])])]),t._v(" "),a("div",{staticClass:"btn-dialog",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"btn-tip",on:{click:t.hidetipDialog}},[t._v("知道了")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lable fl"},[e("span",[this._v("创建时间")])])}]};var h=i("X4nt")(c,g,!1,function(t){i("otVY"),i("IIc4")},"data-v-0f09d341",null);e.default=h.exports},V2G6:function(t,e){},W10d:function(t,e){},m1Wp:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Ym9J"),n=i.n(a),s=i("EuEE"),l=i("lbRB"),o=i("6nXL"),r={props:{agentinfo:{type:Object}},data:function(){return{leftData:{creat_time:{label:"创建时间",value:"",show:!0},agent_type:{label:"代理商类型",value:"",show:!0},agent_name:{label:"代理商名称",value:"",show:!0},agent_level:{label:"级别",value:"",show:!0},review_time:{label:"审核时间",value:"",show:!0},login_phone:{label:"登录手机号",value:"",show:!0},login_pwd:{label:"登录密码",value:"暂无查看权限",show:!0}},rightData:{agent_area:{label:"代理区域",value:"",show:!0},resouvce:{label:"来源",value:"",show:!0},saler:{label:"所搜销售",value:"",show:!0},attach_people:{label:"联系人",value:"",show:!0},attach_phone:{label:"联系号码",value:"",show:!0},email:{label:"邮箱",value:"",show:!0},adress:{label:"地址",value:"",show:!0}},agentid:"",business_status:0,sucTipDialogVisible:!1,sucTipText:"",sucTipImg:i("qrEq"),is_freeze:0,AgentIsFreeze:o.c}},watch:{agentinfo:{handler:function(){this.init()},deep:!0}},methods:{goEditor:function(){this.$router.push({path:"/agentlist/editor",query:{agentid:this.agentid}})},init:function(){if(this.business_status=this.agentinfo.business_status,this.agentid=this.agentinfo.agent_id,this.is_freeze=this.agentinfo.is_freeze||0,s.a.isEmpty(this.agentinfo.ctime)||(this.leftData.creat_time.value=n()(1e3*this.agentinfo.ctime).format("YYYY-MM-DD")),!s.a.isEmpty(this.agentinfo.agent_type)){var t=this.agentinfo.agent_type;t===o.f.INDUSTRY&&(this.rightData.agent_area.show=!1),this.leftData.agent_type.value=o.f.toString(t)}this.leftData.agent_name.value=this.agentinfo.agent_name||"",s.a.isEmpty(this.agentinfo.agent_level)||(this.leftData.agent_level.value=o.d.toString(this.agentinfo.agent_level)),s.a.isEmpty(this.agentinfo.business_time)?this.leftData.review_time.value="--":this.leftData.review_time.value=n()(1e3*this.agentinfo.business_time).format("YYYY-MM-DD"),this.leftData.login_phone.value=this.agentinfo.phone,this.rightData.agent_area.value=""+this.agentinfo.agent_province,this.agentinfo.agent_city&&(this.rightData.agent_area.value=this.agentinfo.agent_province+"-"+this.agentinfo.agent_city),this.agentinfo.agent_area&&(this.rightData.agent_area.value=this.agentinfo.agent_province+"-"+this.agentinfo.agent_city+"-"+this.agentinfo.agent_area),this.rightData.resouvce.value=this.agentinfo.from,this.rightData.saler.value=this.agentinfo.from_salesman,this.rightData.attach_people.value=this.agentinfo.real_name,this.rightData.attach_phone.value=this.agentinfo.telephone,this.rightData.email.value=this.agentinfo.email||"--",this.rightData.adress.value=this.agentinfo.address},openTilSuc:function(t,e){var a=this;this.sucTipText=t,e&&(this.sucTipImg=i("6MC9")),setTimeout(function(){a.sucTipDialogVisible=!0},500)},hideTipSuc:function(){this.sucTipDialogVisible=!1},freezeOk:function(){var t=this,e={agent_freeze:1,agent_id:this.agentid,is_freeze:o.c.YES};Object(l.d)(e).then(function(e){0===e.ret?(t.$emit("operate-success"),t.openTilSuc("冻结成功！")):t.$slnotify({message:o.w.toString(e.ret)})})},freeEnable:function(){var t=this,e={agent_freeze:1,agent_id:this.agentid,is_freeze:o.c.NO};Object(l.d)(e).then(function(e){0===e.ret?(t.$emit("operate-success"),t.openTilSuc("启用成功！")):t.$slnotify({message:o.w.toString(e.ret)})})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"agnet-detail-baseinfo"}},[i("div",{staticClass:"title clearfix"},[i("span",[t._v("基础信息")]),t._v(" "),i("div",{staticClass:"btn-group fr"},[t.is_freeze===t.AgentIsFreeze.YES?i("div",{staticClass:"btn-use",on:{click:t.freeEnable}},[t._v("启用")]):i("div",{staticClass:"btn-stop",on:{click:t.freezeOk}},[t._v("冻结")]),t._v(" "),i("div",{staticClass:"btn-edit",on:{click:t.goEditor}},[t._v("编辑")])])]),t._v(" "),i("div",{staticClass:"content clearfix"},[i("div",{staticClass:"item-content-left fl"},t._l(t.leftData,function(e,a){return e.show?i("div",{staticClass:"item clearfix"},[i("div",{staticClass:"item-left fl"},[i("span",[t._v(t._s(e.label))])]),t._v(" "),i("div",{staticClass:"item-right fl"},[i("span",{class:{"pwd-item":"login_pwd"===a}},[t._v(t._s(e.value))])])]):t._e()})),t._v(" "),i("div",{staticClass:"item-content-right fl"},t._l(t.rightData,function(e,a){return e.show?i("div",{staticClass:"item clearfix"},[i("div",{staticClass:"item-left fl"},[i("span",[t._v(t._s(e.label))])]),t._v(" "),i("div",{staticClass:"item-right fl"},[i("span",[t._v(t._s(e.value))])])]):t._e()}))]),t._v(" "),i("el-dialog",{staticClass:"nopadding change-tip-dialog",attrs:{visible:t.sucTipDialogVisible,width:"500px",top:"35vh",center:""},on:{"update:visible":function(e){t.sucTipDialogVisible=e}}},[i("div",{staticClass:"change-tip-content"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:t.sucTipImg}})]),t._v(" "),i("div",{staticClass:"text"},[i("span",[t._v(t._s(t.sucTipText))])])]),t._v(" "),i("div",{staticClass:"btn-dialog",attrs:{slot:"footer"},slot:"footer"},[i("div",{staticClass:"btn-tip",on:{click:t.hideTipSuc}},[t._v("知道了")])])])],1)},staticRenderFns:[]};var g=i("X4nt")(r,c,!1,function(t){i("W10d")},"data-v-6270fb34",null);e.default=g.exports},otVY:function(t,e){}});