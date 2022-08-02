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
  $('.about-us-slider').slick({
      speed: 300,
      autoplaySpeed: 4000,
      autoplay:true,
      arrows: false,
      dots:true,
      centerMode:true,
      slidesToShow:1,
      slidesToScroll:1,
  });
});

jQuery(document).ready(function($){
  $('.stories-slider').slick({
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

jQuery(document).ready(function($){
  $('.faq-list-column .faq-item:first-child').addClass('open');
  $('.faq-list-column .faq-item:first-child .faq-answer').show();
});

jQuery(document).ready(function($){
  $('.faq-title').click(function(){
    if($(this).parents('.faq-item').hasClass('open')){
      $(this).parents('.faq-list-column').find('.faq-answer').slideUp();
      $(this).parents('.faq-list-column').find('.faq-item').removeClass('open');
    } else {
      $(this).parents('.faq-list-column').find('.faq-answer').slideUp();
      $(this).parents('.faq-list-column').find('.faq-item').removeClass('open');
      $(this).parents('.faq-item').addClass('open');
      $(this).parents('.faq-item').find('.faq-answer').slideDown();
    }
      
  })
});