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


$(document).on('click', '#contact-form input[type="submit"]', function() {
    event.preventDefault();
    var error="";
    $('#contact-form input.required').each(function(){
      if(!$(this).val())
      {
        $(this).addClass('error');
        error="1";
      }
      else
      {
        $(this).removeClass('error');
        error="";
      }
    });
    
    if(!error)
    {
      var Name=$('input[name="name"]').val();
      var Phone=$('input[name="phone"]').val();
      var Email=$('input[name="email"]').val();
      var Message=$('textarea[name="message"]').val();
      $.ajax({
        type:"POST",
        cache:false,
        url:'//gsmsggystems.com/wp-content/themes/gsm-systems/template-parts/ajax/request.php',
        data: { sName:Name, sPhone:Phone, sEmail:Email, sMessage:Message},
        success:function(data) {
          $('#contact-form .form-wrap').html('<h2 style="text-align:center;">Спасибо за Ваше сообщение</h2>');
        },
        error: function(){
            alert('error!');
          }
      });
    }
    
});

$(document).on('click', '#moloko-form input[type="submit"]', function() {
    event.preventDefault();
    var error="";
    $('#moloko-form input.required').each(function(){
      if(!$(this).val())
      {
        $(this).addClass('error');
        error="1";
      }
      else
      {
        $(this).removeClass('error');
        error="";
      }
    });
    
    if(!error)
    {
      var Owner=$('input[name="owner"]').val();
      var Owner_other=$('input[name="owner-other"]').val();
      var Company_name=$('input[name="company-name"]').val();
      var Company_contact=$('input[name="company-contact"]').val();
      var Company_lines=$('input[name="company-lines"]').val();
      var Company_speed=$('input[name="company-speed"]').val();
      var Control_system=$('input[name="control-system"]').val();
      var Control_system_other=$('input[name="control-system-other"]').val();
      var Company_sklad=$('input[name="company-sklad"]').val();
      var Sklad_quantity=$('input[name="sklad-quantity"]').val();
      var Sklad_address=$('input[name="sklad-address"]').val();
      var Control_app=$('input[name="control-app"]').val();
      $.ajax({
        type:"POST",
        cache:false,
        url:'/request-moloko.php',
        data: {
            sOwner:Owner,
            sOwner_other:Owner_other,
            sCompany_name:Company_name,
            sCompany_contact:Company_contact,
            sCompany_lines:Company_lines,
            sCompany_speed:Company_speed,
            sControl_system:Control_system,
            sControl_system_other:Control_system_other,
            sCompany_sklad:Company_sklad,
            sSklad_quantity:Sklad_quantity,
            sSklad_address:Sklad_address,
            sControl_app:Control_app
        },
        success:function(data) {
          $('#moloko-form .form-wrap').html('<h2 style="text-align:center;">Ваша заявка принята</h2>');
        },
        error: function(){
            alert('error!');
          }
      });
    }
    
});

$(document).on('click', '#voda-form input[type="submit"]', function() {
    event.preventDefault();
    var error="";
    $('#voda-form input.required').each(function(){
      if(!$(this).val())
      {
        $(this).addClass('error');
        error="1";
      }
      else
      {
        $(this).removeClass('error');
        error="";
      }
    });
    $('#voda-form input[type="hidden"]').each(function(){
      if(!$(this).val())
      {
        $(this).parents('.dropdown').addClass('error');
        dropdown="1";
      }
      else
      {
        $(this).parents('.dropdown').removeClass('error');
        dropdown="";
      }
    });
    
    if(!error && !dropdown)
    {
      var Owner=$('input[name="owner"]').val();
      var Owner_other=$('input[name="owner-other"]').val();
      var Company_name=$('input[name="company-name"]').val();
      var Company_contact=$('input[name="company-contact"]').val();
      var Company_lines=$('input[name="company-lines"]').val();
      var Company_speed=$('input[name="company-speed"]').val();
      var Control_system=$('input[name="control-system"]').val();
      var Control_system_other=$('input[name="control-system-other"]').val();
      var Company_sklad=$('input[name="company-sklad"]').val();
      var Sklad_quantity=$('input[name="sklad-quantity"]').val();
      var Sklad_address=$('input[name="sklad-address"]').val();
      var Control_app=$('input[name="control-app"]').val();
      $.ajax({
        type:"POST",
        cache:false,
        url:'/request-voda.php',
        data: {
            sOwner:Owner,
            sOwner_other:Owner_other,
            sCompany_name:Company_name,
            sCompany_contact:Company_contact,
            sCompany_lines:Company_lines,
            sCompany_speed:Company_speed,
            sControl_system:Control_system,
            sControl_system_other:Control_system_other,
            sCompany_sklad:Company_sklad,
            sSklad_quantity:Sklad_quantity,
            sSklad_address:Sklad_address,
            sControl_app:Control_app
        },
        success:function(data) {
          $('#voda-form .form-wrap').html('<h2 style="text-align:center;">Ваша заявка принята</h2>');
        },
        error: function(){
            alert('error!');
          }
      });
    }
    
});