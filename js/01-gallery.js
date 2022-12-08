import { galleryItems } from "./gallery-items.js";
// Change code below this line
const images = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  images.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="gallery__item">
  <a class="gallery__link" href='https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg'>
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



