(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22d2e6d0"],{"0ee6":function(e,n,i){"use strict";i("9a88")},7695:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{staticClass:"messageDiv"},[e._v(" Billboard广告牌采用了CSS3Render渲染。 "),n("br"),e._v("也是采用Dom渲染，但能随三维场景同步缩放变形。 "),n("br"),e._v("因为底层是Dom，所以无法遮挡。 "),n("el-button",{on:{click:e.update}},[e._v("改变位置和标签内容")])],1),n("div",{attrs:{id:"containerDiv"}}),e._m(0)])},l=[function(){var e=this,n=e._self._c;return n("pre",{staticClass:"line-numbers"},[n("code",{staticClass:"language-js"},[e._v("#代码示范\n        addBillboard()\n        {\n            var viewer = BIMI.ViewerHelper.getViewer();\n            var plugin = viewer.getPlugin('BillboardPlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.BillboardPlugin();\n                viewer.addPlugin(plugin);\n            }\n          \n            //使用自带的billboard样式dom，也可以自己创建好dom或html文本作为参数。\n            let dom = plugin.createBillboard2('主离心机','温度:-12℃')\n            plugin.addLabel({\n                id:1,\n                dom:dom,\n                position:new BIMI.THREE.Vector3(-7,4,-6),\n                scale:0.05,\n                distance:50\n            });\n\n            let dom2 = plugin.createBillboard2('备离心机','温度:-7℃')\n            plugin.addLabel({\n                id:2,\n                dom:dom2,\n                position:new BIMI.THREE.Vector3(7,4,-6),\n                scale:0.05,\n                distance:50\n            });\n\n            viewer.isDirty();\n        }    \n")])])}],a={name:"Billboard",data:function(){return{}},methods:{update:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getPlugin("BillboardPlugin");n.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5),new BIMI.THREE.Vector3(0,0,0));var i=n.getLabelDom(100);i.querySelector(".text").innerHTML="温度:34℃"},addBillboard:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getPlugin("BillboardPlugin");n||(n=new BIMI.BillboardPlugin,e.addPlugin(n));var i=n.createBillboard2("主离心机","温度:-12℃");n.addLabel({id:100,dom:i,position:new BIMI.THREE.Vector3(-7,4,-6),scale:.05,distance:50});var t=n.createBillboard2("备离心机","温度:-7℃");n.addLabel({id:101,dom:t,position:new BIMI.THREE.Vector3(7,4,-6),scale:.05,distance:50}),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){var n=document.getElementById("containerDiv"),i=new BIMI.BimViewer(n,{grid:!1});i.load("datas/冷站/bim.bin"),i.on("loaded",(function(n){e.addBillboard()})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},r=a,d=(i("0ee6"),i("2877")),o=Object(d["a"])(r,t,l,!1,null,"7d22dfee",null);n["default"]=o.exports},"9a88":function(e,n,i){}}]);