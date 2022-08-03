
jQuery(document).ready(function($) {
    let button = $('#toggle-btn');
    let menu = $('#main-menu');
    let body = $('body');
    let html = $('html');
    let haschildren = $('#main-menu > ul > .menu-item-has-children');
    
    button.click(function(event) {
        body.toggleClass('menu-open');
        html.toggleClass('menu-open');
        button.toggleClass('open');
        menu.toggleClass('open');
    });
    
    haschildren.mouseover(function(event) {
      let windowwidth = $(window).width();
      if(windowwidth > 991){
        $(this).find('.sub-menu').show();
      }
      
    });
    haschildren.mouseleave(function(event) {
      let windowwidth = $(window).width();
      if(windowwidth > 991){
        $(this).find('.sub-menu').hide();
      }
    });
    
      
});

jQuery(document).click(function(event) { 
  var target = jQuery(event.target);
  let button = $('#toggle-btn');
  let menu = $('#main-menu');
  let body = $('body');
  let html = $('html');
  if(!target.closest('#main-menu').length && !target.closest('#header').length){
    body.removeClass('menu-open');
    html.removeClass('menu-open');
    button.removeClass('open');
    menu.removeClass('open');
  }       
});

jQuery(window).resize(function() {
  let windowwidth = $(window).width();
  let submenu = $('#main-menu > ul > .menu-item-has-children .sub-menu');
  
  if(windowwidth > 991){
    submenu.hide();

  } else {
    submenu.show();
  }
});