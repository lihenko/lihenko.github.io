$(document).ready(function () {
  $('#countdown').countdown({
    until: new Date(2021, 7-1, 12, 12, 0),
    timezone: +8,
  });
});


var position = 0;

$('.main').on('scroll', function () { 
  var roadmap = $('#road-map').position().top;
  var endroad = $('#road-map-end').position().top;
  var scroll = $('#top-bar').position().top;
  if ($(window).width() < 992) {
     if(scroll < position) {
        if (roadmap <= 0 && Math.abs(roadmap) <= Math.abs(endroad) - 40){
          $('#rocket').css({
            top: Math.abs(roadmap) - 40 + 'px',
            transform: 'rotate(0deg)',
          });
         }
    } else {
         if (roadmap <= 0 && Math.abs(roadmap) <= Math.abs(endroad) - 40){
          $('#rocket').css({
            top: Math.abs(roadmap) - 40 + 'px',
            transform: 'rotate(180deg)',
          });
         }
    }
    position = scroll;
  }
  else {
    if(scroll < position) {
        if (roadmap <= 0 && Math.abs(roadmap) <= Math.abs(endroad) - 130){
          $('#rocket').css({
            top: Math.abs(roadmap) - 130 + 'px',
            transform: 'rotate(0deg) translateX(-50%)',
          });
         }
    } else {
         if (roadmap <= 0 && Math.abs(roadmap) <= Math.abs(endroad) - 130){
          $('#rocket').css({
            top: Math.abs(roadmap) - 130 + 'px',
            transform: 'rotate(180deg) translateX(-50%)',
          });
         }
    }
    position = scroll;
  }
   
});

