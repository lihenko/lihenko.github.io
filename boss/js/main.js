jQuery(window).scroll(function(){
  var current_position = jQuery(window).scrollTop();
  jQuery('#values .data-column .value-wrap').each(function(){
    var position = jQuery(this).offset();
    var current_height = jQuery(this).height();
    var title = jQuery('#values h2');
    var titleposition = jQuery('#values .title-column').offset();
    if (current_position + 400 >= position.top && current_position + 400 - position.top < current_height + 60){
      jQuery(this).addClass('visible');
      if (jQuery(window).width() >= 1320){
        title.css('top', position.top - titleposition.top - 30 + 'px');
      }
    } else {
      jQuery(this).removeClass('visible');
    }
  });
});

jQuery(document).ready(function ($) {
  $('.slogan-slide-wrap').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
  });
});

jQuery(document).ready(function ($) {
  $('.services-solution-slider-wrap').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows:false
        }
      }
    ]
  });
});

jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop() >= 500) {
    jQuery('#sticky-header').addClass('sticky');
   }
   else {
    jQuery('#sticky-header').removeClass('sticky');
   }
});


function appcolumn(){
  var appcolumn = jQuery('.application-chart-details-column');
  var height = 1;
  appcolumn.css('height', 'auto');
  appcolumn.each(function(){
    if(appcolumn.height() > height){
      height = appcolumn.height();
    }

   });
   appcolumn.height(height);
}

jQuery(document).ready(function () {  
  if (jQuery(window).width() >= 992) {
   appcolumn();
  }
});


jQuery(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        if (jQuery(window).width() >= 992) {
         appcolumn();
        } else {
          jQuery('.application-chart-details-column').css('height', 'auto');
        }
    }, 500);
});

jQuery("#contact-form form").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    var form = jQuery(this);
    var input = form.find('input');
    var name = form.find('input[name="name"]');
    var email = form.find('input[name="email"]');
    var phone = form.find('input[name="phone"]');
    var message = form.find('textarea[name="message"]');

    input.css('border-color', 'transparent');


    if (name.val() == ''){
      name.css('border-color', 'red');
      return;
    }

    if (email.val() == ''){
      email.css('border-color', 'red');
      return;
    }

    if( !isEmail(email.val())) { 
      email.css('border-color', 'red');
      return;
    }

    if (phone.val() == ''){
      phone.css('border-color', 'red');
      return;
    }

    if (message.val() == ''){
      message.css('border-color', 'red');
      return;
    }
    
    jQuery.ajax({
        type: "POST",
        url: 'sendmail.php',
        data: form.serialize(), // serializes the form's elements.
        success: function(data)
        {

            form.html('<h3 class="text-red">Your message has been sent</h3>');

        }
    });
    
});