function changTime(hour,sec,min){
	var timer;
	var i=59;
	j=59;
	k = 8;
	$(hour).html("07");
	$(sec).html(59);
	timer = setInterval(function(){
		test(i);
		$(min).html(test(i));
		
		i--;
		if(i<=0){
			i=59;
			j--;
			$(sec).html(test(j));
			
			if(j<=0){
				j=59;
				k--;
				$(hour).html(test(k));
				
				
			}
		}
		
	},1000);
}
function test(num){
	return num<10 ? '0'+num: num;
}