webpackJsonp([67],{"Q/X+":function(a,t,e){"use strict";(function(a){var i=e("jOce"),n=e("2vv/"),s=e("7jV/"),c=e("Fz3C"),o=e("Ym9J"),d=e.n(o),h=e("gbiK"),r=e("XQD8");t.a={data:function(){return{isExpend:!1,isShowTodo:!1,isRadioOk:!1,customTimeDialog:!1,charetHeight:0,beginDay:"",endDay:"",editableTabsValue2:"营业额总计",dataTime:"7天统计数据",historyData:[{key:"consume_amount",unit:"元",itemName:"营业额合计"},{key:"average_money",unit:"元",itemName:"店铺平均销售额"},{key:"average_qr",unit:"次",itemName:"店铺平均扫码点餐次数"},{key:"sign_region_shop_num",unit:"个",itemName:"新增签约区域商户"},{key:"new_shop_num",unit:"个",itemName:"新增店铺"}],dataCu:[{name:"7天统计数据",check:!0},{name:"30天统计数据",check:!1},{name:"自定义统计数据",check:!1}],list:[],riaoUnit:"元",choosedLineType:"consume_amount",merchantTotalData:{},merchantTadayData:{}}},created:function(){var t=this;this.charetHeight=document.documentElement.clientHeight-630+"px",a(window).resize(function(){t.charetHeight=document.documentElement.clientHeight-630+"px"}),this.initBoardData()},components:{exampleChart:n.a,myTimePicker:s.a,merchantTotal:h.a,merchantTaday:r.a},methods:{initBoardData:function(){this.endDay=parseInt(d()().format("X")),this.beginDay=this.endDay-518400;var a={get_shop_data:1,begin_day:this.beginDay,end_day:this.endDay};this.getBoardData(a)},getBoardData:function(a){var t=this;Object(c.a)(a).then(function(a){0===a.ret?(t.merchantTotalData=a.data.all,t.merchantTadayData=a.data.now,t.list=Object(i.a)(a.data.list,t.beginDay,t.endDay)):console.log(a)})},changeTime:function(a){this.endDay=a.end,this.beginDay=a.begin;var t={get_shop_data:1,begin_day:this.beginDay,end_day:this.endDay};this.getBoardData(t),this.customTimeDialog=!1},handelChange:function(t,e){a(".nav-item").eq(e).addClass("is-active").siblings("div").removeClass("is-active"),this.choosedLineType=t.key,this.list=this.list,this.editableTabsValue2=t.itemName,this.riaoUnit=t.unit},hideTimeBox:function(){this.customTimeDialog=!1},handelChangeDays:function(a){var t=this;this.dataTime=a.name,a.check=!a.check,this.dataCu.forEach(function(e,i){if(e===a){if(2!==i){var n=6;1===i&&(n=29),t.endDay=parseInt(d()().format("X")),t.beginDay=t.endDay-24*n*60*60;var s={get_shop_data:1,begin_day:t.beginDay,end_day:t.endDay};t.getBoardData(s)}else t.customTimeDialog=!0;e.check=!0}else e.check=!1})}}}}).call(t,e("tra3"))},m8Kl:function(a,t){},oLvN:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Q/X+"),n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"first-block"},[e("div",{staticClass:"today"},[e("merchant-taday",{attrs:{merchantTadayData:a.merchantTadayData}})],1),a._v(" "),e("div",{staticClass:"amount"},[e("merchant-total",{attrs:{merchantTotalData:a.merchantTotalData}})],1)]),a._v(" "),e("div",{staticClass:"second-block"},[e("div",{staticClass:"title"},[a._v("历史")]),a._v(" "),e("div",{staticClass:"chart-nav",style:{height:a.charetHeight}},[e("div",{staticClass:"nav-part"},a._l(a.historyData,function(t,i){return e("div",{staticClass:"nav-item",class:{"is-active":0==i},on:{click:function(e){a.handelChange(t,i)}}},[a._v(a._s(t.itemName)+"\n          "),e("span",{staticClass:"unit"},[a._v("( "+a._s(t.unit)+" )")])])})),a._v(" "),e("div",{staticClass:"radio-nav"},a._l(a.dataCu,function(t,i){return e("div",{staticClass:"nav-item",on:{click:function(e){a.handelChangeDays(t,i)}}},[!0===t.check?e("span",{class:{"radio-ok":!0===t.check}}):a._e(),a._v(" "),e("span",{class:{"radio-no":!1===t.check}}),a._v(" "),e("span",{staticClass:"radio-text"},[a._v(" "+a._s(t.name))])])}))]),a._v(" "),e("div",{staticClass:"chart-part"},[e("example-chart",{attrs:{data:a.list,lineName:a.editableTabsValue2,LineType:a.choosedLineType,riaoUnit:a.riaoUnit}})],1)]),a._v(" "),a.customTimeDialog?e("my-time-picker",{on:{"change-time":a.changeTime,hideTimeBox:a.hideTimeBox}}):a._e()],1)},staticRenderFns:[]},s=function(a){e("vPB7"),e("m8Kl")},c=e("8AGX")(i.a,n,!1,s,"data-v-1563e503",null);t.default=c.exports},vPB7:function(a,t){}});