(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72038aa1"],{"199b":function(e,t,i){},"62e2":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bimDiv",attrs:{id:"containerDiv"}})},r=[],n={name:"Heatmap",data:function(){return{}},methods:{addHeatmap:function(){var e=BIMI.ViewerHelper.getViewer(),t=e.getPlugin("HeatmapPlugin");t||(t=new BIMI.HeatmapPlugin,e.addPlugin(t)),t.setEnvelope(-100,-100,100,100);var i=[],o=50;while(o--){var r=Math.floor(50*Math.random()),n={x:Math.floor(100*Math.random())-50,y:Math.floor(100*Math.random())-50,value:r};i.push(n)}t.setSimplePoints(i),t.maxHeight=20,t.create(300,20,[0,10,0])},initView:function(){var e=this,t=document.getElementById("containerDiv"),i=new BIMI.BimViewer(t,{streamRender:!1,grid:!1});i.load("datas/KZJ整体模型/bim.bin"),i.on("loaded",(function(t){e.excuteZFighting(),e.setProductStyle(),e.addHeatmap()})),i.on("pick",(function(e){var t=e.data[0].modelId,o=e.data[0].productId,r=i.getProduct(t,o);console.info(r)}))},destroyView:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()},excuteZFighting:function(){var e=BIMI.ViewerHelper.getViewer();e.zFighting(1,727481),e.zFighting(1,844346,!0)},setProductStyle:function(){var e=BIMI.ViewerHelper.getViewer(),t=["IfcBuildingElementProxy"];e.overrideProductsColorByType(t,"#0b4161",.2),e.overrideProductsColorByType(["IfcRoof","IfcBeam","IfcColumn","IfcWallStandardCase","IfcWindow","IfcSlab","IfcDoor"],"#0f628c",.5),e.overrideProductsColorByType(["IfcFlowSegment","IfcFlowFitting"],"rgb(255, 173, 33)",.2),e.setProductsVisible(1,[727481],!1),e.overrideProductsColor(1,[1165376],"rgb(255, 173, 33)",.2);var i=[42579,42599,42532,42554,42415,42460,42440,42507,42485,42788,42808,42741,42763,42624,42669,42649,42716,42485,43656,43676,43631,43721,43701,43493,43317,43606,43518,43863,43883,43838,43928,43908,43766,43746,43813,43791,42694,44070,727499,44045,44115,44095,43973,43953,44020,43998,43227,43247,43202,43292,43272,43130,43110,43177,43155,43020,43040,42995,43085,43065,42923,42903,42970,42948,41253,41273,41228,42828,41427,41156,41136,41203,41181,41111,42181,41064,41086,40725,40926,40750,41039,40951,42370,42390,42323,42345,42206,42251,42231,42298,42276,15578,15607,20928,11071,11091,10958,11046,10933,10706,10617,10794,10732,10908,10820,21467,21447,21487,21400,21420,21287,21375,21262,21039,20953,21124,21064,21237,21149];e.overrideProductsColor(1,i,"#341132",1);var o=[921443,921468,921393,921418,921368,921342,899778,899804,877691,877716,877641,877666,877591,877616,877566,877541,877490,877516];e.overrideProductsColor(1,o,"#f28129",1,!0),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){e.initView()}))},beforeDestroy:function(){this.destroyView()}},a=n,c=(i("95e9"),i("2877")),d=Object(c["a"])(a,o,r,!1,null,"5da4f441",null);t["default"]=d.exports},"95e9":function(e,t,i){"use strict";i("199b")}}]);