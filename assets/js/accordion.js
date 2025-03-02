function toggleAccordion(element) {
	// Select all accordion content elements
	const allContent = document.querySelectorAll(".accordion-content");
	const allIcons = document.querySelectorAll(".accordion-header .icon");

	// Loop through all content sections and icons to close them
	allContent.forEach((content) => {
		if (content !== element.nextElementSibling) {
			content.classList.remove("active"); // Close other sections
		}
	});

	allIcons.forEach((icon) => {
		if (icon !== element.querySelector(".icon")) {
			icon.textContent = "+"; // Reset other icons
		}
	});

	// Toggle the clicked section
	const content = element.nextElementSibling;
	const icon = element.querySelector(".icon");

	if (content.classList.contains("active")) {
		content.classList.remove("active"); // Close the current section
		icon.textContent = "+";
	} else {
		content.classList.add("active"); // Open the current section
		icon.textContent = "-";
	}
}
