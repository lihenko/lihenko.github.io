jQuery(document).ready(function($) {
	let button = $('.faq-arrow');
	let question = $('.faq-question');
	let faq = $('.faq-item');

	button.click(function(event) {
		faq.removeClass('active');
		$(this).parent('.faq-item').toggleClass('active');
	});
	question.click(function(event) {
		faq.removeClass('active');
		$(this).parent('.faq-item').toggleClass('active');
	});
});


jQuery(document).ready(function($) {
	$('.testimonials-wrap').slick({
          speed: 300,
          autoplay:true,
          arrows: true,
          dots:false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              dots:true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots:true
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots:true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});