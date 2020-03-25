$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $(".main-menu");
    button.on("click", function(){
        $("body").toggleClass("menu-open");
        button.toggleClass("open");
        menu.toggleClass("open");
    });
});




$('.hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:true,
    responsive: [
    {
      breakpoint: 510,
      settings: {
        arrows:false
      }
    }
  ]
});



$('.our-partners').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
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
        arrows: false,
      }
    }
  ]
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
    $(this).parents('.dropdown').find('input').attr('value', $(this).text()).trigger("change");
});

$('input[name="owner"]').change(function(){
     var value = $(this).val();
      if (value == "Другая") {
        $('input[name="owner-other"]').show().addClass('required');
        setTimeout(function() { $('input[name="owner-other"]').focus() }, 300);
       } else{
        $('input[name="owner-other"]').hide().removeClass('required');
       }
});

$('input[name="control-system"]').change(function(){
     var value = $(this).val();
      if (value == "Другая") {
        $('input[name="control-system-other"]').show().addClass('required');
        setTimeout(function() { $('input[name="control-system-other"]').focus() }, 300);
       } else {
        $('input[name="control-system-other"]').hide().removeClass('required');
       }
});

$('input[name="company-sklad"]').change(function(){
     var value = $(this).val();
      if (value == "Да") {
        $('input[name="sklad-quantity"]').show().addClass('required');
        $('input[name="sklad-address"]').show().addClass('required');
        setTimeout(function() { $('input[name="sklad-quantity"]').focus() }, 300);
       } else {
        $('input[name="sklad-quantity"]').hide().removeClass('required');
        $('input[name="sklad-address"]').hide().removeClass('required');
       }
});

$('#top').scroll(function () {
    if ($('#top').scrollTop()  > 100) {
        $("#arrow-up").fadeIn();
    } else {
        $("#arrow-up").fadeOut();
    }
});


$("#arrow-up").click(function() {
  $("#top").animate({ scrollTop: 0 }, "slow");
  return false;
});


$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
    });
});

$(document).ready(function(){
    var $page = $('#top');
    $('a[href*="#"]:not(.popup-modal)').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});

$(document).ready(function(){
  $('input[name="phone"]').mask("+7(999) 999-99-99");
});