document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Space for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background change on scroll
    const header = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(3, 0, 20, 0.8)';
            header.style.padding = '0.5rem 2rem';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.05)';
            header.style.padding = '0.8rem 2rem';
        }
    });

    // Add staggered delay for reveal items in grid elements
    document.querySelectorAll('.project-grid, .skills-grid').forEach(grid => {
        const items = grid.querySelectorAll('.reveal');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
});
