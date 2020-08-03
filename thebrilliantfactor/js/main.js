
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('.hero-slider-wrap').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    prevArrow: $('.hero-slider-buttons .prev-button'),
    nextArrow: $('.hero-slider-buttons .next-button')
});



$('.product-slider-wrap').slick({
  speed: 300,
  dots:false,
  autoplay:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('#our-products .prev-button'),
  nextArrow: $('#our-products .next-button'),
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 680,
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






$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});