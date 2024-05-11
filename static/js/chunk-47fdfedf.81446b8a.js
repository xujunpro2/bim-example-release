(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47fdfedf"],{"1f7f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rootDiv"},[e("div",{staticClass:"messageDiv"},[t._v(" 让相机飞行到指定的位置和旋转视角 "),e("br"),e("button",{on:{click:t.setOrbitState1}},[t._v("去位置一")]),e("button",{on:{click:t.setOrbitState2}},[t._v("去位置二")]),e("button",{on:{click:t.setOrbitState3}},[t._v("去位置三")])]),e("div",{attrs:{id:"containerDiv"}}),t._m(0)])},o=[function(){var t=this,e=t._self._c;return e("pre",{staticClass:"line-numbers"},[e("code",{staticClass:"language-js"},[t._v("#代码示范\n            setOrbitState1(){\n                // 先移动相机确定好目标位置和视角后，通过以下两行代码可以获得该位置和视角的数据，也可以通过工具栏上的相机状态按钮获得数据\n                // let state = viewer.getOrbitState();\n                // console.info(state);\n                let state = {\n                    position:{x: -45.054031306123164, y: 19.582117197919157, z: 38.61436964100547},\n                    quaternion: {x: -0.06457825345949601, y: -0.5579432732627382, z: -0.04360984744989141, w: 0.8262125236320127},\n                    target: {x: -12.249748752078268, y: 6.127399942779535, z: 8.27886206335957},\n                    zoom: 1\n                }\n                var viewer = BIMI.ViewerHelper.getViewer();\n                viewer.setOrbitState(state,true,1500,()=>{\n                    console.info('位置一到达');\n                })\n            },\n")])])}],r={name:"Visible",data:function(){return{}},methods:{setOrbitState1:function(){var t={position:{x:-45.054031306123164,y:19.582117197919157,z:38.61436964100547},quaternion:{x:-.06457825345949601,y:-.5579432732627382,z:-.04360984744989141,w:.8262125236320127},target:{x:-12.249748752078268,y:6.127399942779535,z:8.27886206335957},zoom:1},e=BIMI.ViewerHelper.getViewer();e.setOrbitState(t,!0,1500,(function(){console.info("位置一到达")}))},setOrbitState2:function(){var t={position:{x:-27.317136866045267,y:24.18210881982428,z:-46.87462418760584},quaternion:{x:-.03685089608091613,y:-.9623401691173219,z:-.16927960188927596,w:.20949421649650216},target:{x:-7.277678887093019,y:11.764539888960432,z:-30.113289030207575},zoom:1},e=BIMI.ViewerHelper.getViewer();e.setOrbitState(t,!0,1500,(function(){console.info("位置二到达")}))},setOrbitState3:function(){var t={position:{x:41.061445819062456,y:19.069645343120214,z:-25.0456135475305},quaternion:{x:.08537522593011962,y:-.7609472866045284,z:-.10231157142530903,w:-.6349823935819464},target:{x:21.04499015378671,y:10.567105130179932,z:-14.13221687229258},zoom:1},e=BIMI.ViewerHelper.getViewer();e.setOrbitState(t,!0,1500,(function(){console.info("位置三到达")}))}},mounted:function(){this.$nextTick((function(){var t=document.getElementById("containerDiv"),e=new BIMI.BimViewer(t);e.load("datas/rac_basic_sample_project/bim.bin"),e.on(BIMI.ViewerEvent.HEAD_LOADED,(function(t){})),Prism.highlightAll()}))},beforeDestroy:function(){var t=BIMI.ViewerHelper.getViewer();t&&t.dispose()}},s=r,a=(n("bd17"),n("2877")),c=Object(a["a"])(s,i,o,!1,null,"162f6146",null);e["default"]=c.exports},"4a0e":function(t,e,n){},bd17:function(t,e,n){"use strict";n("4a0e")}}]);