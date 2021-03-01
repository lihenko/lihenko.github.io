
$('.home-slider-wrap').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    prevArrow: $('.home-slider-buttons .prev-slide'),
    nextArrow: $('.home-slider-buttons .next-slide')
});



$('.slider-footer-content').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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


$('.home-testimonials').slick({
    speed: 300,
    autoplay:true,
    arrows: false,
    dots:true
});



$('.single-slide').slick({
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.nav-slide'
});

$('.nav-slide').slick({
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.single-slide',
  arrows: false,
  dots: false,
  //centerMode: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        vertical: false,
        verticalSwiping: false
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

function blurposition(){
  var section = $('#home-programms');
  var row = $('#home-programms .row:nth-child(2)');

  var rowtop = row.position().top;

  $('#home-programms .col-md-6.col-xl-3').each(function() {
    var prtop = $(this).position().top;
    prtop = prtop + rowtop;
    console.log(prtop);
    var prleft = $(this).position().left;
    if ($(window).width() < 1200) {
       prleft = prleft + 15;
    }
    else {
       prleft = prleft + 15 + $(window).width()*.0833;
    }
     
    $(this).find('.home-programm-blur').css({
      'width' : section.outerWidth(),
      'height' : section.outerHeight(),
      'left': '-' + prleft + 'px',
      'top' : '-' + prtop + 'px'
    });
  });

};


$(document).ready(function(){
    blurposition();
});

$( window ).resize(function() {
  blurposition();
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


$('.dropdown.plan').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown.plan').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown.plan .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).text());
    });





