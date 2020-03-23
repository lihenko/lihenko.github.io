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
    arrows: true,
    dots:false,
    responsive: [
    {
      breakpoint: 510,
      settings: {
        arrows:false
      }
    }
  ]
});



$('.our-partners').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
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
        arrows: false,
      }
    }
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





$(document).ready(function(){

    HeightBlock($('.plans-card-body'));

    HeightBlock($('.charts-height'));


});