// js/components/tulaa-features.js
export function initTulaaFeatures() {
    const features = document.querySelectorAll('.feature-card');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let timer;

    if (!features.length) return;

    const showFeature = (index) => {
        features.forEach(f => f.classList.remove('active'));
        indicators.forEach(i => i.classList.remove('active'));

        features[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    };

    const startAutoPlay = () => {
        timer = setInterval(() => {
            showFeature((currentIndex + 1) % features.length);
        }, 4000);
    };

    // Global helper for manual clicking
    window.setFeature = (index) => {
        clearInterval(timer); // Stop auto-play on manual interaction
        showFeature(index);
        startAutoPlay(); // Restart the timer
    };

    startAutoPlay();
}

export function initFloatingWhatsApp() {
    const whatsappBtn = document.getElementById('whatsappFloat');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            whatsappBtn.classList.add('scroll-hide');
        } else {
            whatsappBtn.classList.remove('scroll-hide');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}