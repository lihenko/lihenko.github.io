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

//Close submenus

for (let i = 0; i < dropdownToggles.length; i++) {

    dropdownToggles[i].classList.toggle('omni-menu-open');
    //dropdownToggles[i].nextElementSibling.classList.toggle('menu-collapsed');

}


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

jQuery(document).on('click', 'a[href^="#"]', function (event) {
  if (jQuery(this).attr('href') == '#') {
    return;
  } else {
    event.preventDefault();
    jQuery('html, body').animate({
        scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
    }, 500);
  }
  
});



document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.strategies-tabs-control');
  const tabContents = document.querySelectorAll('.strategies-tabs-wrap > div');

  function clearActiveClasses() {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');

      clearActiveClasses();

      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  if (tabs.length > 0) {
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
  }
});


  document.addEventListener("DOMContentLoaded", function() {
    const niceselect = document.querySelector(".niceselect");
    const selectInput = niceselect.querySelector(".select-input");
    const selectList = niceselect.querySelector(".select-list");
    const hiddenInput = document.querySelector('input[name="ocupation"]');

    selectInput.addEventListener("click", function() {
      niceselect.classList.toggle("active");
    });

    selectList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        const selectedText = event.target.textContent;
        const selectedValue = event.target.getAttribute("data-list");

        selectInput.textContent = selectedText;
        hiddenInput.value = selectedValue;
        niceselect.classList.remove("active");
      }
    });

    document.addEventListener("click", function(event) {
      if (!niceselect.contains(event.target)) {
        niceselect.classList.remove("active");
      }
    });
  });


  document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    let currentSection = '';
  
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
  
      if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight >= window.innerHeight / 2) {
        currentSection = section.getAttribute('id');
      }
  
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && index === sections.length - 1) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  
  
