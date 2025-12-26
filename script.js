// script.js

// --- DATA CONFIGURATION ---
const videoData = [
    {
        id: "1motM-CZZds",
        title: "Bedtime Yoga for Deep Sleep"
    },
    {
        id: "ZcwZFpBXma0",
        title: "Yoga to reduce stress, improve sleep"
    },
    {
        id: "rWDD0TWZXSI",
        title: "Yoga for Long Sitting Hours"
    },
    {
        id: "LAYgeIKm8m0",
        title: "Yoga for Back, Neck & Shoulder Pain Relief"
    },
    {
        id: "ZjNRm6jCN7U",
        title: "Chair Suryanamaskara | Desk Yoga"
    },
    {
        id: "WxcFTNNo3Ro",
        title: "Yoga Stretches for Tech Neck & Upper Back Tension"
    },
    {
        id: "kPH9Lo2oMj4",
        title: "Yoga for Neck & Cervical Pain Relief"
    },
    {
        id: "ZuuvIa85QGI",
        title: "Yoga to Stop Morning Knee Stiffness & Knee Pain"
    }
];

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


// --- DISPLAY LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
    renderReviews();
    startReviewCarousel();
});

function renderVideos() {
    const container = document.getElementById('video-carousel');
    if (!container) return;

    container.innerHTML = videoData.map(video => `
    <div class="video-card">
      <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
        <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg"
             alt="${video.title}"
             loading="lazy">
        <p>${video.title}</p>
      </a>
    </div>
  `).join('');
}

function renderReviews() {
    const container = document.getElementById('review-wrapper');
    if (!container) return;

    container.innerHTML = reviewData.map((review, index) => `
    <div class="review-slide ${index === 0 ? 'active' : ''}">
      <div class="review-content">
        <p>“${review.text}”</p>
        <p> ⭐⭐⭐⭐⭐<br>– ${review.name} </p>
      </div>
    </div>
  `).join('');
}

function startReviewCarousel() {
    let currentIndex = 0;
    // Note: We query strictly after rendering
    const slides = document.querySelectorAll(".review-slide");

    if (slides.length <= 1) return;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === n);
        });
    }

    // Initial show
    showSlide(currentIndex);

    // Auto-advance every 7 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 7000);
}

/* Tulaa Feature Carousel Logic */
document.addEventListener('DOMContentLoaded', function () {
    const features = document.querySelectorAll('.feature-card');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let carouselInterval;

    function showFeature(index) {
        // Remove active class from all
        features.forEach(f => f.classList.remove('active'));
        indicators.forEach(i => i.classList.remove('active'));

        // Add active class to current
        features[index].classList.add('active');
        indicators[index].classList.add('active');

        currentIndex = index;
    }

    function nextFeature() {
        let nextIndex = (currentIndex + 1) % features.length;
        showFeature(nextIndex);
    }

    // Start auto-rotation
    function startCarousel() {
        carouselInterval = setInterval(nextFeature, 3500); // Rotates every 3.5 seconds
    }

    // Allow manual clicking of dots
    window.setFeature = function (index) {
        clearInterval(carouselInterval); // Stop auto-rotation if user interacts
        showFeature(index);
        startCarousel(); // Restart timer
    };

    // Initialize
    if (features.length > 0) {
        startCarousel();
    }
});

/* Floating WhatsApp Button Logic */
document.addEventListener('DOMContentLoaded', function () {
    const whatsappBtn = document.getElementById('whatsappFloat');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Logic: If current scroll is greater than last scroll (Moving Down) -> Hide
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            whatsappBtn.classList.add('scroll-hide');
        } else {
            // Moving Up -> Show
            whatsappBtn.classList.remove('scroll-hide');
        }

        // Update last scroll position (prevent negative values)
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});
/* Hide 'Get Free App' Button based on URL Parameter */
document.addEventListener('DOMContentLoaded', function () {
    // 1. Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // 2. Check if 'hide_app_cta' is present and true
    // Example URL: https://yogawithlatika.com?hide_app_cta=true
    if (urlParams.get('hide_app_cta') === 'true') {

        const appBtn = document.getElementById('getAppBtn');

        // 3. Hide the button if it exists
        if (appBtn) {
            appBtn.style.display = 'none';
        }
    }
});