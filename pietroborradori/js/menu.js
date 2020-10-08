$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $(".main-menu");
    var menuitem = $("#primary-menu li a");

    button.on("click", function(){
        $("body").toggleClass("menu-open");
        button.toggleClass("open");
        menu.toggleClass("open");
    });
    
    menuitem.on("click", function(){
        $("body").removeClass("menu-open");
        button.removeClass("open");
        menu.removeClass("open");
    });  

});



$(document).ready(function(){
    var listen = $('#listen').offset().top - 20;
    var video = $('#video').offset().top - 20;
    var contact = $('#contact').offset().top - 20;

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;

        if(y_scroll_pos > listen) {
            $('.hamburger .icon-bar').addClass('black');
            $('.menu-title').addClass('black');
        } else {
            $('.hamburger .icon-bar').removeClass('black');
            $('.menu-title').removeClass('black');
        }
        if(y_scroll_pos > video){
            $('.hamburger .icon-bar').removeClass('black');
            $('.menu-title').removeClass('black');
        }
        if(y_scroll_pos > contact) {
            $('.hamburger .icon-bar').addClass('black');
            $('.menu-title').addClass('black');
        }
    });
});

$( window ).resize(function(){
    var listen = $('#listen').offset().top - 20;
    var video = $('#video').offset().top -20 ;
    var contact = $('#contact').offset().top -20 ;

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;

        if(y_scroll_pos > listen) {
            $('.hamburger .icon-bar').addClass('black');
            $('.menu-title').addClass('black');
        } else {
            $('.hamburger .icon-bar').removeClass('black');
            $('.menu-title').removeClass('black');
        }
        if(y_scroll_pos > video){
            $('.hamburger .icon-bar').removeClass('black');
            $('.menu-title').removeClass('black');
        }
        if(y_scroll_pos > contact) {
            $('.hamburger .icon-bar').addClass('black');
            $('.menu-title').addClass('black');
        }
    });
});