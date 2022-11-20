import { galleryItems } from './gallery-items.js';

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


const Container = document.querySelector('.gallery');
Container.addEventListener('click', onclick);
function onclick(evt) {
    evt.preventDefault()
    const instance = basicLightbox.create(
        evt.target.dataset.source
    );
    instance.show();

    if (evt.target.nodeName !== 'IMG') {
        return;
    };

    console.log(evt.target.dataset.source);
}


