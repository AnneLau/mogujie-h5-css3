$(document).ready(function(){
	$newlunbo = $("#newlunbo");
	$unit = $("#unit");
	$btnLeft = $("#btnLeft");
	$btnRight = $("#btnRight");
	$imgLis = $("#unit li");
	amount = $imgLis.length;

	// 信号量
	var idx = 0;
	// 补充空li
	if(amount % 5 == 1){
		// 补充4个空li
		$("<li></li><li></li><li></li><li></li>").appendTo($unit);
	}else if(amount % 5 == 2){	
		// 补充3个空li
		$("<li></li><li></li><li></li>").appendTo($unit);
	}else if(amount % 5 == 3){	
		// 补充2个空li
		$("<li></li><li></li>").appendTo($unit);
	}else if(amount % 5 == 4){	
		// 补充1个空li
		$("<li></li>").appendTo($unit);
	}
	// 克隆前5张图片
	$unit.children("li:lt(5)").clone().appendTo($unit);
	var newAmount = $unit.children("li").length / 5;
	// 定时器
	var timer = setInterval(rightBtnFun, 2600);
	$newlunbo.mouseenter(function(){
		clearInterval(timer);
	});
	$newlunbo.mouseleave(function(){
 		timer = setInterval(rightBtnFun, 2600);
	});
	// 右按钮事件
	$btnRight.click(rightBtnFun);

	function rightBtnFun(){
		// 图片运动什么都不做
		if($unit.is(":animated")){
			return;
		}
		idx ++;
		// 先拉动
		$unit.animate({"left":-984 * idx}, 600, function(){
			// 再判断
			if(idx > newAmount - 2){
				idx = 0;
				$unit.css("left", "0");
			}
		});
	}

	// 左按钮事件
	// 防流氓
	$btnLeft.click(function(){
		if(!$unit.is(":animated")){
			// 策略先验证再拉动
			idx--;
			if(idx < 0){
				idx = newAmount - 2;
				// 火车瞬间移动到猫腻图
				$unit.css("left",-984 * (newAmount - 1));
			}
			$unit.animate({"left": -984 * idx},600);
		}
	});
	










});