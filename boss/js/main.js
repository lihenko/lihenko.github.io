jQuery(window).scroll(function(){
  var current_position = jQuery(window).scrollTop();
  //console.log(current_position);
  jQuery('#values .data-column .value-wrap').each(function(){
    var position = jQuery(this).offset();
    var current_height = jQuery(this).height();
    var title = jQuery('#values h2');
    var titleposition = jQuery('#values .title-column').offset();
    console.log(position.top);
    if (current_position + 400 >= position.top && current_position + 400 - position.top < current_height + 60){
      jQuery(this).addClass('visible');
      if (jQuery(window).width() >= 1320){
        title.css('top', position.top - titleposition.top - 30 + 'px');
      }
    } else {
      jQuery(this).removeClass('visible');
    }
  });
});

jQuery(document).ready(function ($) {
  $('.slogan-slide-wrap').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
  });
});

jQuery(document).ready(function ($) {
  $('.services-solution-slider-wrap').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows:false
        }
      }
    ]
  });
});