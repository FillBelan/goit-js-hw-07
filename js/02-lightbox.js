import { galleryItems } from './gallery-items.js';
// Change code below this line

const images = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  images.insertAdjacentHTML(
    "afterbegin",
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
  );
});

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox');

