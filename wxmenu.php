<?php

$appid = "wx7f1344c32363bbf3";
$appsecret = "088f49ee830cdf71079b438133288d47";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";

$output = https_request($url);
$jsoninfo = json_decode($output, true);

$access_token = $jsoninfo["access_token"];


$jsonmenu = '{
    "button":[
        {
            "type": "view",
            "name": "玩味日常",
            "url": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIzNTQ5ODI2NQ==&scene=124"
        },
        {
            "type":"view",
            "name":"联系小编",
            "url":"http://shegurz.kakaday.com/qr.html"
        },
        {
            "name":"关于我们",
            "sub_button":[
                {
                    "type":"view",
                    "name":"品牌介绍",
                    "url":"http://www.shegurz.com/intro.html?from=singlemessage&isappinstalled=0"
                },
                {
                    "type":"view",
                    "name":"商务合作",
                    "url":"http://www.shegurz.com/cooperate.html?from=singlemessage&isappinstalled=0"
                }
            ]

        }
     ]
 }';


$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$access_token;
$result = https_request($url, $jsonmenu);
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

