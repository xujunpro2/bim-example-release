(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35937986"],{5216:function(e,n,t){"use strict";t("b7bc")},b7bc:function(e,n,t){},d0e0:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{staticClass:"messageDiv",domProps:{innerHTML:e._s(e.message)}}),n("div",{attrs:{id:"containerDiv"}}),e._m(0)])},r=[function(){var e=this,n=e._self._c;return n("pre",{staticClass:"line-numbers"},[n("code",{staticClass:"language-js"},[e._v('#代码示范\n//请求轻量化模型文件\nviewer.load(\'datas/冷站.gz\');\n\n//监听下载进度事件，SDK本身提供了支持多模型加载的进度控件，如果你不满意，也可以根据这些事件执行开发\nviewer.on(BIMI.ViewerEvent.ON_PROGRESS, data => {\n    let url = data.url;//发送进度事件的模型url\n    let progress = data.progress;//进度\n    this.message += "onprogress:"+progress+" ->模型下载进度'),n("br"),e._v('"\n});\n\n//监听下载完成事件\nviewer.on(BIMI.ViewerEvent.ON_DOWNLOADED, data => {\n    //data数据结构 {model:url},url是轻量化文件的url\n\tthis.message += "ondownloaded ->模型下载完毕'),n("br"),e._v('"\n});\n\n//监听模型加载完毕事件\nviewer.on(BIMI.ViewerEvent.LOADED, data => {\n    //data数据结构 { model: modelName,modelId:modelId }  \n    //modelName是模型名称 ，modelId是BimViewer给模型生成的唯一id，为了支持在一个场景中同时加载多个模型\n    //开发者可以持有这个modelId，modelId永远从1开始递增\n\tthis.message += "loaded ->模型加载完毕'),n("br"),e._v('"\n});')])])}],o={name:"LoadEvent",data:function(){return{message:"事件消息:<br/>"}},methods:{},mounted:function(){var e=this;this.$nextTick((function(){var n=document.getElementById("containerDiv"),t=new BIMI.BimViewer(n);t.load("datas/冷站/bim.bin"),t.on(BIMI.ViewerEvent.ON_PROGRESS,(function(n){n.url;var t=n.progress;e.message+="onprogress:"+t+" ->模型下载进度<br/>"})),t.on(BIMI.ViewerEvent.ON_DOWNLOADED,(function(n){e.message+="ondownloaded ->模型下载完毕<br/>"})),t.on(BIMI.ViewerEvent.LOADED,(function(n){e.message+="loaded ->模型加载完毕<br/>"})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},a=o,i=(t("5216"),t("2877")),d=Object(i["a"])(a,s,r,!1,null,"b1f4269c",null);n["default"]=d.exports}}]);