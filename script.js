// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-hero');
    const scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Calculate experience from November 2020
function calculateExperience() {
    const startDate = new Date('2020-11-01');
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months };
}

// Update experience in the DOM
function updateExperience() {
    const exp = calculateExperience();
    const expElement = document.getElementById('experience-years');
    if (expElement) {
        expElement.textContent = `${exp.years}+ years`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateExperience();
    
    // Add animation classes on scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
