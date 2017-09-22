var PRIMARY = "black"

$(document).ready(function(){
	genDivs();
	$('#colorList').on('click','li',function(){
		console.log(PRIMARY);
		PRIMARY = $(this).data('color');
	})
})

function genDivs(v){
	var canvas = $('.canvas');
	var gridSquare = $('.gridSquare');
	gridSquare.height(500/10);
	gridSquare.width(500/10);
	
	for( var i = 1; i< 100; i++){
		gridSquare.clone().appendTo(canvas);
	}
	hover();
}

function hover(){

	$('.gridSquare').hover(function(){
		if(PRIMARY === "random") PRIMARY = getRandomColor();
		$(this).css("background-color",PRIMARY);
	})
}

function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color  = '#';
	for(var i = 0; i<6; i++){
		color+= letters[Math.floor(Math.random()*16)];
	}
	console.log(color);
	return color;
}