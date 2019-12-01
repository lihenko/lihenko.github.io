$('.portfolio-slider').slick({
    speed: 300,
    autoplay:false,
    arrows: true,
    dots:true,
    adaptiveHeight: true,
});

$(document).ready(function(){
  $("#keyses-phone-number").mask("+7(999) 999-99-99");
  $("#info-phone-number").mask("+7(999) 999-99-99");
  $("#questions-phone-number").mask("+7(999) 999-99-99");
  $("#callback-phone-number").mask("+7(999) 999-99-99");
  $("#exit-phone-number").mask("+7(999) 999-99-99");
});


$('#tabs a').on('click', function() {
  event.preventDefault();
  var section = $(this).attr('id');
  var links = $('.tabs-link');
  var tabs = $('[class$="-tab"]');
  
  section = '.' + section;

  tabs.hide();
  links.removeClass('active');
  $(this).addClass('active');
  $(section).fadeIn('slow');
  
});


$('.testi-slider').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});



$(document).ready(function(){

  $('#exit').exitModal();

});