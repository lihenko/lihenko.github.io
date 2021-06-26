$('.home-hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false
});


$('.event-slider').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  arrows:false,
  dots: true,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  verticalSwiping: true,
});


$('.single-slide').slick({
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true,
  asNavFor: '.nav-slide'
});

$('.nav-slide').slick({
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.single-slide',
  arrows: false,
  dots: false,
  //centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


