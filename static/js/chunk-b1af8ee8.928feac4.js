(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1af8ee8"],{b3b9:function(i,t,a){},d146:function(i,t,a){"use strict";a("b3b9")},d18a:function(i,t,a){"use strict";a.r(t);var n,e=function(){var i=this,t=i._self._c;return t("div",{staticClass:"rootDiv"},[t("div",{attrs:{id:"containerDiv"}},[t("div",{attrs:{id:"panoramicNavigation"}}),t("div",{attrs:{id:"ui"}},[t("el-slider",{on:{input:i.onChange},model:{value:i.opacity,callback:function(t){i.opacity=t},expression:"opacity"}})],1)])])},o=[],c={name:"PanoramicOverlay",data:function(){return{opacity:80,position:new BIMI.THREE.Vector3(-43.4,16.35,6.291),yaw:72,pitch:0,loaded:!1}},methods:{onChange:function(i){this.loaded&&n.setOverlayOpacity(i/100)}},mounted:function(){var i=this;this.$nextTick((function(){var t=document.getElementById("containerDiv");n=new BIMI.PanoramicAndSceneSync(t,!0),n.init({image:"datas/skybox/1235.jpg",bim:"datas/半径项目Revit文件/bim.bin",defaultQuaternion:{x:-.06635499364895026,y:.11403174830228421,z:.007633527392872102,w:.9912292895473359},position:i.position,pitch:i.pitch,yaw:i.yaw,level:{containerDiv:document.getElementById("panoramicNavigation"),dataUrl:"datas/半径项目Revit文件/bimi-level-map.json",level:"B1"},poi:[{id:101,name:"地库第一出口",data:{image:"datas/skybox/1235.jpg",bim:"datas/半径项目Revit文件/bim.bin",defaultQuaternion:{x:-.06635499364895026,y:.11403174830228421,z:.007633527392872102,w:.9912292895473359},position:new BIMI.THREE.Vector3(-43,16.55,6.491),pitch:0,yaw:75}},{id:102,name:"我的测试位置",data:{image:"datas/skybox/1236.jpg",bim:"datas/半径项目Revit文件/bim.bin",defaultQuaternion:{x:0,y:0,z:0,w:1},position:new BIMI.THREE.Vector3(-45,16.55,26.491),pitch:0,yaw:75}}]}),n.on("loaded",(function(t){i.loaded=!0,n.setOverlayOpacity(i.opacity/100)}))}))},beforeDestroy:function(){n&&n.dispose()}},d=c,s=(a("d146"),a("2877")),r=Object(s["a"])(d,e,o,!1,null,"40f38f70",null);t["default"]=r.exports}}]);