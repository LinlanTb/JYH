function regist(pho,pic,pwd1,pwd2,yzm,chek,tijiao){
	var fpho=0,fpic=0,fpwd1=0,fpwd2=0,fyzm=0;
	//手机号验证
	$(pho).blur(function(){
		let reg = /^[1][34578][0-9]{9}$/;
		if($(pho).val()){
			if(reg.test($(pho).val())){
				$(pho+" + span").css({"display":"none"});
				fpho=1;
			}else{
				$(pho+" + span").css({"display":"block"});
				$(pho+" + span").html("请输入正确的手机号码");
				fpho=0;
			}
		}else{
			$(pho+" + span").css({"display":"block"});
			$(pho+" + span").html("请输入11位手机号码");
			fpho=0;
		}
	});
	//图片
	var random;
	var arr = ["EPRD","NEWM","LBEC","YEJK","2LBC","HNNQ","SEP5",]
	 random= Math.floor(Math.random()*7);
	$(pic+" ~ a img").attr("src","img/yzm/"+(random)+".html.png");
	
	$(pic+" ~ a").click(function(){
		 random= Math.floor(Math.random()*7);
		 console.log(random);
		$(pic+" ~ a img").attr("src","img/yzm/"+(random)+".html.png");
		return random;
	});
	//验证码确认
	$(pic).blur(function(){
		console.log(random);
		
		if($(pic).val()){
			if($(pic).val().toUpperCase()==arr[random]){
				fpic=1;
				$(pic+" + span").css({"display":"none"});
			}else{
				$(pic+" + span").css({"display":"block"});
				$(pic+" + span").html("验证码错误，请重新输入");
				fpic=1;
			}
		}else{
			$(pic+" + span").css({"display":"block"});
			$(pic+" + span").html("请输入右边的验证码");
			fpic=0;
		}
	});
	
	//设置密码验证
	$(pwd1).blur(function(){
		let reg=/^[a-zA-Z0-9]{1}[a-zA-Z0-9*&$#@]{5,11}$/;
		if($(pwd1).val()){
			if(reg.test($(pwd1).val())){
				$(pwd1+" + span").css({"display":"none"});
				fpwd1=1;
			}else{
				$(pwd1+" + span").css({"display":"block"});
				$(pwd1+" + span").html("请输入6-12位字符和数字");
				fpwd1=0;
			}
		}else{
			$(pwd1+" + span").css({"display":"block"});
			$(pwd1+" + span").html("密码不能为空");
			fpwd1=0
		}
	});
	//确认密码验证
	$(pwd2).blur(function(){
		if($(pwd2).val()){
			if($(pwd1).val()==$(pwd2).val()){
				$(pwd2+" + span").css({"display":"none"});
				fpwd2=1;
			}else{
				$(pwd2+" + span").css({"display":"block"});
				$(pwd2+" + span").html("两次输入不一样，请重新输入");
				fpwd2=0
			}
		}else{
			$(pwd2+" + span").css({"display":"block"});
			$(pwd2+" + span").html("请确认输入密码");
			fpwd2=0
		}
	});
	
	//手机验证码
	var str="";
	$(yzm+" + button").click(function(){
		str="";
		for(i=0;i<6;i++){
			let rand = parseInt(Math.random()*10);
			str += rand;
		}
		alert(str);
		return str;
	});
	$(yzm).blur(function(){
		console.log(str);
		 if($(yzm).val()){
			if($(yzm).val()==str){
				$(yzm+" ~ span").css({"display":"none"});
				fyzm=1;
			}else{
				$(yzm+" ~ span").css({"display":"block"});
				$(yzm+" ~ span").html("验证码错误，请重新输入");
				fyzm=0
			}
		 }else{
		 	$(yzm+" ~ span").css({"display":"block"});
			$(yzm+" ~ span").html("验证码不能为空");
			fyzm=0
		 }
	});
	
	$(tijiao).click(function(){
		if(fpho&&fpic&&fpwd1&&fpwd2&&fyzm){
			location="tiaozhuan.html";
		}
	});
}
