(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d383caf2"],{"2fa6":function(n,i,e){},7695:function(n,i,e){"use strict";e.r(i);var l=function(){var n=this;n._self._c;return n._m(0)},t=[function(){var n=this,i=n._self._c;return i("div",{staticClass:"rootDiv"},[i("div",{staticClass:"messageDiv"},[n._v(" Billboard广告牌采用了CSS3Render渲染。 "),i("br"),n._v("也是采用Dom渲染，但能随三维场景同步缩放变形。 "),i("br"),n._v("因为底层是Dom，所以无法遮挡。 ")]),i("div",{attrs:{id:"containerDiv"}}),i("pre",{staticClass:"line-numbers"},[i("code",{staticClass:"language-js"},[n._v("#代码示范\n        addBillboard(){\n            var viewer = BIMI.ViewerHelper.getViewer();\n            var plugin = viewer.getPlugin('BillboardPlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.BillboardPlugin();\n                viewer.addPlugin(plugin);\n            }\n          \n            //使用自带的billboard样式dom，也可以自己创建好dom或html文本作为参数。\n            let dom = plugin.createBillboard2('主离心机','温度:-12℃')\n            plugin.add({\n                id:1,\n                dom:dom,\n                position:new BIMI.THREE.Vector3(-7,4,-6),\n                scale:0.05,\n                distance:50\n            });\n\n            let dom2 = plugin.createBillboard2('备离心机','温度:-7℃')\n            plugin.add({\n                id:2,\n                dom:dom2,\n                position:new BIMI.THREE.Vector3(7,4,-6),\n                scale:0.05,\n                distance:50\n            });\n\n            viewer.isDirty();\n\n            \n\n            //如果想移除某个广告牌,可以通过remove(id)实现\n            //plugin.remove(100)     \n            //移除所有\n            //plugin.removeAll();\n            //获得场景中的某个广告牌,可以通过get(id)实现\n            //plugin.get(100);\n        }   \n")])])])}],r={name:"Billboard",data:function(){return{}},methods:{addBillboard:function(){var n=BIMI.ViewerHelper.getViewer(),i=n.getPlugin("BillboardPlugin");i||(i=new BIMI.BillboardPlugin,n.addPlugin(i));var e=i.createBillboard2("主离心机","温度:-12℃");i.add({id:1,dom:e,position:new BIMI.THREE.Vector3(-7,4,-6),scale:.05,distance:50});var l=i.createBillboard2("备离心机","温度:-7℃");i.add({id:2,dom:l,position:new BIMI.THREE.Vector3(7,4,-6),scale:.05,distance:50}),n.isDirty()}},mounted:function(){var n=this;this.$nextTick((function(){var i=document.getElementById("containerDiv"),e=new BIMI.BimViewer(i,{grid:!1});e.load("datas/冷站/bim.bin"),e.on("loaded",(function(i){n.addBillboard()})),Prism.highlightAll()}))},beforeDestroy:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}},a=r,d=(e("e335"),e("2877")),o=Object(d["a"])(a,l,t,!1,null,"305836d1",null);i["default"]=o.exports},e335:function(n,i,e){"use strict";e("2fa6")}}]);