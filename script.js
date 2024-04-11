document.addEventListener("DOMContentLoaded", function () {
  const showcases = [
    {
      "title": "Chair Suryanamaskara",
      "link": "https://youtu.be/zvyDolcCxIY",
      "local": "images/showcase/chair_suryanamaskar.jpeg",
      "thumbnail": "https://img.youtube.com/vi/zvyDolcCxIY/0.jpg"
    },
    {
      "title": "Yoga for PCOS",
      "link": "https://youtu.be/Z9mdDEo7Leo",
      "local": "images/showcase/pcos.jpeg",
      "thumbnail": "https://img.youtube.com/vi/Z9mdDEo7Leo/0.jpg"
    },
    {
      "title": "Yoga for knee pain",
      "link": "https://youtu.be/SBEz7TldiHs",
      "local": "images/showcase/knee_pain.jpeg",
      "thumbnail": "https://img.youtube.com/vi/SBEz7TldiHs/0.jpg"
    },
    {
      "title": "Yoga for better sleep",
      "link": "https://youtu.be/-BkVO1fV5yw",
      "local": "images/showcase/better_sleep.jpeg",
      "thumbnail": "https://img.youtube.com/vi/-BkVO1fV5yw/0.jpg"
    },
    {
      "title": "Yoga for back pain",
      "link": "https://youtu.be/CnJnX0L_yBk",
      "local": "images/showcase/backpain.jpeg",
      "thumbnail": "https://img.youtube.com/vi/CnJnX0L_yBk/0.jpg"
    },
    {
      "title": "Yoga for migraine",
      "link": "https://youtu.be/FBTEf1AeLEw",
      "local": "images/showcase/migrain.jpeg",
      "thumbnail": "https://img.youtube.com/vi/FBTEf1AeLEw/0.jpg"
    },
    {
      "title": "Yoga for thyroid",
      "link": "https://youtu.be/M42pCotlTJ4",
      "local": "images/showcase/thyroid.jpeg",
      "thumbnail": "https://img.youtube.com/vi/M42pCotlTJ4/0.jpg"
    },
    {
      "title": "Yoga for hypertension",
      "link": "https://youtu.be/TxN0Sr7hSqw",
      "local": "images/showcase/hypertension.jpeg",
      "thumbnail": "https://img.youtube.com/vi/TxN0Sr7hSqw/0.jpg"
    }
  ];

  const testimonials = [
    {
      "testimonial": "Lovely sessions! I was able to manage anxiety of rushing for work. And my body cooperated with my mental pace, thanks to you and the Yoga session. 🤗",
      "name": "Ramalakshmi",
      "country": "India"
    },
    {
      "testimonial": "I feel better with Yoga mentally. Not having any neck pain and back pain..",
      "name": "Srinidhi",
      "country": "India"
    },
    {
      "testimonial": "My friends are surprised that I have shrinked at very short periods",
      "name": "Purany",
      "country": "Singapore"
    },
    {
      "testimonial": "Hey Latika, I can really feel the difference .. I really smiled at critical office situations after so many years 😜😜😜",
      "name": "Deepa",
      "country": "Australia"
    },
    {
      "testimonial": "Doing Yoga definitely increased my flexibility, movement, and breath control that helped me in the marathon! Thank you!",
      "name": "Chandrika",
      "country": "USA"
    },
    {
      "testimonial": "I could feel my strength has improved significantly. I could do planks with ease. All thanks to you. You are the best",
      "name": "Deepthi",
      "country": "India"
    },
    {
      "testimonial": "It is because of you that I believe in Yoga, Thank you 😊",
      "name": "Vineeta",
      "country": "India"
    },
    {
      "testimonial": "Lots of improvement in health issue. Now I am not facing any pain, I feel my body is becoming flexible day by day, and my stamina has increased a lot",
      "name": "Arti",
      "country": "India"
    },
    {
      "testimonial": "I have been to many in-person Yoga classes for 10 years, but yours is the best even though it's online. Your classes are something I look forward to after a long, hard day at work",
      "name": "Rubini",
      "country": "Singapore"
    },
    {
      "testimonial": "I am so happy and doing housework with positive energy and flexibility. Many more thanks to you Latika 💐",
      "name": "Pratibha",
      "country": "India"
    },
    {
      "testimonial": "Thank you for bringing Yoga into my life and encouraging me at every failure",
      "name": "Sireesha",
      "country": "USA"
    },
    {
      "testimonial": "The best decision I took was to switch on to Yoga, and my Yoga coach Latika is not less than a magician. I have undergone a massive transformation in terms of fitness and agility",
      "name": "Dr. Debipreeta",
      "country": "India"
    },
    {
      "testimonial": "Latika is one of the best Yoga instructors I have ever had! I joined her online classes as I live abroad. To me, Latika has been a health coach, a friend, and a gifted Yoga teacher who has helped me deal with many health issues 🙏",
      "name": "Geethanjali",
      "country": "USA"
    },
    {
      "testimonial": "As a beginner to Yoga, I was never convinced of the concept, but I am happy that I started this journey with Latika. To my surprise, this turned out to be very effective with considerable improvements in my overall physical and mental well-being. I am in better shape (lost a few inches) and feel more confident",
      "name": "Nikhil",
      "country": "Dubai"
    },
    {
      "testimonial": "I can give even 10 stars and more because she gives detailed asanas for my problems. I used to have severe back pain where I can't sit for long, but now it's reduced with reduced anger, depression, thank you so much Latika",
      "name": "Lakshmi Devi",
      "country": "India"
    },
    {
      "testimonial": "The way Latika teaches is amazing, her classes are so energizing and filled with enrichment. She knows what she is teaching and she is excellent in it",
      "name": "Madhulika",
      "country": "USA"
    }
  ];

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
