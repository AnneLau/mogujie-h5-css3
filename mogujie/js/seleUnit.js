$(document).ready(function(){
	$slideCarousel = $("#slideCarousel");
	$unitSele = $("#unitSele");
	$btnLeftSele = $("#btnLeftSele");
	$btnRightSele = $("#btnRightSele");
	$imgLisSel = $("#unitSele li");
	$circlesLis = $("#circleSele li");
	amount = $imgLisSel.length;

	// 信号量
	var idx = 0;
	// 补充空li
	if(amount % 3 == 1){
		// 补充2个空li
		$("<li></li><li></li>").appendTo($unitSele);
	}else if(amount % 3 == 2){	
		// 补充1个空li
		$("<li></li>").appendTo($unitSele);
	}
	// 克隆前3张图片
	$unitSele.children("li:lt(3)").clone().appendTo($unitSele);
	var newAmountSele = $unitSele.children("li").length / 3;
	// 定时器
	var timer = setInterval(rightBtnFunSele, 2600);
	$slideCarousel.mouseenter(function(){
		clearInterval(timer);
	});
	$slideCarousel.mouseleave(function(){
		clearInterval(timer);
 		timer = setInterval(rightBtnFunSele, 2600);
	});
	// 右按钮事件
	$btnRightSele.click(rightBtnFunSele);

	function rightBtnFunSele(){
		// 图片运动什么都不做
		if($unitSele.is(":animated")){
			return;
		}
		idx ++;
		// 先拉动
		$unitSele.animate({"left":-960 * idx}, 600, function(){
			// 再判断
			if(idx > newAmountSele - 2){
				idx = 0;
				$unitSele.css("left", "0");
			}
		});
		// 小圆点
		var i = idx <= newAmountSele - 2 ? idx : 0;
		$circlesLis.eq(i).addClass("cur").siblings().removeClass("cur");
	}

	// 左按钮事件
	// 防流氓
	$btnLeftSele.click(function(){
		if(!$unitSele.is(":animated")){
			// 策略先验证再拉动
			idx--;
			if(idx < 0){
				idx = 4;
				// 火车瞬间移动到猫腻图
				$unitSele.css("left",-960 * (newAmountSele-1));
			}
			$unitSele.animate({"left": -960 * idx},600);
			$circlesLis.eq(idx).addClass("cur").siblings().removeClass("cur");
		}
	});
	
	// 小圆点的鼠标进入事件
	$circlesLis.mouseenter(function(){
		idx = $(this).index();
		$unitSele.stop(true).animate({"left": -960 * idx},700);
		// 小圆点改变
		$(this).addClass("cur").siblings().removeClass("cur");
		clearInterval(timer);
	});
	$circlesLis.mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(rightBtnFunSele, 2600);
	});
});