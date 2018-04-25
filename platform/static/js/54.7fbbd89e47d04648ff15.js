webpackJsonp([54],{"/mGf":function(o,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=s("njv5"),r={render:function(){var o=this,i=o.$createElement,s=o._self._c||i;return s("div",{attrs:{id:"shop-basic-info"}},[s("el-form",{ref:"basicInfoForm",staticClass:"demo-ruleForm",style:{height:o.height},attrs:{"label-width":"100px",model:o.basicInfroForm,rules:o.rules}},[s("el-form-item",{attrs:{label:"店铺名称",prop:"shopName"}},[s("el-input",{attrs:{placeholder:"请输入店铺名称"},on:{input:function(i){o.checkFinishInput("basicInfoForm")}},model:{value:o.basicInfroForm.shopName,callback:function(i){o.$set(o.basicInfroForm,"shopName",i)},expression:"basicInfroForm.shopName"}})],1),o._v(" "),s("el-form-item",{attrs:{label:"店铺Logo",prop:"imgSrc"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:o.isShowBigImg,expression:"isShowBigImg"}],staticClass:"logoImg float-left"},[o.isImg?s("div",{staticClass:"img left"},[s("div",{staticClass:"mask"}),o._v(" "),s("img",{attrs:{src:o.imgbase_url+"/img_get.php?img=1&height=100&width=100&imgname="+o.basicInfroForm.imgSrc,alt:""}}),o._v(" "),s("i",{staticClass:"el-icon-zoom-in",on:{click:o.clickImg}})]):o._e()]),o._v(" "),o.showImg?s("code-img",{attrs:{imgSrc:o.basicInfroForm.imgSrc},on:{clickit:o.viewImg}}):o._e(),o._v(" "),s("img-upload",{staticClass:"float-left",on:{"send-image":o.getPhoto,change:function(i){o.checkFinishInput("basicInfoForm")}}}),o._v(" "),s("div",{staticClass:"text-warp float-left"},[s("p",[o._v("一个月内只能更换一次,文件类型必须为JPG、JPEG、PNG,文件大小不超过1M")])])],1),o._v(" "),s("el-form-item",{attrs:{label:"店铺电话",prop:"shopTel"}},[s("el-input",{attrs:{placeholder:"请输入店铺电话"},on:{input:function(i){o.checkFinishInput("basicInfoForm")}},model:{value:o.basicInfroForm.shopTel,callback:function(i){o.$set(o.basicInfroForm,"shopTel",i)},expression:"basicInfroForm.shopTel"}})],1),o._v(" "),s("el-form-item",{attrs:{label:"店铺面积",prop:"shopArea"}},[s("el-input",{attrs:{placeholder:"请输入店铺面积"},on:{input:function(i){o.checkFinishInput("basicInfoForm")}},model:{value:o.basicInfroForm.shopArea,callback:function(i){o.$set(o.basicInfroForm,"shopArea",i)},expression:"basicInfroForm.shopArea"}}),o._v(" "),s("span",{staticClass:"black"},[o._v("m²")])],1),o._v(" "),s("el-form-item",{class:{"is-error":o.isSelectError},attrs:{label:"店铺地址"}},[s("city-select",{staticClass:"city-select",attrs:{isSelectError:o.isSelectError,cityinfo:o.cityinfo},on:{changeProvinces:o.changeProvinces}}),o._v(" "),s("span",{staticClass:"map-icon",on:{click:o.showMapView}}),o._v(" "),s("div",[s("el-input",{attrs:{placeholder:"街道楼盘名称房号"},on:{input:o.InputFloorNo,change:function(i){o.checkFinishInput("basicInfoForm")}},model:{value:o.basicInfroForm.floorNo,callback:function(i){o.$set(o.basicInfroForm,"floorNo",i)},expression:"basicInfroForm.floorNo"}})],1),o._v(" "),o.isSelectError?s("p",[o._v("请输入街道楼盘名称房号")]):o._e()],1),o._v(" "),s("el-form-item",{staticClass:"select-must",attrs:{label:"营业模式"}},[s("span",{staticClass:"simple"},[o._v(o._s(o.basicInfroForm.suportType))])])],1),o._v(" "),s("keep-alive",[o.isShowMap?s("map-component",{attrs:{province:o.cityinfo.province,city:o.cityinfo.city},on:{"on-close":o.closeMap,"get-address":o.getFormAddress}}):o._e()],1)],1)},staticRenderFns:[]},e=function(o){s("ia6U"),s("4tjV")},n=s("8AGX")(t.a,r,!1,e,"data-v-169c26fa",null);i.default=n.exports},"4tjV":function(o,i){},ia6U:function(o,i){},njv5:function(o,i,s){"use strict";(function(o){var t=s("6j3y"),r=s("b5mr"),e=s("9aGi"),n=s("Ta7z"),a=s("USo7"),c=s("swMD");i.a={data:function(){return{height:0,cityinfo:{province:"",city:"",area:""},merchant:null,getShopId:null,imgbase_url:"./php",isShowBigImg:!1,showImg:!1,isImg:!1,isSelectError:!1,canotChangeSrc:"",basicInfroForm:{imgSrc:"",shopName:"",shopTel:"",shopArea:"",shopAddress:{province:"",city:"",area:""},floorNo:"",suportType:"简餐",shopId:""},isShowMap:!1,rules:{imgSrc:[{required:!0,message:"请上传店铺logo",trigger:"change"}],shopName:[{required:!0,message:"请输入店铺名称",trigger:"change,input"}],shopTel:[{required:!0,validator:function(o,i,s){return i?!1===/(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/.test(i)?s(new Error("请输入合法的电话号码")):void s():s(new Error("请输入电话号码"))},trigger:"change,input"}],shopArea:[{required:!0,validator:function(o,i,s){return i?isNaN(i)?s(new Error("请输入有效的店铺面积")):void s():s(new Error("请输入店铺面积"))},trigger:"change,input"}]}}},props:["cantChangeImg"],components:{citySelect:e.a,codeImg:r.a,ImgUpload:t.a,MapComponent:n.a},computed:{isChangeImg:function(){return this.cantChangeImg}},created:function(){var i=this;this.merchant=c.a.getItem("OF_MER_CREUID"),null!==this.merchant&&(this.getShopId=this.merchant.merchant_created_shopid,null!==this.getShopId&&""!==this.getShopId&&this.editBasicInfo()),this.height=document.documentElement.clientHeight-470+"px",o(window).resize(function(){i.height=document.documentElement.clientHeight-470+"px"})},methods:{editBasicInfo:function(){var o=this,i={get_shop_info:1,shop_id:this.getShopId};Object(a.c)(i).then(function(i){0===i.ret&&(o.basicInfroForm.imgSrc=i.data.shopinfo.shop_logo,o.canotChangeSrc=i.data.shopinfo.shop_logo,o.basicInfroForm.shopName=i.data.shopinfo.shop_name,o.basicInfroForm.shopTel=i.data.shopinfo.telephone,o.basicInfroForm.shopArea=i.data.shopinfo.shop_area,o.cityinfo.province=i.data.shopinfo.province,o.cityinfo.city=i.data.shopinfo.city,o.cityinfo.area=i.data.shopinfo.area,o.basicInfroForm.shopAddress.province=i.data.shopinfo.province,o.basicInfroForm.shopAddress.city=i.data.shopinfo.city,o.basicInfroForm.shopAddress.area=i.data.shopinfo.area,o.basicInfroForm.floorNo=i.data.shopinfo.address,""!==o.basicInfroForm.imgSrc&&(o.isImg=!0),o.isShowBigImg=!0,o.basicInfroForm.shopId=o.getShopId,o.checkFinishInput("basicInfoForm"))})},changeProvinces:function(o){""===o.province||""===o.city||""===o.blocks||""===this.basicInfroForm.floorNo?this.isSelectError=!0:this.isSelectError=!1,this.cityinfo.province=o.province,this.cityinfo.city=o.city,this.cityinfo.area=o.blocks,this.basicInfroForm.shopAddress.province=o.province,this.basicInfroForm.shopAddress.city=o.city,this.basicInfroForm.shopAddress.area=o.blocks,this.checkFinishInput("basicInfoForm")},InputFloorNo:function(){""===this.basicInfroForm.shopAddress.province||""===this.basicInfroForm.flooerNo||""===this.basicInfroForm.shopAddress.city||""===this.basicInfroForm.shopAddress.area?this.isSelectError=!0:this.isSelectError=!1,this.checkFinishInput("basicInfoForm")},showMapView:function(){this.isShowMap=!0},openMap:function(){this.isShowMap=!0},closeMap:function(){this.isShowMap=!1,this.InputFloorNo()},getFormAddress:function(o){this.basicInfroForm.shopAddress.province=o.province,this.basicInfroForm.shopAddress.city=o.city,this.basicInfroForm.shopAddress.area=o.district,this.cityinfo.province=o.province,this.cityinfo.city=o.city,this.cityinfo.area=o.district,this.basicInfroForm.flooerNo=o.street+o.streetNumber,this.basicInfroForm.address=o,this.InputFloorNo()},getPhoto:function(o){this.basicInfroForm.imgSrc=o,!0===this.isChangeImg&&""!==this.canotChangeSrc&&(this.basicInfroForm.imgSrc=this.canotChangeSrc,this.$slnotify({message:"图片更换不到一个月"})),this.isShowBigImg=!0,this.isImg=!0,this.checkFinishInput("basicInfoForm")},clickImg:function(){this.showImg=!0,this.isImg=!0,this.basicInfroForm.imgSrc=this.basicInfroForm.imgSrc},viewImg:function(){this.showImg=!1},checkFinishInput:function(o){var i=this;""!==this.basicInfroForm.shopName&&""!==this.basicInfroForm.shopTel&&""!==this.basicInfroForm.shopArea&&""!==this.basicInfroForm.shopAddress.province&&""!==this.basicInfroForm.shopAddress.city&&""!==this.basicInfroForm.shopAddress.area&&this.basicInfroForm.suportType&&""!==this.basicInfroForm.imgSrc&&""!==this.basicInfroForm.flooerNo?this.$refs[o].validate(function(o){o?i.$emit("getShopInfo",i.basicInfroForm):i.$emit("contGoNext")}):this.$emit("contGoNext")}}}}).call(i,s("tra3"))}});