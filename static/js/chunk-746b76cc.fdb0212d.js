(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746b76cc"],{"2cd9":function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"rootDiv"},[t("div",{staticClass:"messageDiv"},[n._v(" 二维标记是采用html div的方式在场景中放置文本标签。 "),t("br"),n._v("优点是文字清晰度高并且始终可见。 "),t("br"),n._v("缺点是因为div没有Z方向坐标，所以缺乏三维感。 ")]),t("div",{attrs:{id:"containerDiv"}}),t("pre",{staticClass:"line-numbers"},[t("code",{staticClass:"language-js"},[n._v("#代码示范\n        addLabel()\n        {\n            var viewer = BIMI.ViewerHelper.getViewer();\n            var plugin = viewer.getPlugin('HtmlLabelPlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.HtmlLabelPlugin();\n                viewer.addPlugin(plugin);\n            }\n            /**\n            * 参数说明 \n            * id:label标识，在click的时候会返回，文本类型\n            * position:new THREE.Vector3(0,0,0)\n            * text:文字\n            * fontColor：#ffffff\n            * backgroundColor：#32d3a6\n            * fontSize：16px\n            */\n            plugin.addLabel({\n                id:100,\n                bindData:{name:'我是绑定数据A'},\n                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),\n                text:'1#离心机',\n                fontColor:'#fff',\n                backgroundColor:'#485663',\n                fontSize:'14px',\n                distance:40 \n            })\n            plugin.addLabel({\n                id:101,\n                bindData:{name:'我是绑定数据B'},\n                position:new BIMI.THREE.Vector3(1.3,3.7,-4.5),\n                text:'2#离心机',\n                fontColor:'#fff',\n                backgroundColor:'#485663',\n                fontSize:'14px'\n            })\n\n            //设置label可见性\n            //labelPlugin.setVisible(100,false);\n\n            //彻底移除某个Label\n            //labelPlugin.removeLabel(100)     \n            \n            //label可以绑定点击事件\n            plugin.on('click',function(data){\n               alert(data.name);\n            })\n        }   \n")])])])}],l=(t("b0c0"),{name:"HtmlLabel",data:function(){return{}},methods:{addLabel:function(){var n=BIMI.ViewerHelper.getViewer(),e=n.getPlugin("HtmlLabelPlugin");e||(e=new BIMI.HtmlLabelPlugin,n.addPlugin(e)),e.addLabel({id:100,bindData:{name:"我是绑定数据A"},position:new BIMI.THREE.Vector3(-2,3.7,-4.5),text:"1#离心机",fontColor:"#fff",backgroundColor:"#485663",fontSize:"14px",distance:40}),e.addLabel({id:101,bindData:{name:"我是绑定数据B"},position:new BIMI.THREE.Vector3(1.3,3.7,-4.5),text:"2#离心机",fontColor:"#fff",backgroundColor:"#485663",fontSize:"14px"}),e.on("click",(function(n){alert(n.name)}))}},mounted:function(){var n=this;this.$nextTick((function(){var e=document.getElementById("containerDiv"),t=new BIMI.BimViewer(e);t.load("datas/冷站/bim.bin"),t.on("loaded",(function(e){n.addLabel()})),Prism.highlightAll()}))},beforeDestroy:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}}),o=l,r=(t("7541"),t("2877")),d=Object(r["a"])(o,i,a,!1,null,"0261f28e",null);e["default"]=d.exports},7541:function(n,e,t){"use strict";t("efc4")},efc4:function(n,e,t){}}]);