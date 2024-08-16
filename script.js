document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Sticky header effect
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroSection.offsetHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
