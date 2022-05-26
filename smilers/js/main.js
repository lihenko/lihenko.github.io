jQuery(document).ready(function ($) {
  $('#countdown').flipper('init');
  $('#countdown2').flipper('init');
});

jQuery(document).ready(function ($) {
  $('.smilers-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
});

jQuery(document).ready(function ($) {
  $('.smilers-media-slider').slick({
    centerMode: true,
    variableWidth: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});  

jQuery(document).ready(function ($) {
  $(".accordion-title").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion-content").slideUp(400);
      $(".accordion-title").removeClass("accordion-active");
      $('.accordion-arrow').removeClass('accordion-rotate');
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.accordion-arrow',this).toggleClass('accordion-rotate');
  });
});


jQuery(document).ready(function ($) {
  $('.how-it-works-line-column ul li').viewportChecker({
      classToAdd: 'visible',
      offset: 400,
      invertBottomOffset: true,
      repeat: true,
      scrollHorizontal: false
  });
  $('.how-it-works-line-column ul').viewportChecker({
      classToAdd: 'visible',
      offset: 400,
      invertBottomOffset: true,
      repeat: true,
      callbackFunction: function(elem, action){
        var position = $('#how-it-works').position();
        var current_position = $(window).scrollTop();
        var different = (current_position + 100 - position.top);
        var windowwidth = $(window).width();
        if($(window).width() > 991){
          if( different > 0) {
            $('.how-it-works-title-column h2').css({
              top: different + 'px'
            });
          }
        }
      },
      scrollHorizontal: false
  });
});