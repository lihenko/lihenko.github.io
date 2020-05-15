$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $(".main-menu");
    var submenu = $("#primary-menu ul");
    var menuitem = $("#primary-menu > li");

    button.on("click", function(){
        $("body").toggleClass("menu-open");
        button.toggleClass("open");
        menu.toggleClass("open");
    });
    
       

});

$( window ).resize(function(){
    var submenu = $("#primary-menu ul");
    var menuitem = $("#primary-menu > li");

    menuitem.unbind('mouseover');
    menuitem.unbind('mouseleave');

    if ($(window).width() > 991) {
        
          menuitem.mouseover( function(){
                if ($(this).children('ul').length != 0){

                    $(this).children('ul').stop().slideDown();

                    return false;
                }

            });
        

        
          menuitem.mouseleave( function(){

                if ($(this).children('ul').length != 0){

                    $(this).children('ul').stop().hide();
                    return false;
                }

            });
        

           
           
    } else {
        submenu.css('display', 'block');
    }
});

$(document).ready(function(){
    var submenu = $("#primary-menu ul");
    var menuitem = $("#primary-menu > li");
    if ($(window).width() > 991) {
        
          menuitem.mouseover( function(){
                if ($(this).children('ul').length != 0){

                    $(this).children('ul').stop().slideDown();

                    return false;
                }

            });
        

        
          menuitem.mouseleave( function(){

                if ($(this).children('ul').length != 0){

                    $(this).children('ul').stop().hide();
                    return false;
                }

            });
        

           
           
    } else {
        submenu.css('display', 'block');
    }
});
