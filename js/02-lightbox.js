import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function createMarkup(galleryItems) {
    return galleryItems
        .map(
            ({ preview, original, description }) =>
                `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"  src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
        )
        .join('');
}   

const markup = createMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", markup);


const container = document.querySelector('.gallery');

    new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });

// import * as basicLightbox from 'basiclightbox'

