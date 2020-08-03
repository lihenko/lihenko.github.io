$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $(".main-menu");
    button.on("click", function(){
        $("body").toggleClass("menu-open");
        button.toggleClass("open");
        menu.toggleClass("open");
    });

});

$(document).ready(function(){
    $('li.menu-item-has-children, ul.sub-menu > li').hover(function () {
        if ($('> ul.sub-menu',this).length > 0) {
            $('> ul.sub-menu',this).stop().addClass('open');
        }
        },function () {
            if ($('> ul.sub-menu',this).length > 0) {
                $('> ul.sub-menu',this).stop().removeClass('open');
            }
        });
});