import showcases from "./ asset/showcaseData.js";
import testimonials from "./ asset/testimonialData.js";

document.addEventListener("DOMContentLoaded", function () {
  const showcaseContainer = document.getElementById("carousel");
  showcases.forEach((show) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${show.thumbnail}" alt="${show.title}"><p>${show.title}</p>`;
    div.onclick = () => window.open(show.link, "_blank");
    showcaseContainer.appendChild(div);
  });

  // Auto-scroll logic
  let autoScrollInterval;
  let currentShowcase = 0;

  function autoScroll() {
    showcaseContainer.scrollBy({
      left: showcaseContainer.firstChild.offsetWidth,
      behavior: "smooth",
    });
    currentShowcase = (currentShowcase + 1) % showcases.length;
    if (currentShowcase === 0) {
      setTimeout(
        () => showcaseContainer.scrollTo({ left: 0, behavior: "smooth" }),
        1000
      );
    }
  }

  autoScrollInterval = setInterval(autoScroll, 3000);

  let testimonialIndex = 0;
  const testimonialContainer = document.getElementById("testimonial");

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  function displayTestimonial() {
    if (testimonialContainer && testimonials.length > 0) {
      shuffleArray(testimonials);
      const testimonialDiv = document.createElement("div");
      testimonialDiv.classList.add("testimonial-div");
      testimonialDiv.innerHTML = `
                <p>"${testimonials[testimonialIndex].testimonial}"</p><br>
                <p>- ${testimonials[testimonialIndex].name} (${testimonials[testimonialIndex].country})</p>
            `;

      // Apply initial styles for fade in
      testimonialDiv.style.opacity = 0;
      testimonialDiv.style.transition = "opacity 0.5s ease-in-out";

      // Clear previous content and add new testimonial
      testimonialContainer.innerHTML = "";
      testimonialContainer.appendChild(testimonialDiv);

      // Fade in the testimonial
      setTimeout(() => {
        testimonialDiv.style.opacity = 1;
      }, 100); // Short delay to ensure the transition occurs

      // Update to the next testimonial
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;

      // Set up the next cycle, including fade out
      setTimeout(() => {
        // Start fading out
        testimonialDiv.style.opacity = 0;

        // After fade out, display next testimonial
        setTimeout(displayTestimonial, 500); // Half-second to complete fade out
      }, 4500); // Display each testimonial for 4.5 seconds
    } else {
      console.error("Testimonial container not found or testimonials array is empty.");
    }
  }

  displayTestimonial();

  const whatsappFab = document.getElementById("whatsapp-fab");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      whatsappFab.style.opacity = "1";
      whatsappFab.style.visibility = "visible";
    } else {
      whatsappFab.style.opacity = "0";
      whatsappFab.style.visibility = "hidden";
    }
  };
});
