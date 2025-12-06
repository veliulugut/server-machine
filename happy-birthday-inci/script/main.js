window.addEventListener("load", () => {
  // Attempt to play audio immediately
  const audio = document.querySelector(".song");
  const playPromise = audio.play();

  // Handle browser autoplay policies
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // If blocked, play on first user interaction (touch/click anywhere)
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
      document.body.addEventListener('touchstart', () => {
        audio.play();
      }, { once: true });
    });
  }

  // Trigger effects immediately
  createHeartExplosion();
  startFloatingHearts();
  animationTimeline();
});



// Date and Age animation removed as per request
// document.addEventListener("DOMContentLoaded", function () { ... });

// animation timeline
let slideInterval;

const animationTimeline = () => {
  // split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  // timeline
  const tl = new TimelineMax();

  // Clear existing interval if restarting
  if (slideInterval) clearInterval(slideInterval);

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.9, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.9, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .call(() => {
      const photos = document.querySelectorAll(".slide-photo");
      if (photos.length > 1) {
        let current = 0;
        // Ensure first is visible and others hidden initially
        gsap.set(photos, { opacity: 0, x: 0, xPercent: -50 });
        gsap.set(photos[0], { opacity: 1 });

        slideInterval = setInterval(() => {
          const next = (current + 1) % photos.length;

          // Slide out current to left
          gsap.to(photos[current], {
            duration: 1,
            x: -150,
            opacity: 0,
            ease: "power2.inOut",
            xPercent: -50
          });

          // Prepare next from right and slide in
          gsap.fromTo(photos[next],
            { x: 150, opacity: 0, xPercent: -50 },
            { duration: 1, x: 0, opacity: 1, ease: "power2.inOut", xPercent: -50 }
          );

          current = next;
        }, 3000);
      }
    })
    // Add a separate tween to handle the slideshow loop using GSAP's repeat if preferred, 
    // but setInterval is easier to inject here without disrupting the main timeline flow too much.
    // However, to be cleaner, let's use a GSAP loop on a separate timeline.
    .add("slideshowStart")
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

function createHeartExplosion() {
  for (let i = 0; i < 60; i++) {
    const heart = document.createElement("div");
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.transform = "translate(-50%, -50%)";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.zIndex = "10000";
    heart.style.pointerEvents = "none";
    document.body.appendChild(heart);

    const x = (Math.random() - 0.5) * window.innerWidth * 1.5;
    const y = (Math.random() - 0.5) * window.innerHeight * 1.5;
    const duration = 1.5 + Math.random();

    gsap.to(heart, {
      x: x,
      y: y,
      opacity: 0,
      rotation: Math.random() * 360,
      scale: 0.5,
      duration: duration,
      ease: "power4.out",
      onComplete: () => {
        heart.remove();
      }
    });
  }
}

function startFloatingHearts() {
  const container = document.querySelector(".floating-hearts");
  const hearts = ["❤️", "💖", "💕", "💞", "💓"];

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart-bg");
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 5 + 10 + "s"; // 10-15s float duration

    container.appendChild(heart);

    // Remove after animation finishes to prevent DOM clutter
    setTimeout(() => {
      heart.remove();
    }, 15000);
  }, 500); // Add a new heart every 0.5 seconds
}
