

$(document).ready(function(){
    var hero = $('#hero').offset().top;
    var about = $('#about').offset().top - 200;
    var values = $('#values').offset().top - 200;
    var whatwedo = $('#what-we-do').offset().top - 200;
    var energy = $('#energy').offset().top - 200;
    var management = $('#management').offset().top - 200;
    var helthcare = $('#helthcare').offset().top - 200;
    var contact = $('#contact').offset().top - 200;

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        $('#right-menu li').removeClass('active');

        if (y_scroll_pos > about && y_scroll_pos < values ){
          $('#right-menu .about').addClass('active');
        }
        if (y_scroll_pos > values && y_scroll_pos < whatwedo){
          $('#right-menu .values').addClass('active');
        }
        if (y_scroll_pos > whatwedo && y_scroll_pos < contact){
          $('#right-menu .what-we-do').addClass('active');
        }
        if (y_scroll_pos > energy && y_scroll_pos < management){
            $('#right-menu .energy').addClass('active');
          }
          if (y_scroll_pos > management && y_scroll_pos < helthcare){
            $('#right-menu .management').addClass('active');
          }
          if (y_scroll_pos > helthcare && y_scroll_pos < contact){
            $('#right-menu .helthcare').addClass('active');
          }
        if (y_scroll_pos > contact){
          $('#right-menu .contact').addClass('active');
        }

    });
});

$(window).resize(function(){
    var hero = $('#hero').offset().top;
    var about = $('#about').offset().top - 200;
    var values = $('#values').offset().top - 200;
    var whatwedo = $('#what-we-do').offset().top - 200;
    var energy = $('#energy').offset().top - 200;
    var management = $('#management').offset().top - 200;
    var helthcare = $('#helthcare').offset().top - 200;
    var contact = $('#contact').offset().top - 200;

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        $('#right-menu li').removeClass('active');

        if (y_scroll_pos > about && y_scroll_pos < values ){
          $('#right-menu .about').addClass('active');
        }
        if (y_scroll_pos > values && y_scroll_pos < whatwedo){
          $('#right-menu .values').addClass('active');
        }
        if (y_scroll_pos > whatwedo && y_scroll_pos < contact){
          $('#right-menu .what-we-do').addClass('active');
        }
        if (y_scroll_pos > energy && y_scroll_pos < management){
            $('#right-menu .energy').addClass('active');
          }
          if (y_scroll_pos > management && y_scroll_pos < helthcare){
            $('#right-menu .management').addClass('active');
          }
          if (y_scroll_pos > helthcare && y_scroll_pos < contact){
            $('#right-menu .helthcare').addClass('active');
          }
        if (y_scroll_pos > contact){
          $('#right-menu .contact').addClass('active');
        }

    });
});

$('section').bind('mousewheel DOMMouseScroll', function(event){
    var $page = $('html, body');
    var scrollCount = null;
    var scroll= null;
    var sectionheight = $(this).outerHeight();
    var windowheight = $(window).height();
    if(sectionheight > windowheight){
            clearTimeout(scroll);
            scroll = setTimeout(function(){scrollCount=0;}, 1500);
            scrollCount=1;
    }
    if(scrollCount) return;
    if ($(window).width() > 991 && sectionheight <= windowheight) {
       if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
          event.preventDefault();
             
            
            $page.animate({
                scrollTop: $(this).prev('section').offset().top
            }, 600);

            clearTimeout(scroll);
            scroll = setTimeout(function(){scrollCount=0;}, 900);
            scrollCount=1;
        }
        else {
          event.preventDefault();
           
            $page.animate({
                  scrollTop: $(this).next('section').offset().top
              }, 600);
            clearTimeout(scroll);
              scroll = setTimeout(function(){scrollCount=0;}, 900);
              scrollCount=1;
        }
    }
    
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