<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta name="keywords" content="穗格氏,健康有趣,休闲食品,懒人吃货,即食型燕麦,天然食材,健康美食" />
    <meta name="description" content="穗格氏是一家致力于为消费者提供健康有趣的休闲食品公司。目前，穗格氏主要为追求健康的懒人吃货们提供即食型燕麦产品，同时也致力于发现更多健康有趣的天然食材，为懒人吃货们提供便捷美味的健康美食。" />
    <meta name="baidu-site-verification" content="dJbaraSyk5" />
  	<title>穗格氏官网</title>
  	<link rel="shortcut icon" href="http://shegurz.com/Public/img/favicon.ico" type="image/x-icon" />
  	<link rel="bookmark" href="http://shegurz.com/Public/img/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="http://shegurz.com/Public/img/logo2.png">
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="http://shegurz.com/Public/css/swiper.min.css">
    <link rel="stylesheet" href="http://shegurz.com/Public/css/style2.css">
    <!-- Demo styles -->
    <style>
    @media screen and (min-width: 1280px) {
      .sec1-0,.mask1{
        height: 1800px
      }
      .p1_text{
        font-size: 21px;
        line-height: 90px;
        margin-top: 585px;
      }
      .p1_bottom{
        margin-top: 898px;
      }
    }
    @media screen and (max-width: 1280px) {
      .sec1-0,.mask1{
        height: 1600px
      }
      .p1_bottom{
        margin-top: 770px;
      }
      .p1_text{
        font-size: 20px;
        line-height: 90px;
        margin-top: 150px;
      }

    }
    @media screen and (min-width: 768px) {
      .menu-s{display: none}
      .menu ul li {
        float: left;
      }
      .menu{display: block}
      .nav{
        height:97px
      }
      .nav-logo {
          line-height: 97px;
      }
      .menu ul li{
        height: 97px;
        width: 119px;
        text-align: center;
        line-height: 49px;
      }
      .sec2{
        background-position:center;
        background-attachment: fixed;
      }
      .sec3{
        background-position:center;
        background-attachment: fixed;
      }
      .sec4{
        background-position:center;
        background-attachment: fixed;
      }

    }
    @media screen and (max-width: 768px) {
      .p1_top img{
        width: 125px;
        height: 66px;
        margin-left: -62px;

      }
      .p1_bottom img{
        width: 62px;
        height: 58px;
        margin-left: -31px;
      }
      .sec2{

        background-position:0% 0%;
      }
      .sec3{
        background-position:0% 16%;
      }
      .sec4{
        background-position:0% 100%;
      }
      .nav{
        height:80px
      }
      .nav-logo {
          line-height: 80px;
      }
      .nav-logo img {
          width: 90px;
      }
      .menu {
          margin-right: 10px;
      }
      .menu{

      }
      img#menu-s-img {
          margin-top: 10px;
      }
      .menu ul li {
          height: 80px;
          width: 100px;
          text-align: center;
          line-height: 40px;
          background: #2c2f2d;
          opacity: 0.9;
      }
      .menu ul li:nth-child(2),.menu ul li:nth-child(3),.menu ul li:nth-child(4),.menu ul li:nth-child(5),.menu ul li:nth-child(6) {
        display: none
      }
      .menu-s{
        display: table-cell;
        vertical-align: middle;
      }

    }
    ul,li{list-style: none}
    a{text-decoration: none;color:white;}
    .left{
      float: left;
    }
    .right{
      float: right;
    }
    html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #140e07;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .none{
      display: none
    }
    /*导航栏*/
    .nav{
      width: 100%;
      background-color: #2c2f2d;
      opacity: 0.9;
      top: 0px;
      z-index: 999999999;
      position: fixed;
      font-family: source;
    }
    .nav-logo img{
      vertical-align: middle;
      margin-left: 39px
    }
    .menu{
      float:right;
    }
    .menu ul li a{
      font-size: 18px;
      line-height: 97px;

    }
    /*第一屏    */
    .sec1-0{
      width: 100%;
      background: url('http://shegurz.com/Public/img/index-img/bg1-1.jpg') fixed;
      background-position: 0% 0%;
      background-size: cover;
      position: relative;
    }
    .sec1-1{
      width: 100%;
      height: 100%;
      opacity: 0;
      background: url('http://shegurz.com/Public/img/index-img/bg1-2.jpg') fixed;
      background-position: 0% 0%;
      position: absolute;
      top: 0;
      display: none;
    }
    .sec1-2{
      width: 100%;
      height: 100%;
      opacity: 0;
      background: url('http://shegurz.com/Public/img/index-img/bg1-3.jpg') fixed;
      background-position: 0% 0%;
      position: absolute;
      top: 0;
      display: none;
    }
    .sec1-3{
      width: 100%;
      height: 100%;
      opacity: 0;
      background: url('http://shegurz.com/Public/img/index-img/bg1-4.jpg') fixed;
      background-position: 0% 0%;
      position: absolute;
      top: 0;
      display: none
    }
    @keyframes opac {
      0%{opacity: 1}
      12%{opacity: 0.8}
      25%{opacity: 1}
      100%{opacity: 1}
    }
    @-webkit-keyframes opac{
      0%{opacity: 1}
      12%{opacity: 0.8}
      25%{opacity: 1}
      100%{opacity: 1}
    }
    @keyframes opac2 {
      0%{opacity: 0.2}
      25%{opacity: 0.8}
      100%{opacity: 0.8}
    }
    @-webkit-keyframes opac2 {
      0%{opacity: 0.2}
      25%{opacity: 0.8}
      100%{opacity: 0.8}
    }
    @keyframes opac3 {
      0%{opacity: 0.8}
      25%{opacity: 0}
      100%{opacity: 0}
    }
    @-webkit-keyframes opac3 {
      0%{opacity: 0.8}
      25%{opacity: 0}
      100%{opacity: 0}
    }
    .ani-fade{
      animation-name: opac;
      -webkit-animation-name: opac;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      animation-duration: 4s;
      -webkit-animation-duration: 4s;
      animation-delay: 0s;
      -webkit-animation-delay: 0s;
      animation-iteration-count: infinite;
      -webkit-animation-iteration-count: infinite;
    }
    .ani-fade2{
      animation-name: opac2;
      -webkit-animation-name: opac2;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      animation-duration: 2s;
      -webkit-animation-duration: 2s;
      animation-delay: 0s;
      -webkit-animation-delay: 0s;
    }
    .ani-fade3{
      animation-name: opac3;
      -webkit-animation-name: opac3;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      animation-duration: 2s;
      -webkit-animation-duration: 2s;
      animation-delay: 0s;
      -webkit-animation-delay: 0s;
    }
    .sec1_logo{
      position: absolute;
      top: 50%;
      z-index: 99;
      left: 50%;
      margin-left: -156px;
      margin-top: -83px;
    }
    .sec1_scroll{
      position: absolute;
      top: 0%;
      z-index: 99;
      left: 50%;
      margin-left: -34px;
      margin-top: -70px;
      display: none
    }
    .sec1_scroll{
      animation-name: arrow-animate;
      animation-duration:4s;
      animation-timing-function:ease;
      animation-delay:1s;
      animation-iteration-count:infinite;
      -webkit-animation-name:arrow-animate;
      -webkit-animation-duration:4s;
      -webkit-animation-timing-function:ease;
      -webkit-animation-delay:1s;
      -webkit-animation-iteration-count:infinite;

    }
    @keyframes arrow-animate{
        0%{
            -webkit-transform:translateY(0)
        }
        15%{
            -webkit-transform:translateY(8px)
        }
        30%{
            -webkit-transform:translateY(0)
        }
        45%{
            -webkit-transform:translateY(8px)
        }
        60%{
            -webkit-transform:translateY(0)
        }
        100%{
            -webkit-transform:translateY(0)
        }
    }
    @-webkit-keyframes arrow-animate{
        0%{
            -webkit-transform:translateY(0)
        }
        15%{
            -webkit-transform:translateY(8px)
        }
        30%{
            -webkit-transform:translateY(0)
        }
        45%{
            -webkit-transform:translateY(8px)
        }
        60%{
            -webkit-transform:translateY(0)
        }
        100%{
            -webkit-transform:translateY(0)
        }
    }
    #swiper1 {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .p1_s{
      position: absolute;
      top: 50%;
      width: 100%;
      height: 700px;
      /*overflow: scroll;*/
      z-index: 1;

      /*height: 2828px;*/
    }
    .p1_s img{
      /*position: absolute;
      left: 50%;
      margin-top: -80px;
      margin-left: -437px;
      height:2000px*/
    }
    /*第二屏*/
    .sec2{
      background-image:url(http://shegurz.com/Public/img/index-img/bg2-1.jpg);
      background-size: 100%;
      width: 100%;
      height: 704px;
      position: absolute;
      background-position: 50% 0%;
    }
    .p2_t{
      position: absolute;
      z-index: 99;
      width: 60%;
      left: 50%;
      margin-left: -30%;
    }
    .p2_t img{
        position: absolute;
        width: 604px;
        height: 332px;
        left: 50%;
        margin-left: -302px;
        display: block;
    }
    #swiper2{
      z-index: 9;
      position: relative;
    }

    /*第三屏*/
    .t2{
      width: 100%;
      height: 55px;
      background-color: white;
      position: relative;
    }
    .sec3{
      background-image:url(http://shegurz.com/Public/img/index-img/bg3-1.jpg);
      background-size: 100%;
      width: 100%;
      position: absolute;
    }
    .p3_t{
      position: absolute;
      z-index: 99;
      width: 60%;
      left: 50%;
      margin-left: -30%;

    }
    .p3_t img{
        position: absolute;
        left: 50%;
        width: 549px;
        height: 322px;
        margin-left: -274px;
        display: block;
    }
    #swiper3{
      z-index: 9
    }
    /*第四屏*/
    .sec4{
      background-image:url(http://shegurz.com/Public/img/index-img/4-b.jpg);
      background-size: 100%;
      width: 100%;
      position: absolute;
    }
    .p4_t{
      position: absolute;
      z-index: 99;
      width: 60%;
      left: 50%;
      margin-left: -30%;
    }
    .p4_t img{
        position: absolute;
        left: 50%;
        width: 536px;
        height: 230px;
        margin-left: -268px;
        display: block;
    }
    .t3{position: relative;z-index: 99}

.sec5{
  width: 100%;
  position: relative;
}
.sec6{
  width: 100%;
}
.sec6{
  position: relative;

}
.sec6 img{display: block}
.pblock{height: 740px}

/*.pdisplay{opacity: 0}*/
.swiper-button-prev{background-image:url("http://shegurz.com/Public/img/index-img/prev.png");z-index: 9;left:40px;}
.swiper-button-next{background-image:url("http://shegurz.com/Public/img/index-img/next.png");z-index: 9;right:40px;}
.sbutton{display: none}
.partB{
  position: relative;
}

.swiper-pagination-bullet {
    width: 25px;
    height: 25px;
    display: inline-block;
    background: url('http://shegurz.com/Public/img/index-img/page2.png');
    z-index: 99999999
}
.swiper-pagination-bullet-active {
  z-index: 99999999;
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url('http://shegurz.com/Public/img/index-img/page1.png');
  opacity: 1
}
.mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  top:0px;
  left:0px;
  z-index: 10;
}
.mask1{
  position: absolute;
  top:0;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  display: none
}
@font-face {
  font-family: source;
  src:url('http://shegurz.com/Public/fonts/source.ttf')
}
.p2_t_1,.p3_t_1,.p4_t_1{
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 99
}
.p2_t_1 img,.p3_t_1 img,.p4_t_1 img{
  position: absolute;
  left: 50%;
  top: 50%;
}
.sec2-p1{
  position: absolute;
  left: 0;
  top: 0;
}
.p1_top {
    /* display: inline-block; */
    width: 50%;
    position: relative;
    left: 50%;
    margin-top: -83px;
    display: none
}
</style>
</head>
<body>
  <!-- 导航栏 -->
  <div class="nav">
    <div class="nav-logo left"><img style="width:120px" src="http://shegurz.com/Public/img/index-img/logo.png" alt=""></div>
    <div class="menu" id="menu">
      <ul>
        <li id="menu-s" class="menu-s tclick"><img id="menu-s-img" src="http://shegurz.com/Public/img/index-img/menu.png" alt=""></li>
        <li><a href="#home">首页</a></li>
        <li><a href="#fun">就爱玩味</a></li>
        <li><a href="#nature">自然之果</a></li>
        <li><a href="#delicacy">美食乐园</a></li>
        <li><a href="#connect">联系我们</a></li>
      </ul>
    </div>
  </div>
  <div class="sec1-0 partA ani">
  </div>
  <!-- <div class="sec1-1 partA ani">
  </div>
  <div class="sec1-2 partA ani">
  </div>
  <div class="sec1-3 partA ani">
  </div> -->
    <div class="mask1"></div>
<style media="screen">
  .p1_text{
    position: absolute;
    left: 50%;
    width: 100%;
    height: 588px;
    margin-left: -50%;
    top: 0%;
    color: whitesmoke;
    text-align: center;
    font-family: source;
    display: none
  }
  .p1_bottom{
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    display: none
  }
</style>
    <div class="p1_s">
      <div class="p1_top">
        <img src="http://shegurz.com/Public/img/index-img/p1_top.png" alt="">
      </div>
      <div class="sec1_scroll">
        <img src="http://shegurz.com/Public/img/index-img/sec1_scroll.png" alt="">
      </div>
      <div class="p1_text">
        <p>让我们摘下大自然盛产的果实</p>
        <p>田野中的金色</p>
        <p>带来收获的喜悦</p>
        <p>我们将自然之果盛于此中</p>
        <p>进入奇妙的殿堂</p>
        <p>大繁归于至简</p>
        <p>天然即是自然</p>
      </div>
      <!-- <div class="p1_bottom">
        <img src="http://shegurz.com/Public/img/index-img/p1_bottom.png" alt="">
      </div> -->
    </div>
    <div class="partB">
      <!-- Swiper -->

        <!-- <div class="sec2"> -->
        <div class="t1"><img class="block" src="http://shegurz.com/Public/img/index-img/t1.png" alt=""></div>
        <!-- <div class="p2_t"><img src="http://shegurz.com/Public/img/index-img/p2_t.png" alt=""></div> -->
        <div class="sec2">

        </div>
        <div class="pblock" id="slide1">
          <div class="pdisplay">
            <div class="swiper-container" id="swiper2">

              <div class="swiper-wrapper">
                <div class="swiper-slide"><div class="mask"></div><div class="p2_t_1"><img src="http://shegurz.com/Public/img/index-img/p2_t.png" alt=""></div></div>
                <div class="swiper-slide">
                  <img style="width:100%;" src="http://shegurz.com/Public/img/index-img/2-2.jpg" alt="">
                </div>
                <div class="swiper-slide"><img style="width:100%;" src="http://shegurz.com/Public/img/index-img/2-3.jpg" alt=""></div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
              <div class="sbutton">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      <div class="t2"></div>
        <!-- <div class="p3_t"><img src="http://shegurz.com/Public/img/index-img/p3_t.png" alt=""></div> -->
      <div class="sec3">

      </div>
      <div class="pblock" id="slide2">
        <div class="pdisplay">
          <div class="swiper-container" id="swiper3">

            <div class="swiper-wrapper">
              <div class="swiper-slide"><div class="mask"></div><div class="p3_t_1"><img src="http://shegurz.com/Public/img/index-img/p3_t.png" alt=""></div></div>
              <!-- <div class="swiper-slide"><img style="width:100%;" src="http://shegurz.com/Public/img/index-img/3-1.jpg" alt=""></div> -->
              <div class="swiper-slide"><img style="width:100%;" src="http://shegurz.com/Public/img/index-img/3-2.jpg" alt=""></div>
              <div class="swiper-slide"><img style="width:100%;" src="http://shegurz.com/Public/img/index-img/3-3.jpg" alt=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <div class="sbutton">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="t3"><img class="block" src="http://shegurz.com/Public/img/index-img/t3.jpg" alt=""></div>
      <!-- <div class="p4_t"><img src="http://shegurz.com/Public/img/index-img/p4_t.png" alt=""></div> -->
      <div class="sec4">
      </div>
      <div class="pblock" id="slide3">
        <div class="pdisplay">
          <div class="swiper-container" id="swiper4">

            <div class="swiper-wrapper">
              <div class="swiper-slide"><div class="mask"></div><div class="p4_t_1"><img src="http://shegurz.com/Public/img/index-img/p4_t.png" alt=""></div></div>
              <!-- <div class="swiper-slide"><img style="width:100%;" src="http://shegurz.com/Public/img/index-img/4-1.jpg" alt=""></div> -->
              <div class="swiper-slide"><img style="width:100%;" src="http://shegurz.com/Public/img/index-img/4-2.jpg" alt=""></div>
              <div class="swiper-slide"><img style="width:100%;" src="http://shegurz.com/Public/img/index-img/4-3.jpg" alt=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <div class="sbutton">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="sec5">
        <img src="http://shegurz.com/Public/img/index-img/5.jpg" alt="">
      </div>
      <style media="screen">
        .scrolltop{
          position: absolute;
          top: 0px;
          left: 50%;
          margin-left: -54px;
          display: inline-block;
          cursor: pointer;
          cursor: hand;
        }
	#gxb{
	  position: absolute;
    	  bottom: 6px;
    	  left: 50%;
    	  margin-left: -65px;
	}
	#gxb a{color:#9b7844}
      </style>
      <div class="sec6">
        <div class="scrolltop"><img src="http://shegurz.com/Public/img/index-img/scrolltop.png" alt=""></div>
        <img class="bottom" src="http://shegurz.com/Public/img/index-img/bottom.png" alt="">
	<div id="gxb"><a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备16107866号</a></div>
      </div>
    </div>
    <!-- Swiper JS -->
    <script type="text/javascript" src="http://libs.baidu.com/jquery/1.7.1/jquery.min.js"></script>
    <script src="http://shegurz.com/Public/js/swiper.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
    var swiper = new Swiper('#swiper1', {
        pagination: '#swiper1 .swiper-pagination',
        paginationClickable: true,
        effect : 'fade',
        autoplay : 5000,
        loop : true,
        fade: {
          crossFade: true,
        }
    });
    var sh2 = $('.sec2').height();
    var swiper2 = new Swiper('#swiper2', {
        pagination: '#swiper2 .swiper-pagination',
        paginationClickable: true,
        // effect : 'fade',
        prevButton:'#swiper2 .swiper-button-prev',
        nextButton:'#swiper2 .swiper-button-next',
        loop : true,
        fade: {
          crossFade: true,
        }
    });
    var swiper3 = new Swiper('#swiper3', {
        pagination: '#swiper3 .swiper-pagination',
        paginationClickable: true,
        // effect : 'fade',
        prevButton:'#swiper3 .swiper-button-prev',
        nextButton:'#swiper3 .swiper-button-next',
        loop : true,
        fade: {
          crossFade: true,
        }
    });
    var swiper4 = new Swiper('#swiper4', {
        pagination: '#swiper4 .swiper-pagination',
        paginationClickable: true,
        // effect : 'fade',
        prevButton:'#swiper4 .swiper-button-prev',
        nextButton:'#swiper4 .swiper-button-next',
        loop : true,
        fade: {
          crossFade: true,
        }
    });

    </script>
    <script type="text/javascript">

    // function saveImg( key ){
    //    var img = new Image,
    //     canvas = document.createElement("canvas"),
    //     ctx = canvas.getContext("2d"),
    //     src = "http://shegurz.com/Public/img/index-img/p1_top.png"; // insert image url here
    //
    //     img.crossOrigin = "Anonymous";
    //
    //     img.onload = function() {
    //         canvas.width = img.width;
    //         canvas.height = img.height;
    //         ctx.drawImage( img, 0, 0 );
    //         localStorage.setItem( key, canvas.toDataURL("image/png") );
    //     }
    //     img.src = src;
    //     // make sure the load event fires for cached images too
    //     if ( img.complete || img.complete === undefined ) {
    //         img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    //         img.src = src;
    //     }
    //  }
    //
    //  function get(key){
    //    //读取get(容器,图片)
    //    console.log(localStorage);
    //      var srcStr = localStorage.getItem(key);
    //     console.log(srcStr);
    //  }
    //
    // console.log(get("savedImageData"));
    // if(get("savedImageData")) {
    //
    // }else{
    //   saveImg("savedImageData");
    // }
    //

    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var auto1 = 1;
    var auto2 = 1;
    var auto3 = 1;
    function gh(x){
      var gh = x*w/1920;
      return gh;
    }
    function gh2(x){
      var h = x*w/1920;
      return h;
    }
    window.onload = function() {
      $('.p1_top').show();
      $('.sec1_scroll').show();
      $('.p1_text').show();
      $('.p1_bottom').show();
      var bulletw = 25*w/1920;
      var bulleth = bulletw;
      $('.swiper-pagination-bullet').css('width',bulletw);
      $('.swiper-pagination-bullet').css('height',bulleth);
      $('.swiper-pagination-bullet').css('background-size',bulletw+'px '+bulleth+'px');
      var arroww = 37*w/1920;
      var arrowh = arroww*69/37;
      $('.swiper-button-prev').css('background-size',arroww+'px '+arrowh+'px');
      $('.swiper-button-prev').css('width',arroww+'px');
      $('.swiper-button-prev').css('height',arrowh+'px');
      $('.swiper-button-next').css('background-size',arroww+'px '+arrowh+'px');
      $('.swiper-button-next').css('width',arroww+'px');
      $('.swiper-button-next').css('height',arrowh+'px');

      var sctw = 108*w/1920;
      var scth = sctw*48/108;

      $('.scrolltop').css('width',sctw);
      $('.scrolltop').css('height',scth);
      $('.scrolltop img').css('width',sctw);
      $('.scrolltop img').css('height',scth);
      $('.scrolltop').css('margin-left',-sctw/2);




      var p1sh = $('.p1_s').css('height');
      var tipw = 69*w/1920;
      var tiph = tipw*37/69;
      var p1tw = 572*w/1920;
      var p1th = p1tw*588/572;
      var p1ttop = gh(500);
      console.log('welcome to shegurz!');
      // $('.mask1').css('height',p1sh);

      // 第一屏
      var p1topw = 313*w/1920;
      var p1toph = p1topw*166/313;
      $('.p1_top').css('margin-top',-p1toph/2);
      if(w>768){
        $('.p1_top').css('margin-left',-p1topw/2);
        $('.p1_top img').css('height',p1toph);
      }
      var s1scrollw = 69*w/1920;
      var s1scrollh = s1scrollw*37/69;
      $('.sec1_scroll').css('margin-left',-s1scrollw/2);
      $('.sec1_scroll').css('margin-top',-s1scrollh*2.5+h/2);
      $('.sec1_scroll img').css('height',s1scrollh);
      $('.sec1_scroll img').css('height',s1scrollh);
      var p1bottomw = 155*w/1920;
      var p1bottomh = p1bottomw*145/155;
      if(w>768){
        $('.p1_bottom').css('margin-left',-p1bottomw/2);
      // $('.p1_bottom').css('margin-top',p1sh-h/2-p1bottomh*2);
        $('.p1_bottom img').css('height',p1bottomh);
      }

      // $('.p1_text').css('width',p1tw);
      // $('.p1_text').css('height',p1th);
      // $('.p1_text').css('margin-left',-p1tw/2);
      if(w<=1280){
        $('.p1_text').css('margin-top',h/2+150);
      }else{
        $('.p1_text').css('margin-top',585);
      }

      // if(w<768){
      //   p1sw=858
      // }
      // $('.sec1_scroll img').css('width',tipw);
      // $('.sec1_scroll').css('margin-left',-tipw/2);
      // $('.sec1_scroll img').css('height',tiph);
      // $('.sec1_scroll img').css('margin-top',h/2+s1sh);
      // $('.p1_s').css('margin-top',h/2);
      // $('.p1_s').css('width',w);
      // $('.p1_s img').css('width',p1sw);
      // $('.p1_s').css('height',p1sh);
      // $('.p1_s img').css('margin-left',-p1sw/2);
      // $('.p1_s img').css('height',p1sh);
      //h1为p2,p3效果图的高度
      // console.log($('.partB').height());
      // var pbh = $('.partB').height();
      // $('.partB').css('height',0);
      // $('.partB').css('position','relative');
      // $('.partB').css('overflow','hidden');
      var h1 = gh(1495);
      var h4 = gh(994);
      var h5 = gh(973);
      var h6 = gh(247);
      var hsec = gh(740);
      var hsec1 = gh(4727);
      var ht1 = gh(204);
      var ht2 = gh(55);
      var ht3 = gh(204);
      var p2tw = 604*w/1920;
      var p2th = p2tw*332/604;
      var p3tw = 549*w/1920;
      var p3th = p3tw*332/549;
      var p4tw = 536*w/1920;
      var p4th = p4tw*230/536;
      $('.p2_t_1').css('height',hsec);
      $('.p3_t_1').css('height',hsec);
      $('.p4_t_1').css('height',hsec);
      $('.p2_t_1 img').css('width',p2tw);
      $('.p2_t_1 img').css('height',p2th);
      $('.p2_t_1 img').css('margin-left',-p2tw/2);
      $('.p2_t_1 img').css('margin-top',-p2th/2);
      $('.p3_t_1 img').css('width',p3tw);
      $('.p3_t_1 img').css('height',p3th);
      $('.p3_t_1 img').css('margin-left',-p3tw/2);
      $('.p3_t_1 img').css('margin-top',-p3th/2);
      $('.p4_t_1 img').css('width',p4tw);
      $('.p4_t_1 img').css('height',p4th);
      $('.p4_t_1 img').css('margin-left',-p4tw/2);
      $('.p4_t_1 img').css('margin-top',-p4th/2);
      $('.mask').css('height',hsec);
      $('.sec2').css('height',hsec);
      $('.sec3').css('height',hsec);
      $('.p2_t img').css('width',p2tw);
      $('.p2_t img').css('height',p2th);
      $('.p2_t img').css('margin-left',-p2tw/2);
      $('.p3_t img').css('width',p3tw);
      $('.p3_t img').css('height',p3th);
      $('.p3_t img').css('margin-left',-p3tw/2);
      $('.p4_t img').css('width',p4tw);
      $('.p4_t img').css('height',p4th);
      $('.p4_t img').css('margin-left',-p4tw/2);
      $('.p2_t img').css('margin-top',hsec/2-p2th/2);
      $('.p3_t img').css('margin-top',hsec/2-p3th/2);
      $('.p4_t img').css('margin-top',hsec/2-p4th/2);
      $('.sec4').css('height',hsec);
      $('.pblock').css('height',hsec);

      $('.sec5 img').css('height',h5);
      $('.sec6 .bottom').css('height',h6);
      $('.sec6').css('margin-top',-h6);

      $('.t1 img').css('width',w);
      $('.t2').css('height',ht2);
      $('.t3 img').css('width',w);
      //bg
      var img2 = new Image();
      img2.src = 'http://shegurz.com/Public/img/index-img/bg2-1.jpg';
      var img3 = new Image();
      img3.src = 'http://shegurz.com/Public/img/index-img/bg3-1.jpg';
      var img4 = new Image();
      img4.src = 'http://shegurz.com/Public/img/index-img/4-b.jpg';
      //
      var b2 = 'url('+img2.src+')';
      var b3 = 'url('+img3.src+')';
      var b4 = 'url('+img4.src+')';
      var s2 = img2.width+'px '+img2.height+'px';
      var s3 = img3.width+'px '+img3.height+'px';
      var s4 = img4.width+'px '+img4.height+'px';
      $('.sec2').css('background-image',b2);
      $('.sec3').css('background-image',b3);
      $('.sec4').css('background-image',b4);

    };
    // var sec1img1 = new Image();
    // sec1img1.src = 'http://shegurz.com/Public/img/index-img/bg1-1.jpg';
    // var sec1img2 = new Image();
    // sec1img2.src = 'http://shegurz.com/Public/img/index-img/bg1-2.jpg';
    // var sec1img3 = new Image();
    // sec1img3.src = 'http://shegurz.com/Public/img/index-img/bg1-3.jpg';
    // var sec1img4 = new Image();
    // sec1img4.src = 'http://shegurz.com/Public/img/index-img/bg1-4.jpg';
    // var arrimg = [sec1img1.src,sec1img2.src,sec1img3.src,sec1img4.src];
    // function fn1(){
    //   var i = 0;
    //   function fn2(){
    //     i++;
    //     var str0 = 'sec1-'+(i-1);
    //     var str1 = 'sec1-'+i;
    //     if(str1=='sec1-0'){
    //       str0 = 'sec1-3';
    //     }
    //     function ani1(){
    //       $('.'+str1).animate({opacity:1},1000)
    //       $('.'+str0).animate({opacity:0},1000)
    //     }
    //     $('.'+str0).animate({opacity:0.8},1500,ani1)
    //     $('.'+str1).show();
    //     if(i==3){
    //       i=-1
    //     }
    //   };
    //   return fn2; //返回fn2函数首地址
    // }
    // var test = fn1();
    // window.setInterval(test,5000);

    window.onresize = function(){


      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      function gh2(x){
        var h = x*w/1920;
        return h;
      }
      if(w>768){
        $('.menu ul li:nth-child(2)').show();
        $('.menu ul li:nth-child(3)').show();
        $('.menu ul li:nth-child(4)').show();
        $('.menu ul li:nth-child(5)').show();
      }
      // var w6 = parseInt($('.sec5').css('width'));
      // var w7 = parseInt($('.sec6').css('width'));
      var bulletw = 25*w/1920;
      var bulleth = bulletw;
      $('.swiper-pagination-bullet').css('width',bulletw);
      $('.swiper-pagination-bullet').css('height',bulleth);
      $('.swiper-pagination-bullet').css('background-size',bulletw+'px '+bulleth+'px');
      var arroww = 37*w/1920;
      var arrowh = arroww*69/37;
      $('.swiper-button-prev').css('background-size',arroww+'px '+arrowh+'px');
      $('.swiper-button-prev').css('width',arroww+'px');
      $('.swiper-button-prev').css('height',arrowh+'px');
      $('.swiper-button-next').css('background-size',arroww+'px '+arrowh+'px');
      $('.swiper-button-next').css('width',arroww+'px');
      $('.swiper-button-next').css('height',arrowh+'px');
      var hsec = gh2(740);
      var h1 = gh2(1495);
      var h4 = gh2(994);
      var h5 = gh2(973);
      var h6 = gh2(247);
      var ht1 = gh2(204);
      var ht2 = gh2(55);
      var ht3 = gh2(204);
      var hp = gh2(740);
      var hp2 = 710*w/390;
      var hp3 = 646*w/379;
      var hsec1 = gh2(4727);
      var p1sw = 858*w/1920;
      var p1sh = $('.p1sh').css('height');
      var p2tw = 604*w/1920;
      var p2th = p2tw*332/604;
      var p3tw = 549*w/1920;
      var p3th = p3tw*332/549;
      var p4tw = 536*w/1920;
      var p4th = p4tw*230/536;
      var tipw = 69*w/1920;
      var tiph = tipw*37/69;
      // $('.sec1_scroll img').css('margin-top',h/2+s1sh);

      // $('.p1_s').css('margin-top',h/2);
      // $('.p1_s').css('width',w);
      // $('.p1_s img').css('width',p1sw);
      // $('.p1_s').css('height',p1sh);
      // $('.p1_s img').css('margin-left',-p1sw/2);
      // $('.p1_s img').css('height',p1sh);
      $('.nav').css('width', w);
      $('.t1 img').css('width',w);
      $('.t1').css('height',ht1);
      $('.t1 img').css('height',ht1);
      $('.t2').css('height',ht2);
      $('.t3 img').css('width',w);
      $('.t3 img').css('height',ht3);
      $('.sec2').css('width',w);
      $('.sec3').css('width',w);
      $('.sec4').css('width',w);
      $('.p2_t img').css('width',p2tw);
      $('.p2_t img').css('height',p2th);
      // $('.sec1_scroll img').css('width',tipw);
      // $('.sec1_scroll').css('margin-left',-tipw/2);
      // $('.sec1_scroll img').css('height',tiph);
      $('.p2_t img').css('margin-left',-p2tw/2);
      $('.p3_t img').css('width',p3tw);
      $('.p3_t img').css('height',p3th);
      $('.p3_t img').css('margin-left',-p3tw/2);
      $('.p4_t img').css('width',p4tw);
      $('.p4_t img').css('height',p4th);
      $('.p4_t img').css('margin-left',-p4tw/2);
      // $('.p3_t').css('width',w);
      // $('.p3_t img').css('width',w);
      $('.sec5 img').css('width',w);
      $('.sec6 img').css('width',w);
      // $('.sec1-0').css('height',p1sh+h/2);
      // $('.mask1').css('height',p1sh+h/2);
      $('#swiper2 img').css('height',hp);
      $('#swiper3 img').css('height',hp);
      $('#swiper4 img').css('height',hp);
      $('.mask').css('height',hp);
      $('.sec2').css('height',hp);
      $('.sec3').css('height',hp);
      $('.sec4').css('height',h4);
      $('.sec5 img').css('height',h5);
      $('.sec6 img').css('height',h6);
      $('.sec6').css('margin-top',-h6);
      // $('.p2_t').css('height',hp);
      // $('.p3_t').css('height',hp);
      $('.pblock').css('height',hp);


      var p2tw = 604*w/1920;
      var p2th = p2tw*332/604;
      var p3tw = 549*w/1920;
      var p3th = p3tw*332/549;
      var p4tw = 536*w/1920;
      var p4th = p4tw*230/536;

      $('.p2_t img').css('width',p2tw);
      $('.p2_t img').css('height',p2th);
      $('.p2_t img').css('margin-left',-p2tw/2);
      $('.p3_t img').css('width',p3tw);
      $('.p3_t img').css('height',p3th);
      $('.p3_t img').css('margin-left',-p3tw/2);
      $('.p4_t img').css('width',p4tw);
      $('.p4_t img').css('height',p4th);
      $('.p4_t img').css('margin-left',-p4tw/2);
      $('.p2_t img').css('margin-top',hsec/2-p2th/2);
      $('.p3_t img').css('margin-top',hsec/2-p3th/2);
      $('.p4_t img').css('margin-top',hsec/2-p4th/2);

      $('.p2_t_1').css('height',hsec);
      $('.p3_t_1').css('height',hsec);
      $('.p4_t_1').css('height',hsec);

      $('.p2_t_1 img').css('width',p2tw);
      $('.p2_t_1 img').css('height',p2th);
      $('.p2_t_1 img').css('margin-left',-p2tw/2);
      $('.p2_t_1 img').css('margin-top',-p2th/2);
      $('.p3_t_1 img').css('width',p3tw);
      $('.p3_t_1 img').css('height',p3th);
      $('.p3_t_1 img').css('margin-left',-p3tw/2);
      $('.p3_t_1 img').css('margin-top',-p3th/2);
      $('.p4_t_1 img').css('width',p4tw);
      $('.p4_t_1 img').css('height',p4th);
      $('.p4_t_1 img').css('margin-left',-p4tw/2);
      $('.p4_t_1 img').css('margin-top',-p4th/2);
      // img2.width = w;
      // img2.height = h1;
      // img3.width = w;
      // img3.height = h1;
      // img4.width = w;
      // img4.height = h4;
    //
    //
      // var b2 = 'url('+img2.src+')';
      // var b3 = 'url('+img3.src+')';
      // var b4 = 'url('+img4.src+')';
      // var s2 = img2.width+'px '+img2.height+'px';
      // var s3 = img3.width+'px '+img3.height+'px';
      // var s4 = img4.width+'px '+img4.height+'px';
      // $('.sec2').css('background-image',b2);
      // $('.sec3').css('background-image',b3);
      // $('.sec4').css('background-image',b4);
      // $('.sec2').css('background-size',s2);
      // $('.sec3').css('background-size',s3);
      // $('.sec4').css('background-size',s4);
      var sctw = 108*w/1920;
      var scth = sctw*48/108;

      $('.scrolltop').css('width',sctw);
      $('.scrolltop').css('height',scth);
      $('.scrolltop img').css('width',sctw);
      $('.scrolltop img').css('height',scth);
      $('.scrolltop').css('margin-left',-sctw/2);

    //
    // 第一屏
    var p1topw = 313*w/1920;
    var p1toph = p1topw*166/313;
    $('.p1_top').css('margin-top',-p1toph/2);
    if(w>768){
      $('.p1_top').css('margin-left',-p1topw/2);
      $('.p1_top img').css('height',p1toph);
    }else{
      $('.p1_top').css('margin-left',0);
    }
    var s1scrollw = 69*w/1920;
    var s1scrollh = s1scrollw*37/69;
    $('.sec1_scroll').css('margin-left',-s1scrollw/2);
    $('.sec1_scroll').css('margin-top',-s1scrollh*2.5+h/2);
    $('.sec1_scroll img').css('height',s1scrollh);
    $('.sec1_scroll img').css('height',s1scrollh);
    var p1bottomw = 155*w/1920;
    var p1bottomh = p1bottomw*145/155;
    if(w>768){
      $('.p1_bottom').css('margin-left',-p1bottomw/2);
      $('.p1_bottom img').css('height',p1bottomh);
    }else{
      $('.p1_bottom').css('margin-left',0);
    }
    if(w<=1280){
      $('.p1_text').css('margin-top',h/2+150);
    }else{
      $('.p1_text').css('margin-top',585);
    }

    }
    $(window).scroll(function () {
      var st = $(window).scrollTop();
      var h = $(window).height();
      var sh = h-(h/2+83);
      var sec1sh = $('.sec1_scroll').css('height');
      var p1sw = 858*w/1920;
      var st = h/2;
      var ht1 = gh2(204);
      var hp = gh2(740);
      var h4 = gh2(994);

      // if($(window).scrollTop()>=turns1){
      //   if(auto1==1){
      //     setInterval("swiper2.slideNext()", 3500);
      //     auto1 = 0;
      //   }
      // }
      // if($(window).scrollTop()>=turns2){
      //   if(auto2==1){
      //     setInterval("swiper3.slideNext()", 3500);
      //     auto2 = 0;
      //   }
      // }
      // if($(window).scrollTop()>=turns3){
      //   if(auto3==1){
      //     setInterval("swiper4.slideNext()", 3500);
      //     auto3 = 0;
      //   }
      // }
      if($(window).scrollTop()>=st){
        $('.sec1-0').removeClass('ani');
        $('.mask1').removeClass('ani-fade3');
        $('.mask1').css('display','block');
        $('.mask1').addClass('ani-fade2');
      }
      if($(window).scrollTop()<st){
        if(!$('.sec1-0').hasClass('ani')){
          $('.sec1-0').addClass('ani');
        }
        if(!$('.mask1').hasClass('ani-fade3')){
          $('.mask1').addClass('ani-fade3');
        }
      }
      if($(window).scrollTop()<20){
        $('.sec1_scroll').show();
      }

      // if($('.p1_s').scrollTop()>=sh){
      //   $('.partB').css('opacity',1);
      //   $('.partB').css('height',pbh);
      // }
    });
    $('#slide1').mouseenter(function(){
        $('#slide1 .mask').animate({opacity:0.8},500);
        $('#slide1 .mask').next().show();
        $('#slide1 .sbutton').show();
    })
    $('#slide1').mouseleave(function(){
        $('#slide1 .mask').animate({opacity:0},500);
        $('#slide1 .sbutton').hide();
    })
    $('#slide2').mouseenter(function(){
        $('#slide2 .mask').animate({opacity:0.8},500);
        $('#slide2 .mask').next().show();
        $('#slide2 .sbutton').show();
    })
    $('#slide2').mouseleave(function(){
        $('#slide2 .mask').animate({opacity:0},500);
        $('#slide2 .sbutton').hide();
    })
    $('#slide3').mouseenter(function(){
        $('#slide3 .mask').animate({opacity:0.8},500);
        $('#slide3 .mask').next().show();
        $('#slide3 .sbutton').show();
    })
    $('#slide3').mouseleave(function(){
        $('#slide3 .mask').animate({opacity:0},500);
        $('#slide3 .sbutton').hide();
    })
    $('.scrolltop').bind('click',function(e){
      $('html,body').animate({scrollTop:0},'slow');
    })
    $(document).bind('touchend',function(e){
    // alert('内部区域');} else {alert('你的点击不在目标区域');
      if(document.documentElement.clientWidth<=768){
        e = window.event || e; // 兼容IE7
        obj = $(e.srcElement || e.target);
        // 点击区域位于当前节点
        if (obj.attr('id') == 'menu-s'||obj.attr('id') == 'menu-s-img') {
          // $('.menu ul li:nth-child(2)').show();
          // $('.menu ul li:nth-child(3)').show();
          // $('.menu ul li:nth-child(4)').show();
          // $('.menu ul li:nth-child(5)').show();
          // $('.menu-s img').addClass('f');
          if(!$('.menu-s').hasClass('tclick')){
            $('.menu ul li:nth-child(2)').hide();
            $('.menu ul li:nth-child(3)').hide();
            $('.menu ul li:nth-child(4)').hide();
            $('.menu ul li:nth-child(5)').hide();
            $('.menu ul li:nth-child(6)').hide();
            $('.menu-s').addClass('tclick');
          }else{
            $('.menu ul li:nth-child(2)').show();
            $('.menu ul li:nth-child(3)').show();
            $('.menu ul li:nth-child(4)').show();
            $('.menu ul li:nth-child(5)').show();
            $('.menu ul li:nth-child(6)').show();
            $('.menu-s').removeClass('tclick');

          }
        } else{
          $('.menu ul li:nth-child(2)').hide();
          $('.menu ul li:nth-child(3)').hide();
          $('.menu ul li:nth-child(4)').hide();
          $('.menu ul li:nth-child(5)').hide();
          $('.menu ul li:nth-child(6)').hide();
          $('.menu-s').addClass('tclick');
        };
      }

    });
    </script>
</body>
</html>