webpackJsonp([51,69],{"/xQQ":function(t,e,a){var n=a("RLOr");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("12bea46a",n,!0,{})},"5g5b":function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"a",function(){return l});var n=a("6nXL"),i=a("VCXJ"),o=a("a2vD"),s=a("EuEE"),r={initTreeData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e=e.map(function(e){return i.default.set(e,"canEditor",!1),i.default.set(e,"addIcon",!0),i.default.set(e,"editorIcon",!0),i.default.set(e,"deleteIcon",!0),i.default.set(e,"isShowBtn",!1),i.default.set(e,"isActive",!1),i.default.set(e,"breakshow",!1),i.default.set(e,"allShow",!1),i.default.set(e,"isExpand",!0),i.default.set(e,"isFolder",!1),e.hasOwnProperty("employee_list")&&e.employee_list.length>0&&t.initTreeData(e.employee_list),e})},addTitleToTree:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return i.default.set(e,"department_name","部门管理"),i.default.set(e,"employee_list",t),i.default.set(e,"department_id","0"),e},generateKey:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments[1];return e=e.map(function(e,n){return e.key=a+"-"+n.toString(),e.hasOwnProperty("employee_list")&&e.employee_list.length>0&&t.generateKey(e.employee_list,e.key),e})},getKeylength:function(t){if(!s.a.isEmpty(t)){return t.split("-").length}},selectIcon:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e=e.map(function(e){var a=t.getKeylength(e.key);2===a?(e.addIcon=!0,e.editorIcon=!1,e.deleteIcon=!1,e.isExpand=!0,e.isActive=!0):3===a?(e.addIcon=!1,e.editorIcon=!0,e.deleteIcon=!0,e.isExpand=!1,e.isFolder=!0):4===a&&(e.addIcon=!1,e.editorIcon=!1,e.deleteIcon=!1),e.hasOwnProperty("employee_list")&&e.employee_list.length>0&&t.selectIcon(e.employee_list)})},saveDepartName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];return function t(a){a.forEach(function(a){a.hasOwnProperty("department_name")&&"部门管理"!==a.department_name&&e.push(a.department_name),a.hasOwnProperty("employee_list")&&a.employee_list.length>0&&t(a.employee_list)})}(t),e},treeDataById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return function t(a){a.forEach(function(a){a.hasOwnProperty("department_id")?e[a.department_id]=a:a.hasOwnProperty("employee_id")&&(e[a.employee_id]=a),a.hasOwnProperty("employee_list")&&a.employee_list.length>0&&t(a.employee_list)})}(t),e},changeSelecte:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.department_id;for(var n in e)e.hasOwnProperty(n)&&(e[n].isActive=a===n);return e},getDutyArr:function(t){var e=[];return t.forEach(function(t){-1===e.indexOf(t.position_name)&&e.push(t.position_name)}),e},getDutyDepartId:function(t,e){var a;return t.forEach(function(t){void 0!==t.position_name?t.position_name===e&&(a=t.position_id):t.department_name===e&&(a=t.department_id)}),a},search:function(t,e,a,i){var o=[],s=new RegExp(t,"g"),r=new RegExp(e,"g");return i.forEach(function(l){t&&t!==n.B.code[0]||""!==e||""!==a?null!==s.exec(l.position_name)&&""===e&&""===a?o.push(l):null!==s.exec(l.position_name)&&null!==r.exec(l.real_name)&&""===a?o.push(l):null!==s.exec(l.position_name)&&null!==r.exec(l.real_name)&&l.phone.indexOf(a)>-1?o.push(l):null!==s.exec(l.position_name)&&l.phone.indexOf(a)>-1&&""===e?o.push(l):(!t||t===n.B.code[0])&&null!==r.exec(l.real_name)&&l.phone.indexOf(a)>-1?o.push(l):(!t||t===n.B.code[0])&&""===e&&l.phone.indexOf(a)>-1?o.push(l):t&&t!==n.B.code[0]||null===r.exec(l.real_name)||""!==a||o.push(l):o=i}),o},getTotal:function(t){if(void 0!==t&&t.length>0){for(var e=0,a=0;a<t.length;a++)e++;return e}},getPageList:function(t,e,a){if(void 0!==t&&t.length>0){return t.filter(function(t,n){return n<e*a&&n>=e*(a-1)})}},isRight:function(t){return t.forEach(function(t){var e,a=[],i=[];for(var o in n.O)void 0!==t.position_permission?(e=t.position_permission&n.O[o],0!==e&&(i.push(n.O.code[e]),a.push(e)),t.arrId=a,t.arrRight=i,t.arrId[0]===n.O.ALLBACKSTAGE&&t.arrId[1]===n.O.ALLWEB?t.arrRight=["全部"]:t.arrId[0]===n.O.ALLBACKSTAGE&&t.arrId[1]===n.O.ALLWEB&&t.arrId.length>2?t.arrRight=["全部"]:t.arrId[0]===n.O.ALLWEB&&t.arrId.length>1&&(t.arrRight=["点餐收银全部权限"]),t.arrRight.forEach(function(t){t===n.O.code[n.O.ALLWEB]&&(t="")})):(t.arrId=0,t.arrRight=n.B.code[0])}),t},judgeStaffList:function(t){var e=[];for(var a in n.O)t.forEach(function(t){t===n.O.code[n.O[a]]&&e.push(n.O[a])});return e}},l={getTotal:function(t){if(void 0!==t&&t.length>0){for(var e=0,a=0;a<t.length;a++)e++;return e}},getPageList:function(t,e,a){var n=[];return void 0!==t&&t.length>0?n=t.filter(function(t,n){return n<e*a&&n>=e*(a-1)}):n},canSeeLogin:function(t){var e=o.a.getShopinfo();return e.shopinfo&&e.shopinfo.length>0&&e.shopinfo.forEach(function(e){t=e.employee_is_admin===n.H.YES}),t}}},"9cF1":function(t,e,a){"use strict";function n(t){a("/xQQ"),a("NHl8")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("dSP4"),o=a("xsCE"),s=a("qs7J"),r=n,l=Object(s.a)(i.a,o.a,o.b,!1,r,"data-v-d7c4055a",null);e.default=l.exports},H0dO:function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,"#editStaffInfor .el-button{width:80px;height:30px;border:1px solid #4877e7;color:#4877e7;border-radius:5px;font-size:12px;cursor:pointer}#editStaffInfor .el-button.disabledBtn{width:160px;height:40px;font-size:14px;border:1px solid #d8d8d8;cursor:pointer;color:#fff;margin:0 20px 0 0;background:#d8d8d8}#editStaffInfor .el-input{height:34px}#editStaffInfor .el-button.saveBtn{width:160px;height:40px;font-size:14px;color:#fff;margin:0 20px 0 30%;border:none;background:#4877e7}#editStaffInfor .cancelBtn.el-button{width:160px;height:40px;font-size:14px;color:#4877e7;margin:0 20px 0 0}#editStaffInfor .el-form-item__label{opacity:.57;font-size:14px;color:#000}#editStaffInfor .el-form-item__content{font-size:14px;color:#333}",""])},IdKw:function(t,e,a){var n=a("Tcw5");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("0875f9ea",n,!0,{})},IoGg:function(t,e,a){"use strict";var n=a("Yp/U");e.a={props:["isShowDialog","allDepartName"],data:function(){return{dialongInputValue:"",isDialogVisible:!1,departNameArr:[]}},watch:{isShowDialog:function(t){!0===t&&(this.isDialogVisible=!0)}},created:function(){this.departNameArr=this.allDepartName},methods:{addConfirm:function(){var t=this;if(""===this.dialongInputValue)return void this.$slnotify({message:"部门名称不能为空"});if(-1!==this.departNameArr.indexOf(this.dialongInputValue))return void this.$slnotify({message:"不能添加已经存在的部门名称"});var e={department_save:1,department_name:this.dialongInputValue};n.a.modifyDepartInfo(e,function(e){if(0===e.ret){var a={};a.name=t.dialongInputValue,a.id=e.data.department_id,t.$emit("on-close",a),t.dialongInputValue="",t.isDialogVisible=!1}else-20047===e.ret&&t.$slnotify({message:"不能添加已经存在的部门名称"})})},addCancel:function(){this.dialongInputValue="",this.handleClose()},handleClose:function(){this.dialongInputValue="",this.$emit("on-close"),this.isDialogVisible=!1}}}},NHl8:function(t,e,a){var n=a("H0dO");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("0c56a53e",n,!0,{})},RLOr:function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,'.staffCard[data-v-d7c4055a]{background:#fff;-webkit-box-shadow:0 2px 4px 0 #becaeb;box-shadow:0 2px 4px 0 #becaeb}.from_card[data-v-d7c4055a]{width:600px;padding:48px 0 40px;margin-left:133px}.page_title[data-v-d7c4055a]{width:100%;height:16px;font-size:12px;color:#333;margin-bottom:14px}.form_title[data-v-d7c4055a]{width:100%;height:40px;font-size:14px;color:#666;line-height:40px;background-color:#f6f8fc;padding-left:14px}.img[data-v-d7c4055a]{width:200px;height:120px;margin-right:10px}.checkItem[data-v-d7c4055a]{display:inline-block;margin-right:40px}.checkItem .itemNum[data-v-d7c4055a]{display:block;margin-left:10px}.pinpo[data-v-d7c4055a]{font-size:12px;color:#9b9b9b}.add-btn[data-v-d7c4055a]{margin-left:14px;line-height:8px;padding-left:15px;cursor:pointer}.blue[data-v-d7c4055a]{font-size:12px;color:#4877e7;cursor:pointer}.btnGroup[data-v-d7c4055a]{padding-left:14.5%;padding-bottom:40px}.switch-label[data-v-d7c4055a]{position:relative;cursor:pointer}.switch-label[data-v-d7c4055a]:before{content:"\\5F00";left:7px}.switch-label[data-v-d7c4055a]:after,.switch-label[data-v-d7c4055a]:before{position:absolute;z-index:10;color:#fff;bottom:3px;font-size:12px;cursor:pointer}.switch-label[data-v-d7c4055a]:after{content:"\\5173";right:7px}.mui-switch[data-v-d7c4055a]{width:48px;height:24px;position:relative;border:1px solid #dfdfdf;background-color:#d8d8d8;-webkit-box-shadow:#dfdfdf 0 0 0 0 inset;box-shadow:inset 0 0 0 0 #dfdfdf;border-radius:12px;border-top-left-radius:12px;border-top-right-radius:12px;border-bottom-left-radius:12px;border-bottom-right-radius:12px;background-clip:content-box;display:inline-block;-webkit-appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer}.mui-switch[data-v-d7c4055a]:before{content:"";width:24px;height:24px;position:absolute;top:-1px;left:0;border-radius:12px;border-top-left-radius:12px;border-top-right-radius:12px;border-bottom-left-radius:12px;border-bottom-right-radius:12px;background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);box-shadow:0 1px 3px rgba(0,0,0,.4)}.mui-switch[data-v-d7c4055a]:checked{border-color:#7ed321;-webkit-box-shadow:#7ed321 0 0 0 16px inset;box-shadow:inset 0 0 0 16px #7ed321;background-color:#7ed321;cursor:pointer}.mui-switch[data-v-d7c4055a]:checked:before{left:24px}.mui-switch.mui-switch-animbg[data-v-d7c4055a]{-webkit-transition:background-color .4s ease;transition:background-color .4s ease}.mui-switch.mui-switch-animbg[data-v-d7c4055a]:before{-webkit-transition:left .3s;transition:left .3s}.mui-switch.mui-switch-animbg[data-v-d7c4055a]:checked{-webkit-box-shadow:#dfdfdf 0 0 0 0 inset;box-shadow:inset 0 0 0 0 #dfdfdf;background-color:#7ed321;-webkit-transition:border-color .4s,background-color .4s ease;transition:border-color .4s,background-color .4s ease}.mui-switch.mui-switch-animbg[data-v-d7c4055a]:checked:before{-webkit-transition:left .3s;transition:left .3s}.mui-switch.mui-switch-anim[data-v-d7c4055a]{-webkit-transition:border .4s cubic-bezier(0,0,0,1),-webkit-box-shadow .4s cubic-bezier(0,0,0,1);transition:border .4s cubic-bezier(0,0,0,1),-webkit-box-shadow .4s cubic-bezier(0,0,0,1);transition:border .4s cubic-bezier(0,0,0,1),box-shadow .4s cubic-bezier(0,0,0,1);transition:border .4s cubic-bezier(0,0,0,1),box-shadow .4s cubic-bezier(0,0,0,1),-webkit-box-shadow .4s cubic-bezier(0,0,0,1)}.mui-switch.mui-switch-anim[data-v-d7c4055a]:before{-webkit-transition:left .3s;transition:left .3s}.mui-switch.mui-switch-anim[data-v-d7c4055a]:checked{-webkit-box-shadow:#7ed321 0 0 0 16px inset;box-shadow:inset 0 0 0 16px #7ed321;background-color:#7ed321;-webkit-transition:border .4s ease,background-color 1.2s ease,-webkit-box-shadow .4s ease;transition:border .4s ease,background-color 1.2s ease,-webkit-box-shadow .4s ease;transition:border .4s ease,box-shadow .4s ease,background-color 1.2s ease;transition:border .4s ease,box-shadow .4s ease,background-color 1.2s ease,-webkit-box-shadow .4s ease}.mui-switch.mui-switch-anim[data-v-d7c4055a]:checked:before{-webkit-transition:left .3s;transition:left .3s}',""])},Tcw5:function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,"#addNewDepartment .el-input{width:320px;margin-bottom:30px}#addNewDepartment .el-input__inner{border-radius:0;height:34px}#addNewDepartment .el-input__inner:focus,#addNewDepartment .el-input__inner:hover{border:1px solid #bfcbd9}#addNewDepartment .el-button{width:160px;height:40px;border:1px solid #5a8cff;color:#5a8cff;border-radius:5px;font-size:14px;cursor:pointer}#addNewDepartment .el-dialog{top:20%}#addNewDepartment .category-dialog .el-dialog__header{width:540px;padding:0;margin-bottom:60px}#addNewDepartment .el-dialog__body{padding:0;height:200px}",""])},"Y+g4":function(t,e,a){var n=a("lnW0");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("d0303ad8",n,!0,{})},"Yp/U":function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("EuEE"),i={getDepartList:function(t,e){n.a.DataEncSubmit("department_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},modifyDepartInfo:function(t,e){n.a.DataEncSubmit("department_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},getStaffList:function(t,e){n.a.DataEncSubmit("employee_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},getDepartStaffList:function(t,e){n.a.DataEncSubmit("department_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},modifyStaffInfo:function(t,e){n.a.DataEncSubmit("user_info.php",t,function(t){e&&"function"==typeof e&&e(t)})},getPhoneTest:function(t,e){n.a.DataEncSubmit("login_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},getUserInfor:function(t,e){n.a.DataEncSubmit("employee_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},editDutyRight:function(t,e){n.a.DataEncSubmit("position_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},getDutyList:function(t,e){n.a.DataEncSubmit("position_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},getShopData:function(t,e){n.a.DataEncSubmit("shopinfo_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},getLoginInfo:function(t,e){n.a.DataEncSubmit("shop_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},saveLginInfo:function(t,e){n.a.DataEncSubmit("shop_save.php",t,function(t){e&&"function"==typeof e&&e(t)})}}},"a3/h":function(t,e,a){"use strict";function n(t){a("Y+g4"),a("IdKw")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("IoGg"),o=a("weV1"),s=a("qs7J"),r=n,l=Object(s.a)(i.a,o.a,o.b,!1,r,"data-v-70ea5126",null);e.default=l.exports},dSP4:function(t,e,a){"use strict";(function(t){var n=a("Yp/U"),i=a("5g5b"),o=a("a2vD"),s=a("6nXL"),r=a("a3/h"),l=a("EuEE");e.a={data:function(){return{imgbase_url:"./php",isShowLoginNum:!1,dutyForm:[],departForm:[],allDepartName:[],allDutyName:[],form1:{},form2:{},isBind:0,identyImg:[],identyImgOne:"",isDisabled:!1,shopId:"",addedDuty:"",form:{},isAddNewDepartment:!1,rules:{position_name:[{required:!0,message:"请选择职位",trigger:"change"}],department_name:[{required:!0,message:"请选择部门",trigger:"change"}]},usedObj:{},loginAutho:0,loginArr:[],loginObj:{},loginData:[{name:"手机App",check:!1,totalNum:2,nowUse:1},{name:"PC",check:!1,totalNum:2,nowUse:1},{name:"收银机",check:!1,totalNum:2,nowUse:1},{name:"平板Pad",check:!1,totalNum:2,nowUse:1}]}},components:{newDepartment:r.default},created:function(){this.shopId=o.a.getShopid(),this.initData(),this.getAllDepartName(),this.getAllDutyName(),this.isShowLoginNum=i.a.canSeeLogin(this.isShowLoginNum)},watch:{showBanner:function(){var t=this;this.$nextTick(function(){var e=t.$refs.staform,a=e.style.height;l.a.AdjustHeight(e);var n=e.style.height;e.style.height=a,setTimeout(function(){e.style.transition="height 0.28s ease-out"},50),setTimeout(function(){e.style.height=n},50)})}},computed:{showBanner:function(){return this.$store.state.layout.showBanner},staffSex:function(){return s.c.toString(this.form2.sex)}},mounted:function(){this.adjustHeight()},methods:{adjustHeight:function(){var t=this;this.$nextTick(function(){var e=t.$refs.staform;l.a.AdjustHeight(e)})},initData:function(){var t=this;this.employee_id=this.$route.query.employeeId;var e={get_employee_info:1,shop_id:this.shopId,employee_id:this.employee_id};n.a.getStaffList(e,function(e){t.loginArr=e.data.employee_info.authorize,t.form=e.data,e.data.userinfo.health_certificate&&e.data.userinfo.health_certificate.constructor===Array?t.identyImg=e.data.userinfo.health_certificate:e.data.userinfo.health_certificate&&"string"==typeof e.data.userinfo.health_certificate&&(t.identyImg[0]=e.data.userinfo.health_certificate),t.form1=e.data.employee_info,t.form2=e.data.userinfo,t.getLoginData()})},saveEditStaff:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.loginObj.used_pc_num||e.loginObj.used_pad_num||e.loginObj.used_cashier_num||e.loginObj.used_app_num||(e.loginAutho=0),e.loginObj.save_authorize=1,n.a.saveLginInfo(e.loginObj,e.saveStaffEdit))})},saveStaffEdit:function(){var t=i.b.getDutyDepartId(this.dutyForm,this.form1.position_name),e=i.b.getDutyDepartId(this.departForm,this.form1.department_name),a={save_employee_info:1,employee_id:this.form1.employee_id,department_id:e,position_id:t,authorize:this.loginAutho};n.a.getUserInfor(a,this.goBack)},addNewDepartment:function(){this.isAddNewDepartment=!0},addDuty:function(){sessionStorage.setItem("lastDuty",this.allDutyName[this.allDutyName.length-1]),this.$router.push({path:"/staff/editDuty",query:{all:this.allDutyName,pathName:"/staff/edit",employeeId:this.$route.query.employeeId}})},getAllDepartName:function(){var t=this,e={get_department_list:1};n.a.getDepartList(e,function(e){t.departForm=e.data.department_list,e.data.department_list.forEach(function(e){-1===t.allDepartName.indexOf(e.department_name)&&t.allDepartName.push(e.department_name)})})},getAllDutyName:function(){var t=this,e={get_position_list:1};n.a.getDutyList(e,function(e){t.dutyForm=e.data.position_list,e.data.position_list.forEach(function(e){-1===t.allDutyName.indexOf(e.position_name)&&t.allDutyName.push(e.position_name)}),t.addedDuty=t.allDutyName[t.allDutyName.length-1];var a=sessionStorage.getItem("lastDuty");null!==a&&a!==t.addedDuty&&(t.form1.position_name=t.addedDuty)})},changeIsDisable:function(t){this.isCanClick(t)},isCanClick:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.isDisabled=!1)})},getLoginData:function(){var e=this,a={get_shop_authorize:1};n.a.getLoginInfo(a,function(a){0===a.ret&&(e.loginData[1].totalNum=null!==a.data.info.pc_num?a.data.info.pc_num:"--",e.loginData[1].nowUse=null!==a.data.info.used_pc_num?a.data.info.used_pc_num:"--",e.loginData[3].totalNum=null!==a.data.info.pad_num?a.data.info.pad_num:"--",e.loginData[3].nowUse=null!==a.data.info.used_pad_num?a.data.info.used_pad_num:"--",e.loginData[2].totalNum=null!==a.data.info.cashier_num?a.data.info.cashier_num:"--",e.loginData[2].nowUse=null!==a.data.info.used_cashier_num?a.data.info.used_cashier_num:"--",e.loginData[0].totalNum=null!==a.data.info.app_num?a.data.info.app_num:"--",e.loginData[0].nowUse=null!==a.data.info.used_app_num?a.data.info.used_app_num:"--",e.usedObj.used_pc_num=a.data.info.used_pc_num||"",e.usedObj.used_pad_num=a.data.info.used_pad_num||"",e.usedObj.used_cashier_num=a.data.info.used_cashier_num||"",e.usedObj.used_app_num=a.data.info.used_app_num||"",e.loginObj.used_pc_num=a.data.info.used_pc_num||"",e.loginObj.used_pad_num=a.data.info.used_pad_num||"",e.loginObj.used_cashier_num=a.data.info.used_cashier_num||"",e.loginObj.used_app_num=a.data.info.used_app_num||"",e.loginAutho=0,e.loginArr&&e.loginArr.length>0?(-1!==e.loginArr.indexOf(s.l.PC)&&(e.loginData[1].check=!0,t(".chckinput").eq(1).check=!0,e.loginAutho=Number(e.loginAutho+1)),-1!==e.loginArr.indexOf(s.l.PAD)&&(e.loginData[3].check=!0,t(".chckinput").eq(3).check=!0,e.loginAutho=Number(e.loginAutho+2)),-1!==e.loginArr.indexOf(s.l.CASHREGISTER)&&(e.loginData[2].check=!0,t(".chckinput").eq(2).check=!0,e.loginAutho=Number(e.loginAutho+4)),-1!==e.loginArr.indexOf(s.l.APP)&&(e.loginData[0].check=!0,t(".chckinput").eq(0).check=!0,e.loginAutho=Number(e.loginAutho+8))):e.loginAutho=0)})},handelChangeSwitch:function(t,e){isNaN(t.nowUse)||isNaN(t.totalNum)||t.nowUse===t.totalNum?(!1===e.target.checked&&(t.nowUse=Number(t.nowUse-1),t.name===this.loginData[1].name&&(this.loginObj.used_pc_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-1)),t.name===this.loginData[3].name&&(this.loginObj.used_pad_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-2)),t.name===this.loginData[2].name&&(this.loginObj.used_cashier_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-4)),t.name===this.loginData[0].name&&(this.loginObj.used_app_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-8))),e.target.checked=!1,t.check=!1):!1===t.check?(t.check=!0,t.nowUse<t.totalNum?(e.target.checked=!0,t.nowUse=Number(t.nowUse+1),t.name===this.loginData[1].name&&(this.loginObj.used_pc_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho+1)),t.name===this.loginData[3].name&&(this.loginObj.used_pad_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho+2)),t.name===this.loginData[2].name&&(this.loginObj.used_cashier_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho+4)),t.name===this.loginData[0].name&&(this.loginObj.used_app_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho+8))):e.target.checked=!1):(t.check=!1,t.nowUse>0?(e.target.checked=!1,t.nowUse=Number(t.nowUse-1),t.name===this.loginData[1].name&&(this.loginObj.used_pc_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-1)),t.name===this.loginData[3].name&&(this.loginObj.used_pad_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-2)),t.name===this.loginData[2].name&&(this.loginObj.used_cashier_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-4)),t.name===this.loginData[0].name&&(this.loginObj.used_app_num=t.nowUse||0,this.loginAutho=Number(this.loginAutho-8))):t.nowUse=0)},cancelEditStaff:function(t){this.$refs[t].resetFields(),this.goBack()},hideDialog:function(t){t&&(this.form1.department_name=t.name,this.form1.department_id=t.id),this.allDepartName.push(t),this.getAllDepartName(),this.isAddNewDepartment=!1},goBack:function(){this.$router.push("/staffmenu/staff")}}}}).call(e,a("L7Pj"))},lnW0:function(t,e,a){e=t.exports=a("I71c")(!1),e.push([t.i,"#addNewDepartment .dialog-title[data-v-70ea5126]{width:540px;height:40px;font-size:16px;color:#fff;background-color:#5a8cff;text-align:center;line-height:40px}#addNewDepartment .dialog-content[data-v-70ea5126]{width:540px;height:264px}#addNewDepartment .category .content-left[data-v-70ea5126]{width:80px;height:34px;line-height:34px;margin-left:60px}#addNewDepartment .category .content-right[data-v-70ea5126]{width:320px;height:34px}#addNewDepartment .button-group[data-v-70ea5126]{text-align:center;margin-top:60px}#addNewDepartment .button-group div[data-v-70ea5126]{width:160px;height:40px;border-radius:4px;line-height:40px;text-align:center;border:1px solid #5a8cff;color:#5a8cff;cursor:pointer;display:inline-block}#addNewDepartment .button-group .ok-btn[data-v-70ea5126]{background-color:#5a8cff;color:#fff;cursor:pointer;margin-right:60px}",""])},weV1:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"addNewDepartment"}},[a("el-dialog",{staticClass:"category-dialog",attrs:{width:"540px",visible:t.isDialogVisible,"show-close":!1}},[a("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[t._v("添加部门")]),t._v(" "),a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"category clearfix"},[a("div",{staticClass:"content-left left"},[a("span",[t._v("分类名称")])]),t._v(" "),a("div",{staticClass:"content-right left"},[a("el-input",{staticClass:"left",attrs:{placeholder:"请输入内容"},model:{value:t.dialongInputValue,callback:function(e){t.dialongInputValue=e},expression:"dialongInputValue"}})],1)]),t._v(" "),a("div",{staticClass:"button-group clearfix"},[a("div",{staticClass:"ok-btn",on:{click:t.addConfirm}},[t._v("保存")]),t._v(" "),a("div",{staticClass:"cancel-btn",on:{click:t.addCancel}},[t._v("取消")])])])])],1)},i=[]},xsCE:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"editStaffInfor"}},[a("div",{staticClass:"page_title"},[a("router-link",{attrs:{to:{path:"/staffmenu/staff",query:{activeIndex:"1"}}}},[a("span",[t._v("员工管理")])]),t._v(" "),a("span",{staticClass:"blue"},[t._v(">")]),t._v(" "),a("span",{staticClass:"blue"},[t._v("编辑员工信息")])],1),t._v(" "),a("div",{ref:"staform",staticClass:"staffCard"},[a("div",{staticClass:"form_title"},[t._v("编辑员工信息")]),t._v(" "),a("div",{staticClass:"from_card"},[a("el-form",{ref:"form",attrs:{model:t.form1,"label-width":"100px",rules:t.rules}},[a("el-form-item",{attrs:{label:"工号"}},[a("span",[t._v(t._s(t.form1.employee_id))])]),t._v(" "),a("el-form-item",{attrs:{label:"店铺名称"}},[a("span",[t._v(t._s(t.form.shop_name))])]),t._v(" "),a("el-form-item",{attrs:{label:"职位",prop:"position_name"}},[a("el-select",{attrs:{placeholder:"职位"},on:{change:function(e){t.changeIsDisable("form")}},model:{value:t.form1.position_name,callback:function(e){t.$set(t.form1,"position_name",e)},expression:"form1.position_name"}},t._l(t.allDutyName,function(t){return a("el-option",{key:t,attrs:{label:t.allDutyName,value:t}})})),t._v(" "),a("el-button",{staticClass:"add-btn",on:{click:t.addDuty}},[t._v("新增职位")])],1),t._v(" "),a("el-form-item",{attrs:{label:"部门",prop:"department_name"},on:{change:function(e){t.changeIsDisable("form")}}},[a("el-select",{attrs:{placeholder:"部门"},model:{value:t.form1.department_name,callback:function(e){t.$set(t.form1,"department_name",e)},expression:"form1.department_name"}},t._l(t.allDepartName,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),a("el-button",{staticClass:"add-btn",on:{click:t.addNewDepartment}},[t._v("新增部门")])],1),t._v(" "),a("el-form-item",{attrs:{label:"手机号"}},[a("span",[t._v(t._s(t.form2.phone))])]),t._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("span",[t._v(t._s(t.form2.real_name))])]),t._v(" "),a("el-form-item",{attrs:{label:"身份证"}},[t.form2.identity?a("span",[t._v(t._s(t.form2.identity))]):a("span",[t._v("未填写")])]),t._v(" "),a("el-form-item",{attrs:{label:"性别"}},[t.form2.sex?a("span",[t._v(t._s(t.staffSex))]):a("span",[t._v("保密")])]),t._v(" "),a("el-form-item",{attrs:{label:"健康证扫描件"}},[t._l(t.identyImg,function(e){return t.identyImg&&null!==t.identyImg&&t.identyImg.length>0?a("img",{staticClass:"img",attrs:{src:t.imgbase_url+"/img_get.php?img=1&height=100&width=100&imgname="+e}}):t._e()}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0===t.identyImg.length,expression:"identyImg.length===0"}]},[t._v("未上传")])],2),t._v(" "),a("el-form-item",{attrs:{label:"绑定微信"}},[t.form2.is_weixin==t.isBind?a("span",[t._v("绑定")]):a("span",[t._v("未绑定")])]),t._v(" "),t.isShowLoginNum?a("el-form-item",{attrs:{label:"授权登录数"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.loginData}},[a("el-table-column",{attrs:{align:"center",prop:"name",label:"登录端名称",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"是否授权",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("label",{staticClass:"switch-label"},[a("input",{staticClass:"mui-switch mui-switch-animbg chckinput",attrs:{type:"checkbox"},domProps:{checked:e.row.check},on:{change:function(a){t.handelChangeSwitch(e.row,a)}}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"nowUse",label:"已授权数"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"totalNum",label:"可授权总数"}})],1)],1):t._e()],1)],1),t._v(" "),a("div",{staticClass:"btnGroup"},[0==t.isDisabled?a("el-button",{staticClass:"saveBtn",on:{click:function(e){t.saveEditStaff("form")}}},[t._v("保存")]):t._e(),t._v(" "),1==t.isDisabled?a("el-button",{staticClass:"disabledBtn"},[t._v("保存")]):t._e(),t._v(" "),a("el-button",{staticClass:"cancelBtn",on:{click:function(e){t.cancelEditStaff("form")}}},[t._v("取消")])],1)]),t._v(" "),a("new-department",{attrs:{isShowDialog:t.isAddNewDepartment,allDepartName:t.allDepartName},on:{"on-close":t.hideDialog}})],1)},i=[]}});