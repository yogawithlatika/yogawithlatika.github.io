// js/components/video-carousel.js
const videoData = [
  {
    id: "ZcwZFpBXma0",
    title: "Yoga to reduce stress, improve sleep"
  },
  {
    id: "LAYgeIKm8m0",
    title: "Yoga for Back, Neck & Shoulder Pain Relief"
  },
  {
    id: "nwK-a0FJbEU",
    title: "Prenatal Guided Meditation"
  },
  {
    id: "ZuuvIa85QGI",
    title: "Yoga for Knee Stiffness & Pain"
  },
  {
    id: "dB66ygiGTbA",
    title: "10 minute Guided Chanting Meditation"
  }
];

export function initVideoCarousel() {
  const container = document.getElementById('video-carousel');
  if (!container) return;

  container.innerHTML = videoData.map(video => `
        <div class="video-card">
          <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
            <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg" alt="${video.title}" loading="lazy">
            <p>${video.title}</p>
          </a>
        </div>
    `).join('');
}