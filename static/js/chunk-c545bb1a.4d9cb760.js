(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c545bb1a"],{"58be":function(e,n,o){},"5aca":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{staticClass:"messageDiv"},[e._v(" 点击按钮，只显示并聚焦某个层高 "),n("br"),n("button",{on:{click:function(n){return e.onlySeeAndZoomLevel("Foundation")}}},[e._v("Foundation")]),n("button",{on:{click:function(n){return e.onlySeeAndZoomLevel("Ceiling")}}},[e._v("Ceiling")]),n("button",{on:{click:function(n){return e.onlySeeAndZoomLevel("Level 1")}}},[e._v("Level 1")]),n("button",{on:{click:function(n){return e.onlySeeAndZoomLevel("Level 1 Living Rm.")}}},[e._v("Level 1 Living Rm.")]),n("button",{on:{click:function(n){return e.onlySeeAndZoomLevel("Level 2")}}},[e._v("Level 2")]),n("button",{on:{click:function(n){return e.onlySeeAndZoomLevel("Roof Line")}}},[e._v("Roof Line")]),n("button",{on:{click:function(n){return e.showAllProducts()}}},[e._v("整个模型可见")])]),n("div",{attrs:{id:"containerDiv"}}),e._m(0)])},i=[function(){var e=this,n=e._self._c;return n("pre",{staticClass:"line-numbers"},[n("code",{staticClass:"language-js"},[e._v("#代码示范\n       viewer.zoomToLevels(1,[levelName],true,null,{x:45,y:0})")])])}],l={name:"ZoomToLevel",data:function(){return{}},methods:{onlySeeAndZoomLevel:function(e){console.info(e);var n=BIMI.ViewerHelper.getViewer();n.onlySeeProductsByLevels(1,[e]),n.isDirty(),n.zoomToLevels(1,[e],!0,null,{x:45,y:0})},showAllProducts:function(){var e=BIMI.ViewerHelper.getViewer();e.setAllProductsVisible(1,!0),e.isDirty(),e.zoomToModel(1)}},mounted:function(){this.$nextTick((function(){var e=document.getElementById("containerDiv"),n=new BIMI.BimViewer(e);n.load("datas/rac_basic_sample_project/bim.bin"),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},c=l,r=(o("b620"),o("2877")),u=Object(r["a"])(c,t,i,!1,null,"599f7cc6",null);n["default"]=u.exports},b620:function(e,n,o){"use strict";o("58be")}}]);