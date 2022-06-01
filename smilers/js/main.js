jQuery(document).ready(function ($) {
  const d = new Date();
  let diff = d.getTimezoneOffset();
  let year = 2022;
  let month = 8;
  let day = 24;
  let hour = 12;
  let minutes = 0;
  let zone = -180;

  if (diff != zone){
    var newhour = hour + ((diff - zone) / 60);

    if (newhour >= 24){
      var newday = day + 1;
      newhour = newhour - 24;
    }
    else if (newhour <= 0){
        var newday = day - 1;
        newhour = 24 + newhour;
    } else {
      newday = day;
    }
      $('.flipper').each(function(){
        var newdate = year.toString() + '-' + month.toString() + '-' + newday.toString() + ' ' + newhour.toString() + ':' + minutes.toString() + ':00';
        $(this).data('datetime', newdate);
      });
    
  } else {
    $('.flipper').each(function(){
        var newdate = year.toString() + '-' + month.toString() + '-' + day.toString() + ' ' + hour.toString() + ':' + minutes.toString() + ':00';
        $(this).data('datetime', newdate);
      });

  }

});

jQuery(document).ready(function ($) {
  $('#countdown').flipper('init');
  $('#countdown2').flipper('init');
});

jQuery(document).ready(function ($) {
  $('.smilers-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
});

jQuery(document).ready(function ($) {
  $('.smilers-media-slider').slick({
    centerMode: true,
    variableWidth: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});  

jQuery(document).ready(function ($) {
  $(".accordion-title").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion-content").slideUp(400);
      $(".accordion-title").removeClass("accordion-active");
      $('.accordion-arrow').removeClass('accordion-rotate');
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.accordion-arrow',this).toggleClass('accordion-rotate');
  });
});


jQuery(window).scroll(function(){
  jQuery('.how-it-works-line-column ul li').each(function(){
    var current_position = jQuery(window).scrollTop();
    var position = jQuery(this).position();
    var current_height = jQuery(this).height();
    var title = jQuery('.how-it-works-title-column h2');
    var titleposition = jQuery('.how-it-works-title-column').position();
    if (current_position + 400 >= position.top && current_position + 400 - position.top < current_height){
      jQuery(this).addClass('visible');
      if (jQuery(window).width() >= 1250){
        title.css('top', position.top - titleposition.top + 'px');
      }
    } else {
      jQuery(this).removeClass('visible');
    }
  });
});

jQuery(document).ready(function($){
    var waitlist = $('.waitlist-form-wrap form');

    waitlist.submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var actionUrl = 'https://assets.mailerlite.com/jsonp/60513/forms/56528599826564694/subscribe';

    var email = form.find('input[type=email]').val();
    var error = form.find('.email-error');

    error.text('');

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    if (!email){
      error.text('Email is required to fill');
    } else if(isEmail(email)){
      $.ajax({
          type: "POST",
          url: actionUrl,
          data: form.serialize(), // serializes the form's elements.
          success: function(data)
          {
            if(data.success){
              form.html('<div class="success-send">Thank you for submit!</div>');
            } else {
              form.html('<div class="error-send">Subscribe error, please contact website admin!</div>');
            }
          }
      });
    } else {
      error.text('Email is invalid');
    }
    
  });
});


jQuery(document).ready(function($){
    var waitlist = $('.footer-form-wrap form');

    waitlist.submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var actionUrl = 'https://assets.mailerlite.com/jsonp/60513/forms/56528599826564694/subscribe';

    var email = form.find('input[type=email]').val();
    var error = form.find('.email-error');

    error.text('');

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    if (!email){
      error.text('Email is required to fill');
    } else if(isEmail(email)){
      $.ajax({
          type: "POST",
          url: actionUrl,
          data: form.serialize(), // serializes the form's elements.
          success: function(data)
          {
            if(data.success){
              form.html('<div class="success-send">Thank you for submit!</div>')
            } else {
              form.html('<div class="error-send">Subscribe error, please contact website admin!</div>');
            } 
          }
      });
    } else {
      error.text('Email is invalid');
    }
    
  });
});

jQuery(document).ready(function($){
    var waitlist = $('.pitch-deck-form-wrap form');

    waitlist.submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var actionUrl = 'https://assets.mailerlite.com/jsonp/60513/forms/56596649978365923/subscribe';

    var email = form.find('input[type=email]').val();
    var error = form.find('.email-error');

    error.text('');

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    if (!email){
      error.text('Email is required to fill');
    } else if(isEmail(email)){
      $.ajax({
          type: "POST",
          url: actionUrl,
          data: form.serialize(), // serializes the form's elements.
          success: function(data)
          {
            if(data.success){
              form.html('<div class="success-send">Thank you for submit!</div>')
            } else {
              form.html('<div class="error-send">Subscribe error, please contact website admin!</div>');
            }
          }
      });
    } else {
      error.text('Email is invalid');
    }
    
  });
});

jQuery(document).ready(function($){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});