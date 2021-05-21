$(window).scroll(function(){
    $('.bg').css("background-position",parseInt($(this).scrollTop()*0.05));
})

$('.hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });


$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});


