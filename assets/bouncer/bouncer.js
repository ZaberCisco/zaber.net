const bouncers = ["devinflower.png", "pom.jpg", "g.png"];
const bouncer = new Image();
bouncer.className = "bouncer";
bouncer.alt = "";
document.body.append(bouncer);

function bounce() {
  bouncer.src = `./assets/bouncer/${bouncers[Math.floor(Math.random() * bouncers.length)]}`;
  bouncer.style.left = `${(Math.random() < 0.5 ? 0 : 75) + Math.random() * 25}%`;
  const top = innerHeight * (0.3 + Math.random() * 0.5);
  bouncer.animate(
    [
      { transform: "translateY(0)", easing: "ease-out" },
      { transform: `translateY(-${top}px)`, easing: "ease-in" },
      { transform: "translateY(0)" },
    ],
    { duration: 3000 },
  );
}

bounce();
setInterval(bounce, 5000);
