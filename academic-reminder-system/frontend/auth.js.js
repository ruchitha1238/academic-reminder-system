/**
 * Anti-Gravity Auth Logic
 */

function switchTab(type) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabs = document.querySelectorAll('.tab');
    const slider = document.querySelector('.tab-slider');

    if (type === 'login') {
        // Update UI
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        slider.style.transform = 'translateX(0)';
    } else {
        // Update UI
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
        slider.style.transform = 'translateX(100%)';
    }
}

function handleSubmit(event, type) {
    event.preventDefault();

    const button = event.target.querySelector('button');
    const originalText = button.innerText;

    // Add loading state
    button.disabled = true;
    button.innerText = type === 'login' ? 'Logging in...' : 'Creating Account...';
    button.style.opacity = '0.7';

    // Simulate API call
    setTimeout(() => {
        alert(`${type === 'login' ? 'Login' : 'Sign Up'} successful! Redirecting to dashboard...`);
        // In a real app, you would redirect here:
        window.location.href = 'index.html';
    }, 1500);
}

// Particle Background Generation
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random opacity
        particle.style.opacity = Math.random() * 0.5;

        // Random floating animation
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;

        particle.style.transition = `transform ${duration}s linear ${delay}s, opacity 2s`;

        container.appendChild(particle);

        // Animate them
        animateParticle(particle);
    }
}

function animateParticle(p) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;

    p.style.transform = `translate(${x}px, ${y}px)`;

    setTimeout(() => animateParticle(p), Math.random() * 10000 + 5000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});
