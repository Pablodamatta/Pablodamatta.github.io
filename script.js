// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Copy email to clipboard
const emailCard = document.getElementById('emailCard');
const emailText = document.getElementById('emailText');
const copyFeedback = document.getElementById('copyFeedback');

if (emailCard && emailText && copyFeedback) {
  emailCard.addEventListener('click', async () => {
    const email = emailText.textContent.trim();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      copyFeedback.classList.add('active');
      setTimeout(() => {
        copyFeedback.classList.remove('active');
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  });
}

// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.style.background = 'rgba(7, 9, 14, 0.92)';
    navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
  } else {
    navbar.style.background = 'rgba(7, 9, 14, 0.75)';
    navbar.style.borderBottomColor = 'var(--border-subtle)';
  }
});
