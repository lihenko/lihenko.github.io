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