document.addEventListener("DOMContentLoaded", function() {
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
  
    const testimonialContent = document.getElementById("testimonial-content");
    const clientInfo = document.getElementById("client-info");
    let currentIndex = 0;
  
    function animateTestimonials() {
      testimonialContent.textContent = testimonials[currentIndex].testimonial;
  
      // Combining the name and country information for client info display
      const clientName = testimonials[currentIndex].name;
      const clientCountry = testimonials[currentIndex].country;
      clientInfo.textContent = `${clientName}, ${clientCountry}`;
  
      testimonialContent.classList.add("fade-in");
      clientInfo.classList.add("fade-in");
  
      setTimeout(() => {
        testimonialContent.classList.remove("fade-in");
        clientInfo.classList.remove("fade-in");
        currentIndex = (currentIndex + 1) % testimonials.length;
        animateTestimonials();
      }, 4000); // Change testimonial every 8 seconds (adjust the timing as needed)
    }
  
    animateTestimonials();
  });
  