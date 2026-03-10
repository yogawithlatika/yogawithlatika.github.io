// js/components/tulaa-features.js
export function initTulaaFeatures() {
}

export function initFloatingWhatsApp() {
    const whatsappBtn = document.getElementById('whatsappFloat');
    if (!whatsappBtn) return;

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // When scrolling down past 100px, we dim it. 
        // When scrolling up, we highlight it.
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            whatsappBtn.classList.add('scroll-hide');
        } else {
            whatsappBtn.classList.remove('scroll-hide');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });
}