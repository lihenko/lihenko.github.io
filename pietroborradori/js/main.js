

$(document).ready(function() {
  var playing = false;
  
  $('a#volume').click(function() {
      event.preventDefault();
      if (playing == false) {
          document.getElementById('player').play();
          playing = true;

      } else {
        document.getElementById('player').pause();
        playing = false;
      }

  });
  setTimeout(function(){
        document.getElementById('player').play();
        playing = true;
    },100);
});


$(document).ready(function(){
    $('#about .shadow-button').click(function() {
      event.preventDefault();
      var $page = $('html, body');
      $('#about2').show();
      $page.animate({
            scrollTop: $('#about2').offset().top
        }, 600);
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
});

$(document).ready(function() {
  $('.gallery-wrap').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
});

$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    //disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});

$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});

