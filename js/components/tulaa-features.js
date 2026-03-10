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

}