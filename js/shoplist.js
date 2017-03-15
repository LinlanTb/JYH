$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
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

	//制作分页
	$.get("php/shoplist.php",function(data){
		console.log(typeof data);
		data = eval(data);
		PageSet(0);
		//加载ajax
		function PageSet(n){
			let _start = n*12;
			let _end = (n+1)*12<data.length?(n+1)*12:data.length;
			$("#goodshow").html("");
			for(let i=_start;i<_end;i++){
				let oLi = "<li><a href='goodDetail.html'><img src='"+data[i].goodsImg1+"'><b >"+data[i].goodsDesc+"</b><p><i>￥"+data[i].goodsOldPrice+"</i>￥"+data[i].goodsPrice+"</p><font>月销"+data[i].monSell+"件</font></a></li>";
				$("#goodshow").append(oLi);
				$("#page a").removeClass("curr");
				$("#page a").eq(n).addClass("curr");
			}
			//点击li
			$("#goodshow li").on("click",function(){
				let index = $("#goodshow li").index(this);
				saveCookie("goods",data[_start+index].goodsId,1);
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
	});
	
	//猜你喜欢
	$.get("json/goods.json",function(data){
		for(let x in data){
			if(data[x].classify=="cnxh"){
				for(let k=0;k<data[x].goods.length;k++){
					let oLi = "<li><a href='goodDetail.html'><div class='box'><img src='"+data[x].goods[k].img+"'  /></div><span>"+data[x].goods[k].describe+"</span><i>"+data[x].goods[k].price+"<em>"+data[x].goods[k].oldpri+"</em></i></a></li>";
					$("#rec_goodpos").append(oLi);
				}
			}
		}
		var oUl3=MovePlay("#ul3","#next3","#prev3");
	},"json");
});
