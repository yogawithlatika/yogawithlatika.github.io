import showcases from './ asset/showcaseData.js';
import testimonials from './ asset/testimonialData.js';

document.addEventListener("DOMContentLoaded", function () {

  const showcaseContainer = document.getElementById('carousel');
  showcases.forEach(show => {
    const div = document.createElement('div');
    div.innerHTML = `<img src="${show.thumbnail}" alt="${show.title}"><p>${show.title}</p>`;
    div.onclick = () => window.open(show.link, '_blank');
    showcaseContainer.appendChild(div);
  });

  // Auto-scroll logic
  let autoScrollInterval;
  let currentShowcase = 0;

  function autoScroll() {
    showcaseContainer.scrollBy({ left: showcaseContainer.firstChild.offsetWidth, behavior: 'smooth' });
    currentShowcase = (currentShowcase + 1) % showcases.length;
    if (currentShowcase === 0) {
      setTimeout(() => showcaseContainer.scrollTo({ left: 0, behavior: 'smooth' }), 1000);
    }
  }

  autoScrollInterval = setInterval(autoScroll, 3000); // Change interval as needed

  // Stop auto-scroll on user interaction
  showcaseContainer.addEventListener('touchstart', () => {
    clearInterval(autoScrollInterval);
  });

  let testimonialIndex = 0;
  const testimonialContainer = document.getElementById('testimonial');

  function displayTestimonial() {
    if (testimonialContainer) {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('testimonial-div');
      testimonialDiv.innerHTML = `
          <p>"${testimonials[testimonialIndex].testimonial}"</p><br>
          <p>- ${testimonials[testimonialIndex].name}, ${testimonials[testimonialIndex].country}</p>
      `;

      // Clear previous content
      testimonialContainer.innerHTML = '';
      testimonialContainer.appendChild(testimonialDiv);

      // Immediately make the div visible
      testimonialDiv.style.opacity = 1;

      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      setTimeout(displayTestimonial, 5000);
    } else {
      console.error("Testimonial container not found.");
    }
  }

  if (testimonials.length > 0) {
    displayTestimonial();
  } else {
    console.error("Testimonials array is empty.");
  }

  const whatsappFab = document.getElementById('whatsapp-fab');
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      whatsappFab.style.opacity = "1";
      whatsappFab.style.visibility = "visible";
  } else {
      whatsappFab.style.opacity = "0";
      whatsappFab.style.visibility = "hidden";
  }
  };
});
