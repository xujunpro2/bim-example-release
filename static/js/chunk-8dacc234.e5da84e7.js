(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dacc234"],{c240:function(n,e,i){"use strict";i("ddf1")},cc36:function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n._self._c;return e("div",{staticClass:"rootDiv"},[e("div",{staticClass:"messageDiv"},[n._v(" 标记标签混合了标记图标和html div。 "),e("br"),n._v("你可以点击圆形标记设置内容面板显示/隐藏。 "),e("el-button",{on:{click:n.update}},[n._v("改变位置和标签内容")])],1),e("div",{attrs:{id:"containerDiv"}}),n._m(0)])},a=[function(){var n=this,e=n._self._c;return e("pre",{staticClass:"line-numbers"},[e("code",{staticClass:"language-js"},[n._v("#代码示范\n            var viewer = BIMI.ViewerHelper.getViewer();\n            var plugin = viewer.getPlugin('HtmlMarkerPlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.HtmlMarkerPlugin();\n                viewer.addPlugin(plugin);\n            }\n            /**\n             * 添加一个标签\n             * 参数说明:\n             *      id:对象id \n             *      bindData:业务绑定数据object，可以在点击 falg的时候返回 \n             *      flag: 圆形标记的文字，通常是数字或大写字母，单个字符 。flag和flagImg两者设置其一即可\n             *      flagImg:圆形标记采用图片，最好是12*12的小图片。flag和flagImg两者设置其一即可\n             *      flagColor: 圆形标记的背景填充色。默认值:'rgba(255, 0, 0, 0.8)'\n             *      content:内容Div的内容文件，可以是Html文本，也可以是dom \n             *      contentVisible:内容Div默认是否可见，内容Div可通过点击圆形标记切换可见性。默认值: false\n             *      width:内容Div的宽度css,如:'150PX'。如果不设置，就自适应 \n             *      position: 位置,圆形标记的圆心将以这个位置为准 。BIMI.THREE.Vector3\n             *      distance: 视距\n             */\n            plugin.addLabel({\n                id:100,\n                bindData:{name:'绑定数据'},\n                //flag:'1',\n                flagImg:'pictures/HtmlMarkerText.png',\n                flagColor:'rgba(255, 0, 0, 0.8)',\n                content:'可以支持html表达文本',\n                contentVisible:false,\n                position:new BIMI.THREE.Vector3(-3.5,3,-4.5),\n                distance:50\n            })\n            //marker标记支持click事件\n            plugin.on('click',event=>{\n                console.info(event)\n            })\n            //移除标签\n            // setTimeout(() => {\n            //      plugin.removeLabel(100)\n            // }, 2000);\n           \n")])])}],l={name:"HtmlMarkerText",data:function(){return{loading:!0}},methods:{update:function(){var n=BIMI.ViewerHelper.getViewer(),e=n.getPlugin("HtmlMarkerPlugin");e.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5)),e.updateContent(100,{dom:'<div style="color:#ff0000">修改后的文本</div>'});var i=e.getLabelDom(100);console.info(i)},addLabel:function(){var n=BIMI.ViewerHelper.getViewer(),e=n.getPlugin("HtmlMarkerPlugin");e||(e=new BIMI.HtmlMarkerPlugin,n.addPlugin(e)),e.addLabel({id:100,bindData:{name:"绑定数据"},flagImg:"pictures/HtmlMarkerText.png",flagColor:"rgba(255, 0, 0, 0.8)",content:"可以支持html表达文本",contentVisible:!1,position:new BIMI.THREE.Vector3(-3.5,3,-4.5),distance:50}),e.on("click",(function(n){console.info(n)}))}},mounted:function(){var n=this;this.$nextTick((function(){var e=document.getElementById("containerDiv"),i=new BIMI.BimViewer(e);i.load("datas/冷站/bim.bin"),i.on("loaded",(function(e){n.addLabel()})),i.on("pick",(function(n){console.info(n)})),Prism.highlightAll()}))},beforeDestroy:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}},o=l,r=(i("c240"),i("2877")),c=Object(r["a"])(o,t,a,!1,null,"1fe7c2e0",null);e["default"]=c.exports},ddf1:function(n,e,i){}}]);