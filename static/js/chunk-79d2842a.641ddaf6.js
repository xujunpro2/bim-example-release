(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79d2842a"],{6331:function(t,e,n){"use strict";n("c2b2")},6867:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rootDiv"},[e("div",{staticClass:"messageDiv"},[t._v(" 场景融合了一个BIM模型和一个GLTF头盔模型 ")]),e("div",{attrs:{id:"containerDiv"}}),e("pre",{staticClass:"line-numbers"},[e("code",{staticClass:"language-js"},[t._v("#代码示范\n//加载BIM模型\nviewer.load('datas/rac_basic_sample_project/bim.bin');\n//加载GLTF模型，location是设置模型的位置，如果不设置该参数，则GLTF模型会以(0,0,0)为默认基点\nviewer.loadGLTF('datas/gltf/DamagedHelmet.gltf',{location:new BIMI.THREE.Vector3(0,10,0)});\n})")])])])}],o={name:"gltf",data:function(){return{}},methods:{},mounted:function(){this.$nextTick((function(){var t=document.getElementById("containerDiv"),e=new BIMI.BimViewer(t,{grid:!1});e.load("datas/rac_basic_sample_project/bim.bin"),e.loadGLTF("datas/gltf/DamagedHelmet.gltf",{location:new BIMI.THREE.Vector3(0,10,0),updateRegion:!1}),e.on(BIMI.ViewerEvent.DBL_CLICK,(function(t){var n=t.source;if("bim"===n){var a=t.data,i=a[0].modelId,o=a[0].productId;e.zoomToProduct(i,o,!0)}})),Prism.highlightAll()}))},beforeDestroy:function(){var t=BIMI.ViewerHelper.getViewer();t&&t.dispose()}},s=o,c=(n("6331"),n("2877")),r=Object(c["a"])(s,a,i,!1,null,"4d317d40",null);e["default"]=r.exports},c2b2:function(t,e,n){}}]);