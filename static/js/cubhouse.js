$(function(){
	$(window).scroll(function(e){
		myScroll = $(window).scrollTop() * -1;
		myScroll = myScroll + 440;
		myScroll = myScroll * .25;
		$("main#index section#hero-homepage").css("background-position", myScroll+"% 100%")
	});
});

/*
$("main#index section#hero-homepage").css("background-position","40% 100%")

*/