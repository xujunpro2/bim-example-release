(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c594d57"],{"9d66":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{staticClass:"messageDiv"},[e._v(" 自定义Dom的 DIV 标签。 "),n("br"),e._v("优点是清晰度高并且始终可见。 "),n("br"),e._v("缺点是因为div没有Z方向坐标，所以缺乏三维感。 "),n("el-button",{on:{click:e.update}},[e._v("改变位置和标签内容")])],1),n("div",{attrs:{id:"containerDiv"}}),e._m(0)])},o=[function(){var e=this,n=e._self._c;return n("pre",{staticClass:"line-numbers"},[n("code",{staticClass:"language-js"},[e._v("#代码示范\n        addLabel()\n        {\n            var viewer = BIMI.ViewerHelper.getViewer();\n            var plugin = viewer.getPlugin('HtmlDomPlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.HtmlDomPlugin();\n                viewer.addPlugin(plugin);\n            }\n            var domStr = `"),n("div",{staticStyle:{position:"absolute",width:"120px",height:"60px","font-size":"14px",color:"#fff","border-radius":"10px",border:"1px solid rgba(127,255,255,0.25)","text-align":"center","line-height":"normal","background-color":"rgba(0,127,127,0.5)"},attrs:{id:"hello"}},[e._v("\n                    "),n("span",[e._v("1#离心机")]),e._v("\n                    "),n("br"),e._v("\n                    "),n("img",{attrs:{width:"36",height:"36",src:"vue.png"}}),e._v("\n                ")]),e._v("`\n            /**\n             * 根据Dom创建并返回该三维对象\n             * @param {Object} option \n             * id:Number 标签对象的ID，可以通过该ID来查询/删除标签\n             * dom:dom对象或者是html文本\n             * position:位置Vector3对象,该dom的中心点将置于position\n             * offset:[x,y] dom位置偏移像素，默认是0,0\n             * bindData:object 业务绑定数据，可以在pick的时候返回\n             * distance:Number 视距\n             */\n            plugin.addLabel({\n                id:100,\n                bindData:{name:'我是绑定数据A'},\n                position:new BIMI.THREE.Vector3(-2,3.7,-4.5),\n                offset:[0,-40],\n                dom:domStr,\n                distance:40 \n            })\n        }   \n")])])}],r={name:"HtmlDom",data:function(){return{}},methods:{update:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getPlugin("HtmlDomPlugin");n.updatePosition(100,new BIMI.THREE.Vector3(-2,6.7,-4.5)),n.updateContent(100,{dom:'<div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" >\n                    <span>修改后的文本</span>\n                    <br/>\n                    <img width="36" height="36" src="vue.png"/>\n                </div>'});var i=n.getLabelDom(100);console.info(i),setTimeout((function(){i.querySelector("#hello span").innerHTML="直接操作dom"}),2e3)},addLabel:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getPlugin("HtmlDomPlugin");n||(n=new BIMI.HtmlDomPlugin,e.addPlugin(n));var i='<div id="hello" style="position: absolute;width: 120px;height: 60px;font-size: 14px;color:#fff;border-radius: 10px;border: 1px solid rgba(127,255,255,0.25);text-align: center;line-height: normal;background-color: rgba(0,127,127,0.5);" >\n                    <span>1#离心机</span>\n                    <br/>\n                    <img width="36" height="36" src="vue.png"/>\n                </div>';n.addLabel({id:100,bindData:{name:"我是绑定数据A"},position:new BIMI.THREE.Vector3(-2,3.7,-4.5),offset:[0,-40],dom:i,distance:40})}},mounted:function(){var e=this;this.$nextTick((function(){var n=document.getElementById("containerDiv"),i=new BIMI.BimViewer(n,{grid:!1});i.load("datas/冷站/bim.bin"),i.on("loaded",(function(n){e.addLabel()})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},a=r,d=(i("e978"),i("2877")),l=Object(d["a"])(a,t,o,!1,null,"2a66303e",null);n["default"]=l.exports},e978:function(e,n,i){"use strict";i("fee4")},fee4:function(e,n,i){}}]);