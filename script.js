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

function openTranscript() {
  document.getElementById("transcriptModal").style.display = "block";
}

function closeTranscript() {
  document.getElementById("transcriptModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("transcriptModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
