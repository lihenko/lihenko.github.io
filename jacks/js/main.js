$(document).ready(function(){

    var updates = $('#updates');
    var partnership = $('#partnership');
    var updatesbutton = $('#updates-button');
    var partnershipbutton = $('#partnership-button');

    updatesbutton.click(function(event) {
        event.preventDefault();
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.form-wrap').removeClass('active');
            $('form').hide();
        } else {
            $('.form-wrap').removeClass('active');
            $('form').hide();
            $('.form-control-column .btn').removeClass('active');
            $(this).addClass('active');
            updates.parent('.form-wrap').addClass('active');
            updates.fadeIn();
            $('html, body').animate({
                        scrollTop: updates.offset().top-150
                    }, 1000);
        }
    });
    partnershipbutton.click(function(event) {
        event.preventDefault();
        $('.form-wrap').removeClass('active');
        $('form').hide();
        $('.form-control-column .btn').removeClass('active');
        $(this).addClass('active');
        partnership.parent('.form-wrap').addClass('active');
        partnership.fadeIn();
        $('html, body').animate({
                    scrollTop: partnership.offset().top-150
                }, 1000);
    });


});