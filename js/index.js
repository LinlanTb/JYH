$(function(){
	//引入头部
$("header").load("top.html");
$("footer").load("footer.html");
//最开始的轮播
var pic = new AutoPlayImgs({
	"boxId":"#turns",
	"width":714,
	"height":382,
	"imgs":["img/banner/im1.jpg","img/banner/im2.jpg","img/banner/im3.jpg","img/banner/im4.jpg","img/banner/im5.jpg",],
	"cirWidth":25,
	"cirHeight":25,
	"bgColor":"#333",
	"highLightColor":"#dc0f50",
	"imghref":["http://www.huijiayou.cn/Index.html","http://www.huijiayou.cn/Index.html","http://www.huijiayou.cn/Index.html","http://www.huijiayou.cn/Index.html","http://www.huijiayou.cn/Index.html"],
	"speed":1000,
	"cirLeft":290,
	"cirBottom":20,
	
});
pic.go();
//1f的轮播
var fpic =new AutoPlayImgs({
	"boxId":"#turnimg",
	"width":580,
	"height":310,
	"imgs":["img/banner/fp1.jpg","img/banner/fp2.jpg"],
	"cirWidth":20,
	"cirHeight":20,
	"bgColor":"#333",
	"highLightColor":"#ccc",
	"imghref":["http://www.huijiayou.cn/Index.html","http://www.huijiayou.cn/Index.html"],
	"speed":1000,
	"cirLeft":250,
	"cirBottom":20,
});
fpic.go();	
//倒计时
//滑动


var timer = changTime("#hour","#second","#minute","#wrap");
var user = getCookie("user");
if(user){
	user = JSON.parse(user);
	$(".hd").css("display","none");
	$(".user").css("display","block");
	$("#username").html("hi!" + user.userPhone);
	$("#user").attr("href","###");
}else{
	$(".hd").css("display","block");
	$(".user").css("display","none");
	}

$.get("json/goods.json",function(data){
	for(let x in data){
		//TV直播
		if(data[x].classify=="tv"){
			for(let i=0;i<data[x].goods.length;i++){
				let oLi = "<li><a href='goodDetail.html'><div class='box'><img src='"+data[x].goods[i].img+"'/></div><p>正在直播</p><span>"+data[x].goods[i].describe+"</span><i>"+data[x].goods[i].price+"<em>"+data[x].goods[i].oldpri+"</em></i></a></li>";
				$("#ul1").append(oLi);
			}
		}
		//限时抢购
		if(data[x].classify=="xh"){
			for(let j=0;j<data[x].goods.length;j++){
				let oLi = "<li><a href='goodDetail.html'><div class='box'><img src='"+data[x].goods[j].img+"'/></div><p>"+data[x].goods[j].discount+"</p><span>"+data[x].goods[j].describe+"</span><i>"+data[x].goods[j].price+"<em>"+data[x].goods[j].oldpri+"</em></i><b>立即抢购</b></a></li>";
				$("#ul2").append(oLi);
			}
		}
		//猜你喜欢
		if(data[x].classify=="cnxh"){
			for(let k=0;k<data[x].goods.length;k++){
				let oLi = "<li><a href='goodDetail.html'><div class='box'><img src='"+data[x].goods[k].img+"'  /></div><span>"+data[x].goods[k].describe+"</span><i>"+data[x].goods[k].price+"<em>"+data[x].goods[k].oldpri+"</em></i></a></li>";
				$("#ul3").append(oLi);
			}
		}
	}
	var oUl1=MovePlay("#ul1","#next1","#prev1");
	var oUl2=MovePlay("#ul2","#next2","#prev2");
	var oUl3=MovePlay("#ul3","#next3","#prev3");
},"json");

});
