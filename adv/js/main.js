jQuery(document).ready(function($){
  $('.screens-slider-wrap').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    arrows:true,
    dots:false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 1
        }
      }
    ]
  });
});

jQuery(document).ready(function($){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
      var top_offset = 0;
      if ($(this).attr('href') == '#contact'){
        top_offset = 150;
      }
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - top_offset
        }, 600);
        return false;
    });
});