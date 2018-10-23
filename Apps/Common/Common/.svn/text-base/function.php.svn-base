<?php
/**
 * Created by PhpStorm.
 * User: jjhh
 * Date: 15/4/29
 * Time: 10:23
 */
// json输出
function jsonReturn($error =0 ,$info = null ,$data = null){
    $callback = isset($_REQUEST['callback'])? $_REQUEST['callback'] : '';
    $callback = htmlspecialchars($callback);

    header('Content-Type:text/json');
    echo $callback.'('. json_encode(array('error' => $error ,'info' => $info ,'data' => $data)) .')';

    die();
}




?>
