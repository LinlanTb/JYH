$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	var oUl3=MovePlay("#ul3","#next3","#prev3");
	$(".filter li").on("click",function(){
		$(".filter li:not(#on)").removeClass("curr");
		$(this).addClass("curr");
	});
	//用ajax加载页面中的信息
	$.get("json/goods.json",function(data){
		for(let x=0;x<12;x++){
				let oLi = "<li><a href='goodDetail.html'><img src='"+data[x].details.img+"'><b >"+data[x].details.describe+"</b><p><i>￥"+data[x].details.price+"</i>￥"+data[x].details.oldpri+"</p><font>月销"+data[x].details.msell+"件</font></a></li>";
				$("#goodshow").append(oLi);
				$("#page a").removeClass("curr");
				$(this).addClass("curr");
		}
		
		//分页
	},"json");
	//制作分页
	$.get("json/goods.json",function(data){
		var pag = Math.ceil(data.length/12);
		$("#count").html(pag);
		for(let i=0;i<pag;i++){
			let oA = "<a href='#'>"+(i+1)+"</a>";
			$("#page").append(oA);
			
			$("#page a").on("click",function(){
				let index = $("#page a").index(this);
				let _start = index*12;
				let _end = (index+1)*12<data.length?(index+1)*12:data.length;
				$("#goodshow").html("");
				for(let i=_start;i<_end;i++){
				let oLi = "<li><a href='goodDetail.html'><img src='"+data[i].details.img+"'><b >"+data[i].details.describe+"</b><p><i>￥"+data[i].details.price+"</i>￥"+data[i].details.oldpri+"</p><font>月销"+data[i].details.msell+"件</font></a></li>";
				
				$("#goodshow").append(oLi);
				$("#page a").removeClass("curr");
				$(this).addClass("curr");
		}
			});
		}
		$("#page a:eq(0)").addClass("curr");
	},"json");
});
