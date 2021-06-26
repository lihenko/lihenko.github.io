$('.home-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: false,
    dots:true
});

$('#filter-button').on('click', function(){
	$('#plans .nav').toggleClass('open');
});

$('.nav-link').on('click', function(){
	$('#plans .nav').removeClass('open');
});