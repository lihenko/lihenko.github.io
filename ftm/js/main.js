$(document).ready(function(){
    $('.bounceIn').addClass('hidden');
    $('.bounceIn').viewportChecker({
      classToAdd: 'visible animate__animated animate__bounceIn',
      offset:150
    });
});

$(document).ready(function(){
    $('.rubberBand').addClass('hidden');
    $('.rubberBand').viewportChecker({
      classToAdd: 'visible animate__animated animate__rubberBand',
      offset:150
    });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$( window ).resize(function(){
  if ($(window).width() < 991) {
        $('#home-testimonials .slider').slick({
          speed: 300,
          autoplay:true,
          arrows: false,
          dots:true
      });
    } else{
      $('#home-testimonials .slider').slick('unslick');
    }
});

$(document).ready(function(){
    if ($(window).width() < 991) {
        $('#home-testimonials .slider').slick({
          speed: 300,
          autoplay:true,
          arrows: false,
          dots:true
      });
    }
});

$( window ).resize(function(){
  if ($(window).width() < 991) {
        $('#upcoming-courses .slider').slick({
          speed: 300,
          autoplay:true,
          arrows: false,
          dots:true
      });
    } else{
      $('#upcoming-courses .slider').slick('unslick');
    }
});

$(document).ready(function(){
    if ($(window).width() < 991) {
        $('#upcoming-courses .slider').slick({
          speed: 300,
          autoplay:true,
          arrows: false,
          dots:true
      });
    }
}); 

$( window ).resize(function(){
  if ($(window).width() < 991) {
        $('#taught-expert-coaches .slider').slick({
          speed: 300,
          autoplay:false,
          arrows: false,
          dots:true,
          slidesToShow: 2,
          slidesToScroll: 1
      });
    } else{
      $('#taught-expert-coaches .slider').slick('unslick');
    }
});

$(document).ready(function(){
    if ($(window).width() < 991) {
        $('#taught-expert-coaches .slider').slick({
          speed: 300,
          autoplay:false,
          arrows: false,
          dots:true,
          slidesToShow: 2,
          slidesToScroll: 1
      });
    }
}); 


$(document).ready(function(){

    $('#course-testimonials .slider').slick({
          speed: 300,
          autoplay:true,
          arrows: true,
          dots:true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

});     


$(document).ready(function(){
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
}); 


$(window).scroll(function () {
    var $this = $(this),
        $head = $('header');
    if ($this.scrollTop() > 250) {
       $head.addClass('transformed_header');
    } else {
       $head.removeClass('transformed_header');
    }
    if ($this.scrollTop() > 350) {
       $head.addClass('fixed_header');
    } else {
       $head.removeClass('fixed_header');
    }
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
