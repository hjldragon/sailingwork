webpackJsonp([23,96,97],{"1V0h":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Ym9J"),a=e.n(i),n=e("6nXL"),l={props:{agentinfo:{type:Object}},data:function(){return{certificateData:{name:{label:"企业名称：",value:"--",select:0,cert_text:"已通过"},agent:{label:"法人代表：",value:"--",select:1,cert_text:"已通过"},cardid:{label:"企业法人身份证号码：",value:"--",select:2,cert_text:"已通过"},picture:{label:"法人身份证照片：",value:"",cert_text:"已通过",imglist:[e("Wnpm"),e("94No")],select:2},bus_number:{label:"营业执照注册号：",value:"12345678901234567890",cert_text:"已通过",select:0},bus_time:{label:"营业期限：",value:"--",cert_text:"已通过",select:0},bus_picture:{label:"营业执照扫描件：",value:"",imglist:[e("4Xku")],cert_text:"已通过",select:2},scoped:{label:"经营范围：",value:"--",cert_text:"已通过",select:2}},business:{},businessStatus:0,businessStr:"",base_url:"./php"}},computed:{isShowBtn:function(){return this.businessStatus===n.b.NO||this.businessStatus===n.b.FAIL},bussinessClass:function(){return this.businessStatus===n.b.NO?"business-blue":this.businessStatus===n.b.DURING?"business-purple":this.businessStatus===n.b.SUC?"business-green":this.businessStatus===n.b.FAIL?"business-red":void 0}},watch:{agentinfo:{handler:function(){this.init()},deep:!0}},methods:{init:function(){if(this.businessStatus=this.agentinfo.business_status,this.businessStr="（"+n.b.toString(this.businessStatus)+"）",this.business=this.agentinfo.agent_business||{},this.businessStatus!==n.b.NO){this.certificateData.name.value=this.business.company_name,this.certificateData.agent.value=this.business.legal_person,this.certificateData.cardid.value=this.business.legal_card;var t=(this.business.legal_card_photo||[])[0],s=(this.business.legal_card_photo||[])[1];this.certificateData.picture.imglist[0]="./php/img_get.php?img=1&imgname="+t,this.certificateData.picture.imglist[1]="./php/img_get.php?img=1&imgname="+s,this.certificateData.bus_number.value=this.business.business_num;var e=a()(1e3*(this.business.business_date||[])[0]).format("YYYY-MM-DD"),i=a()(1e3*(this.business.business_date||[])[0]).format("YYYY-MM-DD");this.certificateData.bus_time.value=e+" 至 "+i,this.certificateData.bus_picture.imglist[0]="./php/img_get.php?img=1&imgname="+this.business.business_photo,this.certificateData.scoped.value=this.business.business_scope}},goEditor:function(){this.$router.push("/indusagentinfo/editorcert")}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"industry-cert-baseinfo"}},[e("div",{staticClass:"title"},[e("span",[t._v("工商信息")]),t._v(" "),e("span",{staticClass:"cert-str",class:t.bussinessClass},[t._v(t._s(t.businessStr))]),t._v(" "),e("div",{staticClass:"btn-group fr"},[t.isShowBtn?t._e():e("div",{staticClass:"btn-edit-gray"},[t._v("申请认证")]),t._v(" "),t.isShowBtn?e("div",{staticClass:"btn-edit",on:{click:t.goEditor}},[t._v("申请认证")]):t._e()])]),t._v(" "),e("div",{staticClass:"content"},t._l(t.certificateData,function(s,i){return e("div",{staticClass:"cert-item clearfix"},[e("div",{staticClass:"item-left fl"},[e("div",[e("span",{staticClass:"label"},[t._v(t._s(s.label))]),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.value))])]),t._v(" "),s.imglist&&0!==s.imglist.length?e("div",{staticClass:"img-container"},t._l(s.imglist,function(t){return e("img",{attrs:{src:t,alt:""}})})):t._e()])])}))])},staticRenderFns:[]};var r=e("X4nt")(l,u,!1,function(t){e("rG1Q")},"data-v-bf1d6976",null);s.default=r.exports},LkFj:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("EuEE"),a=e("6nXL"),n={props:{agentinfo:{type:Object}},data:function(){return{leftData:{agent_type:{label:"代理商类型",value:"",show:!0},agent_name:{label:"代理商名称",value:"",show:!0},agent_level:{label:"代理商级别",value:"",show:!0},login_phone:{label:"登录手机号",value:"",show:!0}},rightData:{attach_people:{label:"联系人",value:"",show:!0},attach_phone:{label:"联系号码",value:"",show:!0},email:{label:"邮箱",value:"",show:!0},adress:{label:"地址",value:"",show:!0}},businessStatus:0,businessStr:""}},computed:{isShowBtn:function(){return this.businessStatus===a.b.NO||this.businessStatus===a.b.FAIL},bussinessClass:function(){return this.businessStatus===a.b.NO?"business-blue":this.businessStatus===a.b.DURING?"business-purple":this.businessStatus===a.b.SUC?"business-green":this.businessStatus===a.b.FAIL?"business-red":void 0}},watch:{agentinfo:{handler:function(){this.init()},deep:!0}},methods:{init:function(){if(this.businessStatus=this.agentinfo.business_status,this.businessStr="（"+a.b.toString(this.businessStatus)+"）",!i.a.isEmpty(this.agentinfo.agent_type)){var t=this.agentinfo.agent_type;this.leftData.agent_type.value=a.f.toString(t)}this.leftData.agent_name.value=this.agentinfo.agent_name||"",i.a.isEmpty(this.agentinfo.agent_level)||(this.leftData.agent_level.value=a.d.toString(this.agentinfo.agent_level)),this.leftData.login_phone.value=this.agentinfo.phone,this.rightData.attach_people.value=this.agentinfo.real_name,this.rightData.attach_phone.value=this.agentinfo.telephone,this.rightData.email.value=this.agentinfo.email||"--",this.rightData.adress.value=this.agentinfo.address},goEditor:function(){this.$router.push("/indusagentinfo/editorbase")}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"industry-agent-baseinfo"}},[e("div",{staticClass:"title clearfix"},[e("span",[t._v("基础信息")]),t._v(" "),e("div",{staticClass:"btn-group fr"},[t.isShowBtn?t._e():e("div",{staticClass:"btn-edit-gray"},[t._v("编辑")]),t._v(" "),t.isShowBtn?e("div",{staticClass:"btn-edit",on:{click:t.goEditor}},[t._v("编辑")]):t._e()])]),t._v(" "),e("div",{staticClass:"content clearfix"},[e("div",{staticClass:"item-content-left fl"},t._l(t.leftData,function(s,i){return s.show?e("div",{staticClass:"item clearfix"},[e("div",{staticClass:"item-left fl"},[e("span",[t._v(t._s(s.label))])]),t._v(" "),e("div",{staticClass:"item-right fl"},[e("span",[t._v(t._s(s.value))]),t._v(" "),"代理商名称"===s.label?e("span",{class:t.bussinessClass},[t._v(t._s(t.businessStr))]):t._e()])]):t._e()})),t._v(" "),e("div",{staticClass:"item-content-right fl"},t._l(t.rightData,function(s,i){return s.show?e("div",{staticClass:"item clearfix"},[e("div",{staticClass:"item-left fl"},[e("span",[t._v(t._s(s.label))])]),t._v(" "),e("div",{staticClass:"item-right fl"},[e("span",[t._v(t._s(s.value))])])]):t._e()}))])])},staticRenderFns:[]};var u=e("X4nt")(n,l,!1,function(t){e("mC9D")},"data-v-d2052ada",null);s.default=u.exports},bQPZ:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("LkFj"),a=e("1V0h"),n=e("6nXL"),l=e("a2vD"),u=e("D9vu"),r={components:{BaseInfo:i.default,CertificateInfo:a.default},data:function(){return{agentid:l.a.getAgentid(),agentinfo:{agent_business:{}}}},created:function(){this.getAgentinfo()},methods:{getAgentinfo:function(){var t=this,s={agent_info:1,agent_id:this.agentid};Object(u.e)(s).then(function(s){0===s.ret?t.agentinfo=s.data.agent_info:t.$slnotify({message:n.w.toString(s.ret),duration:1500})})}}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"base-info"},[s("base-info",{attrs:{agentinfo:this.agentinfo}})],1),this._v(" "),s("div",{staticClass:"certificate-info"},[s("certificate-info",{attrs:{agentinfo:this.agentinfo}})],1)])},staticRenderFns:[]};var o=e("X4nt")(r,c,!1,function(t){e("gU+d")},"data-v-5ec81d5e",null);s.default=o.exports},"gU+d":function(t,s){},mC9D:function(t,s){},rG1Q:function(t,s){}});