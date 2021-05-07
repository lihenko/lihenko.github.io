$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $(".main-menu");
    var submenu = $("#primary-menu ul");
    var menuitem = $("#primary-menu li a");

    button.on("click", function(){
        $("body").toggleClass("menu-open");
        button.toggleClass("open");
        menu.toggleClass("open");
    });

   /* menuitem.on("click", function(){
        if ($(this).children('ul').length != 0){
            menuitem.not(this).children('ul').slideUp();
            $(this).children('ul').slideToggle();
            return false;
        }
        $("body").removeClass("menu-open");
        button.removeClass("open");
        menu.removeClass("open");
        });*/

});