$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	
	var oUl1=MovePlay("#ul1","#next1","#prev1");
	var oUl2=MovePlay("#ul3","#next","#prev");
	
//	//猜你喜欢
//	var iWidth = parseInt($("#ul3 li:eq(0)").css("width"));
//	var m = 0;  //当前第几张图的索引
//	var oLen = parseInt($("#ul3 li").length);
//	// next的点击
//	$("#next").click(function(){
//		m +=5;
//		if(m>oLen){
//			m = (parseInt(oLen/5))*5
//			return;
//		}
//		$("#ul3").animate({"left":-(iWidth+35)*m+"px"},1000);
//	});
//	// prev的点击
//	$("#prev").click(function(){
//		m -=5;
//		if(m<0){
//			m=0;
//			return;
//		}
//		$("#ul3").animate({"left":-(iWidth+35)*m+"px"},1000);
//	});
});
