(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b1c41f1"],{"272b":function(e,n,t){"use strict";t("6ba8")},"6ba8":function(e,n,t){},"80e3":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this;e._self._c;return e._m(0)},r=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{staticClass:"messageDiv"},[e._v(" 构件旋转的基点是构件局部坐标基点(0,0,0),所以构件自转还是公转，需要建模人员在建模时处理。 "),n("br"),e._v(" 如果想围绕构件中心点自转:建模时，确保构件局部坐标基点(0,0,0)处于构件中心 ")]),n("div",{attrs:{id:"containerDiv"}}),n("pre",{staticClass:"line-numbers"},[n("code",{staticClass:"language-js"},[e._v("#代码示范\n        start(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            var plugin = viewer.getPlugin('RotatePlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.RotatePlugin();\n                viewer.addPlugin(plugin);\n            }\n            var option = {\n                repeat:true,//重复播放\n                modelId:1,\n                productIds:[{id:42582}],\n                y:360,\n                time:2000\n            }\n            /**\n            * 旋转，以mesh的局部坐标基点(0,0,0)为旋转中心点，\n            * @param {object} option 参数对象\n            * @example\n            * {\n            *      modelId:模型ID\n            *      productIds:构件ID和中心定义数组，例如：[{id:554644,center:center}]，其中center可以不设置\n            *      x: X方向旋转角度 默认0\n            *      y: Y方向旋转角度 默认0\n            *      z: Z方向旋转角度 默认0\n            *      time: 动画执行时长 毫秒,默认0，表示无动画过程\n            *      repeat:重复旋转 默认false\n            * }\n            */\n            plugin.rotateXYZ(option);\n            viewer.isDirty();\n        },\n")])])])}],a={name:"TweenRotate",data:function(){return{}},methods:{start:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getPlugin("RotatePlugin");n||(n=new BIMI.RotatePlugin,e.addPlugin(n));var t={repeat:!0,modelId:1,productIds:[{id:42582}],y:360,time:2e3};n.rotateXYZ(t),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){var n=document.getElementById("containerDiv"),t=new BIMI.BimViewer(n);t.load("datas/冷站/bim.bin"),t.on("loaded",(function(n){e.start()})),t.on("pick",(function(e){var n=e.data;console.info(n)})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},o=a,s=(t("272b"),t("2877")),u=Object(s["a"])(o,i,r,!1,null,"511e4bf6",null);n["default"]=u.exports}}]);