window.addEventListener('scroll', function() {
    var toggleBtn = document.querySelector('.toggle-btn');
    var totopBtn = document.querySelector('#to-top');
    if (window.scrollY > 100) {
        toggleBtn.classList.add('scrolled');
        totopBtn.classList.add('visible');
    } else {
        toggleBtn.classList.remove('scrolled');
        totopBtn.classList.remove('visible');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
  
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - 50; 
  

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 500); 
      }
    });
  });


  document.getElementById("to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });