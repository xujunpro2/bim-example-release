(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c280e5e"],{1445:function(e,n,i){},1494:function(e,n,i){"use strict";i("1445")},6059:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"rootDiv"},[i("div",{staticClass:"messageDiv"},[e._v(" 导航图在模型范围内可鼠标左键单击，主场景会将相机位置移动到该处 ")]),i("div",{attrs:{id:"containerDiv"}}),i("pre",{staticClass:"line-numbers"},[i("code",{staticClass:"language-js"},[e._v("#代码示范\n//PS:导航图中的绿色圆点代表的相机位置，三维场景中视野范围除了相机位置之外，还受相机本身欧拉角的影响\ncreateMap(){\n    let viewer = BIMI.ViewerHelper.getViewer();\n    let plugin = viewer.getPlugin('MapPlugin');\n    if(plugin == null)\n    {\n        plugin  = new BIMI.MapPlugin();\n        viewer.addPlugin(plugin);\n    }\n    plugin.createMap({blackAndWhite:true});//地图是否为黑色色调\n}")])])])}],r={name:"NavigationMap",data:function(){return{}},methods:{createMap:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getPlugin("NavigationMapPlugin");null==n&&(n=new BIMI.NavigationMapPlugin,e.addPlugin(n)),n.createMap({blackAndWhite:!0})}},mounted:function(){var e=this;this.$nextTick((function(){var n=document.getElementById("containerDiv"),i=new BIMI.BimViewer(n);i.load("datas/rac_basic_sample_project/bim.bin"),i.on(BIMI.ViewerEvent.LOADED,(function(n){e.createMap()})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},l=r,c=(i("1494"),i("2877")),u=Object(c["a"])(l,t,a,!1,null,"5c81d5f7",null);n["default"]=u.exports}}]);