(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab7fa"],{1610:function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"containerDiv"}})},o=[],r={name:"BenLiu",data:function(){return{}},methods:{initView:function(){var n=document.getElementById("containerDiv"),e=new BIMI.BimViewer(n),i=new BIMI.SunPlugin({position:new BIMI.THREE.Vector3(-250,400,-150)});e.addPlugin(i),e.load("datas/奔牛枢纽模型/bim.bin");new BIMI.Toolbar(e)},destroyView:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}},mounted:function(){var n=this;this.$nextTick((function(){n.initView()}))},beforeDestroy:function(){this.destroyView()}},a=r,u=i("2877"),c=Object(u["a"])(a,t,o,!1,null,"9c577250",null);e["default"]=c.exports}}]);