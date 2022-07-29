import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleriItem = addImegViport(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleriItem);

function addImegViport(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
</a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  fadeSpeed: "250",
  scrollZoom: "true",
  animationSpeed: "250",
});

// galleryEl.addEventListener("click", onClickImegesItem);

// function onClickImegesItem(ev) {
//   ev.preventDefault();

//   if (ev.target.nodeName !== "IMG") {
//     return;
//   }
//   let lightbox = new SimpleLightbox(".gallery a", {
//     fadeSpeed: "250",
//     scrollZoom: "true",
//     animationSpeed: "250",
//   });

//   lightbox.show();

//   galleryEl.addEventListener("keydown", (ev) => {
//     if (ev.code === "Escape") {
//       lightbox.close();
//     }
//   });
// }
// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);

// const galleryList = document.querySelector(".gallery");

// // добавляємо днамічно  елменти масиву в розмітку

// const list = galleryItems.map(
//   (img) =>
//     `
//      <a class="gallery__item" href=${img.original}>
//        <img
//          class="gallery__image"
//          src=${img.preview}
//          title = ${img.description}
//          alt=${img.description}
//        />
//      </a>
//    `
// );
// galleryList.insertAdjacentHTML("afterbegin", list.join(""));

// // ініціалізуємо SimpleLightbox , та додаємо опції відображення

// let lightbox = new SimpleLightbox(".gallery a", {
//   fadeSpeed: "250",
//   scrollZoom: "true",
//   animationSpeed: "250",
// });
