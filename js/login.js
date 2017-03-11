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
	
	//点击切换验证码
	var random;
	var arr = ["EPRD","NEWM","LBEC","YEJK","2LBC","HNNQ","SEP5",]
	 rand= Math.floor(Math.random()*7);
	$("#pwd1 ~ img").attr("src","img/yzm/"+(rand)+".html.png");
	
	$("#pwd1 ~ img").click(function(){
		 random= Math.floor(Math.random()*7);
		 console.log(random);
		$("#pwd1 ~ img").attr("src","img/yzm/"+(random)+".html.png");
		return random;
	});
});