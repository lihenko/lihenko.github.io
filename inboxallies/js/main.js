$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});

$('.case-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    fade: true,
    prevArrow: $('.slide-controls .prev-slide'),
    nextArrow: $('.slide-controls .next-slide')
});

$(document).on('click', '.collapse-button', function(event) {
    var $page = $('html, body');
    if ($(window).width() < 992) {
       setTimeout(function() { 
            $page.animate({
                scrollTop: $('.testilist').offset().top -100
            }, 600);
        }, 600);
    }
        
});