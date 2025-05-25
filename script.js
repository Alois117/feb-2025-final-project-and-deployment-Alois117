// Hero section background images
const images = [
    "Images/home3.jpg",
    "Images/home2.jpg",
    "Images/home1.jpg"
  ];
  
  let currentIndex = 0;
  const heroSection = document.querySelector('.hero-section');
  
  function changeBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  changeBackground();
  setInterval(changeBackground, 5000); 

  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle between ☰ and ✖
    if (navLinks.classList.contains('active')) {
      menuToggle.innerHTML = '&times;'; 
    } else {
      menuToggle.innerHTML = '&#9776;'; 
    }
  });

  // New Arrivals Section
  document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("Feature coming soon!");
    });
  });

  // Contact Us Section
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    if (!name || !email || !phone || !subject || !message) {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = 'red';
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?\d{7,15}$/;
  
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }
  
    if (!phonePattern.test(phone)) {
      formMessage.textContent = 'Please enter a valid phone number.';
      formMessage.style.color = 'red';
      return;
    }
  
    // Simulate form submission
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';
    this.reset();
  });

  // Blog Section fade-in animation for blog cards when they appear
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".blog-card");
  const options = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  cards.forEach(card => {
    observer.observe(card);
  });
});

  