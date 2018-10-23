<?php
$mysql_server_name='47.88.23.207'; //改成自己的mysql数据库服务器

$mysql_username='root'; //改成自己的mysql数据库用户名

$mysql_password='jiang2015'; //改成自己的mysql数据库密码

$mysql_database='qoohj'; //改成自己的mysql数据库名
$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password); //连接数据库

mysql_query("set names 'utf8'"); //数据库输出编码

mysql_select_db($mysql_database); //打开数据库
// $name = $object->FromUserName;
$sql = "insert into 'tp_wx' (name) values ('1')";

mysql_query($sql);

mysql_close(); //关闭MySQL连接




>
