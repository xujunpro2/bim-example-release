(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f736a4"],{"1fba":function(e,t,i){"use strict";i("e968")},e968:function(e,t,i){},fa35:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this;e._self._c;return e._m(0)},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"rootDiv"},[t("div",{attrs:{id:"containerDiv"}}),t("pre",{staticClass:"line-numbers"},[t("code",{staticClass:"language-js"},[e._v("#代码示范\n            这个功能是一个展示全景图通过鼠标左键双击动态添加标签的示例。\n")])])])}],r={name:"PanoramicLabel",data:function(){return{}},methods:{createPanoramic:function(){var e=document.getElementById("containerDiv"),t=new BIMI.BimViewer(e,{id:"main"});t.setScenePanoramic("datas/skybox/1235.jpg",!0),t.on(BIMI.ViewerEvent.PANORAMIC_DOUBLE_CLICK,(function(e){var i=t.getPlugin("HtmlLabelPlugin");i||(i=new BIMI.HtmlLabelPlugin,t.addPlugin(i)),i.addLabel({id:(new Date).getTime(),position:e,text:"标签",fontColor:"#fff",backgroundColor:"#485663",fontSize:"14px"}),t.isDirty()})),this.setPanoramicDefaultOrbit()},setPanoramicDefaultOrbit:function(){var e=BIMI.ViewerHelper.getViewer("main"),t={position:{x:0,y:0,z:0},quaternion:{x:-.06635499364895026,y:.11403174830228421,z:.007633527392872102,w:.9912292895473359},target:{x:0,y:0,z:0},zoom:1};e.setDefaultOrbitState(t),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){e.createPanoramic(),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer("main");e.dispose()}},o=r,s=(i("1fba"),i("2877")),c=Object(s["a"])(o,n,a,!1,null,"4dcebdbe",null);t["default"]=c.exports}}]);