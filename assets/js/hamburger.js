// Hamburger
const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger__menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	hamburgerMenu.classList.toggle("active");
});

// Close menu when clicking on menu links
document.querySelectorAll(".hamburger__menu a").forEach((link) =>
	link.addEventListener("click", () => {
		hamburger.classList.remove("active");
		hamburgerMenu.classList.remove("active");
	})
);
