<?php
	header("content-type","text/html;charset=utf-8");
	//建立连接
	$Sconn = mysql_connect("localhost", "root", "root");
	
	//返回值的变量
//	$userPhone = $_GET["userPhone"];
//	$userPass = $_GET["userPass"];
	$userPhone = "1529310001";
	$userPass = "123123";
		//选择数据库
	mysql_select_db("jyh",$Sconn);
		//执行语句
	$sql = mysql_query("select * from user where userPhone= '".$userPhone."'",$Sconn);
	$rows = mysql_num_rows($sql);
	echo($rows);
	if($rows<0){
			$sql = mysql_query("insert into user(userPhone,userPass) value('".$userPhone."','".$userPass."')",$Sconn);
	}else{
		
//		echo($rows);
	}
	
	mysql_close($Sconn);
//	echo($rows);
?>