(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44aa6f0e"],{"939f":function(e,n,r){},a470:function(e,n,r){"use strict";r("939f")},b5be:function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"rootDiv"},[r("div",{staticClass:"messageDiv"},[e._v(" 点击按钮,切换模型不同样式。 "),r("br"),r("el-button",{attrs:{size:"mini"},on:{click:e.onTransparent}},[e._v("透明模式(指定颜色和透明度)")]),r("p"),r("el-button",{attrs:{size:"mini"},on:{click:e.onTransparentSaveOriginalMaterial}},[e._v("透明模式(保留原始材质)")]),r("p"),r("el-button",{attrs:{size:"mini"},on:{click:e.onReset}},[e._v("原始模式")])],1),r("div",{attrs:{id:"containerDiv"}}),e._m(0)])},a=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("pre",{staticClass:"line-numbers"},[r("code",{staticClass:"language-js"},[e._v("#代码示范\n        onTransparent(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            viewer.setNormalModel(1);\n            viewer.setTransparentModel(1,'#ffffff',0.3);\n            this.curModel = 'transparent'\n        },\n        onTransparentSaveOriginalMaterial(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            viewer.setNormalModel(1);\n            viewer.setTransparentModelSaveOriginalMaterial(1,0.3);\n            this.curModel = 'transparentSaveOriginalMaterial'\n        },\n \n        onReset(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            viewer.setNormalModel(1);\n            this.curModel = 'normal';\n        },  \n\n")])])}],i={name:"ModeStyle",data:function(){return{curModel:"normal"}},methods:{onTransparent:function(){var e=BIMI.ViewerHelper.getViewer();e.setNormalModel(1),e.setTransparentModel(1,"#ffffff",.3),this.curModel="transparent"},onTransparentSaveOriginalMaterial:function(){var e=BIMI.ViewerHelper.getViewer();e.setNormalModel(1),e.setTransparentModelSaveOriginalMaterial(1,.3),this.curModel="transparentSaveOriginalMaterial"},onReset:function(){var e=BIMI.ViewerHelper.getViewer();e.setNormalModel(1),this.curModel="normal"}},mounted:function(){this.$nextTick((function(){var e=document.getElementById("containerDiv"),n=new BIMI.BimViewer(e);n.load("datas/rac_basic_sample_project/bim.bin"),n.on("loaded",(function(e){})),n.on("pick",(function(e){console.info(e)})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},o=i,s=(r("a470"),r("2877")),l=Object(s["a"])(o,t,a,!1,null,"59565150",null);n["default"]=l.exports}}]);