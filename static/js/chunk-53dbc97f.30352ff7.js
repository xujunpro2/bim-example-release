(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53dbc97f"],{"16b3":function(e,t,n){"use strict";n("ff3f")},fa9e:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this;e._self._c;return e._m(0)},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"rootDiv"},[t("div",{attrs:{id:"containerDiv"}})])}],u={name:"OSGB",data:function(){return{}},methods:{addOSGB:function(){var e=BIMI.ViewerHelper.getViewer(),t=e.getPlugin("OSGBPlugin");null==t&&(t=new BIMI.OSGBPlugin,e.addPlugin(t)),t.load("bridge","datas/osgb/1/tileset.json",{maxDepth:1/0,maxSize:50,minSize:30,offset:new BIMI.THREE.Vector3(0,5,0)}).then((function(e){}))}},mounted:function(){var e=this;this.$nextTick((function(){var t=document.getElementById("containerDiv"),n=new BIMI.BimViewer(t,{alwaysRefresh:!0}),i=n.getPlugin("MapPlugin");null==i&&(i=new BIMI.MapPlugin({terrain:!0}),n.addPlugin(i)),i.setDefaultCamera({latitude:22.791201611610983,longitude:113.96068993682941,height:1e3,pitch:-90,yaw:0}),n.isDirty(),setTimeout((function(){e.addOSGB()}),2e3)}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},r=u,o=(n("16b3"),n("2877")),s=Object(o["a"])(r,i,a,!1,null,"00d4e274",null);t["default"]=s.exports},ff3f:function(e,t,n){}}]);