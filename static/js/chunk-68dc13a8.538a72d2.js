(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68dc13a8"],{"2c12":function(e,n,t){"use strict";t("5641")},"489b":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"bimDiv",attrs:{id:"containerDiv"}})},o=[],a={name:"IDC",data:function(){return{}},methods:{initView:function(){var e=document.getElementById("containerDiv"),n=new BIMI.BimViewer(e,{enableInstancedMesh:!1});n.load("datas/二层整合无桥架/bim.bin");new BIMI.Toolbar(n);n.on("pick",(function(e){var t=e.data[0].modelId,i=e.data[0].productId,o=n.getProduct(t,i);console.info(o)}))},destroyView:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},mounted:function(){var e=this;this.$nextTick((function(){e.initView()}))},beforeDestroy:function(){this.destroyView()}},c=a,r=(t("2c12"),t("2877")),s=Object(r["a"])(c,i,o,!1,null,"ab53a724",null);n["default"]=s.exports},5641:function(e,n,t){}}]);