// script.js

// --- DATA CONFIGURATION ---

const videoData = [
    {
        id: "1motM-CZZds",
        title: "Bedtime Yoga for Deep Sleep"
    },
    {
        id: "tESmaA6Noxc",
        title: "Chair Suryanamaskara | Chair Yoga"
    },
    {
        id: "SluQJ81cJEk",
        title: "Yoga Flow Squence | Yoga for Back, Arm & Core Strengthening"
    },
    {
        id: "Nwiey4lbomM",
        title: "Learn how to meditate : Good health & stress relief"
    },
    {
        id: "MSX6EGd1vKo",
        title: "Back Pain Yoga | Lumbar Stretch | Post workout stretch"
    },
    {
        id: "D6Pz36maFVA",
        title: "Yoga for Constipation | Pawanmuktasana | Improve digestion & reduce bloating"
    },
    {
        id: "T9c0JAKZlBs",
        title: "Cat & Cow Breathing | Relief from Back Pain"
    },
    {
        id: "IDt1ZV6E15o",
        title: "Yoga for Back Pain | Bhujangasana | Cobra Pose"
    },
    {
        id: "AbdMmiJ5XdQ",
        title: "Baddhakonasana | Butterfly Pose Benefits | Yoga for Hips & PCOS"
    }
];

const reviewData = [
    {
        name: "Neha Kashyap",
        text: "I joined Latika’s yoga sessions just to lose weight, but she’s helped me transform my entire lifestyle. She’s guided me on everything—what and how I eat, my sleep habits, stress, posture—you name it. Her dedication is unmatched, and the personal care she brings to every session makes all the difference. It’s more than just fitness; it’s a complete mind-body reset with her! Thank You Latika!!"
    },
    {
        name: "payal shand",
        text: "I’ve been attending online prenatal yoga sessions with Latika since the start of my pregnancy, and I couldn’t be happier with the experience. Latika is incredibly attentive and thoughtful, ensuring all practices are safe and tailored to my needs—especially when I mentioned my back pain. She was very careful to avoid any contraindicated practices. What sets her apart is the consistent support she offers outside of the sessions. She sends weekly messages with tips tailored to my progress, checks in on my water intake, and even provided advice for traveling while pregnant. Latika’s guidance has been a wonderful blend of care and expertise, making my prenatal journey healthier and more comfortable. Highly recommend her to anyone looking for a compassionate and skilled yoga teacher!"
    },
    {
        name: "Sejal Kumar",
        text: "Yoga with Latika is something that I highly appreciate being a part of my daily routine. Her simplistic yet effective flow of practice has increased mobility in my joints while strengthening the supporting muscles. Her kind demeanour & patient efforts have been a great motivating factor in enhancing my overall health."
    },
    {
        name: "Apps T",
        text: "It’s been 7 months since I have started my yoga journey with Latika. I had been looking out for a yoga instructor who teaches hatha yoga and I am extremely happy to be trained by Latika. Her passion to ensure wellness is very evident by the way she approaches her students. She puts in sincere efforts to understand the needs and challenges, and then customizes the sessions to help her students achieve goal oriented results. As a result, I personally find myself motivated to work with her to achieve mindful wellbeing and look forward to her classes. I definitely feel taken care under her guidance and have greatly appreciated the knowledge she shares with me to help me improve my health and wellbeing."
    },
    {
        name: "Arushi",
        text: "Latika is one of the very good yoga trainers I have come cross. She puts in the efforts to understand your needs and accordingly gets you doing yoga. She comes with good knowledge and great great attitude! I have been yoga with her for more than 3 months and I everyday look forward to her session!!!! Highly recommend her. Thanks Latika! :)"
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