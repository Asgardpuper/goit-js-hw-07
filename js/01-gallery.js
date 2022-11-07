import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

function createElements() {
	return galleryItems
		.map((el) => {
			return `<div class="gallery__item"><a class="gallery__link" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" data-source="${el.original}"
	alt="${el.description}" />
        </a></div>`;
		})
		.join("");
}
galleryBox.innerHTML = createElements();

function getOriginakImageOnCLick(event) {
	event.preventDefault();
	if (!event.target.classList.contains("gallery__image")) {
		return;
	}
	const image = event.target.dataset.source;
	toggleLightBoxOnClick(image);
}

function toggleLightBoxOnClick(image) {
	const instance = basicLightbox.create(
		`<img width="1400" height="900" src="${image}">`
	);
	instance.show();
	window.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			instance.close();
		}
	});
}
galleryBox.addEventListener("click", getOriginakImageOnCLick);
