(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57c57934"],{"187f":function(n,e,i){"use strict";i("5e3c")},"1e7b":function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"rootDiv"},[i("div",{staticClass:"messageDiv"},[i("el-button",{attrs:{size:"mini"},on:{click:n.run}},[n._v("下雪")]),i("el-button",{attrs:{size:"mini"},on:{click:n.stop}},[n._v("停止")])],1),i("div",{attrs:{id:"containerDiv"}}),n._m(0)])},s=[function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("pre",{staticClass:"line-numbers"},[i("code",{staticClass:"language-js"},[n._v("#代码示范\n        run(){\n            let viewer = BIMI.ViewerHelper.getViewer();\n            //设置场景背景色深色，这样雨天的效果会更好\n            viewer.setSceneBackground(new BIMI.THREE.Color('#333333'))\n            let snowPlugin = viewer.getPlugin('SnowMaskPlugin');\n            if(snowPlugin == null)\n            {\n                //size:雪花大小，默认是0.035\n                //speed:速度,默认是1.0,越大速度越快\n                //density:密度,默认是0.3,越大越密集\n                snowPlugin = new BIMI.SnowMaskPlugin({\n                    size:0.035,\n                    speed:1.0,\n                    density:0.3\n                });\n                viewer.addPlugin(snowPlugin);\n            }\n            snowPlugin.start();\n        },\n        stop(){\n            let viewer = BIMI.ViewerHelper.getViewer();\n            //场景不用背景色\n            viewer.setSceneBackground(null);\n            let snowPlugin = viewer.getPlugin('SnowMaskPlugin');\n            if(snowPlugin)\n            {\n                snowPlugin.stop();\n            }\n        }\n")])])}],r={name:"Snow",data:function(){return{}},methods:{run:function(){var n=BIMI.ViewerHelper.getViewer();n.setSceneBackground(new BIMI.THREE.Color("#333333"));var e=n.getPlugin("SnowMaskPlugin");null==e&&(e=new BIMI.SnowMaskPlugin({size:.035,speed:1,density:.3}),n.addPlugin(e)),e.start()},stop:function(){var n=BIMI.ViewerHelper.getViewer();n.setSceneBackground(null);var e=n.getPlugin("SnowMaskPlugin");e&&e.stop()}},mounted:function(){this.$nextTick((function(){var n=document.getElementById("containerDiv"),e=new BIMI.BimViewer(n,{grid:!1,debug:!0,loading:!0,enableInstancedMesh:!0});e.load("datas/rac_basic_sample_project/bim.bin"),Prism.highlightAll()}))},beforeDestroy:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}},l=r,o=(i("187f"),i("2877")),u=Object(o["a"])(l,t,s,!1,null,"907a60de",null);e["default"]=u.exports},"5e3c":function(n,e,i){}}]);