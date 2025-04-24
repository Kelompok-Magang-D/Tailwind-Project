/**
 * Toggles the display of an accordion item and updates its icon.
 * Closes other open accordion items.
 * @param {HTMLElement} headerElement - The header element of the accordion item that was clicked.
 */
function toggleAccordion(headerElement) {
	// Find the parent accordion item
	const currentItem = headerElement.closest(".accordion-item");
	if (!currentItem) return; // Exit if the structure is not as expected

	// Find the content and icon within the current item
	const currentContent = currentItem.querySelector(".accordion__content");
	const currentIcon = headerElement.querySelector(".icon");

	// Select all accordion items to manage closing others
	const allItems = document.querySelectorAll(".accordion-item");

	// Check if the current item is already active
	const isActive = currentContent.classList.contains("active");

	// Close all other accordion items
	allItems.forEach((item) => {
		if (item !== currentItem) {
			const content = item.querySelector(".accordion__content");
			const icon = item.querySelector(".icon");
			if (content && icon) {
				content.classList.remove("active");
				icon.textContent = "+";
				icon.classList.remove("rotate-180"); // Ensure icon is reset
			}
		}
	});

	// Toggle the current item
	if (isActive) {
		currentContent.classList.remove("active");
		currentIcon.textContent = "+";
		currentIcon.classList.remove("rotate-180");
	} else {
		currentContent.classList.add("active");
		currentIcon.textContent = "-"; // Change icon to minus for open state
		currentIcon.classList.add("rotate-180"); // Optional: Rotate icon
	}
}
