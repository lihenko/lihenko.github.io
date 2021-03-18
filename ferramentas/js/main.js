
$('.hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true
});



$('.category-list ul').slick({
  autoplay:false,
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.category-list-control .prev-button'),
  nextArrow: $('.category-list-control .next-button'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



