(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07bffa34"],{"1f7b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"rootDiv"},[t("div",{attrs:{id:"containerDiv"}}),t("div",{attrs:{id:"btnDiv"}},[t("button",{on:{click:e.mapTransparent}},[e._v("地表透明")]),t("button",{on:{click:e.noTransparent}},[e._v("取消透明")])])])},a=[],r={name:"LoadBim",data:function(){return{}},methods:{addGLTF:function(){var e=BIMI.ViewerHelper.getViewer();e.load("datas/gzb.gltf",{updateRegion:!1,modelId:2,latitude:30.739541,longitude:111.273478,offset:new BIMI.THREE.Vector3(240,-30,180),scale:new BIMI.THREE.Vector3(1.12,1,1.1),rotate:new BIMI.THREE.Vector3(0,-20,0)})},noTransparent:function(){var e=BIMI.ViewerHelper.getViewer(),t=e.getPlugin("MapPlugin");t.setMapOpacity(1)},mapTransparent:function(){var e=BIMI.ViewerHelper.getViewer(),t=e.getPlugin("MapPlugin");t.setMapOpacity(.3)}},mounted:function(){var e=this;this.$nextTick((function(){var t=document.getElementById("containerDiv"),n=new BIMI.BimViewer(t,{alwaysRefresh:!0}),i=n.getPlugin("MapPlugin");null==i&&(i=new BIMI.MapPlugin,n.addPlugin(i)),i.setDefaultCamera({latitude:30.73615,longitude:111.28034,height:3e3,pitch:-90,yaw:0}),n.isDirty(),e.addGLTF()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},o=r,u=(n("8899"),n("2877")),c=Object(u["a"])(o,i,a,!1,null,"d6e32a30",null);t["default"]=c.exports},8899:function(e,t,n){"use strict";n("fb78")},fb78:function(e,t,n){}}]);