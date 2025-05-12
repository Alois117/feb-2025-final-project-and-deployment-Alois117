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
  