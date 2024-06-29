document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const contactButton = document.querySelector('.contact-button');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            mobileMenu.classList.remove('open');
        }
    });
});
