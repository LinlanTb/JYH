<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$userPhone   = $_REQUEST['userPhone'];
	$goodsId   = $_REQUEST['goodsId'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$goodsImg = $_REQUEST['goodsImg'];
	$goodsSize = $_REQUEST['goodsSize'];
	$goodsCount = $_REQUEST['goodsCount'];
	$goodsDesc = $_REQUEST['goodsDesc'];
	$goodsColor = $_REQUEST['goodsColor'];
//	$userPhone   = "152931845";
//	$goodsId   = "1001";
//	$goodsPrice = "120";
//	$goodsImg = "img/goods/good1.jpg";
//	$goodsSize = "";
//	$goodsCount = "1";
//	$goodsDesc = "shuijkl";
//	$goodsColor = "";
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	mysql_select_db("goodshop",$conn);
	
	//3）、传输数据（过桥）
	//insert语句
	$sqlstr = "insert into mycart values('".$userPhone."','".$goodsId."','','".$goodsPrice."','".$goodsCount."','".$goodsDesc."','".$goodsImg."','".$goodsSize."','".$goodsColor."','')";
	//echo($sqlstr);
	
	$result=true;
	if(!mysql_query($sqlstr,$conn)){
		$result=false;
	}
	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	echo $result;
?>