function HeightBlock(column) {
    var BlockHeight = 0;
    column.each(function() {
        CurrentHeight = $(this).height();
        if(CurrentHeight > BlockHeight){
            BlockHeight = CurrentHeight;
        }
    });
    column.height(BlockHeight);
        
};

$('.hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true
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





$(document).ready(function(){

    HeightBlock($('.plans-card-body'));

    HeightBlock($('.charts-height'));


});



///////////////////////////


$(document).ready(function() {
    $('.revenue span').viewportChecker({
        offset: 100,
        callbackFunction: function(){
          $('.revenue span').animateNumber(
          {
            number: 147465,
            numberStep: $.animateNumber.numberStepFactories.separator(',')
          },
          3000
        );
        }
       });
});

$(document).ready(function() {
    $('.roas span').viewportChecker({
        offset: 100,
        callbackFunction: function(){
          $('.roas span').animateNumber(
          {
            number: 796,
            numberStep: $.animateNumber.numberStepFactories.separator(',')
          },
          3000
        );
        }
       });
});

$(document).ready(function() {
    $('.cpa span').viewportChecker({
        offset: 100,
        callbackFunction: function(){
          $('.cpa span').animateNumber(
          {
            number: 237,
            numberStep: $.animateNumber.numberStepFactories.separator(',')
          },
          3000
        );
        }
       });
});

$(document).ready(function() {
    $('.time span').viewportChecker({
        offset: 100,
        callbackFunction: function(){
          $('.time span').animateNumber(
          {
            number: 3,
            numberStep: $.animateNumber.numberStepFactories.separator(',')
          },
          2000
        );
        }
       });
});


$(document).ready(function(){
    $('.different-case:nth-child(1)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        offset: 100
    });
    $('.different-case:nth-child(2)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        offset: 100
    });
    $('.different-case:nth-child(3)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInRight',
        offset: 100
    });
    $('.different-case:nth-child(4)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        offset: 100
    });
    $('.different-case:nth-child(5)').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInRight',
        offset: 100
    });
    $('.attention').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__jackInTheBox',
        offset: 100
    });
});

$('.our-work-slider').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  variableWidth: true,
  dots: false,
  arrows: false,
  infinite: true,
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
  ]
});