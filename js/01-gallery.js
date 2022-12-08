import { galleryItems } from "./gallery-items.js";
// Change code below this line
const images = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  images.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>`
  );
});

images.addEventListener("click", (e) => {
  event.preventDefault();
  if (e.target.nodeName === "IMG") {
const instance = basicLightbox.create(`
    <img src='${e.target.getAttribute("data-source")}' width="800" height="600">
`);    

    instance.show();
    console.log(e.target.getAttribute("data-source"));
  }
});

document.addEventListener("keyup", e => {
  if (e.key === "Escape") {
      instance.close()  
  }
});



