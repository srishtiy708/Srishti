document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation with better easing
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Mouse follow effect for Hero Glow
    const hero = document.querySelector('#hero');
    const glow = document.querySelector('.hero-bg-glow');

    if (hero && glow) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
            glow.style.opacity = '0.3';
        });

        hero.addEventListener('mouseleave', () => {
            glow.style.opacity = '0.15';
            glow.style.left = '50%';
            glow.style.top = '50%';
        });
    }

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    if (mobileMenu && navLinksList) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinksList.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinksList.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background change on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(3, 0, 20, 0.85)';
            nav.style.backdropFilter = 'blur(15px)';
            nav.style.padding = '0.6rem 2rem';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.03)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.padding = '0.8rem 2rem';
            nav.style.boxShadow = 'none';
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
