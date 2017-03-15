$(function(){
	$("header").load("top.html");
	$("footer").load("footer.html");
	//cookie的加载
	var user = getCookie("user");
	//点击让下面的变换
	var oUl3=MovePlay("#rec_goodpos","#rec_next","#rec_pre");
	if(user){
		user = JSON.parse(user);
		//取到cookie中的用户名
		var userPhone = user.userPhone;
		//加载数据
		$.get("php/getshop.php",{"userPhone":userPhone},function(data){
			console.log(data);
			if(data!=""){
				data = eval('('+data+')');
				$(".kong").css("display","none");
				$("#cartbox").css("display","block");
				//遍历data
				for(let x in data){
					let oLi ="<li><span><label><input type='checkbox' /></label><img src='"+data[x].goodsImg
					+"'/></span><span>"+data[x].goodsDesc+"</span><span><p><i>颜色：</i><em>"+data[x].goodsColor
					+"</em></p><p><i>尺寸：</i><em>"+data[x].goodsSize
					+"</em></p></span><span>￥"+data[x].goodsPrice+"</span><span><input type='text' value='"+data[x].goodsCount
					+"' id='num'/><a id='plus'>+</a><a id='minus'>-</a></span><span>￥"+
					parseInt(data[x].goodsPrice)*parseInt(data[x].goodsCount)+".00</span><span><b id='del'></b></span></li>"
					$("#list").append(oLi);
				}
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
			}else{
				$(".kong").css("display","block");
				$("#cartbox").css("display","none");
			}
			
		});
	}
		//全选
		$("#allchek").click(function(){
			if($("#allchek").prop("checked")){
				$("#list input").prop("checked",true);
			}else{
				$("#list input").prop("checked",false);
			}
			
		});
	
	//猜你喜欢
	$.get("json/goods.json",function(data){
		for(let x in data){
			if(data[x].classify=="cnxh"){
				for(let k=0;k<data[x].goods.length;k++){
					let oLi = "<li><a href='index.html'><img src='"+data[x].goods[k].img+"' alt='' /></a><p>"+data[x].goods[k].describe+"</p><b>"+data[x].goods[k].price+"</b></li>";
					$("#rec_goodpos").append(oLi);
				}
			}
		}
		var oUl3=MovePlay("#rec_goodpos","#rec_next","#rec_pre");
	},"json");
	
	
	
});
