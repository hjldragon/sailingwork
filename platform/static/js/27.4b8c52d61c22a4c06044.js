webpackJsonp([27],{"+ByY":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAYAAAC8/X7cAAAAAXNSR0IArs4c6QAAA/hJREFUWAnVmE1IVFEUx50PdWbUVgkygTWOOgN9oEHtIloJlX1BlLUIahFCuIyghRLVKkiiEBdCi8BolYiCQVREUBFURKAzTeZkQ4vaqCjOZ7/zmPe4Mz7H9yrTLlzuuef+zzn/+33fc5SVSBMTE5toPkw+kMvlgpRSryavZprFecLhcMQoR8hDoVDo23IBHWYNk5OTdYuLiz20nSO7zTD/UJcm1kBlZWVPIBD4Xhx3SQcY9f2ABhnxDcXgtawzIzPE72A2RlUeTrUyPj7eSX14vZEXjnlOw3mOBm1jBvIjL+SNTtHrLMgn6B4hT1GWUzaiO4Tcanj5+4IsG9Olm+fUrs+E1gFZ88lkcgJSxrIB+MLtdncGg8EPZvyi0WhbNpvtwyZg1m5FR4zr2Muh0KXgkz6fL7CwsPCctgZFb4jYzVRUVIRkT2ijLRu2iPxgc3PzvuXIi6empqaxqqqqXYhvDM/2hTMM0g0IyYmjJeQHkK9djryAhGv+kClzyFGJ4gt6bcpw8BryeyiTAl4pxeNxPwHf4aN2JaxZO3HkwJDYx5FlyW4ld6M7aYZXdGnwW8RQznljvaHsIlsiL87q6+sTDEIP4h2pW03hcNjYfyY2Hegkl7FpcybtotK4ywyM0Fs5Ossg/pbNsVNkOymRSPhmZ2d/4Mdrx07FEruF+lV8HFT1pWRsRp0YNOog5Me6bKf0+/3z2L60Y1OM9Xg8cXxsLtaXqoMPyjT4dZDT6ZzWZbslozGNQ0tmJZbPDjMHJZaRXzpgJAj89hKwY1tMiM7fq6mpOT8/P1+dTqc/Q6jKILWCIMdoQsGEFdmuGLJrIHjI51wuV9/c3Fw394qshis2/CScOPikGMirs1ypWxIZUbnMtlsCF4KSxD/N0v1J3C460Msh0ovuZiHMvAYuJjMgT1Yt4WQjN6y8h2wlHF22ZQAYm4+MfBs5yivgKbE9qPdGIpG73EOXkI+A+bqC3xHpwBBZ3h5aYhSuxWIxy6NJh9sxPJs3t1JEIHYMkq2QDqdSqWcY1emG6DroxCtu6BiYBmbnFPiM3q6Uaa/X+9DJlMnHwoDSUI3TMe6H3YrOVARzNJPJyE1a6lIqsIWMG/w2bCPylqLRVwCgQnsLft+DuY/cTHYVY6gPyCWqBTZ7zAFIkfuY4lu8e2KqA0a9leAX0Z3AuWXyqo8/kRkE4zFnBKe3chsXPKf1IBhIB6bIssEbIC2flmuS4CLvpcLntM6E06QTwG0Iyt5Yd0nIw+0CF6EsPS0ZM6Ar8jPxf35SSifkS0c+FhD7ycbpJG1rlIRDv3ASbsUclsyACmA2ZK3rv1Xk0Sc35Wr/VpkjhvxWkQtW7qiSv1V+Ac/6vYWE7UtAAAAAAElFTkSuQmCC"},"9Fz2":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("il4F"),a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"edit-position"}},[s("div",{staticClass:"header"},[s("p",["/organzite/list"!==t.$route.query.pathName?s("span",[t.$route.query.platformer_id?s("span",[s("router-link",{attrs:{to:{path:"/organzite/list",query:{activeIndex:"1"}}}},[s("span",{staticClass:"black"},[t._v("员工管理")])]),t._v(" "),s("span",{staticClass:"black"},[t._v(">")]),t._v(" "),s("span",{staticClass:"black",on:{click:t.goEditStaffInfo}},[t._v("编辑员工信息")])],1):s("span",[s("span",{staticClass:"black",on:{click:t.goEditStaffInfo}},[t._v("创建账号")])])]):s("router-link",{attrs:{to:{path:"/organzite/list",query:{activeIndex:"2"}}}},[s("span",{staticClass:"black"},[t._v("职级管理")])]),t._v(" "),s("span",{staticClass:"text-green"},[t._v(">")]),t._v(" "),t.$route.query.positionId?s("span",{staticClass:"text-green"},[t._v("编辑职位信息")]):s("span",{staticClass:"text-green"},[t._v("新增职位信息")])],1)]),t._v(" "),s("div",{staticClass:"basic-info",style:{height:t.height}},[t._m(0),t._v(" "),s("div",{staticClass:"basic-info",style:{height:t.height}},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px",size:"mini",rules:t.rules}},[s("el-form-item",{attrs:{label:"职位名称",prop:"name"}},[s("el-input",{staticClass:"one-four",on:{input:function(i){t.cheInput("form")}},model:{value:t.form.name,callback:function(i){t.$set(t.form,"name",i)},expression:"form.name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"权限",prop:"right"}},[s("span",[t._v("是否启用")]),t._v(" "),t.isOffRight?s("img",{staticClass:"switch-icon",attrs:{src:e("+ByY"),alt:""},on:{click:function(i){t.isOffRight=!1}}}):s("img",{staticClass:"switch-icon",attrs:{src:e("IULM"),alt:""},on:{click:function(i){t.isOffRight=!0}}})]),t._v(" "),s("el-form-item",{attrs:{label:""}},[s("el-checkbox",{staticClass:"not-all",attrs:{disabled:t.isOffRight},on:{change:function(i){t.handleCheckAllChange(t.isCheckAll)}},model:{value:t.isCheckAll,callback:function(i){t.isCheckAll=i},expression:"isCheckAll"}},[t._v("全选")])],1),t._v(" "),s("el-checkbox-group",{staticClass:"no-right",attrs:{disabled:t.isOffRight},on:{change:t.handleCheckedCitiesChange},model:{value:t.form.arrRight,callback:function(i){t.$set(t.form,"arrRight",i)},expression:"form.arrRight"}},[s("el-form-item",{attrs:{label:""}},[s("el-checkbox",{attrs:{label:"首页权限",name:"arrRight"}}),t._v(" "),s("el-checkbox",{attrs:{label:"代理商管理权限",name:"arrRight"}}),t._v(" "),s("el-checkbox",{attrs:{label:"商户管理权限",name:"arrRight"}}),t._v(" "),s("el-checkbox",{attrs:{label:"组织管理权限",name:"arrRight"}}),t._v(" "),s("el-checkbox",{attrs:{label:"消息管理权限",name:"arrRight"}}),t._v(" "),s("el-checkbox",{attrs:{label:"商品管理权限",name:"arrRight"}})],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"btn-group"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.isCantClick,expression:"isCantClick===true"}],staticClass:"save-btn cant-click",on:{click:t.unFinish}},[t._v("保存")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!1===t.isCantClick,expression:"isCantClick===false"}],staticClass:"save-btn",on:{click:t.saveInfo}},[t._v("保存")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.isCantClick&&""===t.positionId,expression:"isCantClick===true&&positionId === ''"}],staticClass:"save-btn cant-click",on:{click:t.unFinish}},[t._v("保存并继续添加")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!1===t.isCantClick&&""===t.positionId,expression:"isCantClick===false&&positionId === ''"}],staticClass:"save-btn",on:{click:t.saveAddInfo}},[t._v("保存并继续添加")]),t._v(" "),s("div",{staticClass:"cancel-btn",on:{click:t.cancelInfo}},[t._v("取消")])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title-bar"},[i("span",{staticClass:"text-strong"},[this._v("职位信息")])])}]};var o=function(t){e("H5Ja"),e("F2xy")},n=e("X4nt")(s.a,a,!1,o,"data-v-289408ff",null);i.default=n.exports},F2xy:function(t,i){},H5Ja:function(t,i){},IULM:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAYAAAC8/X7cAAAAAXNSR0IArs4c6QAAA41JREFUWAnVWE9IVEEYn2/cXTPS6FQoRK5rhptBeIuKQvJghHQr6FBEaVEd6taf9SlFBJ26hAchukS3IuvUQbpUUCd9ibprdUg7iEGFortvvr7vLfMa1337r9ytd3gz75tvZn7ffH/ngcjx3JzY3pBKproRxWEU2AQADYi4IceUPx8C+CEQZ0BAAkA8DwQDT6+3TH7xWxiyDVh2dItQixYKcZqAB7LxlItGgqQI5JCQNZYVtb9m7rtKAOtDuAuVeEQnXZfJXMlv0v53kOK41Tr9wsQhzY/YaPgcKnz2r4FnjIyJsTFGE7OngfTJM3ixQiiTeS37ZCrvUIphKTChlEzSXlsJ9iEA7DAxkV8okHBEa8IVgG0ecXGiIicPkJBS9BKgl9kOaMCORFOo7pMK9ulx15ygpoV9Iu2grsNmt/mBto+elvQCfm1stJH8vpgH3kuo6bRa7Xm/WbFo3B7E9o4Z+9tDOuBjzMcHDbhoUbcXOFQml1Of8kUbKWUPomondZ7lRfhh4YoHnZ5LpjAfDAZ35QqRac70+95UpHpuyXktUOxmCkenYCiwTbpxvgKhElDeLhQ8A77UHF+SWHWZ+/zwgTN2yUkqTSrr2xGhqgfF7mi1xUfInqf1PMYuSRcRTShXS+oft1om50raD+CVnsfVATtxvSZktj4O3GPymTyF+gN5+qy5RpH939kYoD5nmWACqpKyy1F4hqzvqN6wVCcGgbV6jWJbMqFaM9Rx0prJuwjtiGLdWzK3nXl5C2AgAC0WHsh5eH7LkNlEvTEq+ijxibhH8OkAgh0AVUtiNPuwFEveBOOfDxY76dZ042aBsFfPI19KSC5ZNcGvBSGvLOPSSb/xUuhKgUUJqeAkyXskF+CGma8Yu+R6m5NCNhCUsn8KCSdkQM0CiqvZeEqlEfg9/WNNfYXO77cj3Urgec3vYg4En0hOJnQMQ3pgRYvijURwHAdHaMPQirG/8EGA+vrGwnfy+UPMDp9yUD0mc/c0xpitHRN08aGnosUc7U+aniRsd6tlaPha67gbYq2pSJ1YdjrpbnKRnH6/eV5mMedJVOlyWgMkQAskDJXTuFHTzDaznPZqf66vyacuMIM5odx9Ou31ucAzRn0XYGyeBjTQ//pKyUKwdECXBSqSBv2ikxa2HC1jcLHwBSbjPsz7r9KACcr8rUKcXPTVUzRa098qbujm6oASLMf5fL9VfgF+GY5z+DF2ywAAAABJRU5ErkJggg=="},il4F:function(t,i,e){"use strict";(function(t){var s=e("ihY9"),a=e("HPzi"),o=e("6nXL"),n=e("aJ9H"),r=e.n(n);i.a={data:function(){return{height:0,form:{name:"",arrRight:[]},platformer_id:"",positionId:"",rules:{name:[{required:!0,validator:function(t,i,e){""===i?e(new Error("请输入职位姓名")):i.length>20?e(new Error("职位名称不能超过20字")):!0===/[\s]+/g.test(i)?e(new Error("部门名称不能包含空格符")):e()},trigger:"input,change"}]},isOffRight:!1,isCheckAll:!1,isSave:!1,isSaveAdd:!1,isCantClick:!0}},created:function(){var i=this;this.height=document.documentElement.clientHeight-271+"px",t(window).resize(function(){i.height=document.documentElement.clientHeight-271+"px"}),this.$route.query.positionId&&this.initData(),this.platformer_id=this.$route.query.platformer_id},methods:{initData:function(){var i=this;this.positionId=this.$route.query.positionId||"";var e={get_pl_position_info:1,pl_position_id:this.positionId};Object(s.c)(e).then(function(e){0===e.ret&&(i.form.name=e.data.position_info.pl_position_name,e.data.permission&&e.data.permission.length>0?(1===e.data.permission[0]?(i.isCheckAll=!0,i.form.arrRight=r.a):(i.isCheckAll=!1,i.form.arrRight=Object(a.b)(e.data.permission)),i.isOffRight=!1):(i.form.arrRight=[],i.isOffRight=!0,t(".no-right").attr("disabled",!0),t(".not-all").attr("disabled",!0)),i.cheInput("form"))})},cheInput:function(t){var i=this;this.$refs[t].validate(function(t){i.isCantClick=!t})},handleCheckAllChange:function(t){this.form.arrRight=t?r.a:[]},handleCheckedCitiesChange:function(t){var i=t.length;this.isCheckAll=i===r.a.length},saveAddInfo:function(){var t=this;if(0!==this.form.arrRight.length||this.isOffRight){var i=Object(a.f)(this.form.arrRight);this.isOffRight&&(i=[]),this.isCheckAll&&(i=[o.x.ALL]);var e={pl_position_save:1,pl_position_name:this.form.name,pl_position_permission:i,pl_position_note:"备注"};""!==this.positionId&&(e.pl_position_id=this.positionId),Object(s.d)(e).then(function(i){0===i.ret?(t.$refs.form.resetFields(),t.form.arrRight=[],t.$slnotify({message:"保存成功,请继续添加"})):-20034===i.ret&&t.$slnotify({message:"该职位已存在"})})}else this.$slnotify({message:"请先勾选权限"});this.isCantClick=!0},goEditStaffInfo:function(){this.$router.push({path:this.$route.query.pathName,query:{positionName:this.form.name,platformer_id:this.platformer_id,activeIndex:this.$route.query.activIndex,choosed_depart_name:this.$route.query.choosed_depart_name,choosed_depart_id:this.$route.query.choosed_depart_id}})},saveInfo:function(){var t=this;if(this.isSave=!0,0!==this.form.arrRight.length||this.isOffRight){var i=Object(a.f)(this.form.arrRight);this.isOffRight&&(i=[]),this.isCheckAll&&(i=[o.x.ALL]);var e={pl_position_save:1,pl_position_name:this.form.name,pl_position_permission:i,pl_position_note:"备注"};""!==this.positionId&&(e.pl_position_id=this.positionId),Object(s.d)(e).then(function(i){0===i.ret?(t.$router.push({path:t.$route.query.pathName,query:{positionName:t.form.name,platformer_id:t.platformer_id,pl_position_id:i.data.pl_position_id,activeIndex:t.$route.query.activIndex,choosed_depart_name:t.$route.query.choosed_depart_name,choosed_depart_id:t.$route.query.choosed_depart_id}}),t.$slnotify({message:"保存成功"})):-20034===i.ret&&t.$slnotify({message:"该职位已存在"})})}else this.$slnotify({message:"请先勾选权限"})},unFinish:function(){this.$slnotify({message:"请输入职位"})},cancelInfo:function(){var t=this.form.name;0!==this.form.arrRight.length||this.isOffRight||(t=""),this.$route.query.platformer_id?this.$router.push({path:this.$route.query.pathName,query:{platformer_id:this.platformer_id,activeIndex:this.$route.query.activIndex,pl_position_id:this.$route.query.position_id,positionName:this.$route.query.position_name,choosed_depart_name:this.$route.query.choosed_depart_name,choosed_depart_id:this.$route.query.choosed_depart_id}}):this.$router.push({path:this.$route.query.pathName,query:{positionName:t,activeIndex:this.$route.query.activIndex,pl_position_id:this.$route.query.position_id,choosed_depart_name:this.$route.query.choosed_depart_name,choosed_depart_id:this.$route.query.choosed_depart_id}})}}}}).call(i,e("tra3"))}});