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

// images.addEventListener("click", (e) => {
//   event.preventDefault();
//   if (e.target.nodeName === "IMG") {
// let instance = basicLightbox.create(`<img src='${e.target.getAttribute("data-source")}' width="800" height="600">
// `);    

//     instance.show();
//     console.log(e.target.getAttribute("data-source"));
//   }
// });

// document.addEventListener("keyup", e => {
//   if (e.key === "Escape") {
//       instance.close()  
//   }
// });



// let instance = basicLightbox.create(
//   `<img src='${e.target.getAttribute("data-source")}' width="800" height="600">`
// ); 

// images.addEventListener("click", (e) => {
//   event.preventDefault();
//   if (e.target.nodeName === "IMG") {
   
//     instance.show();
//     console.log(e.target.getAttribute("data-source"));
//   }
// });

// document.addEventListener("keyup", e => {
//   if (e.key === "Escape") {
//       instance.close()  
//   }
// });


let instance = null
 
 images.addEventListener("click", (e) => {
 event.preventDefault();
 if (e.target.nodeName !== "IMG") {
 return
 }
 instance = basicLightbox.create( 
 `<img src='${e.target.getAttribute("data-source")}' width="800" height="600">`
 );
 
 instance.show();
 console.log(e.target.getAttribute("data-source"));
 });
 
 document.addEventListener("keyup", e => {
 if (e.key === "Escape") {
 instance.close()
 }
 }); 



// galleryEl.addEventListener('click', showBigImage);

// function showBigImage(evt) {
//   evt.preventDefault()
//   if (evt.target.nodeName != 'IMG') {
//     return
//   }
//   const instance = basicLightbox.create(`<img src = "${evt.target.dataset.source}" width="800" height="600">`, {
//     onShow: () => document.addEventListener('keydown', onEscPress),
//     onClose: () => document.addEventListener('keydown', onEscPress),
//   })

//   instance.show()

//   function onEscPress(evt) {
//     if (evt.code === 'Escape') {
//       instance.close()
//     }
//   }
// }