

$('.slider-container').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      }
    },
  ]
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


