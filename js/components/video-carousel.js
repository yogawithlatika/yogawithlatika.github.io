// js/components/video-carousel.js
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