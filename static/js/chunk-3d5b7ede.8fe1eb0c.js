(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d5b7ede"],{"4a4f":function(e,t,n){},"6d0f":function(e,t,n){"use strict";n("4a4f")},"80e3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this;e._self._c;return e._m(0)},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"rootDiv"},[t("div",{staticClass:"messageDiv"},[e._v(" 构件旋转的基点是构件局部坐标基点(0,0,0),所以构件自转还是公转，需要建模人员在建模时处理。 "),t("br"),e._v(" 如果想围绕构件中心点自转:建模时，确保构件局部坐标基点(0,0,0)处于构件中心 ")]),t("div",{attrs:{id:"containerDiv"}}),t("pre",{staticClass:"line-numbers"},[t("code",{staticClass:"language-js"},[e._v("#代码示范\n        start(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            var plugin = viewer.getPlugin('RotatePlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.RotatePlugin();\n                viewer.addPlugin(plugin);\n            }\n            var option = {\n                repeat:true,//重复播放\n                productData:[{modelId:1,productIds:[{id:42582}]}],\n                y:360,\n                time:2000\n            }\n            plugin.ratateXYZ(option);\n            viewer.isDirty();\n        },\n")])])])}],r={name:"TweenRotate",data:function(){return{}},methods:{start:function(){var e=BIMI.ViewerHelper.getViewer(),t=e.getPlugin("RotatePlugin");t||(t=new BIMI.RotatePlugin,e.addPlugin(t));var n={repeat:!0,productData:[{modelId:1,productIds:[{id:42582}]}],y:360,time:2e3};t.ratateXYZ(n),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){var t=document.getElementById("containerDiv"),n=new BIMI.BimViewer(t);n.load("datas/冷站/bim.bin"),n.on("loaded",(function(t){e.start()})),n.on("pick",(function(e){var t=e.data;console.info(t)})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},o=r,s=(n("6d0f"),n("2877")),u=Object(s["a"])(o,i,a,!1,null,"f712e788",null);t["default"]=u.exports}}]);