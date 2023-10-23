window.addEventListener('scroll', function() {
    var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var horizontalNavbar = document.querySelector('ul.horizontal-navbar');
    var verticalNavbar = document.querySelector('ul.vertical-navbar');
  
    if (currentScrollPosition > 50) {
      horizontalNavbar.style.opacity = '0';
      horizontalNavbar.style.pointerEvents = 'none';
      verticalNavbar.classList.add('show-navbar');
    } else {
      horizontalNavbar.style.opacity = '1';
      horizontalNavbar.style.pointerEvents = 'auto';
      verticalNavbar.classList.remove('show-navbar');
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
  
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var offsetTop = targetElement.offsetTop;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
  
  //hey there dynamic typing function
const text = "Hey there!";
let index = 0;
let direction = 1;
let typingTimer;
let clearingTimer;
let delay = 150; // Initial delay for typing and clearing (in milliseconds)
const clearingSpeedFactor = 1.8; // Speed factor for clearing text

function typeText() {
  if (direction === 1) {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);
      index++;
    } else {
      direction = -1;
      delay /= clearingSpeedFactor; // Increase the clearing speed
    }
  } else {
    if (index >= 0) {
      document.getElementById("typing-text").textContent = text.substring(0, index);
      index--;
    } else {
      direction = 1;
      delay *= clearingSpeedFactor; // Increase the typing speed
    }
  }

  typingTimer = setTimeout(typeText, delay); // Adjust typing speed here (in milliseconds)
}

function startTypingAnimation() {
  typeText();
}
// Call startTypingAnimation function when needed
startTypingAnimation();
