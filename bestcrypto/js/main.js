$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('.advertising-channels-slider').slick({
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
    
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

$(document).on('click', '#color-button', function(event) {
    $('body').addClass('overlayed');
      setTimeout(function(){ $('body').toggleClass('light'); }, 1000);
    setTimeout(function(){ $('body').removeClass('overlayed'); }, 2000);
});