$(function(){
	$("header").load("top.html",function(){
		saveCookie("goodnum",$("#list li").length,1);
		if($("#list li").length==0){
			$(".kong").css("display","block");
			$("#cartbox").css("display","none");
		}else{
			$(".kong").css("display","none");
			$("#cartbox").css("display","block");
		}
	});
	$("footer").load("footer.html");
	
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
	//全选
	$("#allchek").click(function(){
		if($("#allchek").prop("checked")){
			$("#list input").prop("checked",true);
		}else{
			$("#list input").prop("checked",false);
		}
		
	});
});
