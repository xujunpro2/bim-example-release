(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16c5640b"],{"3c90":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this;e._self._c;return e._m(0)},c=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{staticClass:"messageDiv"},[e._v(" 通过监听BimViewer的contextmenu事件，可实现自定义菜单,右键快速短击才会触发该事件 "),n("br"),e._v(" 右键菜单需要开发者开发，平台会在contextmenu事件中返回mouseEvent, 通过mouseEvent可拿到当前鼠标点击位置，从而可以让开发者决定自定义右键菜单Div放置的屏幕位置 ")]),n("div",{attrs:{id:"containerDiv"}}),n("pre",{staticClass:"line-numbers"},[n("code",{staticClass:"language-js"},[e._v("#代码示范\n viewer.on('contextmenu',contextEvent=>{\n    var mouseEvent = contextEvent.mouseEvent\n    var clientX = mouseEvent.clientX;\n    var clientY = mouseEvent.clientY;\n    alert('右键菜单事件,鼠标clientX:'+clientX+\" clientY:\"+clientY)\n})\n")])])])}],s={name:"RightMenu",data:function(){return{}},methods:{},mounted:function(){this.$nextTick((function(){var e=document.getElementById("containerDiv"),n=new BIMI.BimViewer(e);n.load("datas/代码测试用/bim.bin"),n.on("contextmenu",(function(e){var n=e.mouseEvent,t=n.clientX,i=n.clientY;alert("右键菜单事件,鼠标clientX:"+t+" clientY:"+i)})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},o=s,r=(t("82b1"),t("2877")),u=Object(r["a"])(o,i,c,!1,null,"35ed0e06",null);n["default"]=u.exports},"82b1":function(e,n,t){"use strict";t("c225")},c225:function(e,n,t){}}]);