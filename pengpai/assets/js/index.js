!function(n){var i={};function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var i=n(2),a={init:function(){var e=window.innerHeight/window.innerWidth*750;new i.default({id:"gallery-canvas",width:750,height:e,resourcesPath:"assets/images/",resources:[{src:"scene_1_bg_2.jpg",id:"scene_1_bg"},{src:"scene_1_cloud.png",id:"scene_1_cloud"},{src:"scene_1_text.png",id:"scene_1_text"},{src:"z-000.png",id:"scene_1_text_1"},{src:"z-001.png",id:"scene_1_text_2"},{src:"z-002.png",id:"scene_1_text_3"},{src:"z-003.png",id:"scene_1_text_4"},{src:"z-004.png",id:"scene_1_text_5"},{src:"z-005.png",id:"scene_1_text_6"},{src:"scene_1_hand.png",id:"scene_1_hand"},{src:"scene_1_star.png",id:"scene_1_star"},{src:"scene_1_stone.png",id:"scene_1_stone"},{src:"scene_1_building_2.png",id:"scene_1_building"},{src:"scene_2_bg.jpg",id:"scene_2_bg"},{src:"scene_1_building_2.png",id:"scene_2_building"},{src:"scene_2_text.png",id:"scene_2_text1"},{src:"w02-a.png",id:"scene_2_text2_1"},{src:"w02-b.png",id:"scene_2_text2_2"},{src:"w02-c.png",id:"scene_2_text2_3"},{src:"scene_2_statue.png",id:"scene_2_statue"},{src:"scene_2_avenue.png",id:"scene_2_avenue"},{src:"scene_2_road1.png",id:"scene_2_road1"},{src:"scene_2_road2.png",id:"scene_2_road2"},{src:"scene_2_road3.png",id:"scene_2_road3"},{src:"scene_2_text3.png",id:"scene_2_text3"},{src:"scene_2_bg.jpg",id:"scene_3_bg"},{src:"router_1.png",id:"scene_3_router_1"},{src:"router_2.png",id:"scene_3_router_2"},{src:"router_3.png",id:"scene_3_router_3"},{src:"router_4.png",id:"scene_3_router_4"},{src:"underline_bg.png",id:"underline_bg"},{src:"underline_move.png",id:"underline_move"},{src:"metro.png",id:"metro"},{src:"scene_4_bg.jpg",id:"scene_4_bg"},{src:"scene_4_up.png",id:"scene_4_up"},{src:"scene_4_down.png",id:"scene_4_down"},{src:"scene_5_bg.jpg",id:"scene_5_bg"},{src:"scene_5_view.png",id:"scene_5_view"},{src:"scene_6_bg.jpg",id:"scene_6_bg"},{src:"dirty.png",id:"scene_6_dirty"},{src:"guan.png",id:"scene_6_guan"},{src:"chang1.png",id:"scene_6_chang1"},{src:"chang2.png",id:"scene_6_chang2"},{src:"chang3.png",id:"scene_6_chang3"},{src:"link1.png",id:"scene_6_link1"},{src:"link2.png",id:"scene_6_link2"},{src:"pure.png",id:"scene_6_pure"},{src:"guan2.png",id:"scene_6_guan2"},{src:"scene_6_bg2.jpg",id:"scene_6_bg2"},{src:"wave1_1.png",id:"wave1_1"},{src:"wave1_2.png",id:"wave1_2"},{src:"wave1_3.png",id:"wave1_3"},{src:"wave1_4.png",id:"wave1_4"},{src:"wave1_5.png",id:"wave1_5"},{src:"wave1_wave.png",id:"wave1_wave"},{src:"wave2.png",id:"wave2"},{src:"wave3.png",id:"wave3"},{src:"wave4.png",id:"wave4"},{src:"wave5.png",id:"wave5"},{src:"wave6.png",id:"wave6"},{src:"wave7.png",id:"wave7"},{src:"fish.png",id:"fish"}],sprites:function(e){return{}},data:this.canvasData,onInit:function(){console.log("初始化回调")},onEnd:function(){console.log("结束回调")}}).play()},canvasData:function(e){e.height;var t=444,n=1334;return[{id:"scene_1_container",prop:{y:0},animation:{y:n,duration:n},children:[{id:"scene_1_bg",type:"bitmap",image:e.getImage("scene_1_bg")},{id:"scene_1_building",type:"bitmap",image:e.getImage("scene_1_building"),prop:{x:e.width/2,y:e.height/2,regX:e.getImage("scene_1_building").width/2,regY:e.getImage("scene_1_building").height/2,alpha:0},animation:{alpha:1,top:-n,rotation:180,duration:t}},{id:"scene_1_cloud",type:"bitmap",image:e.getImage("scene_1_cloud"),prop:{x:e.width/2,y:e.height/2,regX:e.getImage("scene_1_cloud").width/2,regY:e.getImage("scene_1_cloud").height/2,alpha:0},animation:{top:-n,alpha:1,rotation:-180,duration:t}},{id:"scene_1_text_container",prop:{y:1150},children:[{id:"scene_1_text_1",type:"bitmap",image:e.getImage("scene_1_text_1"),prop:{x:(e.width-e.getImage("scene_1_text_1").width)/2,y:0,alpha:1},animation:{y:0,alpha:1,duration:n,sprite:[e.getImage("scene_1_text_1"),e.getImage("scene_1_text_2"),e.getImage("scene_1_text_3"),e.getImage("scene_1_text_4"),e.getImage("scene_1_text_5"),e.getImage("scene_1_text_6")]}}]},{id:"scene_1_star",type:"bitmap",image:e.getImage("scene_1_star"),prop:{x:(e.width-e.getImage("scene_1_star").width)/2,y:(e.height-e.getImage("scene_1_star").height)/2}},{id:"scene_1_hand",type:"bitmap",image:e.getImage("scene_1_hand"),prop:{x:(e.width-e.getImage("scene_1_hand").width)/2,y:(e.height-e.getImage("scene_1_hand").height)/2+100,alpha:0},animation:{alpha:1,duration:t,y:(e.height-e.getImage("scene_1_hand").height)/2}},{id:"scene_1_stone",type:"bitmap",image:e.getImage("scene_1_stone"),prop:{x:(e.width-e.getImage("scene_1_stone").width)/2,y:(e.height-e.getImage("scene_1_stone").height)/2}}]},{id:"scene_2_container",prop:{y:2*n},animation:{y:3*n,top:-n,duration:n},children:[{id:"scene_2_bg",type:"bitmap",image:e.getImage("scene_2_bg")},{id:"scene_2_text1",type:"bitmap",image:e.getImage("scene_2_text1"),prop:{x:0,y:0,alpha:0},animation:{x:50,y:50,alpha:1,duration:t}},{id:"scene_2_building",type:"bitmap",image:e.getImage("scene_2_building"),prop:{x:(e.width-e.getImage("scene_2_building").width)/2,y:(e.height-e.getImage("scene_2_building").height)/2,alpha:1}},{id:"scene_2_text2",type:"bitmap",image:e.getImage("scene_2_text2_1"),prop:{y:1050},animation:{sprite:[e.getImage("scene_2_text2_1"),e.getImage("scene_2_text2_2"),e.getImage("scene_2_text2_3")],duration:t}},{id:"scene_2_part2",prop:{y:0,alpha:0},animation:{top:-n-100,alpha:1,duration:50},children:[{id:"scene_2_bg",type:"bitmap",image:e.getImage("scene_2_bg")},{id:"scene_2_avenue",type:"bitmap",image:e.getImage("scene_2_avenue"),prop:{y:(e.height-e.getImage("scene_2_statue").height)/2-130,alpha:0},animation:{top:-n-t,duration:1e3,alpha:1}},{id:"scene_2_statue",type:"bitmap",image:e.getImage("scene_2_statue"),prop:{x:(e.width-e.getImage("scene_2_statue").width)/2,y:(e.height-e.getImage("scene_2_statue").height)/2,alpha:1},animation:{top:-n-100,alpha:1,x:(e.width-e.getImage("scene_2_statue").width)/2+30,y:(e.height-e.getImage("scene_2_statue").height)/2-100,scaleX:.6,scaleY:.6,duration:t}},{id:"scene_2_road1",type:"bitmap",image:e.getImage("scene_2_road1"),prop:{x:0,y:(e.height-e.getImage("scene_2_statue").height)/2-200,alpha:0},animation:{top:-n-100-t,x:80,alpha:1,duration:500}},{id:"scene_2_road2",type:"bitmap",image:e.getImage("scene_2_road2"),prop:{x:e.width,y:(e.height-e.getImage("scene_2_statue").height)/2+10,alpha:0},animation:{top:-n-100-t,x:e.width-e.getImage("scene_2_road2").width-30,alpha:1,duration:500}},{id:"scene_2_road3",type:"bitmap",image:e.getImage("scene_2_road3"),prop:{x:0,y:(e.height-e.getImage("scene_2_statue").height)/2+200,alpha:0},animation:{top:-n-100-t,x:80,alpha:1,duration:500}},{id:"scene_2_text3",type:"bitmap",image:e.getImage("scene_2_text3"),prop:{x:(e.width-e.getImage("scene_2_text3").width)/2,y:(e.height-e.getImage("scene_2_statue").height)/2+700,alpha:0},animation:{alpha:1,top:-n-100,duration:500}}]}]},{id:"scene_3_container",prop:{y:4*n},animation:{y:5*n,top:-n,duration:n},children:[{id:"scene_3_bg",type:"bitmap",image:e.getImage("scene_2_bg")},{id:"scene_3_router_1",type:"bitmap",image:e.getImage("scene_3_router_1"),prop:{y:0,alpha:0},animation:{alpha:1,duration:t}},{id:"scene_3_router_2",type:"bitmap",image:e.getImage("scene_3_router_2"),prop:{y:0,alpha:0},animation:{afterById:"scene_3_router_1",alpha:1,duration:200}},{id:"scene_3_router_3",type:"bitmap",image:e.getImage("scene_3_router_3"),prop:{y:0,alpha:0},animation:{afterById:"scene_3_router_2",alpha:1,duration:200}},{id:"scene_3_router_4",type:"bitmap",image:e.getImage("scene_3_router_4"),prop:{y:0,alpha:0},animation:{afterById:"scene_3_router_3",alpha:1,duration:200}},{id:"underline_bg",type:"bitmap",image:e.getImage("underline_bg"),prop:{x:0,y:800,alpha:0},animation:{afterById:"scene_3_router_4",alpha:1,duration:100}},{id:"metro",type:"bitmap",image:e.getImage("metro"),prop:{x:-739,y:870,alpha:1},animation:{afterById:"underline_bg",x:0,y:970,alpha:1,duration:n}},{id:"underline_move",type:"bitmap",image:e.getImage("underline_move"),prop:{x:750,y:620,alpha:1},animation:{afterById:"underline_bg",x:-1186,alpha:1,duration:n}}]},{id:"scene_4_container",prop:{y:6*n},animation:{y:7*n,top:-n,duration:n},children:[{id:"scene_4_bg",type:"bitmap",image:e.getImage("scene_4_bg")},{id:"scene_4_up",type:"bitmap",image:e.getImage("scene_4_up"),prop:{y:-733,alpha:0},animation:{top:-n-733,y:0,alpha:1,duration:t}},{id:"scene_4_down",type:"bitmap",image:e.getImage("scene_4_down"),prop:{y:1338,alpha:0},animation:{startById:"scene_4_up",y:610,alpha:1,duration:t}}]},{id:"scene_5_container",prop:{y:8*n},children:[{id:"scene_5_bg",type:"bitmap",image:e.getImage("scene_5_bg")},{id:"scene_5_view",type:"bitmap",image:e.getImage("scene_5_view"),prop:{y:400,alpha:0},animation:{top:-t,alpha:1,duration:t}}]},{id:"scene_6_container",prop:{y:9*n},animation:{y:10*n,top:-n,duration:n},children:[{id:"scene_6_bg",type:"bitmap",image:e.getImage("scene_6_bg")},{id:"scene_6_dirty",type:"bitmap",image:e.getImage("scene_6_dirty"),prop:{x:(e.width-e.getImage("scene_6_dirty").width)/2,y:160},animation:{top:-n,y:260,duration:260}},{id:"scene_6_guan",type:"bitmap",image:e.getImage("scene_6_guan"),prop:{x:(e.width-e.getImage("scene_6_guan").width)/2,y:260}},{id:"scene_6_chang1",type:"bitmap",image:e.getImage("scene_6_chang1"),prop:{x:122,y:366,alpha:0},animation:{alpha:1,duration:366}},{id:"scene_6_link1",type:"bitmap",image:e.getImage("scene_6_link1"),prop:{x:300,y:436,alpha:0},animation:{alpha:1,duration:436}},{id:"scene_6_chang2",type:"bitmap",image:e.getImage("scene_6_chang2"),prop:{x:434,y:578,alpha:0},animation:{alpha:1,duration:578}},{id:"scene_6_link2",type:"bitmap",image:e.getImage("scene_6_link2"),prop:{x:128,y:596,alpha:0},animation:{alpha:1,duration:596}},{id:"scene_6_chang3",type:"bitmap",image:e.getImage("scene_6_chang3"),prop:{x:180,y:638,alpha:0},animation:{alpha:1,duration:638}},{id:"scene_6_guan2",type:"bitmap",image:e.getImage("scene_6_guan2"),prop:{x:(e.width-e.getImage("scene_6_guan2").width)/2,y:706}}]},{id:"scene_6_container2",prop:{y:11*n},animation:{y:12*n,top:-n,duration:n},children:[{id:"scene_6_bg2",type:"bitmap",image:e.getImage("scene_6_bg")},{id:"scene_6_pure",type:"bitmap",image:e.getImage("scene_6_pure"),prop:{x:(e.width-e.getImage("scene_6_pure").width)/2,y:-212},animation:{y:334,duration:n}},{id:"scene_6_bg3",type:"bitmap",image:e.getImage("scene_6_bg2"),prop:{alpha:0},animation:{afterById:"scene_6_pure",alpha:1,duration:100}},{id:"wave2",type:"bitmap",image:e.getImage("wave2"),prop:{x:-10,y:200,alpha:0},animation:{alpha:1,top:-900,duration:100}},{id:"wave6",type:"bitmap",image:e.getImage("wave6"),prop:{x:0,y:0,alpha:0},animation:{y:50,alpha:1,top:-1200,duration:100}},{id:"wave7",type:"bitmap",image:e.getImage("wave7"),prop:{x:0,y:0,alpha:0},animation:{y:50,alpha:1,top:-1200,duration:100}},{id:"wave1_1",type:"bitmap",image:e.getImage("wave1_1"),prop:{x:e.width/2,y:410,regX:78,regY:78,alpha:0},animation:{alpha:1,afterById:"scene_6_pure",duration:100}},{id:"wave1_2",type:"bitmap",image:e.getImage("wave1_2"),prop:{x:e.width/2,y:410,regX:120,regY:120,alpha:0},animation:{alpha:1,afterById:"wave1_1",duration:100}},{id:"wave1_3",type:"bitmap",image:e.getImage("wave1_3"),prop:{x:e.width/2,y:410,regX:154,regY:154,alpha:0},animation:{alpha:1,afterById:"wave1_2",duration:100}},{id:"wave1_4",type:"bitmap",image:e.getImage("wave1_4"),prop:{x:e.width/2,y:410,regX:210,regY:210,alpha:0},animation:{alpha:1,afterById:"wave1_3",duration:100}},{id:"wave1_5",type:"bitmap",image:e.getImage("wave1_5"),prop:{x:e.width/2,y:410,regX:260,regY:260,alpha:0},animation:{alpha:1,afterById:"wave1_4",duration:100}},{id:"wave3",type:"bitmap",image:e.getImage("wave3"),prop:{x:480,y:628,alpha:0},animation:{alpha:1,afterById:"wave2",duration:100}},{id:"wave4",type:"bitmap",image:e.getImage("wave4"),prop:{x:130,y:704,alpha:0},animation:{alpha:1,afterById:"wave3",duration:100}},{id:"wave5",type:"bitmap",image:e.getImage("wave4"),prop:{x:378,y:796,alpha:0},animation:{alpha:1,afterById:"wave4",duration:100}},{id:"fish",type:"bitmap",image:e.getImage("fish"),prop:{alpha:0,x:374,y:910},animation:{afterById:"wave4",alpha:1,duration:200}}]}]}};$("#start").click(function(){document.getElementById("home").style.display="none"}),a.init(),document.body.addEventListener("touchmove",function(e){return e.preventDefault()},{passive:!1})},function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),r=n(56),Y=n.n(r),o=n(57),k=n.n(o),s=n(61),O=n.n(s),c=n(68),u=n.n(c),p=n(69),d=n.n(p),_=function(){function t(e){u()(this,t),""===e.id&&console.error("ID not exist"),this.width=e.width||window.innerWidth,this.height=e.height||window.innerHeight,this._stage=new createjs.Stage(document.getElementById(e.id)),this._stage.canvas.width=this.width,this._stage.canvas.height=this.height,this._loadQueue=null,this._isLoading=!1,this._isEnd=!1,this.isState=e.isState||!1,this.isLog=e.isLog||!1,this.resourcesPath=e.resourcesPath||"",this.resources=e.resources||[],this.sprites=e.sprites||{},this.data=e.data||[],this.onInit=e.onInit||null,this.onEnd=e.onEnd||null,this.mapStartY=e.mapStartY||0,this.mapActiveY=e.mapActiveY||0,this.mapEndY=e.mapEndY||0,this.mapPlayY=e.mapPlayY||this.height,this.touchSpeed=e.touchSpeed||1,this.objects={},this.animatorsGroup=[],this.isMoving=!1,this.touchData={startY:0,moveY:0,friction:.9,speed:this.touchSpeed,isInertance:!1},this.title=new createjs.Bitmap,this.init()}return d()(t,[{key:"init",value:function(){var i=this;this._preload(this.resources,{path:this.resourcesPath,complete:function(){"function"==typeof i.sprites&&(i.sprites=i.sprites(i)),"function"==typeof i.data&&(i.data=i.data(i));var e=[{id:"map",children:i.data}];if(i._render(e,null,function(e,t){e&&t.animation&&(e.animation=i._createAnimate(e,t.animation),i.animatorsGroup.push({displayObject:e}))}),i.map=i.objects.map,i.map.y=i.mapActiveY?-i.mapActiveY:-i.mapStartY,!i.mapEndY){var t=i.map.getBounds().height+i.map.getBounds().y-i.height,n=Math.max.apply(Math,i.animatorsGroup.map(function(e){return e.displayObject.animation.mapPlayEndY}));i.mapEndY=Math.max(t,n)}i._initTouchEvent(),i.onInit&&i.onInit(),i.isState&&i._stats(),i._stage.update()}}),createjs.Ticker.timingMode=createjs.Ticker.RAF}},{key:"play",value:function(){createjs.Ticker.addEventListener("tick",this._onTick.bind(this))}},{key:"replay",value:function(){this._isEnd=!1,this.touchData={startY:0,moveY:0,friction:.92,speed:this.touchSpeed,isInertance:!1},this.map.y=-this.mapStartY,this.animatorsGroup.forEach(function(e){e.displayObject.animation.set(0)}),this._stage.update(),this.play()}},{key:"stop",value:function(){createjs.Ticker.removeAllEventListeners()}},{key:"getImage",value:function(e){return this._loadQueue.getResult(e)}},{key:"_onTick",value:function(){if(!this._isLoading&&this.isMoving){if(this.touchData.isInertance&&(this.touchData.moveY*=this.touchData.friction,Math.abs(this.touchData.moveY)<=1&&(this.touchData.startY=0,this.touchData.moveY=0,this.touchData.isInertance=!1,this.isMoving=!1)),this.map.y+=this.touchData.moveY*this.touchData.speed,this.map.y>-this.mapStartY&&(this.map.y=-this.mapStartY),this.map.y<-this.mapEndY){if(this._isEnd)return;return this._isEnd=!0,this.map.y=-this.mapEndY,void(this.onEnd&&this.onEnd())}this._updateAnimators()}this.isState&&this.stats.update()}},{key:"_updateAnimators",value:function(){var r=-this.map.y;this.animatorsGroup.map(function(e){var t=e.displayObject,n=t.animation.mapPlayStartY,i=t.animation.mapPlayEndY;if(n<=r&&r<i){var a=Math.abs(r-n);t.animation.update(a)}else r<n?t.animation.update(0):i<r&&t.animation.update(i-n)}),this._stage.update()}},{key:"_initTouchEvent",value:function(){var t=this;this._stage.canvas.addEventListener("touchstart",function(e){t.touchData.startY=e.touches[0].clientY,t.touchData.isInertance=!1,t.isMoving=!1}),this._stage.canvas.addEventListener("touchmove",function(e){t.touchData.moveY=e.touches[0].clientY-t.touchData.startY,t.touchData.startY=e.touches[0].clientY,t.isMoving=!0}),this._stage.canvas.addEventListener("touchend",function(){t.touchData.isInertance=!0})}},{key:"_preload",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=n.complete,a=void 0===i?function(){}:i,r=n.progress,o=void 0===r?function(){}:r,s=n.error,c=void 0===s?function(){}:s,u=n.path,p=void 0===u?"":u;this.isLoading=!0,this._loadQueue=new createjs.LoadQueue(!0,p),o&&this._loadQueue.on("progress",function(e){return o(e)}),c&&this._loadQueue.on("error",function(e){return c(e)}),this._loadQueue.on("complete",function(e){t.isLoading=!1,a&&a(e)}),this._loadQueue.loadManifest(e)}},{key:"_addObj",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=null;switch(e.type){case"shape":t=new createjs.Shape;break;case"bitmap":e.image&&(t=new createjs.Bitmap(e.image));break;case"text":t=new createjs.Text;break;case"sprite":if(e.sheet){var n=new createjs.SpriteSheet(e.sheet);t=new createjs.Sprite(n)}break;default:t=new createjs.Container}if(e.type?t.type=e.type:t.type="container",e.id&&(t.name=e.id),e.parent_id&&(t.parentId=e.parent_id),e.prop){var i=!0,a=!1,r=void 0;try{for(var o,s=O()(k()(e.prop));!(i=(o=s.next()).done);i=!0){var c=o.value;if(t[c]instanceof Object){var u=!0,p=!1,d=void 0;try{for(var _,g=O()(k()(e.prop[c]));!(u=(_=g.next()).done);u=!0){var h,l=_.value;if("function"==typeof t[c][l])(h=t[c])[l].apply(h,Y()(e.prop[c][l]));else t[c][l]=e.prop[c][l]}}catch(e){p=!0,d=e}finally{try{!u&&g.return&&g.return()}finally{if(p)throw d}}}else if("function"==typeof t[c]){var m;(m=t)[c].apply(m,Y()(e.prop[c]))}else t[c]=e.prop[c]}}catch(e){a=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw r}}if("text"===e.type&&e.prop.align)switch(e.prop.align){case"center":t.x=(this.width-t.getBounds().width)/2;break;case"right":t.x=this.width-t.getBounds().width;break;default:t.x=0}}if(e.method){var f=!0,y=!1,v=void 0;try{for(var b,w=O()(k()(e.method));!(f=(b=w.next()).done);f=!0){var x,I=b.value;(x=t)[I].apply(x,Y()(e.method[I]))}}catch(e){y=!0,v=e}finally{try{!f&&w.return&&w.return()}finally{if(y)throw v}}}if(e.event&&e.event.handle){var j=e.event.type||"click";t.addEventListener(j,e.event.handle)}if(t.getBounds()){var S=t.getBounds();t.width=S.width,t.height=S.height}return t}},{key:"_render",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=this,n=arguments[1],i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};e instanceof Object&&(e=a()(e)),e.map(function(e){e.parent_id=n,t.objects[e.id]=t._addObj(e),t.isLog&&(console.group(e.id+":"),console.table({x:t.objects[e.id].x,y:t.objects[e.id].y,regX:t.objects[e.id].regX,regY:t.objects[e.id].regY,scaleX:t.objects[e.id].scaleX,scaleY:t.objects[e.id].scaleY,rotation:t.objects[e.id].rotation,alpha:t.objects[e.id].alpha,visible:t.objects[e.id].visible})),n?t.objects[n].addChild(t.objects[e.id]):t._stage.addChild(t.objects[e.id]),i&&i(t.objects[e.id],e),e.children&&t._render(e.children,e.id,i),t.isLog&&console.groupEnd()}),this._stage.update()}},{key:"_createAnimate",value:function(r){var i,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.x,n=void 0===t?null:t,a=e.y,o=void 0===a?null:a,s=e.scaleX,c=void 0===s?null:s,u=e.scaleY,p=void 0===u?null:u,d=e.skewX,_=void 0===d?null:d,g=e.skewY,h=void 0===g?null:g,l=e.rotation,m=void 0===l?null:l,f=e.alpha,y=void 0===f?1:f,v=e.top,b=void 0===v?0:v,w=e.duration,x=void 0===w?0:w,I=e.sprite,j=void 0===I?[]:I,S=e.startById,Y=void 0===S?null:S,k=e.endById,O=void 0===k?null:k,E=e.afterById,M=void 0===E?null:E,P=e.musicById,L=void 0===P?null:P,T=r.y+(i=0,function e(t){var n=t.parent;n&&null!==n.parent&&(i+=n.y,e(n))}(r),i),A=r.x,B=r.y,D=n,X=o,C=r.alpha,F=r.scaleX,G=r.scaleY,R=r.skewX,z=r.skewY,Q=r.rotation,N=!1,V=!1,H=0,W=0;function U(e){var t=e/x;if(1<j.length){var n=j.length,i=x/n,a=Math.min(e/i|0,n-1);r.image=j[a]}(D||0===D)&&(r.x=t*(D-A)+A),(X||0===X)&&(r.y=t*(X-B)+B),(y||0===y)&&(r.alpha=t*(y-C)+C),(c||0===c)&&(r.scaleX=t*(c-F)+F),(p||0===p)&&(r.scaleY=t*(p-G)+G),(_||0===_)&&(r.skewX=t*(_-R)+R),(h||0===h)&&(r.skewY=t*(h-z)+z),(m||0===m)&&(r.rotation=t*(m-Q)+Q)}return H=Y?this.objects[Y].animation.mapPlayStartY:M?this.objects[M].animation.mapPlayEndY:T-b>=this.mapPlayY?T-b-this.mapPlayY:this.mapStartY,O&&H<this.objects[O].animation.mapPlayEndY?(W=this.objects[O].animation.mapPlayEndY,x=W-H):W=H+x,{mapPlayStartY:H,mapPlayEndY:W,update:function(e){var t=e/x;if(0!==t&&1!==t||!1!==V){if(V=1<=t?!(t=1):!(t<=0)||(t=0,!1),L){var n=document.getElementById(L);n&&(!1===N?(N=!0,n.currentTime=0,n.play()):!0===N&&0===t&&(n.pause(),N=!1),n.loop&&!0===N&&1===t&&(n.pause(),N=!1))}U(e)}},set:function(e){V&&(V=!1),N&&(N=!1),U(e)}}}},{key:"_stats",value:function(){this.stats=new Stats,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}}]),t}();t.default=_},function(e,t,n){e.exports={default:n(4),__esModule:!0}},function(e,t,n){n(5),n(49),e.exports=n(13).Array.from},function(e,t,n){"use strict";var i=n(6)(!0);n(9)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var c=n(7),u=n(8);e.exports=function(s){return function(e,t){var n,i,a=String(u(e)),r=c(t),o=a.length;return r<0||o<=r?s?"":void 0:(n=a.charCodeAt(r))<55296||56319<n||r+1===o||(i=a.charCodeAt(r+1))<56320||57343<i?s?a.charAt(r):n:s?a.slice(r,r+2):i-56320+(n-55296<<10)+65536}}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?i:n)(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){"use strict";var v=n(10),b=n(11),w=n(27),x=n(16),I=n(28),j=n(29),S=n(45),Y=n(47),k=n(46)("iterator"),O=!([].keys&&"next"in[].keys()),E="values",M=function(){return this};e.exports=function(e,t,n,i,a,r,o){j(n,t,i);var s,c,u,p=function(e){if(!O&&e in h)return h[e];switch(e){case"keys":case E:return function(){return new n(this,e)}}return function(){return new n(this,e)}},d=t+" Iterator",_=a==E,g=!1,h=e.prototype,l=h[k]||h["@@iterator"]||a&&h[a],m=l||p(a),f=a?_?p("entries"):m:void 0,y="Array"==t&&h.entries||l;if(y&&(u=Y(y.call(new e)))!==Object.prototype&&u.next&&(S(u,d,!0),v||"function"==typeof u[k]||x(u,k,M)),_&&l&&l.name!==E&&(g=!0,m=function(){return l.call(this)}),v&&!o||!O&&!g&&h[k]||x(h,k,m),I[t]=m,I[d]=M,a)if(s={values:_?m:p(E),keys:r?m:p("keys"),entries:f},o)for(c in s)c in h||w(h,c,s[c]);else b(b.P+b.F*(O||g),t,s);return s}},function(e,t){e.exports=!0},function(e,t,n){var l=n(12),m=n(13),f=n(14),y=n(16),v=n(26),b="prototype",w=function(e,t,n){var i,a,r,o=e&w.F,s=e&w.G,c=e&w.S,u=e&w.P,p=e&w.B,d=e&w.W,_=s?m:m[t]||(m[t]={}),g=_[b],h=s?l:c?l[t]:(l[t]||{})[b];for(i in s&&(n=t),n)(a=!o&&h&&void 0!==h[i])&&v(_,i)||(r=a?h[i]:n[i],_[i]=s&&"function"!=typeof h[i]?n[i]:p&&a?f(r,l):d&&h[i]==r?function(i){var e=function(e,t,n){if(this instanceof i){switch(arguments.length){case 0:return new i;case 1:return new i(e);case 2:return new i(e,t)}return new i(e,t,n)}return i.apply(this,arguments)};return e[b]=i[b],e}(r):u&&"function"==typeof r?f(Function.call,r):r,u&&((_.virtual||(_.virtual={}))[i]=r,e&w.R&&g&&!g[i]&&y(g,i,r)))};w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128,e.exports=w},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(15);e.exports=function(i,a,e){if(r(i),void 0===a)return i;switch(e){case 1:return function(e){return i.call(a,e)};case 2:return function(e,t){return i.call(a,e,t)};case 3:return function(e,t,n){return i.call(a,e,t,n)}}return function(){return i.apply(a,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var i=n(17),a=n(25);e.exports=n(21)?function(e,t,n){return i.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(18),a=n(20),r=n(24),o=Object.defineProperty;t.f=n(21)?Object.defineProperty:function(e,t,n){if(i(e),t=r(t,!0),i(n),a)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var i=n(19);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(21)&&!n(22)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var i=n(19),a=n(12).document,r=i(a)&&i(a.createElement);e.exports=function(e){return r?a.createElement(e):{}}},function(e,t,n){var a=n(19);e.exports=function(e,t){if(!a(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!a(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){e.exports=n(16)},function(e,t){e.exports={}},function(e,t,n){"use strict";var i=n(30),a=n(25),r=n(45),o={};n(16)(o,n(46)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i(o,{next:a(1,n)}),r(e,t+" Iterator")}},function(e,t,i){var a=i(18),r=i(31),o=i(43),s=i(40)("IE_PROTO"),c=function(){},u="prototype",p=function(){var e,t=i(23)("iframe"),n=o.length;for(t.style.display="none",i(44).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),p=e.F;n--;)delete p[u][o[n]];return p()};e.exports=Object.create||function(e,t){var n;return null!==e?(c[u]=a(e),n=new c,c[u]=null,n[s]=e):n=p(),void 0===t?n:r(n,t)}},function(e,t,n){var o=n(17),s=n(18),c=n(32);e.exports=n(21)?Object.defineProperties:function(e,t){s(e);for(var n,i=c(t),a=i.length,r=0;r<a;)o.f(e,n=i[r++],t[n]);return e}},function(e,t,n){var i=n(33),a=n(43);e.exports=Object.keys||function(e){return i(e,a)}},function(e,t,n){var o=n(26),s=n(34),c=n(37)(!1),u=n(40)("IE_PROTO");e.exports=function(e,t){var n,i=s(e),a=0,r=[];for(n in i)n!=u&&o(i,n)&&r.push(n);for(;t.length>a;)o(i,n=t[a++])&&(~c(r,n)||r.push(n));return r}},function(e,t,n){var i=n(35),a=n(8);e.exports=function(e){return i(a(e))}},function(e,t,n){var i=n(36);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var c=n(34),u=n(38),p=n(39);e.exports=function(s){return function(e,t,n){var i,a=c(e),r=u(a.length),o=p(n,r);if(s&&t!=t){for(;o<r;)if((i=a[o++])!=i)return!0}else for(;o<r;o++)if((s||o in a)&&a[o]===t)return s||o||0;return!s&&-1}}},function(e,t,n){var i=n(7),a=Math.min;e.exports=function(e){return 0<e?a(i(e),9007199254740991):0}},function(e,t,n){var i=n(7),a=Math.max,r=Math.min;e.exports=function(e,t){return(e=i(e))<0?a(e+t,0):r(e,t)}},function(e,t,n){var i=n(41)("keys"),a=n(42);e.exports=function(e){return i[e]||(i[e]=a(e))}},function(e,t,n){var i=n(13),a=n(12),r="__core-js_shared__",o=a[r]||(a[r]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:n(10)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var i=n(12).document;e.exports=i&&i.documentElement},function(e,t,n){var i=n(17).f,a=n(26),r=n(46)("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,r)&&i(e,r,{configurable:!0,value:t})}},function(e,t,n){var i=n(41)("wks"),a=n(42),r=n(12).Symbol,o="function"==typeof r;(e.exports=function(e){return i[e]||(i[e]=o&&r[e]||(o?r:a)("Symbol."+e))}).store=i},function(e,t,n){var i=n(26),a=n(48),r=n(40)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),i(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,n){var i=n(8);e.exports=function(e){return Object(i(e))}},function(e,t,n){"use strict";var _=n(14),i=n(11),g=n(48),h=n(50),l=n(51),m=n(38),f=n(52),y=n(53);i(i.S+i.F*!n(55)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,a,r=g(e),o="function"==typeof this?this:Array,s=arguments.length,c=1<s?arguments[1]:void 0,u=void 0!==c,p=0,d=y(r);if(u&&(c=_(c,2<s?arguments[2]:void 0,2)),null==d||o==Array&&l(d))for(n=new o(t=m(r.length));p<t;p++)f(n,p,u?c(r[p],p):r[p]);else for(a=d.call(r),n=new o;!(i=a.next()).done;p++)f(n,p,u?h(a,c,[i.value,p],!0):i.value);return n.length=p,n}})},function(e,t,n){var r=n(18);e.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},function(e,t,n){var i=n(28),a=n(46)("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||r[a]===e)}},function(e,t,n){"use strict";var i=n(17),a=n(25);e.exports=function(e,t,n){t in e?i.f(e,t,a(0,n)):e[t]=n}},function(e,t,n){var i=n(54),a=n(46)("iterator"),r=n(28);e.exports=n(13).getIteratorMethod=function(e){if(null!=e)return e[a]||e["@@iterator"]||r[i(e)]}},function(e,t,n){var a=n(36),r=n(46)("toStringTag"),o="Arguments"==a(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),r))?n:o?a(t):"Object"==(i=a(t))&&"function"==typeof t.callee?"Arguments":i}},function(e,t,n){var r=n(46)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},e(i)}catch(e){}return n}},function(e,t,n){"use strict";t.__esModule=!0;var i,a=n(3),r=(i=a)&&i.__esModule?i:{default:i};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,r.default)(e)}},function(e,t,n){e.exports={default:n(58),__esModule:!0}},function(e,t,n){n(59),e.exports=n(13).Object.keys},function(e,t,n){var i=n(48),a=n(32);n(60)("keys",function(){return function(e){return a(i(e))}})},function(e,t,n){var a=n(11),r=n(13),o=n(22);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}},function(e,t,n){e.exports={default:n(62),__esModule:!0}},function(e,t,n){n(63),n(5),e.exports=n(67)},function(e,t,n){n(64);for(var i=n(12),a=n(16),r=n(28),o=n(46)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],p=i[u],d=p&&p.prototype;d&&!d[o]&&a(d,o,u),r[u]=r.Array}},function(e,t,n){"use strict";var i=n(65),a=n(66),r=n(28),o=n(34);e.exports=n(9)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,a(1)):a(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),r.Arguments=r.Array,i("keys"),i("values"),i("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var i=n(18),a=n(53);e.exports=n(13).getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var i,a=n(70),r=(i=a)&&i.__esModule?i:{default:i};t.default=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}()},function(e,t,n){e.exports={default:n(71),__esModule:!0}},function(e,t,n){n(72);var i=n(13).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},function(e,t,n){var i=n(11);i(i.S+i.F*!n(21),"Object",{defineProperty:n(17).f})}]);