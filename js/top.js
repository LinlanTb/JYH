$(function(){
	var user = getCookie("user");
	if(user){
		user = JSON.parse(user);
		$("#useron").css("display","block");
		$("#quit").css("display","block");
		$("#useron").html("hi!" + user.userPhone);
		$("#userno").css("display","none");
		$("#myc").attr("href","shopcart.html");
	}else{
		$("#quit").css("display","none");
		$("#useron").css("display","none");
		$("#userno").css("display","block");
		$("#myc").attr("href","login.html");
	}
	//退出当前登录（删除cookie）
	$("#quit").click(function(){
		deleteCookie("user");
	});
})
