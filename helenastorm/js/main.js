
$(document).ready(function(){
    $('.fadeInUp').addClass('hidden');
    $('.fadeInUp').viewportChecker({
      classToAdd: 'visible animate__animated animate__fadeInUp',
      offset:150
    });
});

$(document).ready(function(){
    $('.fadeInRight').addClass('hidden');
    $('.fadeInRight').viewportChecker({
      classToAdd: 'visible animate__animated animate__fadeInRight',
      offset:150
    });
});


$(document).ready(function(){
    $('.fadeInLeft').addClass('hidden');
    $('.fadeInLeft').viewportChecker({
      classToAdd: 'visible animate__animated animate__fadeInLeft',
      offset:150
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


