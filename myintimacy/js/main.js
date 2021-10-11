document.addEventListener("DOMContentLoaded", function(event) { 
    let glide = new Glide('#proposals-glide', {
      type: 'carousel',
      autoplay: 6000,
      perView: 3,
      gap: 0,
      breakpoints: {
        1080: {
          perView: 2
        },
        800: {
          perView: 1
        }
      }
    });

    glide.mount();

});

function opentab(evt, tabname) {
  var categories = document.getElementsByClassName('home-category-list-item');
  var products = document.getElementsByClassName('home-top-rated-products-category');
  for (var i = 0; i < categories.length; i++) {
    categories[i].classList.remove("active");
    products[i].classList.remove("active");
  }
  evt.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active");
}