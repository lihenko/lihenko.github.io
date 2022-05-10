jQuery(document).ready(function($) {
    let button = $('#toggle-btn');
    let menu = $('#main-menu');
    let body = $('body');

    button.click(function(event) {
        body.toggleClass('menu-open');
        button.toggleClass('open');
        menu.toggleClass('open');
    });
    $('#main-menu a').click(function(event){
        body.removeClass('menu-open');
        button.removeClass('open');
        menu.removeClass('open');
    });
});