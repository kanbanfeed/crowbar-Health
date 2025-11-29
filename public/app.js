// Animated Counter Function
function animateCounter(element, target, duration = 2000) {
    if (!element) return;
    
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            element.classList.add('count-animate');
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

// Format numbers with commas
function formatNumber(num) {
    if (num >= 1000) {
        return num.toLocaleString();
    }
    return num.toString();
}

// Fetch and display health stats
async function loadHealthStats() {
    try {
        const response = await fetch('/api/health-stats');
        const data = await response.json();
        
        // Animate counters with delay
        setTimeout(() => animateCounter(document.getElementById('activeDoctors'), data.activeDoctors), 200);
        setTimeout(() => animateCounter(document.getElementById('patientsHelped'), data.patientsHelped), 400);
        setTimeout(() => animateCounter(document.getElementById('appointmentsToday'), data.appointmentsToday), 600);
        setTimeout(() => animateCounter(document.getElementById('satisfactionRate'), data.satisfactionRate), 800);
        setTimeout(() => animateCounter(document.getElementById('telemedSessions'), data.telemedSessions), 1000);
        setTimeout(() => animateCounter(document.getElementById('prescriptionsFilled'), data.prescriptionsFilled), 1200);
    } catch (error) {
        console.error('Error loading health stats:', error);
        // Fallback values
        const elements = {
            activeDoctors: '120',
            patientsHelped: '5,000',
            appointmentsToday: '45',
            satisfactionRate: '98',
            telemedSessions: '320',
            prescriptionsFilled: '890'
        };
        Object.keys(elements).forEach(key => {
            const el = document.getElementById(key);
            if (el) el.textContent = elements[key];
        });
    }
}

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Create Particle Background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

// Create Rolling Bubbles
function createRollingBubbles() {
    const bubblesContainer = document.getElementById('bubbles-container');
    if (!bubblesContainer) return;
    
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 120 + 40; // 40px to 160px
        const left = Math.random() * 100; // Random horizontal position
        const duration = Math.random() * 15 + 15; // 15s to 30s
        const delay = Math.random() * 5; // 0s to 5s delay
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        
        // Random opacity for depth - more visible on light background
        bubble.style.opacity = Math.random() * 0.5 + 0.3;
        
        // Add some variation in colors - more vibrant for visibility
        const colorVariation = Math.random();
        if (colorVariation > 0.7) {
            bubble.style.background = 'radial-gradient(circle, rgba(20, 184, 166, 0.5), rgba(6, 182, 212, 0.4))';
            bubble.style.border = '2px solid rgba(20, 184, 166, 0.3)';
        } else if (colorVariation > 0.4) {
            bubble.style.background = 'radial-gradient(circle, rgba(5, 150, 105, 0.5), rgba(20, 184, 166, 0.4))';
            bubble.style.border = '2px solid rgba(5, 150, 105, 0.3)';
        } else {
            bubble.style.background = 'radial-gradient(circle, rgba(34, 211, 153, 0.5), rgba(5, 150, 105, 0.4))';
            bubble.style.border = '2px solid rgba(34, 211, 153, 0.3)';
        }
        
        bubblesContainer.appendChild(bubble);
    }
}

// Add mouse tracking effect to cards
function addCardMouseTracking() {
    const cards = document.querySelectorAll('.card-hover');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Parallax Effect
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.float-animation');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('shadow-2xl');
    } else {
        navbar.classList.remove('shadow-2xl');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});

// Add hover effects to cards
document.querySelectorAll('.hover-scale').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// Animate heart rate graph
function animateHeartRate() {
    const heartPath = document.querySelector('#home svg path[stroke="#059669"]');
    if (!heartPath) return;
    
    let pathLength = heartPath.getTotalLength();
    heartPath.style.strokeDasharray = pathLength;
    heartPath.style.strokeDashoffset = pathLength;
    
    const animate = () => {
        heartPath.style.strokeDashoffset = 0;
        heartPath.style.transition = 'stroke-dashoffset 2s ease-in-out';
    };
    
    setTimeout(animate, 500);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    loadHealthStats();
    createParticles();
    createRollingBubbles();
    animateHeartRate();
    addCardMouseTracking();
    
    // Initial reveal check
    revealOnScroll();
    
    // Scroll events
    window.addEventListener('scroll', () => {
        revealOnScroll();
        parallaxEffect();
    });
    
    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('#services .reveal');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Continuously create new bubbles for infinite effect
    setInterval(() => {
        const bubblesContainer = document.getElementById('bubbles-container');
        if (bubblesContainer && bubblesContainer.children.length < 20) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            const size = Math.random() * 120 + 40;
            const left = Math.random() * 100;
            const duration = Math.random() * 15 + 15;
            
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.animationDuration = `${duration}s`;
            bubble.style.opacity = Math.random() * 0.5 + 0.3;
            
            // Add color variation
            const colorVariation = Math.random();
            if (colorVariation > 0.7) {
                bubble.style.background = 'radial-gradient(circle, rgba(20, 184, 166, 0.5), rgba(6, 182, 212, 0.4))';
                bubble.style.border = '2px solid rgba(20, 184, 166, 0.3)';
            } else if (colorVariation > 0.4) {
                bubble.style.background = 'radial-gradient(circle, rgba(5, 150, 105, 0.5), rgba(20, 184, 166, 0.4))';
                bubble.style.border = '2px solid rgba(5, 150, 105, 0.3)';
            } else {
                bubble.style.background = 'radial-gradient(circle, rgba(34, 211, 153, 0.5), rgba(5, 150, 105, 0.4))';
                bubble.style.border = '2px solid rgba(34, 211, 153, 0.3)';
            }
            
            bubblesContainer.appendChild(bubble);
            
            // Remove bubble after animation
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, duration * 1000);
        }
    }, 2000);
});

