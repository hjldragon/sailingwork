webpackJsonp([24],{"+Fzl":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAbJJREFUSA3tlcFKw0AQhrMh0JN4UbRX9QGURsSDCCKI9jU8eNCrZ4/SF+jRk49gbS+iFxHT4AvoE3gQKkIL2vhNaMKm3SWroHhwIdmZf/7ZmdmdTTxPH7VaLcn0QCnV14HMUJzViLIFfOXZ+H7RyaCFYbgn3jIbzCUQnh1rDKshy31icT+OY8pXdSwi1H3fr6YY6fWSJLmdcDEAOIbWHTHwhWuvwuQgWCAv0tqV2WHMKiERanGMfIa+wbOk45VK5TV1yEAiHWayPlPsSxRF5zrmLMtBPMOOHT3WpOBLR7Jw3609YFvkDzrISc9QjOtJewGdGuLU0ouklTeHw+GNjo3kt4DjnhsMBlO6EfIjp3vNYvs6zn14yluDA6xCWhECxAvkCPFE9G63m2cgNaQDwjbCtCjIRynoeQujOZ+kNQ7QTnkKaeWM7ws99uJYMmqSQZs0nXfWJSaJd9iK5pc7yWVxnfMfQN8No/zjW2T9lZjSodsewBXdsWyyj2PwP3xejXGDTWfheWzyOA34jfwql3nQ1204O8IjqRb3Rv6TpcMYgM/ZPdFXS72LhDs+PutF6Be0T6gvdMs/xm0hAAAAAElFTkSuQmCC"},"8k55":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAg1JREFUSA3tVj1LA0EQzd2lUEghBNIIWoghAQshH/4RC0EbGxUrSUAbS1OJETu1UFuxsRDSWKRNSBC1ECIpYh9Q0MIoOd9bby53l0tSSArFhc282XkzOze7cxctgJFIJEwIzn7DogUCyWTyk8R0Oh3VnR4aFVpN09wUg2EYVwqLmxjoHrQUk8E1TcvAMw8ZlVD3WJghCYvblUolpzygXMJwSgPkLkSOmI8yoQB+sN8HsStFMfY1SFYNhFMO2ENJlRURDA8QMWJd11chXtrt9iHkGNcikchIoVB4l0hMfxpRJqvV6hMJ1jinZKLNZnMSsNYzWcuhSwzfwX4G5L+G/aUqLeAk5h1zYoXK5XKN2K5SKpVahuEY0w5CAkYdM45iuE8IJTwRMsq6ANIi2RhTmK8K4ccbLUsDnMctgtKB9yy9I3jPOpobOW3DL+tf2MF1DlI+HNwODjGLOeoucO9evAb5WcjolX0bCxCJO7WCkz4SXSScbhDkjTqwATwH6K3yAe7chvgorlMhZjfC2fVoXk4/PRgMRkul0qNw/AJJh3hfB+LjKyUxJCf+iud9RF/nnyz+bzCwer+/RH7X9Pt66fo6WtvuzkG1wPX0rUbXBiDycxFHN295gt6iS2e5hjt/Ad68x061FQ6HG851V1OIAa+LJQTIQI9BdiUhPEvy21DH6+MsFArli8Wi+p8jnC8th8ICqqyjvgAAAABJRU5ErkJggg=="},SAOA:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAXxJREFUSA3tlr9Kw0Acx3Oxg9hBfIOODm5J3qAovoB7oQgdRIe+hQjSSamv4WIfIckmuunoKIJWB0n8/I4exPQuIUZExBt6vz/f35/7/u7aep5rKXGEYfjkAmjvRBUgr1YogIlv9WCU8Pc8z1dcgGV7EAR52RpF0b6zhtPRUUodF/rXWeM4Xle2GuLVpOA8RR5puPtjnqbphgnIUbTswgtLtHPtbNYV2DhAQdYelG+bjMi3tHdidFq5MPLP7IalR8qt1ZQ8o9VDjxkMF3OoxJtBNmbpLwRoWpnmQx2t3IAptI7lNX4afZIkQ8Mv12YMcNPo3NaZ86EYUGnPSvovUDVJnK2fZdmMM73R00vLvrrwtEqOHUi96kgykvdkx3GO8Ujkry75qiD2wPf9nuRofFUlqMn6L1DLlh4yA7ln0AIeMaRBbVQFYHGDBHFXAfs+lzzlZ9J1q1Jywl1OeFPE8Ga26PayaLPIc/ndGQDUD84CaGWiiaU/Ba0S2oI/AFTbeIG50R03AAAAAElFTkSuQmCC"},XdFg:function(A,t){},"h9/G":function(A,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={props:{shopinfo:{type:Object},shopid:{type:String}},data:function(){return{serverData:{pc:{icon:n("+Fzl"),name:"PC",num:1},pad:{icon:n("olFe"),name:"平板Pad",num:1},cash:{icon:n("SAOA"),name:"收银机",num:1},phone:{icon:n("8k55"),name:"手机App",num:1}}}},watch:{shopinfo:{handler:function(){this.init()},deep:!0}},methods:{init:function(){var A=this.shopinfo.authorize||{};this.serverData.pc.num=A.pc_num,this.serverData.pad.num=A.pad_num,this.serverData.cash.num=A.cashier_num,this.serverData.phone.num=A.app_num},goEditor:function(){this.$router.push({path:"/areamerchant/editoragent",query:{shopid:this.shopid}})}}},a={render:function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{attrs:{id:"areamerchant-serverinfo"}},[A._m(0),A._v(" "),n("div",{staticClass:"content clearfix"},[n("div",{staticClass:"server-title"},[A._v("登录授权数：")]),A._v(" "),n("div",{staticClass:"server-content clearfix"},A._l(A.serverData,function(t,e){return n("div",{key:e,staticClass:"item clearfix fl"},[n("div",{staticClass:"label fl"},[n("img",{attrs:{src:t.icon,alt:"icon"}}),A._v(" "),n("span",[A._v(A._s(t.name))])]),A._v(" "),n("div",{staticClass:"num fl"},[A._v(A._s(t.num))])])}))])])},staticRenderFns:[function(){var A=this.$createElement,t=this._self._c||A;return t("div",{staticClass:"title clearfix"},[t("span",[this._v("服务信息")]),this._v(" "),t("div",{staticClass:"btn-group fr"})])}]},s=n("8AGX")(e,a,!1,function(A){n("XdFg")},"data-v-4d5898bf",null);t.default=s.exports},olFe:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAWdJREFUSA3tVl1Kw0AQdjdB6RV8rXiBJH3wQd+lV/AiYkWMeBEfPEDBI1QI5Ah96xmESn78Juwss9lsU4S+ZSHZnZlvfncmrTrDSpKkpT28VJZledM0T3EcX2scHsuyVFVVPWhPCdZqyQT96qMMImYkxaCU+mrb9h68XJGgHxg5ZYVT7kHn1rtJMpgXossR7bPNj8I9FD5ViTCHLJLcW6dXsDngfvbySrTWC/RCIWJa0VlWaQ/6XADkcYuCXBFD5hACE25OL2dx2RymIcwddZT0MIT1eJOCV5IBhrxp+wlBm+wwxpfA2ypy61tGz9gn6F2P15HWAwvTNP2B9RnT/9hXiOaN9Wx3MwPGL3Duxpd5x+6m5ZweDqV8rM1R3ORgKtFoBUYB3hyQBkb5DgP3MqrdA2CGvMEddADgLXTpcVYURTdFUXxjoNYQLB1hgPDmAL9P78D+DuHrut7AOH20Qsa3+LPzIXX/AMW9ZzOWAiAJAAAAAElFTkSuQmCC"}});