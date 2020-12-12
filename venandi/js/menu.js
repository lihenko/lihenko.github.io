$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $("#right-menu");
    var menuitem = $("#right-menu a");

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


