(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c033df5"],{6705:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"rootDiv"},[i("div",{staticClass:"messageDiv"},[i("el-button",{attrs:{size:"mini"},on:{click:e.setEdge}},[e._v("设置边框")]),i("p"),i("el-button",{attrs:{size:"mini"},on:{click:e.clearEdge}},[e._v("清除边框")])],1),i("div",{attrs:{id:"containerDiv"}}),e._m(0)])},l=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("pre",{staticClass:"line-numbers"},[i("code",{staticClass:"language-js"},[e._v("#代码示范\n        //设置边框\n        setEdge(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            if(viewer)\n            {\n                let plugin =viewer.getPlugin('EdgePlugin');\n                if(plugin == null)\n                {\n                    plugin = new BIMI.EdgePlugin();\n                    viewer.addPlugin(plugin);\n                }\n                //设置边框可以重复调用，每次都会自动先清除边框并根据场景重新计算并绘制构件边框，该过程是异步的\n                plugin.enabelEdge();\n            }   \n        },\n        //清除边框\n        clearEdge(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            if(viewer)\n            {\n                let plugin =viewer.getPlugin('EdgePlugin');\n                if(plugin == null)\n                {\n                    plugin = new BIMI.EdgePlugin();\n                    viewer.addPlugin(plugin);\n                }\n                plugin.disabelEdge();\n            }   \n        }\n\n        //可通过EdgePlguin的enabled属性设置插件是否可用\n        //可指定哪些类型的构件需要绘制边框\n        /**\n        * 指定以下类型的构件才绘制边框,该函数必须在setEdge()之前调用才起效\n        * @param {Array} categoryArray 一个可包含Revit或IFC类型定义的数组\n        */\n        setCategory(categoryArray)\n\n        //可指定边框线的颜色\n        /**\n        * 设置边框线颜色,该函数必须在setEdge()之前调用才起效\n        * @param {string} color 颜色，默认值是'#000000'\n        */\n        setLineColor(color)\n  \n")])])}],r={name:"ModeStyle",data:function(){return{curModel:"normal"}},methods:{setEdge:function(){var e=BIMI.ViewerHelper.getViewer();if(e){var n=e.getPlugin("EdgePlugin");null==n&&(n=new BIMI.EdgePlugin,e.addPlugin(n)),n.enabelEdge()}},clearEdge:function(){var e=BIMI.ViewerHelper.getViewer();if(e){var n=e.getPlugin("EdgePlugin");null==n&&(n=new BIMI.EdgePlugin,e.addPlugin(n)),n.disabelEdge()}}},mounted:function(){this.$nextTick((function(){var e=document.getElementById("containerDiv"),n=new BIMI.BimViewer(e);n.load("datas/rac_basic_sample_project/bim.bin"),n.on(BIMI.ViewerEvent.LOADED,(function(e){console.info(e)})),n.on(BIMI.ViewerEvent.PICK,(function(e){})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},a=r,g=(i("b604"),i("2877")),u=Object(g["a"])(a,t,l,!1,null,"60e61083",null);n["default"]=u.exports},ad18:function(e,n,i){},b604:function(e,n,i){"use strict";i("ad18")}}]);