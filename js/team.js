document.addEventListener('DOMContentLoaded', function () {
    // Reveal member cards
    if (typeof ScrollReveal === 'function') {
        ScrollReveal().reveal('.member-card', {
            distance: '24px',
            origin: 'bottom',
            duration: 420,
            interval: 80,
            easing: 'ease-out'
        });
    }

    // Fallback simple staggered reveal
    const cards = document.querySelectorAll('.member-card');
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(16px)';
        card.style.transition = 'opacity .42s ease, transform .36s ease';
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, i * 80);
    });
});