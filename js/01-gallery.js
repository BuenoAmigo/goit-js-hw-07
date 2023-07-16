import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElements = document.querySelector(".gallery");

function createGalleryItems(items) {
    return items
        .map(
            (item) => `
  <li class= "gallery__item">
  <a class="gallery__link" href =${item.original}>
  <img class="gallery__image" src="${item.preview}" alt ="${item.description}" data-source ="${item.original}"
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
    const instance = basicLightbox.create(`
   <img src="${event.target.dataset.source}" width="800" height="600">
  `)
    instance.show()

    galleryElements.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}

function blockDefaultAction(event) {
    event.preventDefault();
}
