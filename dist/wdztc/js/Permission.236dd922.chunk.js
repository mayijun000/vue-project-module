webpackJsonp([5],{"4o3U":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("iuS6"),i=(function(t){t&&t.__esModule}(o),n("Au9i"));e.default={mounted:function(){var t=this;i.Indicator.open("Loading..."),t.getpermission()},methods:{getpermission:function(){var t=this,e=this.api.findAuthorityDataURL;this.post(e,{}).then(function(e){t.$store.state.reportFlag=e.data.data.wdztc_report,1==t.$store.state.permission&&t.$router.replace("/home")}).catch(function(t){i.MessageBox.alert("权限校验失败，请重试！").then(function(t){window.location.href="js://uct?method=closeWebview"})})}}}},RrCC:function(t,e,n){function o(t){n("yOu5")}var i=n("VU/8")(n("4o3U"),n("kc+V"),o,null,null);t.exports=i.exports},"kc+V":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"route permission"})},staticRenderFns:[]}},yOu5:function(t,e){}});