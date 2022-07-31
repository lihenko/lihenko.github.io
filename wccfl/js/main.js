jQuery(document).ready(function($){
  $('.home-testimonials-slider').slick({
      speed: 300,
      autoplaySpeed: 4000,
      autoplay:true,
      arrows: false,
      dots:true,
  });
});


jQuery(document).ready(function($){
  $(".video-wrap").videoPopup({
    autoplay: 1,
    showVideoInformations: 0,
    width: 1018,
  });
});   