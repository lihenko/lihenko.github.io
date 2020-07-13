$('.clients-slider').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  dots: false,
  arrows: false,
  infinite: true,
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
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.quote-slider').slick({
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
});



$(document).ready(function(){
  var checker = $('.property-search-form .checker');
  var spacetype = $('#space-type');
  var size = $('#size');
  var other = $('#other');
  var sizeoption = $('.size-options');
  var spacetypeoptions = $('.space-type-options');
  var otheroptions = $('.other-options');

  checker.on('click', function(){
      $(this).toggleClass('checked');
  });
  spacetype.on('click', function(){
      event.preventDefault();
      spacetypeoptions.slideToggle();
  });
  size.on('click', function(){
      event.preventDefault();
      sizeoption.slideToggle();
  });
  other.on('click', function(){
      event.preventDefault();
      otheroptions.slideToggle();
  });
});