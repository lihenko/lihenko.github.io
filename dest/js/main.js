$(document).ready(function () {
  $('#countdown').countdown({
    until: new Date(2021, 5-1, 31, 12, 0),
    timezone: +8,
  });
});


$(document).ready(function(){
  $('#staking-table > tbody > tr').on('click', function(event) {
    event.preventDefault();
    if ($(window).width() < 992) {
       $(this).toggleClass('open');
    }
    else {
       return false;
    }
    
  });
});

$("#staking-table").tablesorter({
    textExtraction: function(node) {
        var attr = $(node).attr('data-sort-value');
        if (typeof attr !== 'undefined' && attr !== false) {
            return attr;
        }
        return $(node).text(); 
    } 
});

$(document).ready(function(){
  $('#connect-wallet-button').on('click', function(event) {
    event.preventDefault();
    $('body').addClass('open');
    $('#connect-wallet').addClass('open');
  });
}); 

$(document).ready(function(){
  $('#connect-wallet .close-button').on('click', function(event) {
    event.preventDefault();
    $('#connect-wallet').removeClass('open');
    setTimeout(function(){ $('body').removeClass('open'); }, 1000);
  });
});

$(document).ready(function(){
  $('.buttons-wrap a').on('click', function(event) {
    event.preventDefault();
    $('body').addClass('open');
    $('#stake-claim').addClass('open');
  });
}); 

$(document).ready(function(){
  $('#stake-claim .close-button').on('click', function(event) {
    event.preventDefault();
    $('#stake-claim').removeClass('open');
    setTimeout(function(){ $('body').removeClass('open'); }, 1000);
  });
});

$(document).ready(function(){
  $('#buy-delfi-button').on('click', function(event) {
    event.preventDefault();
    $('body').addClass('open');
    $('#buy-delfi').addClass('open');
  });
}); 

$(document).ready(function(){
  $('#buy-delfi .close-button').on('click', function(event) {
    event.preventDefault();
    $('#buy-delfi').removeClass('open');
    setTimeout(function(){ $('body').removeClass('open'); }, 1000);
  });
});

$(document).ready(function(){
  $('.top-bar-learn-more').on('click', function(event) {
    event.preventDefault();
    $('body').addClass('open');
    $('#news-window').addClass('open');
  });
}); 

$(document).ready(function(){
  $('#news-window .close-button').on('click', function(event) {
    event.preventDefault();
    $('#news-window').removeClass('open');
    setTimeout(function(){ $('body').removeClass('open'); }, 1000);
  });
});

$(document).ready(function(){
  $('.overlay').on('click', function(event) {
    event.preventDefault();
    $('.modal').removeClass('open');
    setTimeout(function(){ $('body').removeClass('open'); }, 1000);
  });
});

$(document).ready(function(){
    $.protip();
});

function copyToClipboard(element) {
  event.preventDefault();
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(document).ready(function(){
  $('#copy-text').on('click', function(event) {
    event.preventDefault();
    var $temp = $("<input>");
    var element = $(".violet-transparent-button");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).text('copied');
    setTimeout(function(){ 
      $('#copy-text').text('copy address');
    }, 3000);
    
  });
});


$(document).ready(function(){
  var tableheight = $('#staking-table > tbody > tr > td:nth-child(1)').height();
  $('.currency-table').height(tableheight);
});

$(window).resize(function(){
  var tableheight = $('#staking-table > tbody > tr > td:nth-child(1)').height();
  $('.currency-table').height(tableheight);
});


$(window).on('scroll', function() {
    var y_scroll_pos_staking = window.pageYOffset + 500;
    var scroll_pos_staking = $('#staking').offset().top;

    if(y_scroll_pos_staking > scroll_pos_staking) {
        $('.staking-title').addClass('showed')
    }
});

$(document).ready(function() {
     $('#staking-table > tbody > tr > td:nth-child(2) > span').viewportChecker({
        offset: 100,
        callbackFunction: function(elem){
          var number = elem.find('span').text();
          elem.find('span').prop('number', number * .94 ).animateNumber(
          {
            number: number,
          },
          3000
        );
        }
       });
});