document.addEventListener("DOMContentLoaded", function(event) { 
    let button = document.getElementById('toggle-btn');
    let menu = document.getElementById('main-menu');
    let body = document.body;

    button.addEventListener('click', function(event) {
        body.classList.toggle('menu-open');
        button.classList.toggle('open');
        menu.classList.toggle('open');
    });

});