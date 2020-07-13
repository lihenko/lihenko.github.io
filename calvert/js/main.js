$('.property-gallery').slick({
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
});



$(document).ready(function(){
  var checker = $('.property-search-form .checker');
  var spacetype = $('#space-type');
  var size = $('#size');
  var other = $('#other');
  var sizeoption = $('.size-options');
  var spacetypeoptions = $('.space-type-options');
  var otheroptions = $('.other-options');

  checker.on('click', function(){
      $(this).toggleClass('checked');
  });
  spacetype.on('click', function(){
      event.preventDefault();
      spacetypeoptions.slideToggle();
  });
  size.on('click', function(){
      event.preventDefault();
      sizeoption.slideToggle();
  });
  other.on('click', function(){
      event.preventDefault();
      otheroptions.slideToggle();
  });
});