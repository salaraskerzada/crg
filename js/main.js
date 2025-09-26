// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }








    












    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .member-card, .business-card, .stat-box');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-in');
            }
        });
    };

    // Throttle scroll events
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            animateOnScroll();
        }, 50);
    });

    // Initial check for animations
    animateOnScroll();

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);
            }
        });
    });
});

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}





// Page Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle page load animation
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            opacity: 0;
        }
        body.loaded {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('.feature-card, .member-card, .business-card, .group-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Initialize page-specific functionality
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // console.log(currentPage);
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'commettie.html':
            initializeCommunityPage();
            break;
        case 'economy.html':
            initializeEconomyPage();
            break;
        case 'news.html':
            initializeNewstPage();
            break;
        case 'contact.html':
            initializeContactPage();
                break;
    }
}

function initializeHomePage() {
    // Add any home page specific functionality
    console.log('Home page initialized');
}

function initializeCommunityPage() {
    // Add any community page specific functionality
    console.log('Community page initialized');
}

function initializeEconomyPage() {
    // Add any economy page specific functionality
    console.log('Economy page initialized');
}

function initializeContactPage() {
    // Add any contact page specific functionality
    console.log('Contact page initialized');
}

function initializeNewstPage() {
    // Add any contact page specific functionality
    console.log('News page initialized');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);