const squishSound = new Audio("./assets/adogyaru.mp3");

document.getElementById("mini").addEventListener("click", (event) => {
	squishSound.currentTime = 0;
	squishSound.play();
	confetti({
		particleCount: 1000,
		spread: 300,
		origin: { x: event.clientX / innerWidth, y: event.clientY / innerHeight },
	});
	event.currentTarget.animate([{ rotate: "0deg" }, { rotate: "360deg" }], {
		duration: 500,
		easing: "ease-out",
		composite: "add",
	});
});
