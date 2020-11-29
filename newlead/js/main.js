function HeightBlock(column) {
    var BlockHeight = 0;
    column.each(function() {
        CurrentHeight = $(this).height();
        if(CurrentHeight > BlockHeight){
            BlockHeight = CurrentHeight;
        }
    });
    column.height(BlockHeight);
        
};

$('.hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: false,
    dots:true
});


$(document).ready(function() {

  const slider = $('.capabilities-slider');
  
  function onSliderAfterChange(event, slick, currentSlide) {
    $(event.target).data('current-slide', currentSlide);
  }
  
  function onSliderWheel(e) {
    var deltaY = e.originalEvent.deltaY,
      $currentSlider = $(e.currentTarget),
      currentSlickIndex = $currentSlider.data('current-slide') || 0;
    
    if (
      // check when you scroll up
      (deltaY < 0 && currentSlickIndex == 0) ||
      // check when you scroll down
      (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
    ) {
      return;
    }

    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $currentSlider.slick('slickPrev');
    } else {
      $currentSlider.slick('slickNext');
    }
  }
  
  slider.each(function(index, element) {
    var $element = $(element);
    // set the length of children in each loop
    // but the better way for performance is to set this data attribute on the div.slider in the markup
    $element.data('slider-length', $element.children().length);
  })
  .slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    arrows: false
  })
  .on('afterChange', onSliderAfterChange)
  .on('wheel', onSliderWheel);

});

$('.our-work-slider').slick({
  arrows: true,
  centerMode: true,
  slidesToShow: 3,
  speed: 300,
  autoplay:true,
  prevArrow: $('.our-work-slider-control .arrow-left'),
  nextArrow: $('.our-work-slider-control .arrow-right'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 1
      }
    },
  ]
});


$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});

