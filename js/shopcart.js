$(function(){
	$("header").load("top.html");
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
});
