<?php

$appid = "wx7f1344c32363bbf3";
$appsecret = "088f49ee830cdf71079b438133288d47";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";

$output = https_request($url);
$jsoninfo = json_decode($output, true);

$access_token = $jsoninfo["access_token"];


$tag1 = '{
  "tag": {
    "name": "水果"
  }
}';



$url = "https://api.weixin.qq.com/cgi-bin/tags/create?access_token=".$access_token;
$result = https_request($url, $tag1);
$url2 = "https://api.weixin.qq.com/cgi-bin/tags/get?access_token=".$access_token;
$result2 = https_request($url2);
$jsoninfo = json_decode($result, true);
var_dump($jsoninfo);
var_dump($result2);
$openid="oGcnZwG4sAIgf3KQEzTGbZ4Ou8do";
$url3="https://api.weixin.qq.com/cgi-bin/user/info?access_token=".$access_token."&openid=".$openid;
$result3 = https_request($url3);
$jsoninfo3 = json_decode($result3, true);
var_dump($jsoninfo3);


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

?>
