document.addEventListener('DOMContentLoaded', function () {
    // Reveal service cards
    if (typeof ScrollReveal === 'function') {
        ScrollReveal().reveal('.service-card', {
            distance: '24px',
            origin: 'bottom',
            duration: 420,
            interval: 80,
            easing: 'ease-out'
        });
    }

    // Fallback reveal for service cards
    const services = document.querySelectorAll('.service-card');
    services.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity .42s ease, transform .36s ease';
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, i * 80);
    });
});