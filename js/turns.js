//boxId为容器的id，width为容器的宽，height为容器的高，imgs为图片路径的数组
function AutoPlayImgs(obj){
	this.boxId = obj.boxId;
	this.width = obj.width;
	this.aWidth = obj.aWidth;
	this.aHeight = obj.aHeight;
	this.aTop = obj.aTop;
	this.height = obj.height;
	this.imgs = obj.imgs;
	this.cirWidth = obj.cirWidth;
	this.cirHeight = obj.cirHeight;
	this.bgColor = obj.bgColor;//小圆圈的背景色
	this.highLightColor = obj.highLightColor;//小圆圈高亮的背景色
	this.imghref = obj.imghref;
	this.speed = obj.speed;//图片滑动的速度
	this.cirLeft = obj.cirLeft;//圆点的left
	this.cirBottom = obj.cirBottom;//圆点的bottom
	this.current = 0;
	this.timer;
	this.InitUI();
}
AutoPlayImgs.prototype.InitUI = function(){
	var that = this;
	$(this.boxId).mouseenter(function(){
		clearInterval(that.timer);
		$("#prv").css({"display":"block"});
		$("#nxt").css({"display":"block"});
		$("#prv").click(function(){
//			clearInterval(that.timer);
			that.current--;
			if(that.current<0){
				that.current=that.imgs.length-1;
			}
			$(that.boxId+" ul:eq(0) li").css({"display":"none","opacity":0});
			$(that.boxId+" ul:eq(0) li").eq(that.current).css({"display":"block"});
			$(that.boxId+" ul:eq(0) li").eq(that.current).animate({"opacity":1},that.speed);
			$(that.boxId+" ul:eq(1) li").css("background",that.bgColor);
			$(that.boxId+" ul:eq(1) li").eq(that.current).css("background",that.highLightColor);
			console.log(that.current);
		});
		$("#nxt").click(function(){
			clearInterval(that.timer);
			that.goStep();
		});
	});
	$(this.boxId).mouseleave(function(){
		$("#prv").css({"display":"none"});
		$("#nxt").css({"display":"none"});
		that.go();
	});
	//创建图片的ul
	let htmlUl = "<ul>";//放图片的ul
	for(let i=0;i<this.imgs.length;i++){
		
		let oImg = "<img src = '"+this.imgs[i]+"' style='width:"+this.width+"px;height:"+this.height+"px;' />"
		htmlUl += "<li style='position:absolute;left:0;top:0;display:none;opacity:0;width:"+this.width+"px;height:"+this.height+"px;'>"+oImg+"</li>";
	}
	htmlUl += "</ul>";
	$(this.boxId).append(htmlUl);
	$(this.boxId+" ul:eq(0) li").eq(0).css({"display":"block","opacity":1});
	//点击的按钮
	let prev = "<a href='###' id='prv' style = 'width:"+this.aWidth+"px;height:"+this.aHeight+"px;position:absolute;background:rgba(0,0,0,0.6);left:0px;top:"+this.aTop
	+"px;font-size:60px;display:none;text-decoration:none;color:#fff;text-align:center;line-height:"+this.aHeight+"px;'>&lt;</a>";
	$(this.boxId).append(prev);
	let next = "<a href='###' id='nxt' style = 'width:"+this.aWidth+"px;height:"+this.aHeight+"px;display:none;text-decoration:none;color:#fff;position:absolute;background:rgba(0,0,0,0.6);right:0px;top:"+this.aTop+"px;font-size:60px;text-align:center;line-height:"+this.aHeight+"px;'>&gt;</a>";
	$(this.boxId).append(next);
	//放圆点的ul
	let objUl = "<ul style='position:absolute;left:"+this.cirLeft+"px;bottom:"+this.cirBottom+"px;'>";
	for(let j=0;j<this.imgs.length;j++){
		objUl += "<li style='float:left;text-align:center;cursor:pointer;color:#FFF;line-height:"+this.cirHeight+"px;width:"+this.cirWidth+"px;height:"+this.cirHeight+"px;border-radius:100%;background:"+this.bgColor+";margin-right:15px;'>"+(j+1)+"</li>"
	}
	objUl += "</ul>";
	$(this.boxId).append(objUl);
	$(this.boxId+" ul:eq(1) li").eq(0).css("background",this.highLightColor);
	//当鼠标移到圆点上时
	
	$(this.boxId+" ul:eq(1) li").click(function(){
		let index = $(that.boxId+" ul:eq(1) li").index(this);
		$(that.boxId+" ul:eq(0) li").css({"display":"none","opacity":0});
		$(that.boxId+" ul:eq(0) li").eq(index).css({"display":"block"});
		$(that.boxId+" ul:eq(0) li").eq(index).animate({"opacity":"1"},that.speed);
		$(that.boxId+" ul:eq(1) li").css("background",that.bgColor);
		$(this).css("background",that.highLightColor);
		that.current = index;
	});
}
AutoPlayImgs.prototype.goStep = function(){
	this.current++;
	if(this.current>=this.imgs.length){
		this.current=0;
	}
	$(this.boxId+" ul:eq(0) li").css({"display":"none","opacity":0});
	$(this.boxId+" ul:eq(0) li").eq(this.current).css({"display":"block"});
	$(this.boxId+" ul:eq(0) li").eq(this.current).animate({"opacity":1},this.speed);
	$(this.boxId+" ul:eq(1) li").css("background",this.bgColor);
	$(this.boxId+" ul:eq(1) li").eq(this.current).css("background",this.highLightColor);
}
AutoPlayImgs.prototype.go = function(){
	var that = this;
	this.timer = setInterval(function(){
		that.goStep();
	},2000);
}