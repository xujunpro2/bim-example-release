(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32c96efd"],{"3cb3":function(n,e,i){"use strict";i("90bc")},4524:function(n,e,i){"use strict";i.r(e);var t=function(){var n=this;n._self._c;return n._m(0)},s=[function(){var n=this,e=n._self._c;return e("div",{staticClass:"rootDiv"},[e("div",{attrs:{id:"containerDiv"}}),e("pre",{staticClass:"line-numbers"},[e("code",{staticClass:"language-js"},[n._v("#代码示范\n        // options.dir 盒子的纹理贴图目录，默认值是平台自带天空盒资源目录：‘assets/skybox/’\n        // options.files 盒子6个面的贴图，顺序为 px nx py ny pz nz，默认值是平台自带的天空盒图片，‘assets/skybox/’目录下的\n        var sky = new BIMI.SkyBoxPlugin();\n        viewer.addPlugin(sky);\n        //大地插件，options.color 大地色，默认是土黄色\n        var ground = new BIMI.GroundPlugin();\n        viewer.addPlugin(ground);\n                ")])])])}],o={name:"SkyBox",data:function(){return{}},methods:{},mounted:function(){this.$nextTick((function(){var n=document.getElementById("containerDiv"),e=new BIMI.BimViewer(n);e.load("datas/rac_basic_sample_project/bim.bin");var i=new BIMI.SkyBoxPlugin;e.addPlugin(i);var t=new BIMI.GroundPlugin;e.addPlugin(t),Prism.highlightAll()}))},beforeDestroy:function(){var n=BIMI.ViewerHelper.getViewer();n&&n.dispose()}},r=o,a=(i("3cb3"),i("2877")),c=Object(a["a"])(r,t,s,!1,null,"0e641c96",null);e["default"]=c.exports},"90bc":function(n,e,i){}}]);