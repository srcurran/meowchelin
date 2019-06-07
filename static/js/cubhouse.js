$(function(){
	/* animate the dudes on scroll */
	$(window).scroll(function(e){
		/* adjustments for positioning and speed */
		myScroll = $(window).scrollTop() * -1;
		myScroll = myScroll + 440;
		myScroll = myScroll * .25;
		/* move the background image based on scroll position */
		$("div.root section#hero-homepage").css("background-position", myScroll+"% 100%")
	});
	$(".scroll").click(function(event){
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});

/*
$("main#index section#hero-homepage").css("background-position","40% 100%")

*/