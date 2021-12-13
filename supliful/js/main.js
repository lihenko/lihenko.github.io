jQuery(document).ready(function($) {
	$('.seals-slider-wrap').slick({
          speed: 300,
          autoplay:true,
          arrows: false,
          dots:false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
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