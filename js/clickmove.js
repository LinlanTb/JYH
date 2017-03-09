function MovePlay(ulId,nextId,prevId){
	var iWidth = parseInt($(ulId+" li:eq(0)").css("width"));
	var m = 0;  //当前第几张图的索引
	var oLen = parseInt($(ulId+" li").length);
	// next的点击
	$(nextId).click(function(){
		m +=5;
		if(m>oLen){
			m = (parseInt(oLen/5))*5
			return;
		}
		$(ulId).animate({"left":-(iWidth+35)*m+"px"},1000);
	});
	// prev的点击
	$(prevId).click(function(){
		m -=5;
		if(m<0){
			m=0;
			return;
		}
		$(ulId).animate({"left":-(iWidth+35)*m+"px"},1000);
	});
}