!function(n){var a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var a=n(2),i={init:function(){var e=window.innerHeight/window.innerWidth*744;new a.default({touchSpeed:2,id:"gallery-canvas",width:744,height:e,resourcesPath:"assets/images/",resources:[{src:"scene_0_bg_2.jpg",id:"scene_0_bg"},{src:"scene_0_text1.png",id:"scene_0_text1"},{src:"scene_0_text2.png",id:"scene_0_text2"},{src:"scene_0_text3.png",id:"scene_0_text3"},{src:"scene_0_text4.png",id:"scene_0_text4"},{src:"scene_0_sun.png",id:"scene_0_sun"},{src:"scene_1_bg_2.jpg",id:"scene_1_bg"},{src:"scene_1_building.png",id:"scene_1_building"},{src:"scene_1_hand.png",id:"scene_1_hand"},{src:"scene_1_stone.png",id:"scene_1_stone"},{src:"scene_1_shenzhen.png",id:"scene_1_shenzhen"},{src:"z-000.png",id:"scene_1_text_1"},{src:"z-001.png",id:"scene_1_text_2"},{src:"z-002.png",id:"scene_1_text_3"},{src:"z-003.png",id:"scene_1_text_4"},{src:"z-004.png",id:"scene_1_text_5"},{src:"z-005.png",id:"scene_1_text_6"},{src:"scene_2-2_bg.jpg",id:"scene_2-2_bg"},{src:"scene_2_bg_3.jpg",id:"scene_2_bg"},{src:"scene_2_view.png",id:"scene_2_view"},{src:"scene_2_txt.png",id:"scene_2_txt"},{src:"w03-a.png",id:"scene_2_text2_1"},{src:"w03-b.png",id:"scene_2_text2_2"},{src:"scene_3_bg_2.jpg",id:"scene_3_bg"},{src:"scene_4_text1.png",id:"scene_4_text1"},{src:"w04-a.png",id:"scene_4_text2_1"},{src:"w04-b.png",id:"scene_4_text2_2"},{src:"w04-c.png",id:"scene_4_text2_3"},{src:"w04-d.png",id:"scene_4_text2_4"},{src:"scene_4_bg_2.jpg",id:"scene_4_bg"},{src:"scene_5_text1.png",id:"scene_5_text1"},{src:"w05-a.png",id:"scene_5_text2_1"},{src:"w05-b.png",id:"scene_5_text2_2"},{src:"w05-c.png",id:"scene_5_text2_3"},{src:"scene_5_bg_4.jpg",id:"scene_5_bg"},{src:"scene_6_text1.png",id:"scene_6_text1"},{src:"w06-a.png",id:"scene_6_text2_1"},{src:"w06-b.png",id:"scene_6_text2_2"},{src:"w06-c.png",id:"scene_6_text2_3"},{src:"scene_6_bg_3.jpg",id:"scene_6_bg"},{src:"scene_7_text1.png",id:"scene_7_text1"},{src:"wave1_1.png",id:"wave1_1"},{src:"wave1_2.png",id:"wave1_2"},{src:"wave1_3.png",id:"wave1_3"},{src:"wave2.png",id:"wave2"},{src:"pure.png",id:"pure"},{src:"fish.png",id:"fish"},{src:"boat_2.png",id:"boat_2"},{src:"scene_7_bg_2.jpg",id:"scene_7_bg"},{src:"shuichang.png",id:"shuichang"},{src:"w07-a.png",id:"scene_7_text2_1"},{src:"w07-b.png",id:"scene_7_text2_2"},{src:"scene_8_bg_3.jpg",id:"scene_8_bg"},{src:"scene_8_text1.png",id:"scene_8_text1"},{src:"w08-a.png",id:"scene_8_text2_1"},{src:"w08-b.png",id:"scene_8_text2_2"},{src:"scene_9_bg_2.jpg",id:"scene_9_bg"},{src:"scene_9_text1.png",id:"scene_9_text1"},{src:"w09-a.png",id:"scene_9_text2_1"},{src:"w09-b.png",id:"scene_9_text2_2"},{src:"w09-c.png",id:"scene_9_text2_3"},{src:"w09-d.png",id:"scene_9_text2_4"},{src:"scene_10_bg_2.png",id:"scene_10_bg"},{src:"scene_10_handstone.png",id:"scene_10_handstone"},{src:"scene_10_logo.png",id:"scene_10_logo"},{src:"w10.png",id:"scene_10_text2_1"},{src:"w11-a.png",id:"scene_10_text2_2"},{src:"w11-b.png",id:"scene_10_text2_3"},{src:"w11-c.png",id:"scene_10_text2_4"}],sprites:function(e){return{}},data:this.canvasData,onInit:function(){console.log("初始化回调"),$(".page-loading").addClass(r.cls.hidden),$(".page-loading").removeClass(r.cls.active),$(".page-home").addClass(r.cls.active)},onEnd:function(){console.log("结束回调")}}).play()},canvasData:function(e){e.height;var t=444,n=1334;return[{id:"scene_0_container",prop:{y:0},children:[{id:"scene_0_bg",type:"bitmap",image:e.getImage("scene_0_bg")},{id:"scene_0_text1",type:"bitmap",image:e.getImage("scene_0_text1"),prop:{x:452,y:140}},{id:"scene_0_text2",type:"bitmap",image:e.getImage("scene_0_text2"),prop:{x:294,y:234}},{id:"scene_0_text3",type:"bitmap",image:e.getImage("scene_0_text3"),prop:{x:186,y:426}},{id:"scene_0_sun",type:"bitmap",image:e.getImage("scene_0_sun"),prop:{x:(e.width-e.getImage("scene_0_sun").width)/2,y:698}},{id:"scene_0_text4",type:"bitmap",image:e.getImage("scene_0_text4"),prop:{x:(e.width-e.getImage("scene_0_text4").width)/2,y:1206}}]},{id:"scene_1_container",prop:{y:n},animation:{top:-n,y:2*n,duration:n},children:[{id:"scene_1_bg",type:"bitmap",image:e.getImage("scene_1_bg")},{id:"scene_1_building",type:"bitmap",image:e.getImage("scene_1_building"),prop:{alpha:0,x:e.width/2,y:542,regX:e.getImage("scene_1_building").width/2,regY:e.getImage("scene_1_building").height/2-10},animation:{alpha:1,top:-n,rotation:180,duration:t}},{id:"scene_1_hand",type:"bitmap",image:e.getImage("scene_1_hand"),prop:{x:(e.width-e.getImage("scene_1_hand").width)/2,y:294,alpha:0},animation:{alpha:1,duration:t,y:394}},{id:"scene_1_stone",type:"bitmap",image:e.getImage("scene_1_stone"),prop:{x:386,y:520}},{id:"scene_1_shenzhen",type:"bitmap",image:e.getImage("scene_1_shenzhen"),prop:{alpha:0,x:(e.width-e.getImage("scene_1_shenzhen").width)/2,y:920},animation:{alpha:1,afterById:"scene_1_building",duration:t}},{id:"scene_1_text_1",type:"bitmap",image:e.getImage("scene_1_text_1"),prop:{x:(e.width-e.getImage("scene_1_text_1").width)/2,y:1040,alpha:0},animation:{alpha:1,afterById:"scene_1_shenzhen",duration:100}},{id:"scene_1_text_2",type:"bitmap",image:e.getImage("scene_1_text_2"),prop:{x:(e.width-e.getImage("scene_1_text_2").width)/2,y:1075,alpha:0},animation:{alpha:1,afterById:"scene_1_text_1",duration:100}},{id:"scene_1_text_3",type:"bitmap",image:e.getImage("scene_1_text_3"),prop:{x:(e.width-e.getImage("scene_1_text_3").width)/2,y:1110,alpha:0},animation:{alpha:1,afterById:"scene_1_text_2",duration:100}},{id:"scene_1_text_4",type:"bitmap",image:e.getImage("scene_1_text_4"),prop:{x:(e.width-e.getImage("scene_1_text_4").width)/2,y:1145,alpha:0},animation:{alpha:1,afterById:"scene_1_text_3",duration:100}},{id:"scene_1_text_5",type:"bitmap",image:e.getImage("scene_1_text_5"),prop:{x:(e.width-e.getImage("scene_1_text_5").width)/2,y:1180,alpha:0},animation:{alpha:1,afterById:"scene_1_text_4",duration:100}},{id:"scene_1_text_6",type:"bitmap",image:e.getImage("scene_1_text_6"),prop:{x:(e.width-e.getImage("scene_1_text_6").width)/2,y:1215,alpha:0},animation:{alpha:1,afterById:"scene_1_text_5",duration:100}}]},{id:"scene_2_container",prop:{y:3*n},children:[{id:"scene_2_bg",type:"bitmap",image:e.getImage("scene_2_bg")},{id:"scene_2_view",type:"bitmap",image:e.getImage("scene_2_view"),prop:{x:(e.width-e.getImage("scene_2_view").width)/2,y:158}},{id:"scene_2_txt",type:"bitmap",image:e.getImage("scene_2_txt"),prop:{x:(e.width-e.getImage("scene_2_txt").width)/2,y:1114,alpha:0},animation:{top:-100,alpha:1,duration:100}},{id:"scene_2_text2_1",type:"bitmap",image:e.getImage("scene_2_text2_1"),prop:{x:(e.width-e.getImage("scene_2_text2_1").width)/2,y:1165,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_2_txt"}},{id:"scene_2_text2_2",type:"bitmap",image:e.getImage("scene_2_text2_2"),prop:{x:(e.width-e.getImage("scene_2_text2_2").width)/2,y:1215,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_2_text2_1"}}]},{id:"scene_2-2_container",prop:{y:4*n},children:[{id:"scene_2-2_bg",type:"bitmap",image:e.getImage("scene_2-2_bg")}]},{id:"scene_3_container",prop:{y:5*n},children:[{id:"scene_3_bg",type:"bitmap",image:e.getImage("scene_3_bg")},{id:"scene_4_text1",type:"bitmap",image:e.getImage("scene_4_text1"),prop:{x:0,y:0,alpha:0},animation:{x:50,y:100,alpha:1,duration:t}},{id:"scene_4_text2",prop:{y:1100},children:[{id:"scene_4_text2_1",type:"bitmap",image:e.getImage("scene_4_text2_1"),prop:{x:(e.width-e.getImage("scene_4_text2_1").width)/2,y:0,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_4_text2_2",type:"bitmap",image:e.getImage("scene_4_text2_2"),prop:{x:(e.width-e.getImage("scene_4_text2_2").width)/2,y:40,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_4_text2_1"}},{id:"scene_4_text2_3",type:"bitmap",image:e.getImage("scene_4_text2_3"),prop:{x:(e.width-e.getImage("scene_4_text2_3").width)/2,y:80,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_4_text2_2"}},{id:"scene_4_text2_4",type:"bitmap",image:e.getImage("scene_4_text2_4"),prop:{x:(e.width-e.getImage("scene_4_text2_4").width)/2,y:120,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_4_text2_3"}}]}]},{id:"scene_4_container",prop:{y:6*n},children:[{id:"scene_4_bg",type:"bitmap",image:e.getImage("scene_4_bg")},{id:"scene_5_text1",type:"bitmap",image:e.getImage("scene_5_text1"),prop:{x:0,y:0,alpha:0},animation:{x:50,y:100,alpha:1,duration:t}},{id:"scene_5_text2",prop:{y:1150},children:[{id:"scene_5_text2_1",type:"bitmap",image:e.getImage("scene_5_text2_1"),prop:{x:(e.width-e.getImage("scene_5_text2_1").width)/2,y:0,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_5_text2_2",type:"bitmap",image:e.getImage("scene_5_text2_2"),prop:{x:(e.width-e.getImage("scene_5_text2_2").width)/2,y:40,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_5_text2_1"}},{id:"scene_5_text2_3",type:"bitmap",image:e.getImage("scene_5_text2_3"),prop:{x:(e.width-e.getImage("scene_5_text2_3").width)/2,y:80,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_5_text2_2"}}]}]},{id:"scene_5_container",prop:{y:7*n},children:[{id:"scene_5_bg",type:"bitmap",image:e.getImage("scene_5_bg")},{id:"scene_6_text1",type:"bitmap",image:e.getImage("scene_6_text1"),prop:{x:0,y:0,alpha:0},animation:{x:50,y:100,alpha:1,duration:t}},{id:"scene_6_text2",prop:{y:1150},children:[{id:"scene_6_text2_1",type:"bitmap",image:e.getImage("scene_6_text2_1"),prop:{x:(e.width-e.getImage("scene_6_text2_1").width)/2,y:0,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_6_text2_2",type:"bitmap",image:e.getImage("scene_6_text2_2"),prop:{x:(e.width-e.getImage("scene_6_text2_2").width)/2,y:40,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_6_text2_1"}},{id:"scene_6_text2_3",type:"bitmap",image:e.getImage("scene_6_text2_3"),prop:{x:(e.width-e.getImage("scene_6_text2_3").width)/2,y:80,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_6_text2_2"}}]}]},{id:"scene_6_container",prop:{y:8*n},children:[{id:"scene_6_bg",type:"bitmap",image:e.getImage("scene_6_bg")},{id:"pure",type:"bitmap",image:e.getImage("pure"),prop:{x:(e.width-e.getImage("pure").width)/2,alpha:1,y:0},animation:{alpha:0,top:-e.getImage("pure").height,y:384,duration:n/3}},{id:"wave1_1",type:"bitmap",image:e.getImage("wave1_1"),prop:{x:(e.width-e.getImage("wave1_1").width)/2,y:302,alpha:0},animation:{afterById:"pure",alpha:1,duration:100}},{id:"wave1_2",type:"bitmap",image:e.getImage("wave1_2"),prop:{x:(e.width-e.getImage("wave1_2").width)/2,y:266,alpha:0},animation:{afterById:"wave1_1",alpha:1,duration:100}},{id:"wave1_3",type:"bitmap",image:e.getImage("wave1_3"),prop:{x:(e.width-e.getImage("wave1_3").width)/2,y:160,alpha:0},animation:{afterById:"wave1_2",alpha:1,duration:100}},{id:"wave2",type:"bitmap",image:e.getImage("wave2"),prop:{x:432,y:818,alpha:0},animation:{afterById:"wave1_3",alpha:1,duration:100}},{id:"fish",type:"bitmap",image:e.getImage("fish"),prop:{x:276,y:296,alpha:0},animation:{afterById:"wave1_3",alpha:1,duration:100}},{id:"boat_2",type:"bitmap",image:e.getImage("boat_2"),prop:{x:-1e3,y:720},animation:{x:-478,y:576,duration:2*t}},{id:"scene_7_text1",type:"bitmap",image:e.getImage("scene_7_text1"),prop:{x:(e.width-e.getImage("scene_7_text1").width)/2,y:1150,alpha:0},animation:{alpha:1,duration:100}}]},{id:"scene_7_container",prop:{y:9*n},children:[{id:"scene_7_bg",type:"bitmap",image:e.getImage("scene_7_bg")},{id:"shuichang",type:"bitmap",image:e.getImage("shuichang"),prop:{x:236,y:232}},{id:"scene_7_text2",prop:{y:1100},children:[{id:"scene_7_text2_1",type:"bitmap",image:e.getImage("scene_7_text2_1"),prop:{x:(e.width-e.getImage("scene_7_text2_1").width)/2,y:0,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_7_text2_2",type:"bitmap",image:e.getImage("scene_7_text2_2"),prop:{x:(e.width-e.getImage("scene_7_text2_2").width)/2,y:40,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_7_text2_1"}}]}]},{id:"scene_8_container",prop:{y:10*n},children:[{id:"scene_8_bg",type:"bitmap",image:e.getImage("scene_8_bg")},{id:"scene_8_text1",type:"bitmap",image:e.getImage("scene_8_text1"),prop:{x:0,y:0,alpha:0},animation:{x:50,y:100,alpha:1,duration:t}},{id:"scene_8_text2",prop:{y:1100},children:[{id:"scene_8_text2_1",type:"bitmap",image:e.getImage("scene_8_text2_1"),prop:{x:(e.width-e.getImage("scene_8_text2_1").width)/2,y:0,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_8_text2_2",type:"bitmap",image:e.getImage("scene_8_text2_2"),prop:{x:(e.width-e.getImage("scene_8_text2_2").width)/2,y:40,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_8_text2_1"}}]}]},{id:"scene_9_container",prop:{y:11*n},children:[{id:"scene_9_bg",type:"bitmap",image:e.getImage("scene_9_bg")},{id:"scene_9_text1",type:"bitmap",image:e.getImage("scene_9_text1"),prop:{x:0,y:0,alpha:0},animation:{x:50,y:100,alpha:1,duration:t}},{id:"scene_9_text2",prop:{y:1100},children:[{id:"scene_9_text2_1",type:"bitmap",image:e.getImage("scene_9_text2_1"),prop:{x:(e.width-e.getImage("scene_9_text2_1").width)/2,y:0,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_9_text2_2",type:"bitmap",image:e.getImage("scene_9_text2_2"),prop:{x:(e.width-e.getImage("scene_9_text2_2").width)/2,y:40,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_9_text2_1"}},{id:"scene_9_text2_3",type:"bitmap",image:e.getImage("scene_9_text2_3"),prop:{x:(e.width-e.getImage("scene_9_text2_3").width)/2,y:80,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_9_text2_4",type:"bitmap",image:e.getImage("scene_9_text2_4"),prop:{x:(e.width-e.getImage("scene_9_text2_4").width)/2,y:120,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_9_text2_3"}}]}]},{id:"scene_10_container",prop:{y:12*n},animation:{y:13*n,duration:n,top:-n},children:[{id:"scene_10_bg",type:"bitmap",image:e.getImage("scene_10_bg")},{id:"scene_10_handstone",type:"bitmap",image:e.getImage("scene_10_handstone"),prop:{alpha:1,x:244,y:218},animation:{top:-n,alpha:0,duration:100}},{id:"scene_10_logo",type:"bitmap",image:e.getImage("scene_10_logo"),prop:{alpha:0,x:244,y:296},animation:{alpha:1,x:280,y:296,duration:100,top:-n}},{id:"scene_10_text2",prop:{y:1100},children:[{id:"scene_10_text2_1",type:"bitmap",image:e.getImage("scene_10_text2_1"),prop:{x:(e.width-e.getImage("scene_10_text2_1").width)/2,y:0,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_10_text2_2",type:"bitmap",image:e.getImage("scene_10_text2_2"),prop:{x:(e.width-e.getImage("scene_10_text2_2").width)/2,y:40,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_10_text2_1"}},{id:"scene_10_text2_3",type:"bitmap",image:e.getImage("scene_10_text2_3"),prop:{x:(e.width-e.getImage("scene_10_text2_3").width)/2,y:80,alpha:0},animation:{alpha:1,duration:100}},{id:"scene_10_text2_4",type:"bitmap",image:e.getImage("scene_10_text2_4"),prop:{x:(e.width-e.getImage("scene_10_text2_4").width)/2,y:120,alpha:0},animation:{alpha:1,duration:100,afterById:"scene_10_text2_3"}}]}]}]}};$("#start").click(function(){document.getElementById("home").style.display="none"});var r={};r.utils={loadImages:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=0,a=0,i=e instanceof Array?[]:{},r=t.onProgress||" ",o=t.onComplete||" ";for(var s in e&&0!==e.length||(o&&o(i),t instanceof Function&&t(i)),e)a++;for(var c in e)i[c]=new Image,i[c].onload=function(){n++,r&&r(Math.floor(n/a*100)),a<=n&&(o&&o(i),t instanceof Function&&t(i))},i[c].src=e[c]}},r.path="http://www.shegurz.com/pengpai2/assets/images/",r.resoures=[r.path+"scene_0_bg_2.jpg",r.path+"scene_0_text1.png",r.path+"scene_0_text2.png",r.path+"scene_0_text3.png",r.path+"scene_0_text4.png",r.path+"scene_0_sun.png",r.path+"scene_1_bg_2.jpg",r.path+"scene_1_building.png",r.path+"scene_1_hand.png",r.path+"scene_1_stone.png",r.path+"scene_1_shenzhen.png",r.path+"z-000.png",r.path+"z-001.png",r.path+"z-002.png",r.path+"z-003.png",r.path+"z-004.png",r.path+"z-005.png",r.path+"scene_2_bg_3.jpg",r.path+"scene_2_view.png",r.path+"scene_2_txt.png",r.path+"w03-a.png",r.path+"w03-b.png",r.path+"scene_3_bg_2.jpg",r.path+"scene_4_text1.png",r.path+"w04-a.png",r.path+"w04-b.png",r.path+"w04-c.png",r.path+"w04-d.png",r.path+"scene_4_bg.jpg",r.path+"scene_5_text1.png",r.path+"w05-a.png",r.path+"w05-b.png",r.path+"w05-c.png",r.path+"scene_5_bg_4.jpg",r.path+"scene_6_text1.png",r.path+"w06-a.png",r.path+"w06-b.png",r.path+"w06-c.png",r.path+"scene_6_bg_3.jpg",r.path+"scene_7_text1.png",r.path+"wave1_1.png",r.path+"wave1_2.png",r.path+"wave1_3.png",r.path+"wave2.png",r.path+"pure.png",r.path+"fish.png",r.path+"boat_2.png",r.path+"scene_7_bg_2.jpg",r.path+"shuichang.png",r.path+"w07-a.png",r.path+"w07-b.png",r.path+"scene_8_bg_3.jpg",r.path+"scene_8_text1.png",r.path+"w08-a.png",r.path+"w08-b.png",r.path+"scene_9_bg_2.jpg",r.path+"scene_9_text1.png",r.path+"w09-a.png",r.path+"w09-b.png",r.path+"w09-c.png",r.path+"w09-d.png",r.path+"scene_10_bg_2.png",r.path+"scene_10_handstone.png",r.path+"scene_10_logo.png",r.path+"w10.png",r.path+"w11-a.png",r.path+"w11-b.png",r.path+"w11-c.png"],r.loadProgressHandler=function(e){$("#loading-progress").html(e)},r.cls={hidden:"hidden",active:"active"},r.utils.loadImages(r.resoures,{onProgress:r.loadProgressHandler,onComplete:function(){i.init()}}),document.body.addEventListener("touchmove",function(e){return e.preventDefault()},{passive:!1})},function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),r=n(56),Y=n.n(r),o=n(57),k=n.n(o),s=n(61),O=n.n(s),c=n(68),p=n.n(c),_=n(69),u=n.n(_),d=function(){function t(e){p()(this,t),""===e.id&&console.error("ID not exist"),this.width=e.width||window.innerWidth,this.height=e.height||window.innerHeight,this._stage=new createjs.Stage(document.getElementById(e.id)),this._stage.canvas.width=this.width,this._stage.canvas.height=this.height,this._loadQueue=null,this._isLoading=!1,this._isEnd=!1,this.isState=e.isState||!1,this.isLog=e.isLog||!1,this.resourcesPath=e.resourcesPath||"",this.resources=e.resources||[],this.sprites=e.sprites||{},this.data=e.data||[],this.onInit=e.onInit||null,this.onEnd=e.onEnd||null,this.mapStartY=e.mapStartY||0,this.mapActiveY=e.mapActiveY||0,this.mapEndY=e.mapEndY||0,this.mapPlayY=e.mapPlayY||this.height,this.touchSpeed=e.touchSpeed||1,this.objects={},this.animatorsGroup=[],this.isMoving=!1,this.touchData={startY:0,moveY:0,friction:.9,speed:this.touchSpeed,isInertance:!1},this.title=new createjs.Bitmap,this.init()}return u()(t,[{key:"init",value:function(){var a=this;this._preload(this.resources,{path:this.resourcesPath,complete:function(){"function"==typeof a.sprites&&(a.sprites=a.sprites(a)),"function"==typeof a.data&&(a.data=a.data(a));var e=[{id:"map",children:a.data}];if(a._render(e,null,function(e,t){e&&t.animation&&(e.animation=a._createAnimate(e,t.animation),a.animatorsGroup.push({displayObject:e}))}),a.map=a.objects.map,a.map.y=a.mapActiveY?-a.mapActiveY:-a.mapStartY,!a.mapEndY){var t=a.map.getBounds().height+a.map.getBounds().y-a.height,n=Math.max.apply(Math,a.animatorsGroup.map(function(e){return e.displayObject.animation.mapPlayEndY}));a.mapEndY=Math.max(t,n)}a._initTouchEvent(),a.onInit&&a.onInit(),a.isState&&a._stats(),a._stage.update()}}),createjs.Ticker.timingMode=createjs.Ticker.RAF}},{key:"play",value:function(){createjs.Ticker.addEventListener("tick",this._onTick.bind(this))}},{key:"replay",value:function(){this._isEnd=!1,this.touchData={startY:0,moveY:0,friction:.92,speed:this.touchSpeed,isInertance:!1},this.map.y=-this.mapStartY,this.animatorsGroup.forEach(function(e){e.displayObject.animation.set(0)}),this._stage.update(),this.play()}},{key:"stop",value:function(){createjs.Ticker.removeAllEventListeners()}},{key:"getImage",value:function(e){return this._loadQueue.getResult(e)}},{key:"_onTick",value:function(){if(!this._isLoading&&this.isMoving){if(this.touchData.isInertance&&(this.touchData.moveY*=this.touchData.friction,Math.abs(this.touchData.moveY)<=1&&(this.touchData.startY=0,this.touchData.moveY=0,this.touchData.isInertance=!1,this.isMoving=!1)),this.map.y+=this.touchData.moveY*this.touchData.speed,this.map.y>-this.mapStartY&&(this.map.y=-this.mapStartY),this.map.y<-this.mapEndY){if(this._isEnd)return;return this._isEnd=!0,this.map.y=-this.mapEndY,void(this.onEnd&&this.onEnd())}this._updateAnimators()}this.isState&&this.stats.update()}},{key:"_updateAnimators",value:function(){var r=-this.map.y;this.animatorsGroup.map(function(e){var t=e.displayObject,n=t.animation.mapPlayStartY,a=t.animation.mapPlayEndY;if(n<=r&&r<a){var i=Math.abs(r-n);t.animation.update(i)}else r<n?t.animation.update(0):a<r&&t.animation.update(a-n)}),this._stage.update()}},{key:"_initTouchEvent",value:function(){var t=this;this._stage.canvas.addEventListener("touchstart",function(e){t.touchData.startY=e.touches[0].clientY,t.touchData.isInertance=!1,t.isMoving=!1}),this._stage.canvas.addEventListener("touchmove",function(e){t.touchData.moveY=e.touches[0].clientY-t.touchData.startY,t.touchData.startY=e.touches[0].clientY,t.isMoving=!0}),this._stage.canvas.addEventListener("touchend",function(){t.touchData.isInertance=!0})}},{key:"_preload",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=n.complete,i=void 0===a?function(){}:a,r=n.progress,o=void 0===r?function(){}:r,s=n.error,c=void 0===s?function(){}:s,p=n.path,_=void 0===p?"":p;this.isLoading=!0,this._loadQueue=new createjs.LoadQueue(!0,_),o&&this._loadQueue.on("progress",function(e){return o(e)}),c&&this._loadQueue.on("error",function(e){return c(e)}),this._loadQueue.on("complete",function(e){t.isLoading=!1,i&&i(e)}),this._loadQueue.loadManifest(e)}},{key:"_addObj",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=null;switch(e.type){case"shape":t=new createjs.Shape;break;case"bitmap":e.image&&(t=new createjs.Bitmap(e.image));break;case"text":t=new createjs.Text;break;case"sprite":if(e.sheet){var n=new createjs.SpriteSheet(e.sheet);t=new createjs.Sprite(n)}break;default:t=new createjs.Container}if(e.type?t.type=e.type:t.type="container",e.id&&(t.name=e.id),e.parent_id&&(t.parentId=e.parent_id),e.prop){var a=!0,i=!1,r=void 0;try{for(var o,s=O()(k()(e.prop));!(a=(o=s.next()).done);a=!0){var c=o.value;if(t[c]instanceof Object){var p=!0,_=!1,u=void 0;try{for(var d,g=O()(k()(e.prop[c]));!(p=(d=g.next()).done);p=!0){var h,l=d.value;if("function"==typeof t[c][l])(h=t[c])[l].apply(h,Y()(e.prop[c][l]));else t[c][l]=e.prop[c][l]}}catch(e){_=!0,u=e}finally{try{!p&&g.return&&g.return()}finally{if(_)throw u}}}else if("function"==typeof t[c]){var m;(m=t)[c].apply(m,Y()(e.prop[c]))}else t[c]=e.prop[c]}}catch(e){i=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw r}}if("text"===e.type&&e.prop.align)switch(e.prop.align){case"center":t.x=(this.width-t.getBounds().width)/2;break;case"right":t.x=this.width-t.getBounds().width;break;default:t.x=0}}if(e.method){var f=!0,y=!1,x=void 0;try{for(var v,b=O()(k()(e.method));!(f=(v=b.next()).done);f=!0){var w,I=v.value;(w=t)[I].apply(w,Y()(e.method[I]))}}catch(e){y=!0,x=e}finally{try{!f&&b.return&&b.return()}finally{if(y)throw x}}}if(e.event&&e.event.handle){var j=e.event.type||"click";t.addEventListener(j,e.event.handle)}if(t.getBounds()){var S=t.getBounds();t.width=S.width,t.height=S.height}return t}},{key:"_render",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=this,n=arguments[1],a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};e instanceof Object&&(e=i()(e)),e.map(function(e){e.parent_id=n,t.objects[e.id]=t._addObj(e),t.isLog&&(console.group(e.id+":"),console.table({x:t.objects[e.id].x,y:t.objects[e.id].y,regX:t.objects[e.id].regX,regY:t.objects[e.id].regY,scaleX:t.objects[e.id].scaleX,scaleY:t.objects[e.id].scaleY,rotation:t.objects[e.id].rotation,alpha:t.objects[e.id].alpha,visible:t.objects[e.id].visible})),n?t.objects[n].addChild(t.objects[e.id]):t._stage.addChild(t.objects[e.id]),a&&a(t.objects[e.id],e),e.children&&t._render(e.children,e.id,a),t.isLog&&console.groupEnd()}),this._stage.update()}},{key:"_createAnimate",value:function(r){var a,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.x,n=void 0===t?null:t,i=e.y,o=void 0===i?null:i,s=e.scaleX,c=void 0===s?null:s,p=e.scaleY,_=void 0===p?null:p,u=e.skewX,d=void 0===u?null:u,g=e.skewY,h=void 0===g?null:g,l=e.rotation,m=void 0===l?null:l,f=e.alpha,y=void 0===f?1:f,x=e.top,v=void 0===x?0:x,b=e.duration,w=void 0===b?0:b,I=e.sprite,j=void 0===I?[]:I,S=e.startById,Y=void 0===S?null:S,k=e.endById,O=void 0===k?null:k,E=e.afterById,P=void 0===E?null:E,M=e.musicById,B=void 0===M?null:M,L=r.y+(a=0,function e(t){var n=t.parent;n&&null!==n.parent&&(a+=n.y,e(n))}(r),a),T=r.x,A=r.y,D=n,z=o,C=r.alpha,F=r.scaleX,G=r.scaleY,R=r.skewX,X=r.skewY,H=r.rotation,Q=!1,N=!1,V=0,W=0;function $(e){var t=e/w;if(1<j.length){var n=j.length,a=w/n,i=Math.min(e/a|0,n-1);r.image=j[i]}(D||0===D)&&(r.x=t*(D-T)+T),(z||0===z)&&(r.y=t*(z-A)+A),(y||0===y)&&(r.alpha=t*(y-C)+C),(c||0===c)&&(r.scaleX=t*(c-F)+F),(_||0===_)&&(r.scaleY=t*(_-G)+G),(d||0===d)&&(r.skewX=t*(d-R)+R),(h||0===h)&&(r.skewY=t*(h-X)+X),(m||0===m)&&(r.rotation=t*(m-H)+H)}return V=Y?this.objects[Y].animation.mapPlayStartY:P?this.objects[P].animation.mapPlayEndY:L-v>=this.mapPlayY?L-v-this.mapPlayY:this.mapStartY,O&&V<this.objects[O].animation.mapPlayEndY?(W=this.objects[O].animation.mapPlayEndY,w=W-V):W=V+w,{mapPlayStartY:V,mapPlayEndY:W,update:function(e){var t=e/w;if(0!==t&&1!==t||!1!==N){if(N=1<=t?!(t=1):!(t<=0)||(t=0,!1),B){var n=document.getElementById(B);n&&(!1===Q?(Q=!0,n.currentTime=0,n.play()):!0===Q&&0===t&&(n.pause(),Q=!1),n.loop&&!0===Q&&1===t&&(n.pause(),Q=!1))}$(e)}},set:function(e){N&&(N=!1),Q&&(Q=!1),$(e)}}}},{key:"_stats",value:function(){this.stats=new Stats,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}}]),t}();t.default=d},function(e,t,n){e.exports={default:n(4),__esModule:!0}},function(e,t,n){n(5),n(49),e.exports=n(13).Array.from},function(e,t,n){"use strict";var a=n(6)(!0);n(9)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=a(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var c=n(7),p=n(8);e.exports=function(s){return function(e,t){var n,a,i=String(p(e)),r=c(t),o=i.length;return r<0||o<=r?s?"":void 0:(n=i.charCodeAt(r))<55296||56319<n||r+1===o||(a=i.charCodeAt(r+1))<56320||57343<a?s?i.charAt(r):n:s?i.slice(r,r+2):a-56320+(n-55296<<10)+65536}}},function(e,t){var n=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?a:n)(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){"use strict";var x=n(10),v=n(11),b=n(27),w=n(16),I=n(28),j=n(29),S=n(45),Y=n(47),k=n(46)("iterator"),O=!([].keys&&"next"in[].keys()),E="values",P=function(){return this};e.exports=function(e,t,n,a,i,r,o){j(n,t,a);var s,c,p,_=function(e){if(!O&&e in h)return h[e];switch(e){case"keys":case E:return function(){return new n(this,e)}}return function(){return new n(this,e)}},u=t+" Iterator",d=i==E,g=!1,h=e.prototype,l=h[k]||h["@@iterator"]||i&&h[i],m=l||_(i),f=i?d?_("entries"):m:void 0,y="Array"==t&&h.entries||l;if(y&&(p=Y(y.call(new e)))!==Object.prototype&&p.next&&(S(p,u,!0),x||"function"==typeof p[k]||w(p,k,P)),d&&l&&l.name!==E&&(g=!0,m=function(){return l.call(this)}),x&&!o||!O&&!g&&h[k]||w(h,k,m),I[t]=m,I[u]=P,i)if(s={values:d?m:_(E),keys:r?m:_("keys"),entries:f},o)for(c in s)c in h||b(h,c,s[c]);else v(v.P+v.F*(O||g),t,s);return s}},function(e,t){e.exports=!0},function(e,t,n){var l=n(12),m=n(13),f=n(14),y=n(16),x=n(26),v="prototype",b=function(e,t,n){var a,i,r,o=e&b.F,s=e&b.G,c=e&b.S,p=e&b.P,_=e&b.B,u=e&b.W,d=s?m:m[t]||(m[t]={}),g=d[v],h=s?l:c?l[t]:(l[t]||{})[v];for(a in s&&(n=t),n)(i=!o&&h&&void 0!==h[a])&&x(d,a)||(r=i?h[a]:n[a],d[a]=s&&"function"!=typeof h[a]?n[a]:_&&i?f(r,l):u&&h[a]==r?function(a){var e=function(e,t,n){if(this instanceof a){switch(arguments.length){case 0:return new a;case 1:return new a(e);case 2:return new a(e,t)}return new a(e,t,n)}return a.apply(this,arguments)};return e[v]=a[v],e}(r):p&&"function"==typeof r?f(Function.call,r):r,p&&((d.virtual||(d.virtual={}))[a]=r,e&b.R&&g&&!g[a]&&y(g,a,r)))};b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128,e.exports=b},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(15);e.exports=function(a,i,e){if(r(a),void 0===i)return a;switch(e){case 1:return function(e){return a.call(i,e)};case 2:return function(e,t){return a.call(i,e,t)};case 3:return function(e,t,n){return a.call(i,e,t,n)}}return function(){return a.apply(i,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var a=n(17),i=n(25);e.exports=n(21)?function(e,t,n){return a.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var a=n(18),i=n(20),r=n(24),o=Object.defineProperty;t.f=n(21)?Object.defineProperty:function(e,t,n){if(a(e),t=r(t,!0),a(n),i)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var a=n(19);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(21)&&!n(22)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var a=n(19),i=n(12).document,r=a(i)&&a(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){var i=n(19);e.exports=function(e,t){if(!i(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!i(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!i(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!i(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){e.exports=n(16)},function(e,t){e.exports={}},function(e,t,n){"use strict";var a=n(30),i=n(25),r=n(45),o={};n(16)(o,n(46)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=a(o,{next:i(1,n)}),r(e,t+" Iterator")}},function(e,t,a){var i=a(18),r=a(31),o=a(43),s=a(40)("IE_PROTO"),c=function(){},p="prototype",_=function(){var e,t=a(23)("iframe"),n=o.length;for(t.style.display="none",a(44).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),_=e.F;n--;)delete _[p][o[n]];return _()};e.exports=Object.create||function(e,t){var n;return null!==e?(c[p]=i(e),n=new c,c[p]=null,n[s]=e):n=_(),void 0===t?n:r(n,t)}},function(e,t,n){var o=n(17),s=n(18),c=n(32);e.exports=n(21)?Object.defineProperties:function(e,t){s(e);for(var n,a=c(t),i=a.length,r=0;r<i;)o.f(e,n=a[r++],t[n]);return e}},function(e,t,n){var a=n(33),i=n(43);e.exports=Object.keys||function(e){return a(e,i)}},function(e,t,n){var o=n(26),s=n(34),c=n(37)(!1),p=n(40)("IE_PROTO");e.exports=function(e,t){var n,a=s(e),i=0,r=[];for(n in a)n!=p&&o(a,n)&&r.push(n);for(;t.length>i;)o(a,n=t[i++])&&(~c(r,n)||r.push(n));return r}},function(e,t,n){var a=n(35),i=n(8);e.exports=function(e){return a(i(e))}},function(e,t,n){var a=n(36);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var c=n(34),p=n(38),_=n(39);e.exports=function(s){return function(e,t,n){var a,i=c(e),r=p(i.length),o=_(n,r);if(s&&t!=t){for(;o<r;)if((a=i[o++])!=a)return!0}else for(;o<r;o++)if((s||o in i)&&i[o]===t)return s||o||0;return!s&&-1}}},function(e,t,n){var a=n(7),i=Math.min;e.exports=function(e){return 0<e?i(a(e),9007199254740991):0}},function(e,t,n){var a=n(7),i=Math.max,r=Math.min;e.exports=function(e,t){return(e=a(e))<0?i(e+t,0):r(e,t)}},function(e,t,n){var a=n(41)("keys"),i=n(42);e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t,n){var a=n(13),i=n(12),r="__core-js_shared__",o=i[r]||(i[r]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:a.version,mode:n(10)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+a).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var a=n(12).document;e.exports=a&&a.documentElement},function(e,t,n){var a=n(17).f,i=n(26),r=n(46)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,r)&&a(e,r,{configurable:!0,value:t})}},function(e,t,n){var a=n(41)("wks"),i=n(42),r=n(12).Symbol,o="function"==typeof r;(e.exports=function(e){return a[e]||(a[e]=o&&r[e]||(o?r:i)("Symbol."+e))}).store=a},function(e,t,n){var a=n(26),i=n(48),r=n(40)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),a(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,n){var a=n(8);e.exports=function(e){return Object(a(e))}},function(e,t,n){"use strict";var d=n(14),a=n(11),g=n(48),h=n(50),l=n(51),m=n(38),f=n(52),y=n(53);a(a.S+a.F*!n(55)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,i,r=g(e),o="function"==typeof this?this:Array,s=arguments.length,c=1<s?arguments[1]:void 0,p=void 0!==c,_=0,u=y(r);if(p&&(c=d(c,2<s?arguments[2]:void 0,2)),null==u||o==Array&&l(u))for(n=new o(t=m(r.length));_<t;_++)f(n,_,p?c(r[_],_):r[_]);else for(i=u.call(r),n=new o;!(a=i.next()).done;_++)f(n,_,p?h(i,c,[a.value,_],!0):a.value);return n.length=_,n}})},function(e,t,n){var r=n(18);e.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(e,t,n){var a=n(28),i=n(46)("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||r[i]===e)}},function(e,t,n){"use strict";var a=n(17),i=n(25);e.exports=function(e,t,n){t in e?a.f(e,t,i(0,n)):e[t]=n}},function(e,t,n){var a=n(54),i=n(46)("iterator"),r=n(28);e.exports=n(13).getIteratorMethod=function(e){if(null!=e)return e[i]||e["@@iterator"]||r[a(e)]}},function(e,t,n){var i=n(36),r=n(46)("toStringTag"),o="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),r))?n:o?i(t):"Object"==(a=i(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var r=n(46)("iterator"),o=!1;try{var a=[7][r]();a.return=function(){o=!0},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var a=[7],i=a[r]();i.next=function(){return{done:n=!0}},a[r]=function(){return i},e(a)}catch(e){}return n}},function(e,t,n){"use strict";t.__esModule=!0;var a,i=n(3),r=(a=i)&&a.__esModule?a:{default:a};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,r.default)(e)}},function(e,t,n){e.exports={default:n(58),__esModule:!0}},function(e,t,n){n(59),e.exports=n(13).Object.keys},function(e,t,n){var a=n(48),i=n(32);n(60)("keys",function(){return function(e){return i(a(e))}})},function(e,t,n){var i=n(11),r=n(13),o=n(22);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],a={};a[e]=t(n),i(i.S+i.F*o(function(){n(1)}),"Object",a)}},function(e,t,n){e.exports={default:n(62),__esModule:!0}},function(e,t,n){n(63),n(5),e.exports=n(67)},function(e,t,n){n(64);for(var a=n(12),i=n(16),r=n(28),o=n(46)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var p=s[c],_=a[p],u=_&&_.prototype;u&&!u[o]&&i(u,o,p),r[p]=r.Array}},function(e,t,n){"use strict";var a=n(65),i=n(66),r=n(28),o=n(34);e.exports=n(9)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),r.Arguments=r.Array,a("keys"),a("values"),a("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var a=n(18),i=n(53);e.exports=n(13).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var a,i=n(70),r=(a=i)&&a.__esModule?a:{default:a};t.default=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}()},function(e,t,n){e.exports={default:n(71),__esModule:!0}},function(e,t,n){n(72);var a=n(13).Object;e.exports=function(e,t,n){return a.defineProperty(e,t,n)}},function(e,t,n){var a=n(11);a(a.S+a.F*!n(21),"Object",{defineProperty:n(17).f})}]);