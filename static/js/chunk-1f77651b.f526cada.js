(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f77651b"],{"3b2c":function(e,n,i){"use strict";i("5887")},5887:function(e,n,i){},ede6:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this;e._self._c;return e._m(0)},r=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"rootDiv"},[n("div",{attrs:{id:"containerDiv"}}),n("pre",{staticClass:"line-numbers"},[n("code",{staticClass:"language-js"},[e._v("#代码示范\n//设置BimViewer的dom容器\nvar dom = document.getElementById('containerDiv');\n//创建核心类BimViewer,SDK所有的class都以BIMI为前缀\nvar viewer = new BIMI.BimViewer(dom);\n\n//启用SDK自带的UI套件\nlet toolbar = new BIMI.Toolbar(viewer);\n//启用操作阻尼效果\nviewer.enableDamping(true,0.08)\n//加载轻量化数据文件\n//load返回Promise对象\nviewer.load('datas/长方体/bim.bin').then(event=>{\n    console.info(event);\n});\n\n//如果是VUE/React技术的单页应用,需要在页面销毁的时候释放资源\nbeforeDestroy() {\n    //不要把BimViewer对象保持在Vue的data binding属性中,SDK针对Vue/React提供了ViewerHelper，\n    //通过静态函数getViewer()可以获得当前BimViewer对象\n    var viewer = BIMI.ViewerHelper.getViewer();\n    if(viewer)\n    {\n        viewer.dispose();\n    }\n}\n\n//卸载某个模型\nviewer.unload(模型ID); \n")])])])}],o={name:"Load",data:function(){return{}},methods:{},mounted:function(){this.$nextTick((function(){var e=document.getElementById("containerDiv"),n=new BIMI.BimViewer(e);new BIMI.Toolbar(n);n.enableDamping(!0,.08),n.load("datas/长方体/bim.bin").then((function(e){console.info(e)})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},a=o,s=(i("3b2c"),i("2877")),c=Object(s["a"])(a,t,r,!1,null,"0cd1f3d7",null);n["default"]=c.exports}}]);