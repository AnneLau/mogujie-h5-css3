// (function(){
// 	var flipContainer = document.querySelectorAll('.flip-container');
// 	function rotatePic(){
// 		for(var i = 0; i < flipContainer.length; i++){
// 			(function(i){
// 				window.setTimeout(function() {
// 					var a = flipContainer.length;
// 					var r = parseInt(Math.random() * a);
// 				    flipContainer[r].classList.toggle('hover');
// 				}, 4000 * (i + 1));
// 			})(i);
// 		}
// 	}
// 	rotatePic();
// 	window.setInterval(rotatePic,24000);
// })();

(function(){
	var imageLists = document.getElementById("imageLists");
	var flipContainer = imageLists.getElementsByTagName("li");
	// var flipContainer = document.querySelectorAll('.flip-container');
	var flag = false;
	function rotatePic(){
		for(var i = 0; i < flipContainer.length; i++){
			(function(i){
				window.setTimeout(function() {
					var a = flipContainer.length;
					var r = parseInt(Math.random() * a);
				    // flipContainer[r].classList.toggle('hover');
				    if(!flag){
				    	flipContainer[r].setAttribute("class","flip-container lihover");
				    	// console.log("hover99")
				    }else{
				    	flipContainer[r].setAttribute("class","flip-container");
				    	// console.log("none")
				    }
				    flag = !flag;
				}, 2000 * (i + 1));
			})(i);
		}
	}
	rotatePic();
	window.setInterval(rotatePic,12000);
})();