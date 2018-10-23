<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>幸运大抽奖</title>
    <!-- 这里是css部分 -->
    <style>
        #bg {
            width: 650px;
            height: 600px;
            margin: 0 auto;
            background: url(/Public/img/luckyturntable/turntable-bg.jpg) no-repeat;
            position: relative;
        }

        .pointer {
            position: absolute;
            z-index: 10;
            top: 155px;
            left: 247px;
        }

        .turntable {
            position: absolute;
            z-index: 5;
            top: 60px;
            left: 116px;
            transition: all 4s;
        }
    </style>
</head>
<body>
    <div class="login">
      <input id='um' type="text" placeholder="请输入您的um帐号" name="" value="">
      <button class='login-button' type="button" name="button">确认</button>
    </div>
    <!-- 这里是HTML结构部分 -->
    <div id="bg"><img class='pointer' src="/Public/img/luckyturntable/pointer.png" alt="pointer"><img class='turntable' src="/Public/img/luckyturntable/turntable.png" alt="turntable"></div>
    <!-- 这里是js部分 -->
    <script type="text/javascript" src="http://guangdong.sinaimg.cn/2012/jquery-1.7.1.min.js"></script>
    <script>
        var offOn = false; //是否正在抽奖

        $('.login-button').click(function(){
          $.ajax({
        			url:'/Zt/verifyum',
        			type:'post',
        			dataType:'jsonp',
        			data: {
                'um': $('#um').val()
              },
        			success:function(jsondata){
                alert(jsondata.data);
        					if(jsondata.error == 1){
                    offOn=true
        					}else if(jsondata.error == 0){

        					}
        			},
        			error:function(jsondata){
                // console.log(jsondata)
        			}

        	});


        })


        var oPointer = document.getElementsByTagName("img")[0];
        var oTurntable = document.getElementsByTagName("img")[1];
        var cat = 51.4; //总共7个扇形区域，每个区域约51.4度
        var num = 0; //转圈结束后停留的度数
        oPointer.onclick = function () {
          offOn=true
            if (offOn) {
                // oTurntable.style.transform = "rotate(0deg)";
                offOn = !offOn;
                $.ajax({
                  url:'/Zt/lottery',
            			type:'get',
            			dataType:'jsonp',
            			success:function(jsondata){
                    console.log(jsondata);
            			},
            			error:function(jsondata){
                    // console.log(jsondata)
            			}

                })
                ratating();
            }
        }
        //旋转
        function ratating() {
            var timer = null;
            var rdm = 0; //随机度数
            clearInterval(timer);
            timer = setInterval(function () {
              // console.log(Math.random());
                // if (Math.floor(rdm / 360) < 3) { rdm = Math.floor(Math.random() * 3600); console.log(rdm);}
                  // console.log(rdm);
                    oTurntable.style.transform = "rotate(" + rdm + "deg)";
                    clearInterval(timer);
                    setTimeout(function () {
                        offOn = !offOn;
                        // console.log(rdm);
                        num = rdm % 360;
                        // console.log(num);
                        if (num <= cat * 1) { alert("4999元"); console.log("rdm=" + rdm + "，num=" + num + "，" + "4999元"); }
                        else if (num <= cat * 2) { alert("50元"); console.log("rdm=" + rdm + "，num=" + num + "，" + "50元"); }
                        else if (num <= cat * 3) { alert("10元"); console.log("rdm=" + rdm + "，num=" + num + "，" + "10元"); }
                        else if (num <= cat * 4) { alert("5元"); console.log("rdm=" + rdm + "，num=" + num + "，" + "5元"); }
                        else if (num <= cat * 5) { alert("免息服务"); console.log("rdm=" + rdm + "，num=" + num + "，" + "免息服务"); }
                        else if (num <= cat * 6) { alert("提交白金"); console.log("rdm=" + rdm + "，num=" + num + "，" + "提交白金"); }
                        else if (num <= cat * 7) { alert("未中奖"); console.log("rdm=" + rdm + "，num=" + num + "，" + "未中奖"); }
                    }, 4000);
            }, 30);

        }
    </script>
</body>
</html>