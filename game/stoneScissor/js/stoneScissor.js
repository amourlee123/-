window.onload = function(){
	var jiandao = document.getElementById("jiandao");
	var shitou = document.getElementById("shitou");
	var bu = document.getElementById("bu");

	jiandao.onclick = function(){
		stoneScissor(this, 1);
	}
	shitou.onclick = function(){
		stoneScissor(this, 2);
	}
	bu.onclick = function(){
		stoneScissor(this, 3);
	}

	function stoneScissor(src, index){
		//你产生的结果
		var src = src.getAttribute("src");
		var yourResult = document.getElementById("your-result");
		yourResult.setAttribute("src", src);

		//电脑产生的结果
		var randomNum = Math.random();
		var weight = 0;
		var result = document.getElementById("result");
		var computerResult = document.getElementById("computer-result");
		if(randomNum < 0.33){
			//剪刀
			computerResult.setAttribute("src", "img/jiandao.jpg");
			weight = 1;
		}
		else if(randomNum < 0.67 ){
			//石头
			computerResult.setAttribute("src", "img/shitou.jpg");
			weight = 2;
		}
		else {
			//布
			computerResult.setAttribute("src", "img/bu.jpg");
			weight = 3;
		}
		console.log(index);	
		console.log(weight);	
		//结果比较
		if (weight == index){
			result.innerHTML = "平局，再来一次";
			return 1;
		}
		if (weight < index) {
			result.innerHTML = "恭喜你获胜！！！";
		}
		if (weight > index){
			result.innerHTML = "你输了！！！";
		}
		if (weight == 3 && index == 1){
			result.innerHTML = "恭喜你获胜！！！";
		}
		if (weight == 1 && index == 3){
			result.innerHTML = "你输了！！！";
		}
	}
}
