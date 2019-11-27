function HeightBlock(column) {
    var BlockHeight = 0;
    column.each(function() {
        CurrentHeight = $(this).height();
        if(CurrentHeight > BlockHeight){
            BlockHeight = CurrentHeight;
        }
    });
    column.height(BlockHeight);
        
};

$('.portfolio-slider').slick({
    speed: 300,
    autoplay:false,
    arrows: true,
    dots:true
});

$(document).ready(function(){
  $("#keyses-phone-number").mask("+7(999) 999-99-99");
});


$('#tabs a').on('click', function() {
  event.preventDefault();
  var section = $(this).attr('id');
  var links = $('.tabs-link');
  var tabs = $('[class$="-tab"]');
  
  section = '.' + section;

  tabs.hide();
  links.removeClass('active');
  $(this).addClass('active');
  $(section).fadeIn('slow');
  
});




$('.slider-footer-content').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.home-testimonials').slick({
    speed: 300,
    autoplay:true,
    arrows: false,
    dots:true
});



$('.single-slide').slick({
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.nav-slide'
});

$('.nav-slide').slick({
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.single-slide',
  arrows: false,
  dots: false,
  //centerMode: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        vertical: false,
        verticalSwiping: false
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





$(document).ready(function(){

      $(".form_date").datetimepicker({
        startDate: '+1d',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        pickerPosition: 'bottom-left'
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


$('.dropdown.plan').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown.plan').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown.plan .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).text());
    });

function CircleChart(id) {

    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    var percent = canvas.dataset.value;
    canvas.width = 216;
    canvas.height = 216;
    ctx.beginPath();
    ctx.strokeStyle = '#D2E8DD';
    ctx.lineWidth = 1;
    ctx.arc(108, 108, 105, Math.PI / 2, Math.PI * 2.5, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = '#5B9C85';
    ctx.lineWidth = 4;
    ctx.arc(108, 108, 105, Math.PI / 2, (Math.PI / 2) + (Math.PI * 2 * percent / 100), false);
    ctx.stroke();
    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.font = '26px Garamond-Basiligo';
    ctx.fillText(percent + "%", 108, 118);
  };


$(document).ready(function(){
  CircleChart("carbohydrates");
  CircleChart("protein");
  CircleChart("fat");
  });

function CircleChartS(id) {

    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    var value = canvas.dataset.value;
    canvas.width = 130;
    canvas.height = 130;
    ctx.beginPath();
    ctx.strokeStyle = '#D2E8DD';
    ctx.lineWidth = 1;
    ctx.arc(65, 65, 60, Math.PI / 2, Math.PI * 2.5, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.fillStyle = "#59585A";
    ctx.font = '40px Garamond-Basiligo';
    ctx.fillText(value, 65, 78);
  };

  function CircleChartC(id) {

    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    var value = canvas.dataset.value;
    var label = canvas.dataset.label;
    canvas.width = 130;
    canvas.height = 130;
    ctx.beginPath();
    ctx.strokeStyle = '#D2E8DD';
    ctx.lineWidth = 1;
    ctx.arc(65, 65, 60, Math.PI / 2, Math.PI * 2.5, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.fillStyle = "#59585A";
    ctx.font = '40px Garamond-Basiligo';
    ctx.fillText(value, 65, 72);
    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.fillStyle = "#59585A";
    ctx.font = '26px Garamond-Basiligo';
    ctx.fillText(label, 65, 98);
  };

  $(document).ready(function(){
    CircleChartS("friend-invited");
    CircleChartS("cdr");
    CircleChartS("friend-invited-m");
    CircleChartS("cdr-m");
    CircleChartC("ramadan");
    CircleChartC("meals");
    CircleChartC("juice");
  });


$(document).ready(function(){
    var ctx = document.getElementById('WeightChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobre'],
            datasets: [{
                label: 'Weight, kg',
                backgroundColor: '#D2E8DD',
                borderColor: '#3A675A',
                data: [90, 87, 86, 82, 82, 81, 78, 81, 84, 80]
            }]
        },

        // Configuration options go here
        options: {
          maintainAspectRatio: false,
        }
    });
  });


$(document).ready(function(){

    HeightBlock($('.plans-card-body'));

    HeightBlock($('.charts-height'));


});