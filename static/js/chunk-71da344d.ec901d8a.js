(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71da344d"],{"5bc9":function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n._self._c;return e("div",{staticClass:"rootDiv"},[e("div",{staticClass:"messageDiv"},[n._v(" 二维标记是采用html div的方式在场景中放置文本标签。 "),e("br"),n._v("优点是文字清晰度高并且始终可见。 "),e("br"),n._v("缺点是因为div没有Z方向坐标，所以缺乏三维感。 "),e("el-button",{on:{click:n.update}},[n._v("改变位置和标签内容")])],1),e("div",{attrs:{id:"containerDiv"}}),n._m(0)])},r=[function(){var n=this,e=n._self._c;return e("pre",{staticClass:"line-numbers"},[e("code",{staticClass:"language-js"},[n._v("#代码示范\n            var viewer = BIMI.ViewerHelper.getViewer();\n            let plugin = viewer.getPlugin('HtmlIconLabelPlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.HtmlIconLabelPlugin();\n                viewer.addPlugin(plugin);\n            }\n            /**\n             * 添加html label\n             * @param {*} option\n             * id:String/Number 标签ID "),e("br"),n._v("\n             * bindData:object 业务绑定数据，可以在pick的时候返回  "),e("br"),n._v("\n             * position:new BIMI.THREE.Vector3(0,0,0)  "),e("br"),n._v("\n             * icon: String icon-font css表达式  "),e("br"),n._v("\n             * text：String 标签文字  "),e("br"),n._v("\n             * color: String icon的背景色  "),e("br"),n._v("\n             * offset:Array 位置像素偏移量,默认[0,0]  "),e("br"),n._v("\n             * distance:100 视距，默认是null，就无限制  "),e("br"),n._v("\n             */\n            plugin.addLabel({\n                id:1234,\n                bindData:{id:1234,worker:'jack'},\n                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),\n                offset:[0,-30],\n                icon:'myfont iconmarker',\n                text:'一号离心机',\n                color:'#00ffff',\n                distance:null\n            });\n            \n\n            plugin.on('click',data=>{\n                alert(data.worker);\n            })\n\n            viewer.isDirty();\n")])])}],o={name:"HtmlIconLabel",data:function(){return{}},methods:{update:function(){var n=BIMI.ViewerHelper.getViewer(),e=n.getPlugin("HtmlIconLabelPlugin");e.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5)),e.updateContent(100,{color:"#00ff00",text:"修改后的文本"});var i=e.getLabelDom(100);console.info(i)},addLabel:function(){var n=BIMI.ViewerHelper.getViewer(),e=n.getPlugin("HtmlIconLabelPlugin");e||(e=new BIMI.HtmlIconLabelPlugin,n.addPlugin(e)),e.addLabel({id:100,bindData:{worker:"jack"},position:new BIMI.THREE.Vector3(-2,3.7,-4.5),offset:[0,-30],icon:"myfont iconmarker",text:"一号离心机",color:"#00ffff",distance:null}),e.on("click",(function(n){alert(n.worker)})),n.isDirty()}},mounted:function(){var n=this;this.$nextTick((function(){var e=document.getElementById("containerDiv"),i=new BIMI.BimViewer(e);i.load("datas/冷站/bim.bin"),i.on("loaded",(function(e){n.addLabel()})),Prism.highlightAll()}))},beforeDestroy:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}},a=o,l=(i("ceb7"),i("2877")),c=Object(l["a"])(a,t,r,!1,null,"41cecc2e",null);e["default"]=c.exports},"5f4a":function(n,e,i){},ceb7:function(n,e,i){"use strict";i("5f4a")}}]);