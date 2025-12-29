// Smooth scroll animation for skills
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        bar.classList.add('animate');
      });
    }
  });
}, {
  threshold: 0.3
});

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

// Navbar scroll effect with red/green theme
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form submission with enhanced feedback
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const messageDiv = document.getElementById('formMessage');
  const submitButton = e.target.querySelector('button[type="submit"]');
  
  // Disable button during submission
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Simulate sending delay
  setTimeout(() => {
    messageDiv.textContent = '✓ Message sent successfully!';
    messageDiv.className = 'message success';
    messageDiv.style.display = 'block';
    e.target.reset();
    
    // Re-enable button
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
    
    // Hide message after 3 seconds
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 3000);
  }, 800);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const scrolled = window.pageYOffset;
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / 700);
  }
});

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.2
});

// Observe skill items for fade-in animation
document.querySelectorAll('.skill').forEach(skill => {
  animateOnScroll.observe(skill);
});

// Add typing effect to hero subtitle (optional enhancement)
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let index = 0;
  
  const typeWriter = () => {
    if (index < text.length) {
      subtitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing effect after page load
  setTimeout(typeWriter, 500);
}

// Add hover effect to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.transform = 'translateY(-3px) scale(1.05)';
  });
  
  ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.transform = 'translateY(0) scale(1)';
  });
}

// Form input validation with red/green indicators
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
formInputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      input.style.borderColor = '#ff3333';
    } else {
      input.style.borderColor = '#00ff88';
    }
  });
  
  input.addEventListener('focus', () => {
    input.style.borderColor = '#ff3333';
  });
});

// Add active state to navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});