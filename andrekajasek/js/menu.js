$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $(".mobile-menu");

    button.on("click", function(){
        $("body").toggleClass("menu-open");
        button.toggleClass("open");
        menu.toggleClass("open");
    });
    
       

});



