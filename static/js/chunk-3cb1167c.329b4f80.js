(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cb1167c"],{"7d20":function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e._self._c;return i("div",{staticClass:"rootDiv"},[i("div",{attrs:{id:"containerDiv"}}),i("div",{attrs:{id:"btnDiv"}},[i("button",{on:{click:e.toBing}},[e._v("Bing卫星图")]),i("button",{on:{click:e.toMapBox}},[e._v("MapBox卫星图")]),i("button",{on:{click:e.toMapBoxDark}},[e._v("MapBox Dark矢量图")]),i("button",{on:{click:e.toTDT}},[e._v("天地图卫星图")]),i("button",{on:{click:e.addTerrain}},[e._v("启用地形")]),i("button",{on:{click:e.removeTerrain}},[e._v("移除地形")])])])},r=[],o={name:"MapProviders",data:function(){return{provider:"bing"}},methods:{addTerrain:function(){var e=BIMI.ViewerHelper.getViewer(),i=e.getPlugin("MapPlugin");i&&!i.terrain&&i.useTerrain(!0)},removeTerrain:function(){var e=BIMI.ViewerHelper.getViewer(),i=e.getPlugin("MapPlugin");i&&i.terrain&&i.useTerrain(!1)},toBing:function(){var e=BIMI.ViewerHelper.getViewer(),i=e.getPlugin("MapPlugin");i&&"bing"!==this.provider&&(i.useBingMaps(),this.provider="bing")},toMapBox:function(){var e=BIMI.ViewerHelper.getViewer(),i=e.getPlugin("MapPlugin");i&&"mapbox-v9"!==this.provider&&(i.useMapBox(),this.provider="mapbox-v9")},toMapBoxDark:function(){var e=BIMI.ViewerHelper.getViewer(),i=e.getPlugin("MapPlugin");i&&"mapbox-dark-v9"!==this.provider&&(i.useMapBox("","mapbox/dark-v9"),this.provider="mapbox-dark-v9")},toTDT:function(){var e=BIMI.ViewerHelper.getViewer(),i=e.getPlugin("MapPlugin");i&&"tdt"!==this.provider&&(i.useTDTMaps(),this.provider="tdt")}},mounted:function(){this.$nextTick((function(){var e=document.getElementById("containerDiv"),i=new BIMI.BimViewer(e),t=i.getPlugin("MapPlugin");null==t&&(t=new BIMI.MapPlugin({terrain:!1}),i.addPlugin(t)),t.setDefaultCamera({latitude:30.669098,longitude:111.277884,height:4781,pitch:-30,yaw:0}),i.isDirty()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},a=o,u=(t("a3a9"),t("2877")),p=Object(u["a"])(a,n,r,!1,null,"15c236f1",null);i["default"]=p.exports},a3a9:function(e,i,t){"use strict";t("d860")},d860:function(e,i,t){}}]);