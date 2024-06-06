window.addEventListener('scroll', function() {
    var navigation = document.querySelector('.navigation');
    if (window.scrollY > 0) {
      navigation.style.backgroundColor = '#222'; // Change background color when scrolled
    } else {
      navigation.style.backgroundColor = '#333';
    }
  });
  output:
  // Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add a toggle feature for navigation on small screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');
});
