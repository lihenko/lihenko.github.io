
jQuery(document).ready(function($){
  $('.testimonials-wrap').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});


jQuery(document).ready(function($){
  $(".video-bg").videoPopup({
    autoplay: 1,
    showVideoInformations: 0,
    width: 854,
  });
});            