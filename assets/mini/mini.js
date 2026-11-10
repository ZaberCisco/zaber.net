const squishSounds = ["adogyaru.mp3", "adohehe.mp3"].map(
  (file) => new Audio(`./assets/mini/${file}`),
);

document.getElementById("mini").addEventListener("click", (event) => {
  const squishSound = squishSounds[Math.floor(Math.random() * squishSounds.length)];
  squishSound.currentTime = 0;
  squishSound.play();
  confetti({
    particleCount: 100,
    spread: 360,
    origin: { x: event.clientX / innerWidth, y: event.clientY / innerHeight },
  });
  const target = event.currentTarget;
  const timing = { duration: 500, easing: "ease-out" };
  if (Math.random() < 0.25) {
    target.animate(
      {
        transform: [
          "perspective(500px) rotateY(0deg)",
          "perspective(500px) rotateY(360deg)",
        ],
      },
      timing,
    );
  } else {
    target.animate([{ rotate: "0deg" }, { rotate: "360deg" }], {
      ...timing,
      composite: "add",
    });
  }
});
