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

jQuery(document).ready(function($) {
  $('.price-table').slick({
          speed: 300,
          infinite: false,
          autoplay:false,
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
            }
          },
          {
            breakpoint: 1000,
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
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});


const settings = {
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots: false,
  responsive: [
     {
      breakpoint: 999999,
      settings:"unslick"
     },
     {
          breakpoint: 992,
           settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
      },
     {
          breakpoint: 680,
           settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
      },
      {
          breakpoint: 480,
           settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
      }
  ]
};
const sl =  $('.gallery-row').slick(settings);

jQuery(window).on('resize', function() {

   if( jQuery(window).width() < 992 &&  !sl.hasClass('slick-initialized')) {
         jQuery('.gallery-row').slick(settings);
    }
});


jQuery(document).ready(function($) {
  var videobutton = $('#about .video-wrap a');
  var videoplay = $('#about .video-wrap .video-play-button');
  var videostop = $('#about .video-wrap .video-stop-button');

  videostop.hide();

  videobutton.click(function(event) {
    event.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).parent('.video-wrap').find('video').get(0).pause();
      $(this).parent('.video-wrap').find('video').get(0).currentTime = 0;
      $(this).removeClass('active');
      $(this).find(videoplay).show();
      $(this).find(videostop).hide();
    } else {
      $(this).parent('.video-wrap').find('video').get(0).play();
      $(this).addClass('active');
      $(this).find(videoplay).hide();
      $(this).find(videostop).show();
    }
    
  })

})