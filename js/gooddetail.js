$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	
	//ajax
	$.get("json/listdetail.json",function(data){
		let id = getCookie("goods");
		for(let i=0; i<data.length;i++){
			if(data[i].data_id==id){
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
				$(".bigimg > img").attr("src",data[i].images);
				$("#bbox > img").attr("src",data[i].images);
				$(".s-right > h3").html(data[i].word);
				$("#price_new").html(data[i].price_new);
				$("#price_old").html(data[i].price_old);
				$("#name").html(data[i].word);
				$("#producearea").html(data[i].produce);
				//放大镜中的最小图片
				for(let j=0;j<data[i].img.length;j++){
					let oLi = "<li><img src='"+data[i].img[j]+"'/></li>";
					$("#mbox ul").append(oLi);
				}
//				描述中的图片
				for(let k=0;k<data[i].pimg.length;k++){
					let oImg = "<img src = '"+data[i].pimg[k]+"' />";
					$("#listimg").append(oImg);
				}
				//尺寸
				for(let n=0;n<data[i].size.length;n++){
					let oLi = "<li><a>"+data[i].size[n]+"</a></li>"
					$("#size").append(oLi);
				}
				//尺寸的选择
				$(".siz li").on("click",function(){
					$(".siz li").removeClass("check");
					$(this).addClass("check");
				});
				//颜色
				for(let m=0;m<data[i].color.length;m++){
					let oLi = "<li><a>"+data[i].color[m]+"</a></li>"
					$("#colo").append(oLi);
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
				return;
			}
		}
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
		console.log((-1)*l/oWidth*$("#bbox img").width());
		$("#bbox img").css({
			"left":(-1)*l/oWidth*$("#bbox img").width()+"px",
			"top":(-1)*t/oHeight*$("#bbox img").height()+"px"
		});
	});
});
