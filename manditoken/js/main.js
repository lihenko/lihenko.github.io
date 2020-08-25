$('.media-logos').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  dots: false,
  arrows: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.approved-company-logo').slick({
  autoplay:true,
  autoplaySpeed: 5000,
  dots: false,
  arrows: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
       }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true
      }
    }
  ]
});

$('.projects-slider').slick({
    speed: 800,
    autoplay:true,
    autoplaySpeed: 10000,
    arrows: true,
    fade: true,
    dots:false,
    prevArrow: $('.project-slider-control .prev-button'),
    nextArrow: $('.project-slider-control .next-button'),
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


