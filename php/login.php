<?php
	header("content-type","text/html;charset=utf-8");
	//建立连接
	$Sconn = mysql_connect("localhost", "root", "root");
	//返回值的变量
	$userPhone = $_POST["userPhone"];
	$userPass = $_POST["userPass"];
//	$userPhone = "15293197232";
//	$userPass = "123123";
	//选择数据库
	mysql_select_db("jyh",$Sconn);
	//执行语句
	$sql = "select * from user where userPhone = '".$userPhone."' && userPass = '".$userPass."'";
	$result = mysql_query($sql,$Sconn);
	$rows = mysql_num_rows($result);
	
	//关闭连接
	mysql_close($Sconn);
	
	 echo($rows);
	
	
?>