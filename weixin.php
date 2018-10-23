<?php
/*
    CopyRight 2013 www.shegurz.com  All Rights Reserved
*/
header('Content-type:text');
define("TOKEN", "shegurzwx");




$appid = "wx7f1344c32363bbf3";
$appsecret = "088f49ee830cdf71079b438133288d47";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";



function https_request($url,$data = null){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}











$wechatObj = new wechatCallbackapiTest();
if (isset($_GET['echostr'])) {
    $wechatObj->valid();
}else{
    $wechatObj->responseMsg();
}

class wechatCallbackapiTest{
  public function valid(){
    $echoStr = $_GET["echostr"];
    if($this->checkSignature()){
      header('content-type:text');
      echo $echoStr;
      exit;
    }
  }

  private function checkSignature(){
    $signature = $_GET["signature"];
    $timestamp = $_GET["timestamp"];
    $nonce = $_GET["nonce"];

    $token = TOKEN;
    $tmpArr = array($token, $timestamp, $nonce);
    sort($tmpArr, SORT_STRING);
    $tmpStr = implode( $tmpArr );
    $tmpStr = sha1( $tmpStr );

    if( $tmpStr == $signature ){
      return true;
    }else{
      return false;
    }
  }
// 响应消息
  public function responseMsg(){
    $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
    if (!empty($postStr)){
        // $this->logger("R \r\n".$postStr);
      $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
      $RX_TYPE = trim($postObj->MsgType);

      if (($postObj->MsgType == "event") && ($postObj->Event == "subscribe" || $postObj->Event == "unsubscribe")){
          //过滤关注和取消关注事件
      }else{

      }

      //消息类型分离
      switch ($RX_TYPE){
        case "event":
            $result = $this->receiveEvent($postObj);
            break;
        case "text":

            break;
        case "image":
            // $result = $this->receiveImage($postObj);
            break;
        case "location":
            // $result = $this->receiveLocation($postObj);
            break;
        case "voice":
            // $result = $this->receiveVoice($postObj);
            break;
        case "video":
            // $result = $this->receiveVideo($postObj);
            break;
        case "link":
            // $result = $this->receiveLink($postObj);
            break;
        default:
            $result = "unknown msg type: ".$RX_TYPE;
            break;
      }
      // $this->logger("T \r\n".$result);
      echo $result;
    }else {
      echo "";
      exit;
    }
  }
  //接收事件消息
  private function receiveEvent($object){
    $content = "";
    switch ($object->Event)
    {
      case "subscribe":
          $mysql_server_name='47.88.23.207'; //改成自己的mysql数据库服务器

          $mysql_username='root'; //改成自己的mysql数据库用户名

          $mysql_password='jiang2015'; //改成自己的mysql数据库密码

          $mysql_database='qoohj'; //改成自己的mysql数据库名

          $conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password); //连接数据库

          mysql_query("set names 'utf8'"); //数据库输出编码

          mysql_select_db($mysql_database); //打开数据库
          $name = $object->FromUserName;
          $sql="select * from tp_wx where name='$name'";
          $result=mysql_query($sql);

          $row = mysql_fetch_array($result, MYSQL_ASSOC);

          if (!mysql_num_rows($result)){
            $sql2 = "insert into tp_wx(name) values ('$name')";

            mysql_query($sql2);

            $content =
            "Hi,\n欢迎来到穗格氏这座奇妙有趣的殿堂。\n您即将开启健康愉快的惊喜之旅。\n我们为您精心准备了纯良的燕麦，大繁至简。\n我们诚意满满，犹如穗格氏的燕麦一般饱满。";
            // $content .= (!empty($object->EventKey))?("\n来自二维码场景 ".str_replace("qrscene_","",$object->EventKey)):"";
            mysql_close(); //关闭MySQL连接
            break;
          }else{
           // echo mysql_num_rows($result)."\n";
            $content =
            "欢迎回家";
          //  $content .= (!empty($object->EventKey))?("\n来自二维码场景 ".str_replace("qrscene_","",$object->EventKey)):"";
          };
          if(!empty($object->EventKey)){

            $qrcode = $object->EventKey;
            if($qrcode=='qrscene_321'||$qrcode=='qrscene_123'){
              if($qrcode=='qrscene_321'){
                $tagid = 102;
              }else if($qrcode=='qrscene_123'){
                $tagid = 103;
              };
              $appid = "wx7f1344c32363bbf3";
              $appsecret = "088f49ee830cdf71079b438133288d47";
              $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
              $output = https_request($url);
              $jsoninfo = json_decode($output, true);

              $access_token = $jsoninfo["access_token"];

              $url = "https://api.weixin.qq.com/cgi-bin/tags/members/batchtagging?access_token=".$access_token;

              $data = '{
                "openid_list" : ["'.$name.'"],
                "tagid" : '.$tagid.'
              }';

              $result = https_request($url,$data);

              $content = "扫描场景 ".$object->EventKey;

            };

          };
      case "unsubscribe":
          // $content = "取消关注";
          break;
      case "CLICK":
          // switch ($object->EventKey)
          // {
          //     case "COMPANY":
          //         $content = array();
          //         $content[] = array("Title"=>"方倍工作室", "Description"=>"", "PicUrl"=>"http://discuz.comli.com/weixin/weather/icon/cartoon.jpg", "Url" =>"http://m.cnblogs.com/?u=txw1958");
          //         break;
          //     default:
          //         $content = "点击菜单：".$object->EventKey;
          //         break;
          // }
          break;
      case "VIEW":
          // $content = "跳转链接 ".$object->EventKey;
          break;
      case "SCAN":
          $name = $object->FromUserName;
          $qrcode = $object->EventKey;
          if($qrcode=='321'||$qrcode=='123'){
            if($qrcode=='321'){
              $tagid = 102;
            }else if($qrcode=='123'){
              $tagid = 103;
            }
            $appid = "wx7f1344c32363bbf3";
            $appsecret = "088f49ee830cdf71079b438133288d47";
            $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
            $output = https_request($url);
            $jsoninfo = json_decode($output, true);

            $access_token = $jsoninfo["access_token"];

            $url = "https://api.weixin.qq.com/cgi-bin/tags/members/batchtagging?access_token=".$access_token;
            // $tagid=$object->EventKey;
            $data = '{
              "openid_list" : ["'.$name.'"],
              "tagid" : '.$tagid.'
            }';

            $result = https_request($url,$data);
            // $result = json_decode($result, true);
            $content = "扫描场景 ".$object->EventKey;
            // $content .= " 关注二维码场景".$data.$result;

          }


          break;
      case "LOCATION":
          // $content = "上传位置：纬度 ".$object->Latitude.";经度 ".$object->Longitude;
          break;
      case "scancode_waitmsg":
          // if ($object->ScanCodeInfo->ScanType == "qrcode"){
          //     $content = "扫码带提示：类型 二维码 结果：".$object->ScanCodeInfo->ScanResult;
          // }else if ($object->ScanCodeInfo->ScanType == "barcode"){
          //     $codeinfo = explode(",",strval($object->ScanCodeInfo->ScanResult));
          //     $codeValue = $codeinfo[1];
          //     $content = "扫码带提示：类型 条形码 结果：".$codeValue;
          // }else{
          //     $content = "扫码带提示：类型 ".$object->ScanCodeInfo->ScanType." 结果：".$object->ScanCodeInfo->ScanResult;
          // }
          break;
      case "scancode_push":
          // $content = "扫码推事件";
          break;
      case "pic_sysphoto":
          // $content = "系统拍照";
          break;
      case "pic_weixin":
          // $content = "相册发图：数量 ".$object->SendPicsInfo->Count;
          break;
      case "pic_photo_or_album":
          // $content = "拍照或者相册：数量 ".$object->SendPicsInfo->Count;
          break;
      case "location_select":
          // $content = "发送位置：标签 ".$object->SendLocationInfo->Label;
          break;
      default:
          // $content = "receive a new event: ".$object->Event;
          break;
    }

    // if(is_array($content)){
    //     if (isset($content[0]['PicUrl'])){
    //         $result = $this->transmitNews($object, $content);
    //     }else if (isset($content['MusicUrl'])){
    //         $result = $this->transmitMusic($object, $content);
    //     }
    // }else{
    $result = $this->transmitText($object, $content);
    // }
    return $result;
  }

  //回复文本消息
  private function transmitText($object, $content){
    if (!isset($content) || empty($content)){
      return "";
    }

    $xmlTpl = "<xml>
    <ToUserName><![CDATA[%s]]></ToUserName>
    <FromUserName><![CDATA[%s]]></FromUserName>
    <CreateTime>%s</CreateTime>
    <MsgType><![CDATA[text]]></MsgType>
    <Content><![CDATA[%s]]></Content>
    </xml>";
    $result = sprintf($xmlTpl, $object->FromUserName, $object->ToUserName, time(), $content);

    return $result;
  }
  public function test(){

  }
}
?>
