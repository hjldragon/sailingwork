webpackJsonp([47],{"5+Cj":function(e,t){},dZC9:function(e,t,r){"use strict";(function(e){var i=r("ihY9"),o=r("nMBb"),a=r("HPzi"),s=r("swMD");t.a={data:function(){var e=this;return{typeText:!1,typePass:!1,isCantClick:!0,isDetailDialog:!1,suOrfa:!0,repeat:!1,departmentName:"",tipsText:"",ruleForm2:{password:"",checkPass:"",phone:"",pl_name:"",sex:"",remark:"",position_name:"",department_name:"",position_id:"",department_id:"",userId:""},position_id:"",department_id:"",staffId:"",positionArr:[],departmentArr:[],rules:{password:[{required:!0,validator:function(t,r,i){var o=/^[A-Za-z0-9]{6,20}$/;""===r?i(new Error("请输入密码")):(!1===o.test(r)&&(e.isCantClick=!0,i(new Error("密码格式必须可以是字母、数字，不能使用特殊字符，长度在6-20之间"))),""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),i())},trigger:"change,input"}],checkPass:[{required:!0,validator:function(t,r,i){""===r?i(new Error("请再次输入密码")):r!==e.ruleForm2.password?i(new Error("两次输入密码不一致!")):i()},trigger:"change,input"}],phone:[{required:!0,validator:function(t,r,i){return r?!1===/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/.test(r)?(e.isCantClick=!0,i(new Error("请输入合法的电话号码"))):void i():i(new Error("请输入电话号码"))},trigger:"change,input"}],pl_name:[{required:!0,validator:function(t,r,i){""===r?i(new Error("请输入联系人姓名")):!1===/^[\u4E00-\u9FA5A-Za-z]+$/.test(r)?(e.isCantClick=!0,i(new Error("姓名格式可为中英文，不包括特殊数字和字符"))):i()},trigger:"change,input"}],position_name:[{required:!0,validator:function(t,r,i){""===e.ruleForm2.position_name?i(new Error("请选择职位")):i()},trigger:"change,blur"}],department_name:[{required:!0,validator:function(t,r,i){""===e.ruleForm2.department_name?i(new Error("请选择部门")):i()},trigger:"change,blur"}],remark:[{validator:function(t,r,i){r&&r.length>=150?(e.isCantClick=!0,i(new Error("备注不能超过150字"))):i()},trigger:"blur"}]}}},created:function(){var t=this;this.height=document.documentElement.clientHeight-110+"px",e(window).resize(function(){t.height=document.documentElement.clientHeight-110+"px"}),this.editInfoForm(),this.getDepartPosiArr(),this.positionArr=Object(a.e)()},computed:{},components:{detailDialog:o.a},methods:{editInfoForm:function(){var e=this;this.$route.query.platformer_id&&(this.staffId=this.$route.query.platformer_id||"");var t={get_platformer_info:1,platformer_id:this.staffId};Object(i.e)(t).then(function(t){0===t.ret&&(e.ruleForm2=t.data.platformer,e.department_id=e.ruleForm2.pl_department_id,e.position_id=e.ruleForm2.pl_position_id,e.ruleForm2.checkPass=t.data.platformer.password,e.$route.query.positionName?(s.a.getItem("#OFF_ORG_FORM")&&(e.ruleForm2=s.a.getItem("#OFF_ORG_FORM"),e.department_id=e.ruleForm2.department_id),e.ruleForm2.position_name=e.$route.query.positionName,e.position_id=e.$route.query.pl_position_id):s.a.removeItem("#OFF_ORG_FORM"),""!==e.ruleForm2.password&&""!==e.ruleForm2.checkPass&&""!==e.ruleForm2.phone&&""!==e.ruleForm2.pl_name&&""!==e.ruleForm2.position_name&&""!==e.ruleForm2.department_name?e.isCantClick=!1:e.isCantClick=!0)})},getDepartPosiArr:function(){this.departmentArr=Object(a.c)(),this.positionArr=Object(a.e)()},addNewPositionMethods:function(){s.a.setItem("#OFF_ORG_FORM",this.ruleForm2),this.$router.push({path:"/organziteList/editPositionDetail",query:{form:this.ruleForm2,pathName:"/organziteList/editStaffDetail",platformer_id:this.staffId,choosed_depart_name:this.$route.query.choosed_depart_name,choosed_depart_id:this.$route.query.choosed_depart_id,position_id:this.position_id,position_name:this.ruleForm2.position_name}})},addNewPosition:function(){this.isDetailDialog=!this.isDetailDialog},confirmAdd:function(e){var t=this;this.tipsText="新建成功!";var r={pl_department_save:1,pl_department_name:e};Object(i.b)(r).then(function(r){0===r.ret?(t.suOrfa=!1,t.repeat=!1,t.departmentArr=Object(a.c)(),t.ruleForm2.department_name=e,t.department_id=r.data.pl_department_id,t.ruleForm2.department_id=r.data.pl_department_id,""!==t.ruleForm2.password&&""!==t.ruleForm2.checkPass&&""!==t.ruleForm2.phone&&""!==t.ruleForm2.real_name&&""!==t.ruleForm2.position_name&&""!==t.ruleForm2.department_name?t.checkFinishInput("ruleForm2"):t.isCantClick=!0):-20034===r.ret&&(t.suOrfa=!0,t.repeat=!0)}),this.checkFinishInput("ruleForm2")},handleClose:function(){this.suOrfa=!0,this.repeat=!1,this.isDetailDialog=!1,this.checkFinishInput("ruleForm2")},checkPosition:function(e){this.position_id=this.ruleForm2.position_name,this.checkFinishInput(e)},checkDepart:function(e){this.department_id=this.ruleForm2.department_name,this.ruleForm2.department_id=this.ruleForm2.department_name,this.checkFinishInput(e)},checkFinishInput:function(e){var t=this;""!==this.ruleForm2.password&&""!==this.ruleForm2.checkPass&&""!==this.ruleForm2.phone&&""!==this.ruleForm2.pl_name&&""!==this.ruleForm2.position_name&&""!==this.ruleForm2.department_name?this.$refs[e].validate(function(e){t.isCantClick=!e}):this.isCantClick=!0},saveInfo:function(){var e=this;this.checkFinishInput("ruleForm2");var t={platformer_save:1,platformer_id:this.ruleForm2.platformer_id,pl_name:this.ruleForm2.pl_name,phone:this.ruleForm2.phone,password:this.ruleForm2.password,re_password:this.ruleForm2.checkPass,remark:this.ruleForm2.remark,pl_position_id:this.position_id,pl_department_id:this.department_id};Object(i.f)(t).then(function(t){0===t.ret&&(e.$router.push({path:"/organzite/list",query:{choosedDepartId:e.$route.query.choosed_depart_id,choosedDepartName:e.$route.query.choosed_depart_name}}),e.$slnotify({message:"保存成功"}),s.a.removeItem("#OFF_ORG_FORM"))}),s.a.removeItem("#OFF_ORG_FORM")},cancelInfo:function(){this.$router.push({path:"/organzite/list",query:{choosedDepartId:this.$route.query.choosed_depart_id,choosedDepartName:this.$route.query.choosed_depart_name}}),s.a.removeItem("#OFF_ORG_FORM")},canSeePass:function(){this.typeText=!this.typeText,this.typeText?document.getElementById("type-text-word").type="text":document.getElementById("type-text-word").type="passWord"},cantSeePass:function(){this.typePass=!this.typePass,this.typePass?document.getElementById("type-pass-word").type="text":document.getElementById("type-pass-word").type="passWord"}}}}).call(t,r("tra3"))},rO4k:function(e,t){},v67O:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("dZC9"),o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"staff-detail"}},[r("div",{staticClass:"header"},[r("p",[r("router-link",{attrs:{to:{path:"/organzite/list"}}},[r("span",{staticClass:"black"},[e._v("员工管理")])]),e._v(" "),r("span",{staticClass:"text-green"},[e._v(">")]),e._v(" "),r("span",{staticClass:"text-green"},[e._v("编辑员工信息")])],1)]),e._v(" "),r("div",{staticClass:"basic-info",style:{height:e.height}},[e._m(0),e._v(" "),r("div",{staticClass:"info-bord"},[r("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,rules:e.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"姓名",prop:"pl_name"}},[r("el-input",{attrs:{placeholder:"请输入员工姓名"},on:{input:function(t){e.checkFinishInput("ruleForm2")}},model:{value:e.ruleForm2.pl_name,callback:function(t){e.$set(e.ruleForm2,"pl_name",t)},expression:"ruleForm2.pl_name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"登录手机号",prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入登录手机号"},on:{input:function(t){e.checkFinishInput("ruleForm2")}},model:{value:e.ruleForm2.phone,callback:function(t){e.$set(e.ruleForm2,"phone",t)},expression:"ruleForm2.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[r("el-input",{attrs:{type:"password",id:"type-pass-word","auto-complete":"off",placeholder:"请输入密码"},on:{input:function(t){e.checkFinishInput("ruleForm2")}},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}},[r("i",{staticClass:"iconfont ",class:{"icon-yanjing":e.typePass,"icon-yanjing1":!e.typePass},attrs:{slot:"suffix"},on:{click:e.cantSeePass},slot:"suffix"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"确认登录密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",id:"type-text-word","auto-complete":"off",placeholder:"请确认登录密码"},on:{input:function(t){e.checkFinishInput("ruleForm2")}},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}},[r("i",{staticClass:"iconfont",class:{"icon-yanjing":e.typeText,"icon-yanjing1":!e.typeText},attrs:{slot:"suffix"},on:{click:e.canSeePass},slot:"suffix"})])],1),e._v(" "),r("el-form-item",{staticClass:"selct-box",attrs:{label:"职位",prop:"position_name"}},[r("el-select",{attrs:{placeholder:"请选择职位"},on:{change:function(t){e.checkPosition("ruleForm2")}},model:{value:e.ruleForm2.position_name,callback:function(t){e.$set(e.ruleForm2,"position_name",t)},expression:"ruleForm2.position_name"}},e._l(e.positionArr,function(e){return r("el-option",{key:e.pl_position_id,attrs:{label:e.label,value:e.pl_position_id}})})),e._v(" "),r("div",{staticClass:"add-new-position",on:{click:e.addNewPositionMethods}},[e._v("新增职位")])],1),e._v(" "),r("el-form-item",{staticClass:"selct-box",attrs:{label:"部门",prop:"department_name"}},[r("el-select",{attrs:{placeholder:"请选择职位"},on:{change:function(t){e.checkDepart("ruleForm2")}},model:{value:e.ruleForm2.department_name,callback:function(t){e.$set(e.ruleForm2,"department_name",t)},expression:"ruleForm2.department_name"}},e._l(e.departmentArr,function(e){return r("el-option",{key:e.pl_department_id,attrs:{label:e.label,value:e.pl_department_id}})})),e._v(" "),r("div",{staticClass:"add-new-position",on:{click:e.addNewPosition}},[e._v("新增部门")])],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入备注，字数不超过150字"},model:{value:e.ruleForm2.remark,callback:function(t){e.$set(e.ruleForm2,"remark",t)},expression:"ruleForm2.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"btn-group"},[e.isCantClick?r("div",{staticClass:"save-btn cant-click"},[e._v("保存")]):r("div",{staticClass:"save-btn",on:{click:e.saveInfo}},[e._v("保存")]),e._v(" "),r("div",{staticClass:"cancel-btn",on:{click:e.cancelInfo}},[e._v("取消")])])],1)]),e._v(" "),e.isDetailDialog?r("detail-dialog",{attrs:{departmentName:e.departmentName,suOrfa:e.suOrfa,tipsText:e.tipsText,repeat:e.repeat},on:{confirmAdd:e.confirmAdd,handleClose:e.handleClose}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title-bar"},[t("span",{staticClass:"text-strong"},[this._v("员工信息")])])}]},a=function(e){r("5+Cj"),r("rO4k")},s=r("8AGX")(i.a,o,!1,a,"data-v-2a5f23c1",null);t.default=s.exports}});