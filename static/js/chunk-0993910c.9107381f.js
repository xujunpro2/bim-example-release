(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0993910c"],{"649b":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"rootDiv"},[i("div",{staticClass:"messageDiv",domProps:{innerHTML:e._s(e.message)}}),i("div",{attrs:{id:"containerDiv"}}),e._m(0)])},r=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("pre",{staticClass:"line-numbers"},[i("code",{staticClass:"language-js"},[e._v("#代码示范\n        FencePluginTest(){\n            let viewer = BIMI.ViewerHelper.getViewer();\n            let plugin = viewer.getPlugin('FencePlugin');\n            if(!plugin)\n            {\n                plugin = new BIMI.FencePlugin();\n                plugin.animation = true;//电子围栏是否需要闪烁的动画效果，开启后会增加性能开销\n                viewer.addPlugin(plugin);\n            }\n            /**\n             * 添加一个多边形结构的电子围栏\n             * @param {*} options \n             * id:Number/String 围栏ID\n             * points:Array 围栏底座的一组Vector3,注意首尾要重合形成闭环\n             * height:Number 围栏高度\n             * color1:String 围栏底部颜色\n             * color2:String 围栏顶部颜色 \n             * opacity:Numher 围栏不透明度\n             */\n            plugin.addPolygonFence({\n                id:1234,\n                points:[\n                    new BIMI.THREE.Vector3(-5,0,-5),\n                    new BIMI.THREE.Vector3(5,0,-5),\n                    new BIMI.THREE.Vector3(5,0,5),\n                    new BIMI.THREE.Vector3(-5,0,5),\n                    new BIMI.THREE.Vector3(-8,0,1),\n                ],\n                height:2,\n                color1:'#ff0000',\n                color2:'#ffffff',\n                opacity:0.8\n            });\n\n            let air = this.airMesh;\n\n            setInterval(() => {\n                air.position.x = air.position.x + 0.1;\n                let result = plugin.validateBox([air]);\n                let fence = result.get(air);\n                if(fence)\n                {\n                    this.message = '飞机进入电子围栏(围栏ID:'+fence.id+')'\n                }\n                else\n                {\n                    this.message = '飞机在电子围栏外面'\n                }\n                viewer.isDirty();\n            }, 100); \n        },\n")])])}],o={name:"Fence",data:function(){return{airMesh:null,message:"飞机在电子围栏外面"}},methods:{FencePluginTest:function(){var e=this,n=BIMI.ViewerHelper.getViewer(),i=n.getPlugin("FencePlugin");i||(i=new BIMI.FencePlugin,i.animation=!0,n.addPlugin(i)),i.addPolygonFence({id:1234,points:[new BIMI.THREE.Vector3(-5,0,-5),new BIMI.THREE.Vector3(5,0,-5),new BIMI.THREE.Vector3(5,0,5),new BIMI.THREE.Vector3(-5,0,5),new BIMI.THREE.Vector3(-8,0,1)],height:2,color1:"#ff0000",color2:"#ffffff",opacity:.8});var t=this.airMesh;setInterval((function(){t.position.x=t.position.x+.1;var r=i.validateBox([t]),o=r.get(t);e.message=o?"飞机进入电子围栏(围栏ID:"+o.id+")":"飞机在电子围栏外面",n.isDirty()}),100)},getAirMesh:function(){var e=BIMI.ViewerHelper.getViewer(),n=e.getProduct(1,"Cesium_Air");if(n){var i=n.meshs,t=i[0];return t.scale.set(.2,.2,.2),t.position.set(-12,1,0),t}}},mounted:function(){var e=this;this.$nextTick((function(){var n=document.getElementById("containerDiv"),i=new BIMI.BimViewer(n,{grid:!0,debug:!0,loading:!0,enableInstancedMesh:!0});i.loadGLTF("datas/glb/Cesium_Air.glb"),i.on(BIMI.ViewerEvent.LOADED,(function(n){e.airMesh=e.getAirMesh(),e.FencePluginTest()})),i.on(BIMI.ViewerEvent.PICK,(function(e){console.info(e)})),Prism.highlightAll()}))},beforeDestroy:function(){var e=BIMI.ViewerHelper.getViewer();e&&e.dispose()}},s=o,a=(i("90db"),i("2877")),c=Object(a["a"])(s,t,r,!1,null,"7cd8902c",null);n["default"]=c.exports},"90db":function(e,n,i){"use strict";i("c253")},c253:function(e,n,i){}}]);