function blurposition(){
  var section = $('#home-programms');
  var row = $('#home-programms .row:nth-child(2)');

  var rowtop = row.position().top;

  $('#home-programms .home-program-slide').each(function() {
    var prtop = $(this).position().top;
    prtop = prtop + rowtop;
    console.log(prtop);
    var prleft = $(this).position().left;
    if ($(window).width() < 1200) {
       prleft = prleft + 25;
    }
    else {
       prleft = prleft + 25 + $(window).width()*.0833;
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


$('.home-slider-wrap').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    prevArrow: $('.home-slider-buttons .prev-slide'),
    nextArrow: $('.home-slider-buttons .next-slide')
});



$('.home-program-slider').slick({
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




