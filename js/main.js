// js/main.js
import { initVideoCarousel } from './components/video-carousel.js';
import { initReviewCarousel } from './components/review-carousel.js';
import { initTulaaFeatures, initFloatingWhatsApp } from './components/tulaa-features.js';

document.addEventListener('DOMContentLoaded', () => {
    initVideoCarousel();
    initReviewCarousel();
    initTulaaFeatures();
    initFloatingWhatsApp();

    // App CTA visibility logic
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('hide_app_cta') === 'true') {
        const appBtn = document.getElementById('getAppBtn');
        if (appBtn) appBtn.style.display = 'none';
    }
});