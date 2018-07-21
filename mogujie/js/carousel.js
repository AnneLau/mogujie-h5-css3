$(document).ready(function(){
	// 获取元素
	var $banner = $("#banner");
	var $carousel = $("#carousel");
	var $imgsLis = $("#imgs ul li");
	var $circlesLis = $("#circles ol li");
	var arr = ["#ca0f3a","#ff987f","#fcd928","#1637a2","#f2b0d8","#c7c27f"];
	var amount = $imgsLis.length;

	// 信号量
	var idx = 0;
	// 定时器
	var timer = setInterval(rightBtnFun, 4000);
	// 鼠标进入停止定时器
	$carousel.mouseenter(function(){
		clearInterval(timer);
	});
	// 鼠标离开重新开启定时器
	$carousel.mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(rightBtnFun, 4000);
	});
	// 小圆点事件
	$circlesLis.mouseenter(function(){
		// 老图淡出
		$imgsLis.eq(idx).stop(true).fadeOut(500);
		// 信号量改变
		idx = $(this).index();
		// 新图淡入
		$imgsLis.eq(idx).stop(true).fadeIn(800);
		setTimeout(function(){
			$banner.css("background-color",arr[idx]);
		},100);
		// 小圆点改变
		$(this).addClass("cur").siblings().removeClass("cur");
	});
	function rightBtnFun(){
		// 防流氓
		if($imgsLis.is(":animated")){
			return;
		}
		// 老图淡出
		$imgsLis.eq(idx).fadeOut(600);
		// 信号量改变
		idx++;
		if(idx > amount - 1){
			idx = 0;
		}
		// 新图淡入
		$imgsLis.eq(idx).fadeIn(600);
		// 小圆点改变
		$circlesLis.eq(idx).addClass("cur").siblings().removeClass("cur");
		setTimeout(function(){
			$banner.css("background-color",arr[idx]);
		},100);
	}

});