$(function(){
$('.boxgrid.slideright').mouseover(function(){
		$(".cover", this).stop().animate({width:'312px'},{queue:false,duration:300});
		$('.boxgrid.slideright').animate({width:'312px'},{queue:false,duration:300});
	});
	$('.boxgrid.slideright').mouseout(function(){
		$(".cover", this).stop().animate({width:'45px'},{queue:false,duration:300});
		$('.boxgrid.slideright').animate({width:'45px'},{queue:false,duration:300});
	});
	$(window).scroll(function (){
		var offsetTop = $(window).scrollTop() + 12 +"px";
		$("#Float").animate({top : offsetTop },{ queue:false , duration:500 });
	}); 
	});