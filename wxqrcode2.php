<?php

$appid = "wx7f1344c32363bbf3";
$appsecret = "088f49ee830cdf71079b438133288d47";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";

$output = https_request($url);
$jsoninfo = json_decode($output, true);

$access_token = $jsoninfo["access_token"];


$jsonqr = '{
  "action_name": "QR_LIMIT_SCENE",
  "action_info": {
    "scene": {
      "scene_id": 123
    }
  }
 }';


$url = "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=".$access_token;
$result = https_request($url, $jsonqr);
var_dump($result);

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
