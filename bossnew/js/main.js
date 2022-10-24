
jQuery(document).ready(function($){
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
    $('#utilities-customers-served').viewportChecker({
	    offset: 100, 
	    repeat: false, 
	    callbackFunction: function(elem, action){
	    	elem.animateNumber(
		  {
		    number: 3000000,
		    numberStep: comma_separator_number_step
		  },
		  2000
		);
	    }, 
	});
	$('#performance-savings').viewportChecker({
	    offset: 100, 
	    repeat: false, 
	    callbackFunction: function(elem, action){
	    	elem.animateNumber(
		  {
		    number: 215000000,
		    numberStep: comma_separator_number_step
		  },
		  2000
		);
	    }, 
	});
	$('#invoices-optimized').viewportChecker({
	    offset: 100, 
	    repeat: false, 
	    callbackFunction: function(elem, action){
	    	elem.animateNumber(
		  {
		    number: 47000000,
		    numberStep: comma_separator_number_step
		  },
		  2000
		);
	    }, 
	});
	$('#data-analyzed').viewportChecker({
	    offset: 100, 
	    repeat: false, 
	    callbackFunction: function(elem, action){
	    	elem.animateNumber(
		  {
		    number: 8,
		    numberStep: comma_separator_number_step
		  },
		  2000
		);
	    }, 
	});
});


jQuery(window).scroll(function(){
  var current_position = jQuery(window).scrollTop();
  jQuery('#values .data-column .value-wrap').each(function(){
    var position = jQuery(this).offset();
    var current_height = jQuery(this).height();
    var title = jQuery('#values .the-boss-way');
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
    autoplaySpeed: 1900,
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
    autoplaySpeed: 2200,
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

jQuery(document).ready(function ($) {
  $('.testimonials-wrap').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2050,
    speed: 300,
    slidesToShow: 1,
  });
});

jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop() >= 500) {
    jQuery('#header').addClass('sticky');
   }
   else {
    jQuery('#header').removeClass('sticky');
   }
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