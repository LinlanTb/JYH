$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	var oUl3=MovePlay("#ul3","#next3","#prev3");
	$(".filter li").on("click",function(){
		$(".filter li:not(#on)").removeClass("curr");
		$(this).addClass("curr");
	});
	//全部商品的分类与品牌
	$.get("json/classify.json",function(data){
		for(let i=0;i<data.length;i++){
			if(data[i].name=="分类"){
				for(let j=0;j<data[i].classify.length;j++){
					let oA = "<a href='###'>"+data[i].classify[j]+"</a>";
					$("#classify").append(oA);
				}
			}
			if(data[i].name=="品牌"){
				for(let j=0;j<data[i].classify.length;j++){
					let oA = "<a href='###'>"+data[i].classify[j]+"</a>";
					$("#brand").append(oA);
				}
			}
		}
	});
	
	//用ajax加载页面中的信息
//	$.get("json/listdetail.json",function(data){
//		for(let x=0;x<12;x++){
//				let oLi = "<li><a href='goodDetail.html'><img src='"+data[x].images+"'><b >"+data[x].word+"</b><p><i>"+data[x].price_new+"</i>"+data[x].price_old+"</p><font>月销"+data[x].msell+"件</font></a></li>";
//				$("#goodshow").append(oLi);
//				$("#page a").removeClass("curr");
//				$(this).addClass("curr");
//		}
//		//分页
//	},"json");
	
	//制作分页
	$.get("json/listdetail.json",function(data){
		PageSet(0);
		//加载ajax
		function PageSet(n){
			let _start = n*12;
			let _end = (n+1)*12<data.length?(n+1)*12:data.length;
			$("#goodshow").html("");
			for(let i=_start;i<_end;i++){
				let oLi = "<li><a href='goodDetail.html'><img src='"+data[i].images+"'><b >"+data[i].word+"</b><p><i>"+data[i].price_old+"</i>"+data[i].price_new+"</p><font>月销"+data[i].msell+"件</font></a></li>";
				$("#goodshow").append(oLi);
				$("#page a").removeClass("curr");
				$("#page a").eq(n).addClass("curr");
			}
			//点击li
			$("#goodshow li").on("click",function(){
				let index = $("#goodshow li").index(this);
				saveCookie("goods",data[_start+index].data_id,1);
				console.log(data[index].data_id);
			});
		}
		var pag = Math.ceil(data.length/12);
		var m=0;
		$("#count").html(pag);
		for(let i=0;i<pag;i++){
			let oA = "<a href='#'>"+(i+1)+"</a>";
			$("#page").append(oA);
			
			$("#page a").on("click",function(){
				let index = $("#page a").index(this);
				PageSet(index);
				m=index;
			});
		}
		$("#page a:eq(0)").addClass("curr");
		
		//上一页
		$("#spprev").click(function(){
			m=m-1;
			if(m<0){
				m=pag-1;
			}
			PageSet(m);
		});
		
		////下一页
		$("#spnext").click(function(){
			m=m+1;
			if(m>=pag){
				m=0;
			}
			PageSet(m);
		});
		//直接输入跳转
		$("#sub").click(function(){
			let ind = parseInt($("#txtPage").val());
			PageSet(ind-1);
			m=ind;
		});
	},"json");
});
