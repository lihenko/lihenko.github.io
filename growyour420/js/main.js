
$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('#to-top').fadeIn('slow');
    }
    else {
        $('#to-top').fadeOut('slow');
    }
});


$('#open-search').click(function () {
    if ($(this).hasClass('open')){
      $('#search-form').submit();
    } else {
      $(this).addClass('open');
      $(this).parent('.search').addClass('open');
      $('.menu-primary-menu-container').addClass('d-none');
      $('#search').focus();
    }
      
});

$('#close-search').click(function () {
    $('#open-search').removeClass('open');
    $('#open-search').parent('.search').removeClass('open');
    $('.menu-primary-menu-container').removeClass('d-none');
});

$('#equipment-button').click(function () {
    event.preventDefault();
    $('#tools-buttons .btn').removeClass('active');
    $(this).addClass('active');
    $('#what-i-need').hide();
    $('#equipment').fadeIn();
    
});

$('#need-button').click(function () {
    event.preventDefault();
    $('#tools-buttons .btn').removeClass('active');
    $(this).addClass('active');
    $('#equipment').hide();
    $('#what-i-need').fadeIn( function() {
          setTimeout(function(){ 

            $('.what-i-need-slider').slick({
                autoplay:true,
                autoplaySpeed: 4000,
                dots: false,
                arrows: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 680,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: true
                    }
                  }
                  // You can unslick at a given breakpoint now by adding:
                  // settings: "unslick"
                  // instead of a settings object
                ]
              });



          }, 100);
              
        });
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