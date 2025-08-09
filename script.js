function toggleMenu() {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.toggle('active');
  }
  
  
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelector('.navbar ul');
  const hamburger = document.querySelector('.hamburger');


  
document.addEventListener('click', function(e) {
  if (navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
  });
});

  // Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    // Smooth scroll to the target
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  });
});


// Close menu when a link is clicked
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.remove('active');
  });
});


// Scrolling to top button 
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Smooth scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling
  });
});
  


// Dark mode
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode' , 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode' , null)
}


if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click" , () =>{
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


const modal = document.getElementById('transcriptModal');

modal.addEventListener('click', function(event) {
  // If the clicked target is the modal itself (background), close it
  if (event.target === modal) {
    closeTranscript();
  }
});

const transcriptImages = {
  AL: ['Images/AL_Transcript.jpg'],  // A/L - single image
  HND: [
    'Images/t1.png',
    'Images/t2.png',
    'Images/t3.png',
  ],
  BEng: ['Images/BEng_Transcript.jpg']  // BEng - single image or multiple if you want
};
let currentImageIndex = 0;
let currentImages = [];

function openTranscript(key) {
  currentImages = transcriptImages[key];
  currentImageIndex = 0;

  const modal = document.getElementById('transcriptModal');
  const img = document.getElementById('transcriptImage');
  
  img.src = currentImages[currentImageIndex];
  modal.style.display = 'block';

  // Show or hide nav buttons depending on number of images
  document.getElementById('prevBtn').style.display = currentImages.length > 1 ? 'inline-block' : 'none';
  document.getElementById('nextBtn').style.display = currentImages.length > 1 ? 'inline-block' : 'none';
}

function closeTranscript() {
  document.getElementById('transcriptModal').style.display = 'none';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  document.getElementById('transcriptImage').src = currentImages[currentImageIndex];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('transcriptImage').src = currentImages[currentImageIndex];
}