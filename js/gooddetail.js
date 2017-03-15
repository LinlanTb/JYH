$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	//获得cookie中的goodId
	let id = getCookie("goods");
	$.get("php/goodDetail.php",{"goodsId":id},function(data){
//		console.log(eval('('+data+')'));
		data = eval('('+data+')');
//		console.log(data);
		$("#cimg").attr("src",data.goodsImg1);
		$("#name").html(data.goodsDesc);
		$("#goodId").html(data.goodsId);
		$("#price_new em").html(data.goodsPrice);
		$("#describe").html(data.goodsDesc);
		$("#price_old em").html(data.goodsOldPrice);
		$("#bbox > img").attr("src",data.goodsImg1);
		//加载小图片
		for(let i=1;i<4;i++){
//			console.log(data["goodsImg"+i]);
			let oLi = "<li><img src='"+data["goodsImg"+i]+"'/></li>";
			$("#mbox ul").append(oLi);
		}
		//描述中的图片
		for(let j=1;j<5;j++){
//			console.log(data["goodsPimg"+j]);
			let oImg = "<img src = '"+data["goodsPimg"+j]+"' />";
			$("#listimg").append(oImg);
		}
		//尺寸
		for(let k=1;k<5;k++){
			if(data["goodsSize"+k]!=""){
				let oLi = "<li><a>"+data["goodsSize"+k]+"</a></li>"
				$("#size").append(oLi);
			}
		}
		//尺寸的选择
		$(".siz li").on("click",function(){
			$(".siz li").removeClass("check");
			$(this).addClass("check");
		});
		//颜色
		for(let n=1;n<3;n++){
//			console.log(data["goodsColor"+n]);
			if(data["goodsColor"+n]!=""){
				let oLi = "<li><a>"+data["goodsColor"+n]+"</a></li>"
				$("#colo").append(oLi);
			}
		}
		//颜色的选择
		$(".col li").on("click",function(){
			$(".col li").removeClass("check");
			$(this).addClass("check");
		});
		//图片区域的js
		var iWidth = parseInt($("#mbox ul li:eq(0)").css("width"));
		var m = 0;  //当前第几张图的索引
		var oLen = parseInt($("#mbox ul li").length);
		// next的点击
		$("#next").click(function(){
			m +=5;
			if(m>=oLen){
				m = (parseInt(oLen/5))*5
				return;
			}
			$("#mbox ul").animate({"left":-(iWidth+10)*m+"px"},1000);
		});
		// prev的点击
		$("#prev").click(function(){
			m -=5;
			if(m<0){
				m=0;
				return;
			}
			$("#mbox ul").animate({"left":-(iWidth+10)*m+"px"},1000);
		});
		//点击图片切换
		$("#mbox li").on("click",function(){
			let index = $("#mbox li").index(this);
			console.log($("#mbox img").eq(index));
			$(".bigimg > img").attr("src",$("#mbox img").eq(index).attr("src"));
			$("#bbox img").attr("src",$("#mbox img").eq(index).attr("src"));
		});
		
	});
		
	//购买数量的增加
	$("#plus").click(function(){
		let num = parseInt($("#num").val());
		num++;
		if(num>=2){
			num=2;
		}
		$("#num").val(num);
	});
	//购买数量的减少
	$("#minus").click(function(){
		let num = parseInt($("#num").val());
		num--;
		if(num<=1){
			num=1;
		}
		$("#num").val(num);
	});
	//输入框
	$("#num").blur(function(){
		if($("#num").val()>2){
			$("#num").val("2");
		}
	});
	//放大镜
	$(".bigimg").on("mouseenter",function(){
		$("#wrap").show();
		$(".bigi").show();
	});
	$(".bigimg").on("mouseleave",function(){
		$("#wrap").hide();
		$(".bigi").hide();
	});
	$(".bigimg").on("mousemove",function(e){
		var oWidth = $(".bigimg").width();
		var oHeight = $(".bigimg").height();
		var w = $("#wrap").width();
		var h = $("#wrap").height();
		var _left = e.pageX - $(".bigimg").offset().left;
		var _top = e.pageY - $(".bigimg").offset().top;
		var l = 0;
		var t = 0;
		if(_left<(w/2)){
			l = 0;
		}else if(_left>(oWidth-w/2)){
			l = oWidth-w;
		}else{
			l = _left - (w/2);
		}
		
		if(_top<(h/2)){
			t = 0;
		}else if(_top>(oHeight-h/2)){
			t = oHeight-h;
		}else{
			t = _top - (h/2);
		}
//		console.log(t);
		$("#wrap").css({
			"left":l+"px",
			"top":t+"px"
		});
//		console.log((-1)*l/oWidth*$("#bbox img").width());
		$("#bbox img").css({
			"left":(-1)*l/oWidth*$("#bbox img").width()+"px",
			"top":(-1)*t/oHeight*$("#bbox img").height()+"px"
		});
	});
	
	
	//添加到购物车购物车
	$("#addcart").on("click",function(){
		var user = getCookie('user');
		if(user){
			user = JSON.parse(user);
			var userPhone = user.userPhone;
			var goodsId = $("#goodId").html();
			var goodsPrice = $("#price_new em").html();
			var goodsImg = $("#cimg").attr("src");
			var goodsSize = $(".siz .check a").html()||"";
			var goodsCount = $("#num").val();
			var goodsDesc = $("#describe").html();
			var goodsColor = $(".col .check a").html()||"";
			$.get("php/addcart.php",{"userPhone":userPhone,"goodsId":goodsId,"goodsPrice":goodsPrice,"goodsImg":goodsImg,"goodsSize":goodsSize,"goodsCount":goodsCount,"goodsDesc":goodsDesc,"goodsColor":goodsColor},function(){
				alert("添加成功");
			});
		}
		
//		if(cart){
//			cart = JSON.parse(cart);
//			var goodId = $("#goodId").html();//商品编号
//			var count = $("#num").val();//商品的数量
//			var color = $(".col .check a").html();//商品的颜色
//			var size = $(".siz .check a").html();//商品的大小
////					console.log(color);
//			if(!cart[goodId]){
//				cart[goodId] = {
//					goodId: goodId,
//					goodCount: parseInt( count ),
//					goodColor:color,
//					goodSize:size
//				};
//			}else{
//				cart[goodsId].goodCount += parseInt(count);
//			}
//			saveCookie("myCart",JSON.stringify(cart),7);
//		}
		
	});

});
