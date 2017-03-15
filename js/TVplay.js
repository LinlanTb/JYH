$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	
	var oUl1=MovePlay("#ul1","#next1","#prev1");
	var oUl2=MovePlay("#ul3","#next","#prev");
	//点击上面的日期，下面对应的商品发生变化
	$.get("json/goods.json",function(data){
		function setImg(n){
			let _start = n*8;
			let _end = (n+1)*8<data.length?(n+1)*8:data.length;
			$("#ul1").html("");
			for(let i=_start;i<_end;i++){
				let oLi = "<li><a href='###'><div class='box'><img src='"+data[i].img+"' /></div><p>正在直播</p><span>"+data[i].describe
				+"</span><i>￥"+data[i].price+"<em>￥"+data[i].oldpri+"</em></i></a></li>";
				$("#ul1").append(oLi);
				$(".option li").removeClass("curr");
				$(".option li").eq(n).addClass("curr");
			}
		}
		$(".option li").on("click",function(){
			let index = $(".option li").index(this);
			setImg(index);
		});
	});
});
