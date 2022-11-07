import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBox = document.querySelector(".gallery");

function createElements() {
	return galleryItems
		.map((el) => {
			return `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" /></a>`;
		})
		.join("");
}
galleryBox.innerHTML = createElements();

let test = new SimpleLightbox(".gallery a", {
	nav: false,
	captionsData: "alt",
	captionDelay: 250,
});
