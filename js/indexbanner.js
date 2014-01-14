$(function(){
	
	//在线客服
	$('.boxgrid.slideright').mouseover(function(){
		$(".cover", this).stop().animate({width:'198px'},{queue:false,duration:300});
		$('.boxgrid.slideright').animate({width:'198px'},{queue:false,duration:300});
	});
	$('.boxgrid.slideright').mouseout(function(){
		$(".cover", this).stop().animate({width:'23px'},{queue:false,duration:300});
		$('.boxgrid.slideright').animate({width:'23px'},{queue:false,duration:300});
	});
	$(window).scroll(function (){
		var offsetTop = $(window).scrollTop() + 12 +"px";
		$("#Float").animate({top : offsetTop },{ queue:false , duration:500 });
	}); 
	
	//新闻列表
	$(".hot .list div").jCarouselLite({
		btnNext: ".hot .list .next",
		btnPrev: ".hot .list .prev",
		auto:5000,
		speed:300,
		vertical:true,
		visible:1
	});
	
	//banner图片
	$('.banner .show ul li:eq(0)').show();
	var speed = 2500,iNum = 0;
	$('.banner .focus a').bind('click',function(){
		var aIndex = $('.banner .focus a').index(this);
		$('.on').removeClass('on');
		$(this).addClass('on');
		$('.banner .show ul li').fadeOut().eq(aIndex).fadeIn();
		iNum = aIndex;
	})
	var autoPlay = function(){
		iNum++;
		if(iNum == $('.banner .show ul li').length){
			iNum=0;
		}
		$('.on').removeClass('on');
		$('.banner .focus  a').eq(iNum).addClass('on');
		$('.banner .show ul li').fadeOut().eq(iNum).fadeIn(1000);		
	};
	var timer = setInterval(autoPlay,speed);
	$('.banner .show,.banner .focus').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,speed);
	});

});