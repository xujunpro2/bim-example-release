(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ad6391"],{"62f0":function(n,e,t){},"67cd":function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"rootDiv"},[t("div",{staticClass:"messageDiv"},[t("el-button",{attrs:{size:"mini"},on:{click:n.onStart}},[n._v("开始(ESC可退出)")])],1),t("div",{attrs:{id:"containerDiv"}}),n._m(0)])},a=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{staticClass:"line-numbers"},[t("code",{staticClass:"language-js"},[n._v("#代码示范\n        onStart(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            let plugin =viewer.getPlugin('FpsPlugin');\n            if (!plugin) {\n                //设置键盘移动速度值，默认是30\n                plugin = new BIMI.FpsPlugin(30);\n                viewer.addPlugin(plugin);\n            }\n            //设置无视碰撞检测的构件类型,设置门可以穿透\n            plugin.addCollisionExceptionTypes([-2000023]);\n            //设置漫游过程中关注的构件，在靠近这些构件并且视锥以内，会触发插件的'attentionChange'回调,该API必须在start()之前调用才会起效\n            plugin.setAttentionProducts([\n                {modelId:1,productId:954641,distance:2}//关注起居室阳台上的小人构件\n            ])\n\n            plugin.start();\n            //启动重力感应\n            plugin.enabledGravity(true);\n            //启动碰撞检测\n            plugin.enableCollision(true);\n\n           \n            //通过attentionChange回调事件，可以在靠近看到或者离开关注构件的时候接收到消息\n            plugin.on('attentionChange', result=>{\n                if(result.length > 0)\n                {\n                    new BIMI.Tip(viewer,'靠近并看见这个小人构件了');\n                }\n                else\n                {\n                    new BIMI.Tip(viewer,'离开或看不到这个小人构件了');\n                }\n            });\n        }\n")])])}],r={name:"Fps",data:function(){return{}},methods:{setStartCamera:function(){var n=BIMI.ViewerHelper.getViewer(),e={position:{x:8.161841956545432,y:7.974899522342245,z:25.170655378224986},quaternion:{x:-.1375746771486283,y:-.02272461763993469,z:-.0031571914385477083,w:.990225647063734},target:{x:8.390136609619185,y:6.184924659093118,z:9.9242138145289},zoom:1};n.setOrbitState(e),n.isDirty()},onStart:function(){var n=BIMI.ViewerHelper.getViewer(),e=n.getPlugin("FpsPlugin");e||(e=new BIMI.FpsPlugin(30),n.addPlugin(e)),e.addCollisionExceptionTypes([-2000023]),e.setAttentionProducts([{modelId:1,productId:954641,distance:2}]),e.start(),e.enabledGravity(!0),e.enableCollision(!0),e.on("attentionChange",(function(e){e.length>0?new BIMI.Tip(n,"靠近并看见这个小人构件了"):new BIMI.Tip(n,"离开或看不到这个小人构件了")}))}},mounted:function(){var n=this;this.$nextTick((function(){var e=document.getElementById("containerDiv"),t=new BIMI.BimViewer(e);t.load("datas/rac_basic_sample_project/bim.bin"),t.on(BIMI.ViewerEvent.LOADED,(function(e){n.setStartCamera()})),Prism.highlightAll()}))},beforeDestroy:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}},s=r,o=(t("f909"),t("2877")),l=Object(o["a"])(s,i,a,!1,null,"c0a094ee",null);e["default"]=l.exports},f909:function(n,e,t){"use strict";t("62f0")}}]);