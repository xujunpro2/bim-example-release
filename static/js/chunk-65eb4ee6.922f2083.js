(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65eb4ee6"],{8536:function(i,n,t){"use strict";t("ceac")},ceac:function(i,n,t){},decb:function(i,n,t){"use strict";t.r(n);var e,a=function(){var i=this;i._self._c;return i._m(0)},o=[function(){var i=this,n=i._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{attrs:{id:"containerDiv"}},[n("div",{attrs:{id:"panoramicNavigation"}})])])}],c={name:"PanoramicAndSceneSync",data:function(){return{}},methods:{},mounted:function(){this.$nextTick((function(){var i=document.getElementById("containerDiv");e=new BIMI.PanoramicAndSceneSync(i),e.init({image:"datas/skybox/1235.jpg",bim:"datas/半径项目Revit文件/bim.bin",defaultQuaternion:{x:-.06635499364895026,y:.11403174830228421,z:.007633527392872102,w:.9912292895473359},position:new BIMI.THREE.Vector3(-43,16.55,6.491),pitch:0,yaw:75,level:{containerDiv:document.getElementById("panoramicNavigation"),dataUrl:"datas/半径项目Revit文件/bimi-level-map.json",level:"B1"},poi:[{id:101,name:"地库第一出口",data:{image:"datas/skybox/1235.jpg",bim:"datas/半径项目Revit文件/bim.bin",defaultQuaternion:{x:-.06635499364895026,y:.11403174830228421,z:.007633527392872102,w:.9912292895473359},position:new BIMI.THREE.Vector3(-43,16.55,6.491),pitch:0,yaw:75}},{id:102,name:"我的测试位置",data:{image:"datas/skybox/1236.jpg",bim:"datas/半径项目Revit文件/bim.bin",defaultQuaternion:{x:0,y:0,z:0,w:1},position:new BIMI.THREE.Vector3(-45,16.55,26.491),pitch:0,yaw:75}}]}),e.on("POIClick",(function(i){}))}))},beforeDestroy:function(){e&&e.dispose()}},s=c,d=(t("8536"),t("2877")),r=Object(d["a"])(s,a,o,!1,null,"11d6e2b9",null);n["default"]=r.exports}}]);