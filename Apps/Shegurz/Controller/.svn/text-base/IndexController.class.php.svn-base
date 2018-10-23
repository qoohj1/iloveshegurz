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
}
