(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2651d1"],{3086:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e._self._c;return i("div",{staticClass:"rootDiv"},[i("div",{staticClass:"messageDiv",domProps:{innerHTML:e._s(e.message)}}),i("div",{attrs:{id:"containerDiv"}}),e._m(0)])},r=[function(){var e=this,i=e._self._c;return i("pre",{staticClass:"line-numbers"},[i("code",{staticClass:"language-js"},[e._v("#代码示范\n//拾取过滤通常用于需要屏蔽某些构件，同时重点突出某些构件的场景，通过过滤，可以设定某些构件才能被Pick\n//建议在LOADED事件之后再设置\nviewer.on(BIMI.ViewerEvent.LOADED,model=>{\n    let viewer = BIMI.ViewerHelper.getViewer();\n    //设置模型全部透明\n    viewer.setTransparentModel(1);//因为load的时候没有指定modelId,那么这里应该就是1了（bad smell）\n    //保留几个用于测试的构件\n    viewer.resetProductsMaterial(1,[736435, 735739,981963,987167,701300]);\n\n    //设置Pick过滤\n    let plugin = viewer.getPlugin('PickPlugin');\n    //这个是为了方便测试，先设置整个model都不可pick\n    plugin.addFilterProductIdsByModel(1);\n    //然后将可以pick的排除掉\n    plugin.removeFilterProductIds(1,[736435, 735739,981963,987167,701300])\n    viewer.isDirty();\n})\n")])])}],s={name:"PickFilter",data:function(){return{message:"鼠标左键单击模型构件<br/>事件消息:"}},methods:{setPickFilter:function(){var e=BIMI.ViewerHelper.getViewer();e.setTransparentModel(1),e.resetProductsMaterial(1,[736435,735739,981963,987167,701300]);var i=e.getPlugin("PickPlugin");i.addFilterProductIdsByModel(1),i.removeFilterProductIds(1,[736435,735739,981963,987167,701300]),e.isDirty()}},mounted:function(){var e=this;this.$nextTick((function(){var i=document.getElementById("containerDiv"),t=new BIMI.BimViewer(i);t.load("datas/rac_basic_sample_project/bim.bin"),t.on(BIMI.ViewerEvent.LOADED,(function(i){e.setPickFilter()})),t.on(BIMI.ViewerEvent.PICK,(function(i){var t=i.source;if("bim"===t){var n=i.data;e.message="鼠标左键单击模型构件<br/>事件消息:模型ID "+n[0].modelId+"  构件ID "+n[0].productId}})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},a=s,o=(t("4a93"),t("2877")),l=Object(o["a"])(a,n,r,!1,null,"2eb18bce",null);i["default"]=l.exports},"4a93":function(e,i,t){"use strict";t("e3fb")},e3fb:function(e,i,t){}}]);