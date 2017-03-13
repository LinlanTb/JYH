$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	//颜色的选择
	$(".col li").on("click",function(){
		$(".col li").removeClass("check");
		$(this).addClass("check");
	});
	//尺寸的选择
	$(".siz li").on("click",function(){
		$(".siz li").removeClass("check");
		$(this).addClass("check");
	});
	
	//加载省份
	$("#area").on("mouseenter",function(){
		$(".pro ol").html("");
		$(".pro").css("display","block");
		$.get("json/city1.json",function(data){
			for(let x in data){
				let oLi ="<li>"+data[x].name+"</li>"
				$(".pro ol").append(oLi);
				
			}
			//点击事件
			$(".pro ol li").on("click",function(){
				console.log("aaa");
				let index = $(".pro ol li").index(this);
				$("#area strong").html($(this).html());
				$(".pro").css("display","none");
			});
		},"json");
	});
	
	//图片区域的js
	var iWidth = parseInt($("#mbox ul li:eq(0)").css("width"));
	var m = 0;  //当前第几张图的索引
	var oLen = parseInt($("#mbox ul li").length);
	// next的点击
	$("#next").click(function(){
		m +=5;
		if(m>oLen){
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
