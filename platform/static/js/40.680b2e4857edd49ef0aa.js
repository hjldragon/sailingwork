webpackJsonp([40,103],{"5/O7":function(t,a){},CGwu:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={components:{VAgent:e("gikc").default},data:function(){return{boardOptions:[{label:"代理商数据",value:"agent"}],active:"agent",showCustomer:!0,showMerchant:!1,showAgent:!1}},methods:{changeSelect:function(t){this.active=t.value}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"dashboard-chart"}},[e("div",{staticClass:"tab-content"},[e("ul",{staticClass:"clearfix"},t._l(t.boardOptions,function(a,n){return e("li",{key:n,staticClass:"tab-item fl",class:{active:a.value===t.active},on:{click:function(e){t.changeSelect(a)}}},[t._v("\n              "+t._s(a.label)+"\n            ")])}))]),t._v(" "),e("div",{staticClass:"dashboard-content"},["agent"===t.active?e("v-agent"):t._e()],1)])},staticRenderFns:[]};var i=e("X4nt")(n,s,!1,function(t){e("5/O7")},"data-v-32a13d4c",null);a.default=i.exports},ct7q:function(t,a){},gikc:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("LmrH"),s=e("Yj+X"),i=e("lbRB"),c=e("6nXL"),l={components:{AreaStatistic:n.default,IndustStatistic:s.default},data:function(){return{cardData:{allAgent:{label:"已招募代理商",class:"all-bg",num:1e4},areaAgent:{label:"区域代理商",class:"area-bg",num:100002},indusAgent:{label:"行业代理商",class:"indus-bg",num:100202}},areaAgent:[],indusAgent:[]}},created:function(){this.getAgentData()},methods:{getAgentData:function(){var t=this;Object(i.e)({get_agent_data:1}).then(function(a){if(0===a.ret){var e=a.data;t.cardData.allAgent.num=e.all_total,t.cardData.areaAgent.num=e.area_total,t.cardData.indusAgent.num=e.guild_total,t.areaAgent=e.area,t.indusAgent=e.guild}else t.$slnotify({message:c.w.toString(a.ret)})})}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"clearfix",attrs:{id:"agent-dashboard"}},[e("div",{staticClass:"board-left fl"},[e("div",{staticClass:"card-content clearfix"},[t._l(t.cardData,function(a,n){return e("div",{key:n,staticClass:"card-item fl",class:a.class},[e("div",{staticClass:"num-content"},[e("span",{staticClass:"num"},[t._v(t._s(a.num))]),t._v(" "),e("span",{staticClass:"unit"},[t._v("个")])]),t._v(" "),e("div",{staticClass:"label"},[t._v(t._s(a.label))])])}),t._v(" "),e("div",{staticClass:"card-icon"},[t._v("总计")])],2),t._v(" "),e("div",{staticClass:"indus-cotent"},[e("div",{staticClass:"card-icon"},[t._v("排行")]),t._v(" "),e("indust-statistic",{attrs:{info:t.indusAgent}})],1)]),t._v(" "),e("div",{staticClass:"board-right fl"},[e("div",{staticClass:"card-icon"},[t._v("排行")]),t._v(" "),e("area-statistic",{attrs:{info:t.areaAgent}})],1)])},staticRenderFns:[]};var d=e("X4nt")(l,r,!1,function(t){e("ct7q")},"data-v-57df2a79",null);a.default=d.exports}});