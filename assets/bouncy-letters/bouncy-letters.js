const title = document.querySelector("h1");
title.innerHTML = [...title.textContent]
	.map((char, i) =>
		char === " " ? " " : `<span style="--i:${i}">${char}</span>`,
	)
	.join("");
