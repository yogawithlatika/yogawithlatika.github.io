/**
 * main.js
 * Orchestrator for YogaWithLatika & Tulaa Website
 * Manages component initialization and global scroll observers.
 */

import { initVideoCarousel } from './components/video-carousel.js';
import { initReviewCarousel } from './components/review-carousel.js';
import { initTulaaFeatures, initFloatingWhatsApp } from './components/tulaa-features.js';

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Components with simple error catching
    const initialize = (fn, name) => {
        try {
            fn();
        } catch (e) {
            console.error(`Error initializing ${name}:`, e);
        }
    };

    initialize(initVideoCarousel, 'Video Carousel');
    initialize(initReviewCarousel, 'Review Carousel');
    initialize(initTulaaFeatures, 'Tulaa Features');
    initialize(initFloatingWhatsApp, 'WhatsApp FAB');

    // 2. Navigation "Scroll-Spy" & Styling Logic
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
        const scrollY = window.pageYOffset;

        // Add 'scrolled' class to nav for the flush-to-top look
        if (nav) {
            nav.classList.toggle('is-scrolled', scrollY > 50);
        }

        // Active Link Highlighting
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-container a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. App CTA Visibility Logic (URL Parameter Check)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('hide_app_cta') === 'true') {
        const appBtn = document.getElementById('getAppBtn');
        if (appBtn) {
            appBtn.style.display = 'none';
        }
    }

    handleScroll();
});