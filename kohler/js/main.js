jQuery(document).ready(function($){
	$('.hero-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows:false,
	  dots:true,
	  autoplay: true,
  	  autoplaySpeed: 2000,
	});
});

jQuery(document).ready(function($){
	$('.ticker-slider').slick({
	  dots: false,
	  arrows:false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerMode: true,
  	  variableWidth: true,
  	  autoplay: true,
  	  autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});


jQuery(document).ready(function($){
	$('.testimonials-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows:false,
	  dots:false,
	  autoplay: true,
  	  autoplaySpeed: 2000,
	});
});


jQuery(document).ready(function($){
	$('.seals-slider').slick({
	  dots: false,
	  arrows:false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerMode: true,
  	  variableWidth: true,
  	  autoplay: true,
  	  autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});

jQuery(document).ready(function($){
	$('.grid').masonry({
	  itemSelector: '.service-wrap',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});
});