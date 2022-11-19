import { galleryItems } from './gallery-items.js';
// Change code below this line
// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="800" height="600">
// `)
// instance.show()

const galleryItemsContainer = document.querySelector('.galleryItems');

galleryItems.forEach((item) => {
    const imgEl = document.createElement('img');
    imgEl.src = item.src;
    imgEl.alt = item.title;

    galleryItemsContainer.append(imgEl)
})

console.log(galleryItems);
