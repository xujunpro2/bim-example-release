(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c52331f"],{"6ea5":function(e,i,t){},9626:function(e,i,t){"use strict";t("6ea5")},a8d9:function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e._self._c;return i("div",{staticClass:"bimDiv",attrs:{id:"containerDiv"}})},o=[],r={name:"HeatmapGrid",data:function(){return{}},methods:{addHeatmapGrid:function(){var e=BIMI.ViewerHelper.getViewer(),i=e.getPlugin("HeatmapGridPlugin");i||(i=new BIMI.HeatmapGridPlugin,e.addPlugin(i));var t={config:{count:100,power:5,sampleCount:12},sampelPoints:[{x:10,y:10,value:0},{x:20,y:20,value:0},{x:30,y:30,value:0},{x:40,y:40,value:0},{x:50,y:50,value:20},{x:60,y:60,value:0},{x:70,y:70,value:0},{x:80,y:80,value:0},{x:10,y:80,value:0},{x:20,y:70,value:0},{x:30,y:60,value:0},{x:80,y:10,value:0}],bounds:[0,0,100,100]},a=i.getGridMatrix(t),o={config:{count:100,power:5,sampleCount:12},sampelPoints:[{x:10,y:10,value:0},{x:20,y:20,value:0},{x:30,y:30,value:10},{x:40,y:40,value:0},{x:50,y:50,value:0},{x:60,y:60,value:0},{x:70,y:70,value:0},{x:80,y:80,value:0},{x:10,y:80,value:0},{x:20,y:70,value:20},{x:30,y:60,value:0},{x:80,y:10,value:0}],bounds:[0,0,100,100]},r=i.getGridMatrix(o),n={config:{count:100,power:5,sampleCount:12},sampelPoints:[{x:10,y:10,value:0},{x:20,y:20,value:0},{x:30,y:30,value:0},{x:40,y:40,value:0},{x:50,y:50,value:0},{x:60,y:60,value:0},{x:70,y:70,value:0},{x:80,y:80,value:0},{x:70,y:20,value:20},{x:20,y:70,value:0},{x:30,y:60,value:0},{x:80,y:10,value:0}],bounds:[0,0,100,100]},u=i.getGridMatrix(n),l=i.mergeGridMatrix([a,r,u]);i.drawGridTimeline(l,!0),i.lineGroup.position.set(-50,20,-50)},initView:function(){var e=this,i=document.getElementById("containerDiv"),t=new BIMI.BimViewer(i,{streamRender:!1});t.load("datas/KZJ整体模型/bim.bin"),t.on("loaded",(function(i){e.excuteZFighting(),e.setProductStyle(),e.addHeatmapGrid()})),t.on("pick",(function(e){var i=e.data[0].modelId,a=e.data[0].productId,o=t.getProduct(i,a);console.info(o)}))},destroyView:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()},excuteZFighting:function(){var e=BIMI.ViewerHelper.getViewer();e.zFighting(1,727481),e.zFighting(1,844346,!0)},setProductStyle:function(){var e=BIMI.ViewerHelper.getViewer(),i=["IfcBuildingElementProxy"];e.overrideProductsColorByType(i,"#0b4161",.2),e.overrideProductsColorByType(["IfcRoof","IfcBeam","IfcColumn","IfcWallStandardCase","IfcWindow","IfcSlab","IfcDoor"],"#0f628c",.5),e.overrideProductsColorByType(["IfcFlowSegment","IfcFlowFitting"],"rgb(255, 173, 33)",.2),e.setProductsVisible(1,[727481],!1),e.overrideProductsColor(1,[1165376],"rgb(255, 173, 33)",.2);var t=[42579,42599,42532,42554,42415,42460,42440,42507,42485,42788,42808,42741,42763,42624,42669,42649,42716,42485,43656,43676,43631,43721,43701,43493,43317,43606,43518,43863,43883,43838,43928,43908,43766,43746,43813,43791,42694,44070,727499,44045,44115,44095,43973,43953,44020,43998,43227,43247,43202,43292,43272,43130,43110,43177,43155,43020,43040,42995,43085,43065,42923,42903,42970,42948,41253,41273,41228,42828,41427,41156,41136,41203,41181,41111,42181,41064,41086,40725,40926,40750,41039,40951,42370,42390,42323,42345,42206,42251,42231,42298,42276,15578,15607,20928,11071,11091,10958,11046,10933,10706,10617,10794,10732,10908,10820,21467,21447,21487,21400,21420,21287,21375,21262,21039,20953,21124,21064,21237,21149];e.overrideProductsColor(1,t,"#341132",1);var a=[921443,921468,921393,921418,921368,921342,899778,899804,877691,877716,877641,877666,877591,877616,877566,877541,877490,877516];e.overrideProductsColor(1,a,"#f28129",1,!0),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){e.initView()}))},beforeDestroy:function(){this.destroyView()}},n=r,u=(t("9626"),t("2877")),l=Object(u["a"])(n,a,o,!1,null,"51200392",null);i["default"]=l.exports}}]);