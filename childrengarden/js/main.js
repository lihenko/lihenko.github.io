

$('.meal-slider').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('#slider .slider-wrap').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows:false
      }
    }
  ]
});


function teacherslider(){
  $('.teachers-slider').slick({
    speed: 300,
    autoplay:true,
    arrows:false,
    dots:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        },
        {
           breakpoint: 767,
           settings:{
            slidesToShow: 2,
            slidesToScroll: 2,
           }
        }
    ]
  });
}


$(document).ready(function(){
    teacherslider();
});

$(window).on('resize', function(){
  $('.teachers-slider').slick('unslick');
  teacherslider();
});

$('.testimonials-slider').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.photogallery-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows:false
      }
    }
  ]
});


$(window).scroll(function() {
    var button = $('#to-top');
    if ($(window).scrollTop() > 600) {
        button.addClass('show');
    }
    else {
        button.removeClass('show');
    }
});


function contactform(){
  event.preventDefault();
  $('#modalform').modal('show');
}


function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
};

$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});
