// js/components/review-carousel.js
const reviewData = [
    {
        name: "Swapna P",
        text: "Latika's yoga classes are exceptional. She brings both expertise and passion to create a welcoming environment with clear instructions and a calming presence. She motivates me to practice regularly."
    },
    {
        name: "Vrinda Agrawal",
        text: "I have been doing Prenatal yoga classes with Latika for weeks now and would highly recommend her classes. She’s extremely skilled, patient, easy to follow and curates the whole session around individual needs."
    },
    {
        name: "Shamily Naidu",
        text: "Excellent guide. Helped me overcome back pain and weight reduction. Very much dedicated and focused on the client's goals. Thank you Latika :)"
    },
    {
        name: "Akansha Roy",
        text: "Very experienced and knowledgeable. Understands your concerns and targets it with gentle steps. I can see so much progress in just 3-4 weeks of classes. Totally recommend for anyone and everyone."
    },
    {
        name: "Shashank Awasthi",
        text: "She has highly personalized the practice based on the health conditions that I have. The practice has helped me manage stress as well. She has been very accommodative with the session scheduling, which works well for my busy schedule."
    },
    {
        name: "Poonguzhali Deep",
        text: "Latika has immense knowledge. She spends a lot of time understanding individual needs. I was facing neck pain and stress, and within 2 months I am already seeing drastic improvements along with weight reduction."
    }
];


export function initReviewCarousel() {
    const container = document.getElementById('review-wrapper');
    if (!container) return;

    container.innerHTML = reviewData.map((review, index) => `
        <div class="review-slide ${index === 0 ? 'active' : ''}">
            <div class="review-content">
                <p>“${review.text}”</p>
            <div style="color: #dcb163; font-size: 1.2rem; margin-bottom: 0.5rem;">
                ⭐⭐⭐⭐⭐
            </div>
            <p>– ${review.name}</p>
      </div>
    </div>
    `).join('');

    let currentIndex = 0;
    const slides = document.querySelectorAll(".review-slide");

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 7000);
    }
}