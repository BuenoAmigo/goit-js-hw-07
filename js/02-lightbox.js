import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryElements = document.querySelector(".gallery");

function createGalleryItems(items) {
    return items
        .map(
            (item) => `
  <li class= "gallery__item">
  <a class="gallery__link" href =${item.original}>
  <img class="gallery__image" src="${item.preview}" alt ="${item.description}"
  />
</a>
</li>
  `)
        .join("")
}

const galleryMarkup = createGalleryItems(galleryItems);
galleryElements.innerHTML = galleryMarkup;


galleryElements.addEventListener("click", stopAction);

function stopAction(event) {
    blockDefaultAction(event);
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData:
            'alt', captionDelay: 250
    });

    galleryElements.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}

function blockDefaultAction(event) {
    event.preventDefault();
}
