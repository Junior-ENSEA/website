document.onreadystatechange = function () {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        revealTitles();
        setupHoverTransitions();
    }
};

function revealTitles() {
    // Use ScrollReveal when available, otherwise simple fallback
    if (typeof ScrollReveal === 'function') {
        ScrollReveal().reveal('.prestation-list li', {
            delay: 0,
            duration: 450,
            distance: '14px',
            origin: 'bottom',
            easing: 'ease-out',
            interval: 60,
        });
        // Reveal CTA button as well
        ScrollReveal().reveal('.btn-cta', {
            delay: 120,
            duration: 420,
            distance: '12px',
            origin: 'bottom',
            easing: 'ease-out'
        });
        return;
    }

    // Fallback: basic staggered fade/translate
    const els = document.querySelectorAll('.prestation-list li');
    els.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity .45s ease, transform .35s ease';
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, i * 60);
    });

    // Fallback reveal for CTA
    const cta = document.querySelector('.btn-cta');
    if (cta) {
        cta.style.opacity = 0;
        cta.style.transform = 'translateY(10px)';
        cta.style.transition = 'opacity .42s ease, transform .35s ease';
        setTimeout(() => {
            cta.style.opacity = 1;
            cta.style.transform = 'translateY(0)';
        }, els.length * 60 + 120);
    }
}

function setupHoverTransitions() {
    var gridItemContainers = document.querySelectorAll('.prestation-list li');

    gridItemContainers.forEach(function (container) {
        // make focusable for keyboard users
        if (!container.hasAttribute('tabindex')) container.setAttribute('tabindex', '0');

        container.addEventListener('mouseover', function () {
            this.style.transitionDuration = '0.18s';
            this.style.transform = 'scale(1.02)';
        });

        container.addEventListener('mouseout', function () {
            this.style.transitionDuration = '0.18s';
            this.style.transform = 'scale(1)';
        });

        container.addEventListener('focus', function () {
            this.style.transitionDuration = '0.18s';
            this.style.transform = 'scale(1.02)';
        });

        container.addEventListener('blur', function () {
            this.style.transitionDuration = '0.18s';
            this.style.transform = 'scale(1)';
        });
    });
}