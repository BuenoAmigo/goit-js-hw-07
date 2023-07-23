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
galleryElements.insertAdjacentHTML('afterbegin', galleryMarkup);


galleryElements.addEventListener("click", stopAction);

function stopAction(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
   <img src="${event.target.dataset.source}" width="800" height="600">
  `, {
        onShow: (instance) => console.log('onShow', closeGallery),
        onClose: (instance) => console.log('onClose', closeGallery)
    })
    instance.show(instance)

    galleryElements.addEventListener("keydown", closeGallery);


    function closeGallery(event) {
        if (event.code === "Escape") {
            event.onClose
        }
        else {
            event.onShow
        }
    }
}