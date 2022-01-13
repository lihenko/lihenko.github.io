jQuery(document).ready(function($) {
    let button = $('#toggle-btn');
    let menu = $('.mobile-menu');
    let body = $('body');

    button.click(function(event) {
        body.toggleClass('menu-open');
        button.toggleClass('open');
        menu.toggleClass('open');
    });
});