var marquee = $('div.marquee');
marquee.each(function() {
    var mar = $(this),indent = mar.width();
    mar.marquee = function() {
        indent--;
        mar.css('text-indent',indent);
        if (indent < -1 * mar.children('div.marquee-text').width()) {
            indent = mar.width();
        }
    };
    mar.data('interval',setInterval(mar.marquee,400/60));
});



$('.testimonials-wrap').slick({
    speed: 300,
    autoplay:true,
    arrows: false,
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



