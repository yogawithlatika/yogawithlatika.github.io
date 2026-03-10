// js/components/tulaa-features.js
export function initTulaaFeatures() {
    const proofElement = document.getElementById('tulaaSocialProof');
    if (!proofElement) return;

    const socialProofs = [
        "Join 5,000+ users healing naturally",
        "Rated 5 stars on Play Store & App Store",
        "Yoga plans for 30+ health needs",
        "100% Private: No account needed",
        "Completely Free: No hidden costs",
        "Meditate, track, and find balance",
        "Sleep better and relax deeply"
    ];

    let currentIndex = 0;

    setInterval(() => {
        // 1. Trigger the fade out and slight slide down
        proofElement.classList.add('fade-out');

        // 2. Wait for the CSS transition to finish (500ms), then swap text
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % socialProofs.length;
            proofElement.innerHTML = `<em>${socialProofs[currentIndex]}</em>`;

            // 3. Remove the class to trigger the fade in and slide up
            proofElement.classList.remove('fade-out');
        }, 500);

    }, 3500); // Cycles every 3.5 seconds
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