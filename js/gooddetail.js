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
	$("#area").on("mouseover",function(){
		$(".pro").css("display","block");
		$.get("json/city1.json",function(data){
			for(let x in data){
				let oLi ="<li>"+data[x].name+"</li>"
				$(".pro ol").append(oLi);
			}
			//点击事件
			$(".pro  ol li").on("click",function(){
				let index = $(".pro  ol li").index(this);
				$("#area strong").html($(this).html());
				$(".pro").css("display","none");
			});
		},"json");
	});
});
