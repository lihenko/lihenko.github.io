//libraries like jquery etc

// Menu Toggles
function stopScroll (event) {
    event.preventDefault();
    return false;
}

const body = document.body;
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.omni-mobile-menu');
const menuLinks = document.querySelectorAll('.omni-mobile-menu a');
const dropdownToggles = document.querySelectorAll('.omni-dropdown-toggle');
const toggleBtn = document.querySelector('.toggle-btn');

function toggleMenu () {
    body.classList.toggle('menu-open');
    body.removeEventListener('touchmove', stopScroll);
    hamburger.classList.toggle('active');

    if (body.classList.contains('menu-open')) {
        body.addEventListener('touchmove', stopScroll);
    }
}

function closeMenu () {
    if (body.classList.contains('menu-open')) {
        body.removeEventListener('touchmove', stopScroll);
        body.classList.remove('menu-open');
        hamburger.classList.remove('active');
    }
}

mobileMenu.addEventListener('touchmove', function (event) {
    event.stopPropagation();
});

// Submenus
for (let i = 0; i < dropdownToggles.length; i++) {
    dropdownToggles[i].addEventListener('click', function () {
        let toggle = this;
        let menu = this.nextElementSibling;
        toggle.classList.toggle('omni-menu-open');
        menu.classList.toggle('menu-collapsed');
    });
}

// Close Menu on Links With '#'
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        if (this.href.indexOf('#') === -1) {
            return;
        }
        closeMenu();
    });
}

// Toggle the menu
toggleBtn.addEventListener('click', toggleMenu);

// Close menu on resize
window.addEventListener('resize', closeMenu);

//main.js file




// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);


function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

jQuery('.input-file input[type=file]').on('change', function(){
	let file = this.files[0];
	jQuery(this).closest('.input-file').find('.input-file-name').html(file.name);
});

jQuery(document).on('click', 'a[href^="#"]', function (event) {
  if (jQuery(this).attr('href') == '#') {
    return;
  } else {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: jQuery($.attr(this, 'href')).offset().top
    }, 500);
  }
  
});
