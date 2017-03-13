<?php
	header("content-type","text/html;charset=utf-8");
	//建立连接
	$Sconn = mysql_connect("localhost", "root", "root");
	
	//返回值的变量
	$userPhone = $_POST["userPhone"];
	$userPass = $_POST["userPass"];
	//判断是否连接成功
	if($Sconn){
		echo("连接成功");
		//选择数据库
		mysql_select_db("jyh",$Sconn);
			//执行语句
			$sql = mysql_query("select * from user where = '".$userPhone."'",$Sconn);
		if($row==mysql_fetch_array($sql)){
			echo("1");
		}else{
			$sql = mysql_query("insert into user(userPhone,userPass) value('".$userPhone."','".$userPass."')",$Sconn);
			echo("0");
		}
	
	}else{
		echo("0");
	}
	
	
	
?>