(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428edacc"],{"5ce4":function(e,n,t){"use strict";t("93c3")},"93c3":function(e,n,t){},a08e:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{attrs:{id:"containerDiv"}})])}],a={name:"GeoJson",data:function(){return{}},methods:{addGeoJson:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getPlugin("MapPlugin"),t={id:"1234",color:{property:"name",values:{"宝山区":{color:"#00ff00",opacity:.5},"奉贤区":{color:"#0000ff",opacity:.5}}},clamp:!1,maxHeight:20,minHeight:0,lineWidth:20,lineStep:100};n.loadGeoJson("datas/geojson/shanghai.geojson",t)}},mounted:function(){var e=this;this.$nextTick((function(){var n=document.getElementById("containerDiv"),t=new BIMI.BimViewer(n,{alwaysRefresh:!0}),i=t.getPlugin("MapPlugin");null==i&&(i=new BIMI.MapPlugin,t.addPlugin(i)),i.setDefaultCamera({latitude:31.220868,longitude:121.176679,height:177686,pitch:-90,yaw:0}),e.addGeoJson(),t.isDirty()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},r=a,c=(t("5ce4"),t("2877")),s=Object(c["a"])(r,i,o,!1,null,"6657dd24",null);n["default"]=s.exports}}]);