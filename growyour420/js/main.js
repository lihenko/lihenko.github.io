$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});

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