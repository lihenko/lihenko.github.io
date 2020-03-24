$(document).ready(function(){
    var button = $(".toggle-btn");
    var menu = $(".main-menu");
    button.on("click", function(){
        $("body").toggleClass("menu-open");
        button.toggleClass("open");
        menu.toggleClass("open");
    });
});


$('#top').scroll(function () {
    if ($('#top').scrollTop()  > 100) {
        $("#arrow-up").fadeIn();
    } else {
        $("#arrow-up").fadeOut();
    }
});


$("#arrow-up").click(function() {
  $("#top").animate({ scrollTop: 0 }, "slow");
  return false;
});


$('.hero-slider').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    responsive: [
    {
      breakpoint: 510,
      settings: {
        arrows:false
      }
    }
  ]
});



$('.our-partners').slick({
    speed: 300,
    autoplay:true,
    arrows: true,
    dots:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});


const el = document.querySelector(".left-menu");

window.addEventListener("mousemove", (e) => {
var xpos = e.offsetX/10;
var ypos = e.offsetY/10;
  el.style.backgroundPositionX = xpos + "px";
  el.style.backgroundPositionY = ypos + "px";
});

