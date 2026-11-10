const bouncyImages = ["devinflower.png", "pom.jpg", "g.png"];
const bouncyImage = new Image();
bouncyImage.className = "bouncy-image";
bouncyImage.alt = "";
document.body.append(bouncyImage);

function nextImage() {
	bouncyImage.src = `./assets/bouncy-images/${bouncyImages[Math.floor(Math.random() * bouncyImages.length)]}`;
}

function bounce() {
	bouncyImage.style.left = `${(Math.random() < 0.5 ? 0 : 75) + Math.random() * 25}%`;
	const top = innerHeight * (0.3 + Math.random() * 0.5);
	bouncyImage
		.animate(
			[
				{ transform: "translateY(0)", easing: "ease-out" },
				{ transform: `translateY(-${top}px)`, easing: "ease-in" },
				{ transform: "translateY(0)" },
			],
			{ duration: 3000 },
		)
		.finished.then(nextImage);
}

nextImage();
setInterval(bounce, 5000);
