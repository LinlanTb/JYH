$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	//用户登录和快捷登录 的点击事件
	$("#userlg").click(function(){
		$("#userlg i").addClass("active");
		$("#quiklg i").removeClass("active");
		$("#first").css({"display":"block"});
		$("#quik").css({"display":"none"});
	});
	$("#quiklg").click(function(){
		$("#quiklg i").addClass("active");
		$("#userlg i").removeClass("active");
		$("#first").css({"display":"none"});
		$("#quik").css({"display":"block"});
	});
	
	//判断用户名是否为空
	var flagu = 0,flagp = 0;
	$("#txt").blur(function(){
		if($("#txt").val()){
			flagu=1;
			$("#text").css("display","none");
		}else{
			$("#text").css("display","block");
			$("#text").html("请输入用户名");
		}
	});
	//判断密码是否为空
	$("#pwd").blur(function(){
		if($("#pwd").val()){
			flagp=1;
			$("#text").css("display","none");
		}else{
			$("#text").css("display","block");
			$("#text").html("请输入密码");
		}
	});
	//登录的验证
	$("#sub").click(function(){
		if(flagu==1&&flagp==1){
			$.post("php/login.php",{"userPhone":$("#txt").val(),"userPass":$("#pwd").val()},function(data){
				if(data.indexOf("1")>-1){
					location = "index.html";
					var cart = {
						userPhone:$("#txt").val(),
						userPass:$("#pwd").val()
					}
					saveCookie("user",JSON.stringify(cart),1);
				}else{
					$("#text").css("display","block");
					$("#text").html("用户名或密码错误");
				}
			});
		}
		
	});
	//快速注册的验证
	var flagn = 0,flags = 0,flagi=0;
	//手机验证码
	var str="";
	$("#txt1 ~ button").click(function(){
		str="";
		for(i=0;i<6;i++){
			let rand = parseInt(Math.random()*10);
			str += rand;
		}
		alert(str);
		return str;
	});
	$("#pwd2").blur(function(){
		if($("#pwd2").val()){
			if($("#pwd2").val() == str){
				flags = 1;
				$("#text1").css("display","none");
			}else{
				flags = 0;
				$("#text1").css("display","block");
				$("#text1").html("请输入正确的手机验证码");
			}
			
		}else{
			flags = 0;
			$("#text1").css("display","block");
			$("#text1").html("请输入手机验证码");
		}
	});
	
	//用户账号的验证
	$("#txt1").blur(function(){
		if($("#txt1").val()){
			flagn = 1;
			$("#text1").css("display","none");
		}else{
			flagn = 0;
			$("#text1").css("display","block");
			$("#text1").html("用户账号必须输入");
		}
	});
	//点击切换验证码
	var random;
	var arr = ["EPRD","NEWM","LBEC","YEJK","2LBC","HNNQ","SEP5"]
	 rand= Math.floor(Math.random()*7);
	$("#pwd1 ~ img").attr("src","img/yzm/"+(rand)+".html.png");
	
	$("#pwd1 ~ img").click(function(){
		 random= Math.floor(Math.random()*7);
		 console.log(random);
		$("#pwd1 ~ img").attr("src","img/yzm/"+(random)+".html.png");
//		console.log(arr[random]);
		return random;
	});
	//图片验证
	$("#pwd1").blur(function(){
//		console.log(arr[random]);
		if($("#pwd1").val()){
			if($("#pwd1").val().toUpperCase() == arr[random]){
				flagi = 1;
				$("#text1").css("display","none");
			}else{
				flagi = 0;
				$("#text1").css("display","block");
				$("#text1").html("验证码错误，请重新输入");
			}
		}
	});
	//登录验证
	$("#sub1").click(function(){
		if(flagn == 1 && flagi == 1 && flags == 1){
			$.post("php/login1.php",{"userPhone":$("#txt1").val()},function(data){
				if(data.indexOf("1")>-1){
//					console.log("1212")
					location = "index.html";
					var cart = {
						userPhone:$("#txt").val()
					}
					saveCookie("user",JSON.stringify(cart),1);
				}else{
					$("#text").css("display","block");
					$("#text").html("用户名错误");
				}
			});
		}
	})
});