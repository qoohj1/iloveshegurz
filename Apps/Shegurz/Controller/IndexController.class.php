<?php
namespace Shegurz\Controller;
use Think\Controller;
define("TOKEN", "shegurzwx");
class IndexController extends Controller {
    public function index(){
      // redirect('Index/cooperate', 0, '页面跳转中...');
      $this->display();
    }
    public function sevendaysplan(){
      $this->display();
    }
    public function sevendaysplan2(){
      $this->display();
    }
    public function index2(){
      // redirect('Index/cooperate', 0, '页面跳转中...');
      $this->display();
    }
    public function weixin(){
      // 获得参数 signature nonce token timestamp echoStr
      $echoStr = $_GET["echostr"];
      // you must define TOKEN by yourself
      if (!defined("TOKEN")) {
          throw new Exception('TOKEN is not defined!');
      }

      $signature = $_GET["signature"];
      $timestamp = $_GET["timestamp"];
      $nonce = $_GET["nonce"];

      $token = TOKEN;
      $tmpArr = array($token, $timestamp, $nonce);
          // use SORT_STRING rule
      sort($tmpArr, SORT_STRING);
      $tmpStr = implode( $tmpArr );
      $tmpStr = sha1( $tmpStr );
      if( $tmpStr == $signature ){
        echo $echoStr;
        exit;
  		}

    }
    public function responseMsg()
    {
        $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];

        if (!empty($postStr)){
            $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
            $fromUsername = $postObj->FromUserName;
            $toUsername = $postObj->ToUserName;
            $keyword = trim($postObj->Content);
            $time = time();
            $textTpl = "<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Content><![CDATA[%s]]></Content>
                        <FuncFlag>0</FuncFlag>
                        </xml>";
            if($keyword == "?" || $keyword == "？")
            {
                $msgType = "text";
                $contentStr = date("Y-m-d H:i:s",time());
                $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                echo $resultStr;
            }
        }else{
            echo "";
            exit;
        }
    }
    public function diylist(){
      $data = M('diy')->select();
      $this->display();
    }
    public function postdiy(){
      $data['name'] = I('name');
      $data['makeup'] = I('makeup');
      $data['step'] = I('step');
      $data['phone'] = I('phone');
      $result = M('diy')->add($data);
      if($result){
          jsonReturn(0,success);
      }else{
          jsonReturn(1,error);
      }
    }
    public function cooperate(){
      $this->display();
    }
    public function oscars(){
      $this->display();
    }
    public function oscarslist(){
      $data = M('oscars')->order('movie')->select();
      $this->assign('data',$data);
      $this->display();
    }
    public function postoscars(){
      $data['name'] = I('name');
      $data['phone'] = I('phone');
      $data['movie'] = I('movie');
      $map['phone'] = $data['phone'];
      $time = time()+413-1487608200;

      if($time>521099){
        jsonReturn(1,error,'抱歉，活动时间已截止');
        exit;
      }
      $res = M('oscars')->where($map)->find();
      if($res){
        jsonReturn(1,error,'抱歉，每个手机号只能参加一次。');
        exit;
      }else{
        $result = M('oscars')->add($data);
      }
      if($result){
          jsonReturn(0,success);
      }else{
          jsonReturn(1,error);
      }
    }
    public function time(){
      $time = time()+413-1488124800;
      dump($time);

    }
    public function wxjsapi(){
      $data['appId'] = '';
      $data['timestamp'] = '';
      $data['nonceStr'] = '';
      $data['signature'] = '';

    }

    public function testoauth(){
      echo 'hello';
    }

    public  function getOauthAccessToken() {
    $appid='wx7f1344c32363bbf3';
    $redirect_uri = 'shegurz.com/testoauth';
    $scope = 'snsapi_userinfo';//弹出授权页面 snsapi_base静默授权
    $url="[https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=REDIRECT_URI&response_type=code&scope=$scopeE&state=STATE#wechat_redirect](https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect)";
    redirect($url);
    }

    public function getCode($code){
    $appid = appid;
    $secret = secret;
    $code = $code;
    $url= "[https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code](https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code)"；
    $curl=curl_init();//初始化一个 cURL 对象
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);// 获取数据返回
    curl_setopt($curl, CURLOPT_TIMEOUT,500);//设置一个长整形数，作为最大延续多少秒
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER,false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,false);
    curl_setopt($curl, CURLOPT_URL,$url);
    curl_setopt($curl, CURLOPT_BINARYTRANSFER,true) ;// 在启用 CURLOPT_RETURNTRANSFER 时候将获取数据返回
    $res=curl_exec($curl);
    curl_close($curl);
    $result = json_decode($res);
    return $result;
    }


    // public function we(){
    //    //公众号
    // 	$appid='wx7f1344c32363bbf3';
    //
    // 	$redirect_uri=urlencode($this->getcode());//将字符串以url编码
    //
    // 	$url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$redirect_uri&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
    // 	header("Location:" . $url);//header函数向客户发送原始的HTTP报头
    // }
    // public function getcode(){
    // 	$code=$_GET['code'];//预定义$_GET变量用于收集来自method="get"的表单中的值
    // 	echo $code;
    // 	// $json = $this->access_token($code);
    // 	// echo $json;
    // }
}
