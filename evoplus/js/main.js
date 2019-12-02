$('.portfolio-slider').slick({
    speed: 300,
    autoplay:false,
    arrows: true,
    dots:true,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false
      }
    }
  ]
});

$(document).ready(function(){
  $("#keyses-phone-number").mask("+7(999) 999-99-99");
  $("#info-phone-number").mask("+7(999) 999-99-99");
  $("#price-phone-number").mask("+7(999) 999-99-99");
  $("#questions-phone-number").mask("+7(999) 999-99-99");
  $("#callback-phone-number").mask("+7(999) 999-99-99");
  $("#exit-phone-number").mask("+7(999) 999-99-99");
  $("#getclients-phone-number").mask("+7(999) 999-99-99");
  $("#howmuch-phone-number").mask("+7(999) 999-99-99");
});


$('#tabs a').on('click', function() {
  event.preventDefault();
  var section = $(this).attr('id');
  var links = $('.tabs-link');
  var tabs = $('[class$="-tab"]');
  
  section = '.' + section;

  tabs.hide();
  links.removeClass('active');
  $(this).addClass('active');
  $(section).fadeIn('slow');
  
});


$('.testi-slider').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  dots: false,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    }
  ]
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});




/*$(document).ready(function(){

  $('#exit').exitModal();

});*/



function submitform(formid){
  event.preventDefault();
  var form = '#' + formid;
  var tel = form + ' input[name="tel"]' ;
  var insta = form + ' input[name="insta"]' ;
  var agree = form + ' input[name="agreement"]' ;

  if ($(tel).val() == ""){
      alert('Введите номер телефона');
      return false;
  }

  if (form == '#free-audit'){
      if ($(insta).val() == ""){
        alert('Введите ссылку на свой Instagram');
        return false;
    }
  }

  if ($(agree).is( 
    ":checked")) { 
       var msg = $(form).serialize();
  } else {
    alert("Вы должны приять условия обработки персональных данных");
    return false;
  }
  
  $.ajax({
      type: 'POST',
      url: 'sendcontact.php',
      data: msg,
     });
  window.location.href = "thankyou.html";  
  return false;
};

$(document).ready(function(){
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
 img.removeAttribute('data-src');
  };
});
});