$('#news-menu a').click(function (event) {
  event.preventDefault();
  if ($(this).parent('li').hasClass('current')) {
    return false;
  } else {
    $('#news-menu li').removeClass('current');
    $(this).parent('li').addClass('current');
    var section = '.' + $(this).data('grid');
    $('.news-grid').hide('slow');
    $('.events-grid').hide('slow');
    $(section).show('slow');
  }
});

$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).text());
});

$('.hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true
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

