webpackJsonp([18],{"+8sO":function(t,e,n){var a=n("CwKw");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("73a8357c",a,!0)},"9NC3":function(t,e,n){var a=n("X8JN");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("3175869e",a,!0)},Bozr:function(t,e,n){"use strict";var a=n("zXF4"),i=n("UdGA");e.a={data:function(){return{searchName:"",list:null,total:null,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},multipleSelection:[],imgbase_url:"./php"}},computed:{selectCategoryId:function(){return this.$store.state.good.selectCategoryId},pageSize:function(){return this.$store.state.good.pageSize}},created:function(){this.getList(),this.initPageSize()},watch:{selectCategoryId:function(t){this.getListById(t)}},methods:{getList:function(){var t={foodlist:1,page_size:this.pageSize,category_id:this.selectCategoryId};n.i(a.a)(t,this.tableHander)},tableHander:function(t){0===t.ret?(this.list=t.data.list||[],this.total=this.list.length):console.log("获取表格数据错误!")},getListById:function(t){var e={foodlist:1,category_id:t,page_size:this.pageSize};n.i(a.a)(e,this.tableHander)},serchGetList:function(){var t={foodlist:1,page_size:this.pageSize,category_id:this.selectCategoryId,food_name:this.searchName};n.i(a.a)(t,this.tableHander)},goAccessEditor:function(){this.$router.push({path:"/good/accesseditor"})},deleteFood:function(t){var e=[];e.push(t),i.a.deleteFoodItems(e,this.deleteFoodHander)},deleteFoodHander:function(){this.getList()},multipleDeleteFood:function(){var t=this.multipleSelection.map(function(t){return t.food_id});i.a.deleteFoodItems(t,this.deleteFoodHander)},handleSizeChange:function(t){this.listQuery.limit=t,this.$store.commit("CHANGE_PAGESIZE",t),this.getList()},handleCurrentChange:function(t){this.listQuery.page=t},handleSelectionChange:function(t){this.multipleSelection=t},goDraft:function(){this.$router.push({path:"/good/draft"})},initPageSize:function(){this.listQuery.limit=this.pageSize}}}},CwKw:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left{float:left}.right{float:right}.clearfix:after{content:"";display:block;clear:both}#access-table .search-content{font-size:0}#access-table .search-content .el-input{font-size:14px;width:inherit}#access-table .search-content .el-input input{width:180px;height:34px;border-radius:0}#access-table .search-content .el-button{width:100px;height:34px;border:1px solid #4877e7;color:#4877e7;border-radius:0;font-size:14px}#access-table .search-content .el-button.red{color:#e7487e;border-color:#e7487e}#access-table .el-pagination{padding-top:50px;padding-bottom:14px}#access-table .el-pagination__jump{margin-left:5px;margin-right:15px}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/merchandise/view/accessTable.vue"],names:[],mappings:"AACA,MACE,UAAY,CACb,AACD,OACE,WAAa,CACd,AACD,gBACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,8BACE,WAAa,CACd,AACD,wCACI,eAAgB,AAChB,aAAe,CAClB,AACD,8CACM,YAAa,AACb,YAAa,AACb,eAAiB,CACtB,AACD,yCACI,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,cAAe,AACf,gBAAiB,AACjB,cAAgB,CACnB,AACD,6CACI,cAAe,AACf,oBAAsB,CACzB,AACD,6BACE,iBAAkB,AAClB,mBAAqB,CACtB,AACD,mCACE,gBAAiB,AACjB,iBAAmB,CACpB",file:"accessTable.vue",sourcesContent:["\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n#access-table .search-content {\n  font-size: 0;\n}\n#access-table .search-content .el-input {\n    font-size: 14px;\n    width: inherit;\n}\n#access-table .search-content .el-input input {\n      width: 180px;\n      height: 34px;\n      border-radius: 0;\n}\n#access-table .search-content .el-button {\n    width: 100px;\n    height: 34px;\n    border: 1px solid #4877e7;\n    color: #4877e7;\n    border-radius: 0;\n    font-size: 14px;\n}\n#access-table .search-content .el-button.red {\n    color: #e7487e;\n    border-color: #e7487e;\n}\n#access-table .el-pagination {\n  padding-top: 50px;\n  padding-bottom: 14px;\n}\n#access-table .el-pagination__jump {\n  margin-left: 5px;\n  margin-right: 15px;\n}\n"],sourceRoot:""}])},UdGA:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n("zXF4"),i=n("6nXL"),o=n("2HEv"),c=n("EuEE"),r={goAnchor:function(t,e){var n=t.querySelector(e);document.body.scrollTop=n.offsetTop,document.documentElement.scrollTop=n.offsetTop},deleteFoodItems:function(t,e){var i={del_food:1,food_id_list:t};n.i(a.b)(i,e)},searchGetList:function(t,e,o){var c=null;c=t!==i.j.YES&&t!==i.j.NO?{foodlist:1,food_name:e}:{foodlist:1,food_name:e,sale_off:t},n.i(a.a)(c,o)},changeStatusOn:function(t,e){var o={sale_off_opr:1,food_id_list:t,is_sale_off:i.j.YES};n.i(a.c)(o,e)},changeStatusOff:function(t,e){var o={sale_off_opr:1,food_id_list:t,is_sale_off:i.j.NO};n.i(a.c)(o,e)},treeDataById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return function t(n){n.forEach(function(n){n.hasOwnProperty("category_id")&&(e[n.category_id]=n),n.hasOwnProperty("list")&&n.list.length>0&&t(n.list)})}(t),e},initTreeData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e=e.map(function(e){return o.default.set(e,"canEditor",!1),o.default.set(e,"addIcon",!0),o.default.set(e,"editorIcon",!0),o.default.set(e,"deleteIcon",!0),o.default.set(e,"isShowBtn",!1),o.default.set(e,"isActive",!1),5===t.getKeylength(e.key)?o.default.set(e,"isThree",!0):o.default.set(e,"isThree",!1),e.hasOwnProperty("list")&&e.list.length>0&&t.initTreeData(e.list),e})},generateKey:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return e=e.map(function(e,a){return e.key=n+"-"+a.toString(),e.hasOwnProperty("list")&&e.list.length>0&&t.generateKey(e.list,e.key),e})},getKeylength:function(t){if(!c.a.isEmpty(t)){return t.split("-").length}},selectIcon:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e=e.map(function(e){var n=t.getKeylength(e.key);2===n?(e.addIcon=!1,e.editorIcon=!1,e.deleteIcon=!1):3===n?(e.addIcon=!0,e.editorIcon=!1,e.deleteIcon=!1):4===n?(e.addIcon=!0,e.editorIcon=!0,e.deleteIcon=!0):5===n&&(e.addIcon=!1,e.editorIcon=!0,e.deleteIcon=!0),e.hasOwnProperty("list")&&e.list.length>0&&t.selectIcon(e.list)})},selectdinnerTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];if(null!=e)return t.forEach(function(t){var a=t.value;e.forEach(function(e){a===Number(e)&&n.push(t)})}),n},addCategoryFirst:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return o.default.set(e,"category_name","商品"),o.default.set(e,"list",t),o.default.set(e,"opening_time",[1,2,3,4]),o.default.set(e,"category_id","0"),e},changeSelecte:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.category_id;for(var a in e)e.hasOwnProperty(a)&&(e[a].isActive=n===a)},deleteArrayItem:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];return t.forEach(function(n,a){if(n===e)return void t.splice(a,1)}),t}}},"V34+":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"access-table"}},[n("div",{staticClass:"table-title"},[t._v("详情列表")]),t._v(" "),n("div",{staticClass:"search-content clearfix"},[n("div",{staticClass:"search-left left clearfix"},[n("el-input",{staticClass:"left",attrs:{placeholder:"名称或者编号"},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}}),t._v(" "),n("el-button",{staticClass:"searchBtn",on:{click:t.serchGetList}},[t._v("搜索")])],1),t._v(" "),n("div",{staticClass:"search-right right"},[n("el-button",{on:{click:t.goAccessEditor}},[t._v("创建")]),t._v(" "),n("el-button",{on:{click:t.goDraft}},[t._v("草稿")]),t._v(" "),n("el-button",{staticClass:"red",on:{click:t.multipleDeleteFood}},[t._v("删除")])],1)]),t._v(" "),n("div",{staticClass:"table-content"},[n("el-table",{staticClass:"table-list",attrs:{data:t.list,stripe:"",height:"600"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"38"}}),t._v(" "),n("el-table-column",{attrs:{"min-width":"80",align:"center",label:"编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.food_id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"80",align:"center",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("img",{attrs:{src:t.imgbase_url+"/img_get.php?img=1&height=69&width=69&imgname="+e.row.food_img_list[0],alt:"菜品图片"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"93",align:"center",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.food_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"100",align:"center",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.food_price.original_price))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"80",align:"center",label:"商品类别"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.category_name[0]))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"80",align:"center",label:"余量数"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.stock_num))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"140",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"blue-text"},[n("router-link",{attrs:{to:{path:"/good/accesseditor",query:{foodId:e.row.food_id}}}},[t._v("\n                        编辑\n                    ")])],1),t._v(" "),n("span",{staticClass:"red-text",staticStyle:{"padding-left":"10px","padding-top":"10px"},on:{click:function(n){t.deleteFood(e.row.food_id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,40],"page-size":t.listQuery.limit,layout:"sizes, jumper, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.listQuery.page=e}}})],1)])},i=[],o={render:a,staticRenderFns:i};e.a=o},X8JN:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,'.left[data-v-e2267476]{float:left}.right[data-v-e2267476]{float:right}.clearfix[data-v-e2267476]:after{content:"";display:block;clear:both}#access-table[data-v-e2267476]{background:#fff;-webkit-box-shadow:0 2px 4px 0 #becaeb;box-shadow:0 2px 4px 0 #becaeb}#access-title[data-v-e2267476]{width:100%}.table-title[data-v-e2267476]{width:100%;height:40px;font-size:14px;color:#666;line-height:40px;background-color:#f6f8fc;padding-left:14px}.search-content[data-v-e2267476]{padding:0 14px}.search-content .search-left[data-v-e2267476]{padding:20px 0;min-width:500px}.search-content .search-right[data-v-e2267476]{padding:20px 0;min-width:320px}.search-content .searchBtn[data-v-e2267476]{margin-left:20px}.pagination-container[data-v-e2267476]{text-align:center}.red-text[data-v-e2267476]{font-size:14px;color:#e7487e;cursor:pointer}.blue-text[data-v-e2267476]{cursor:pointer}.blue-text[data-v-e2267476],.blue-text a[data-v-e2267476]{font-size:14px;color:#4877e7}.table-content[data-v-e2267476]{padding-left:14px;padding-right:14px}.table-content table img[data-v-e2267476]{width:60px;height:60px;vertical-align:middle;margin:10px 0}',"",{version:3,sources:["E:/ordering/www/shop/html/src/modules/merchandise/view/accessTable.vue"],names:[],mappings:"AACA,uBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,iCACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,+BACE,gBAAoB,AACpB,uCAAwC,AAChC,8BAAgC,CACzC,AACD,+BACE,UAAY,CACb,AACD,8BACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,WAAe,AACf,iBAAkB,AAClB,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,iCACE,cAAgB,CACjB,AACD,8CACI,eAAgB,AAChB,eAAiB,CACpB,AACD,+CACI,eAAgB,AAChB,eAAiB,CACpB,AACD,4CACI,gBAAkB,CACrB,AACD,uCACE,iBAAmB,CACpB,AACD,2BACE,eAAgB,AAChB,cAAe,AACf,cAAgB,CACjB,AACD,4BAGE,cAAgB,CACjB,AACD,0DAJE,eAAgB,AAChB,aAAe,CAMhB,AACD,gCACE,kBAAmB,AACnB,kBAAoB,CACrB,AACD,0CACI,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,aAAe,CAClB",file:"accessTable.vue",sourcesContent:["\n.left[data-v-e2267476] {\n  float: left;\n}\n.right[data-v-e2267476] {\n  float: right;\n}\n.clearfix[data-v-e2267476]:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n#access-table[data-v-e2267476] {\n  background: #ffffff;\n  -webkit-box-shadow: 0 2px 4px 0 #becaeb;\n          box-shadow: 0 2px 4px 0 #becaeb;\n}\n#access-title[data-v-e2267476] {\n  width: 100%;\n}\n.table-title[data-v-e2267476] {\n  width: 100%;\n  height: 40px;\n  font-size: 14px;\n  color: #666666;\n  line-height: 40px;\n  background-color: #f6f8fc;\n  padding-left: 14px;\n}\n.search-content[data-v-e2267476] {\n  padding: 0 14px;\n}\n.search-content .search-left[data-v-e2267476] {\n    padding: 20px 0;\n    min-width: 500px;\n}\n.search-content .search-right[data-v-e2267476] {\n    padding: 20px 0;\n    min-width: 320px;\n}\n.search-content .searchBtn[data-v-e2267476] {\n    margin-left: 20px;\n}\n.pagination-container[data-v-e2267476] {\n  text-align: center;\n}\n.red-text[data-v-e2267476] {\n  font-size: 14px;\n  color: #E7487E;\n  cursor: pointer;\n}\n.blue-text[data-v-e2267476] {\n  font-size: 14px;\n  color: #4877e7;\n  cursor: pointer;\n}\n.blue-text a[data-v-e2267476] {\n    font-size: 14px;\n    color: #4877e7;\n}\n.table-content[data-v-e2267476] {\n  padding-left: 14px;\n  padding-right: 14px;\n}\n.table-content table img[data-v-e2267476] {\n    width: 60px;\n    height: 60px;\n    vertical-align: middle;\n    margin: 10px 0;\n}\n"],sourceRoot:""}])},YMXC:function(t,e,n){"use strict";function a(t){n("9NC3"),n("+8sO")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("Bozr"),o=n("V34+"),c=n("o7Pn"),r=a,s=c(i.a,o.a,r,"data-v-e2267476",null);e.default=s.exports},zXF4:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"f",function(){return c}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"j",function(){return d}),n.d(e,"g",function(){return u}),n.d(e,"k",function(){return A}),n.d(e,"h",function(){return f}),n.d(e,"i",function(){return p});var a=n("EuEE"),i=function(t,e){a.a.DataEncSubmit("menu_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},o=function(t){var e={list:1};a.a.DataEncSubmit("category_get.php",e,function(e){t&&"function"==typeof t&&t(e)})},c=function(t,e){var n={foodinfo:1,food_id:t};a.a.DataEncSubmit("menu_get.php",n,function(t){e&&"function"==typeof e&&e(t)})},r=function(t,e){a.a.DataEncSubmit("menu_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},s=function(t,e){a.a.DataEncSubmit("menu_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},l=function(t,e){a.a.DataEncSubmit("category_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},d=function(t,e){a.a.DataEncSubmit("gen_id.php",t,function(t){e&&"function"==typeof e&&e(t)})},u=function(t,e){a.a.DataEncSubmit("category_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},A=function(t,e){a.a.DataEncSubmit("menu_save.php",t,function(t){e&&"function"==typeof e&&e(t)})},f=function(t,e){a.a.DataEncSubmit("shopinfo_get.php",t,function(t){e&&"function"==typeof e&&e(t)})},p=function(t,e){a.a.DataEncSubmit("shopinfo_save.php",t,function(t){e&&"function"==typeof e&&e(t)})}}});
//# sourceMappingURL=18.9fe14376720cd7e355de.js.map