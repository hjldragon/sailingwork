webpackJsonp([113],{eVw5:function(t,e){},lkU3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Ym9J"),i=a.n(s),l=a("6nXL"),n={props:{shopinfo:{type:Object},shopid:{type:String}},data:function(){return{leftData:{creatTime:{label:"创建时间",value:""},phone:{label:"超级管理员账号",value:""},shopName:{label:"店铺名称",value:""},telephone:{label:"店铺电话",value:""}},rightData:{area:{label:"店铺面积",value:""},address:{label:"店铺地址",value:""},model:{label:"营业模式",value:""}},logoSrc:"",base_url:"./php"}},watch:{shopinfo:{handler:function(){this.init()},deep:!0}},methods:{init:function(){var t=this.shopinfo;this.logoSrc="./php/img_get.php?img=1&imgname="+t.shop_logo,this.leftData.creatTime.value=i()(1e3*t.ctime).format("YYYY-MM-DD"),this.leftData.phone.value=t.phone,this.leftData.shopName.value=t.shop_name,this.leftData.telephone.value=t.telephone,this.rightData.area.value=t.shop_area+" ㎡",this.rightData.address.value=""+t.province+t.city+t.area+t.address,t.shop_model?this.rightData.model.value=l.u.toString(t.shop_model):this.rightData.model.value="--"},goEditor:function(){this.$router.push({path:"/areamerchant/editorbase",query:{shopid:this.shopid}})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"areamerchant-baseinfo"}},[t._m(0),t._v(" "),a("div",{staticClass:"content clearfix"},[a("div",{staticClass:"item-content-left fl"},[a("div",{staticClass:"shop-logo fl clearfix"},[a("img",{attrs:{src:t.logoSrc,alt:""}})]),t._v(" "),a("div",{staticClass:"data-left fl"},t._l(t.leftData,function(e,s){return a("div",{staticClass:"item"},[a("span",{staticClass:"item-label"},[t._v(t._s(e.label)+"：")]),t._v(" "),a("span",{staticClass:"item-value"},[t._v(t._s(e.value))])])}))]),t._v(" "),a("div",{staticClass:"item-content-right fl"},t._l(t.rightData,function(e,s){return a("div",{staticClass:"item",class:{"item-address":"address"===s}},[a("span",{staticClass:"item-label"},[t._v(t._s(e.label)+"：")]),t._v(" "),a("span",{staticClass:"item-value"},[t._v(t._s(e.value))])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title clearfix"},[e("span",[this._v("基础信息")]),this._v(" "),e("div",{staticClass:"btn-group fr"})])}]},o=a("8AGX")(n,r,!1,function(t){a("eVw5")},"data-v-017c4398",null);e.default=o.exports}});