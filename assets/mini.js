const squishSound = new Audio("./assets/adogyaru.mp3");

document.getElementById("mini").addEventListener("click", (event) => {
  squishSound.currentTime = 0;
  squishSound.play();
  confetti({
    particleCount: 1000,
    spread: 300,
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
