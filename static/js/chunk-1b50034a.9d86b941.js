(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b50034a"],{3949:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rootDiv"},[r("div",{staticClass:"messageDiv"},[e._v(" 根据构件类型，设置构件自定义材质(替换原始材质，即永久材质),之后对构件进行reset()操作，恢复的也是设置的材质 "),r("br"),e._v(" 示例中设置了水管和控制阀的样式 ")]),r("div",{attrs:{id:"containerDiv"}}),r("pre",{staticClass:"line-numbers"},[r("code",{staticClass:"language-js"},[e._v("#代码示范\n        replaceStyle(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            viewer.overrideProductsColorByType(['IfcFlowSegment','IfcFlowFitting'],'#0b4161',0.2)\n            viewer.overrideProductsColorByType(['IfcFlowController'],'#d40000',0.8)\n            \n            // 也可以定义一个材质对象去替换\n            // var material = viewer.createLambertMaterial('#0499fd',0.5,true)\n            // viewer.overridProductMaterial(1,[430,573],material);\n            viewer.isDirty();\n        }\n")])])])}],o={name:"UpdateStyleByType",data:function(){return{loading:!0}},methods:{replaceStyle:function(){var e=BIMI.ViewerHelper.getViewer();e.overrideProductsColorByType(["IfcFlowSegment","IfcFlowFitting"],"#0b4161",.2),e.overrideProductsColorByType(["IfcFlowController"],"#d40000",.8),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){var t=document.getElementById("containerDiv"),r=new BIMI.BimViewer(t);r.load("datas/消防及屋面绿化水箱/bim.bin"),r.on("loaded",(function(t){e.replaceStyle()})),r.on("pick",(function(e){var t=e.data[0].modelId,i=e.data[0].productId,n=r.getProduct(t,i);console.info(n)})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},a=o,l=(r("b850"),r("2877")),c=Object(l["a"])(a,i,n,!1,null,"2a9aff5c",null);t["default"]=c.exports},6476:function(e,t,r){},b850:function(e,t,r){"use strict";r("6476")}}]);