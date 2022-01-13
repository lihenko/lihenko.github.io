jQuery(document).ready(function($) {
	$('.varieities-slider').slick({
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
              arrows: true,
              dots:false
            }
          },
          {
            breakpoint: 992,
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