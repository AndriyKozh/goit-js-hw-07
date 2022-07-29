import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleriItem = addImegViport(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleriItem);

function addImegViport(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

galleryEl.addEventListener("click", onClickImegesItem);

function onClickImegesItem(ev) {
  ev.preventDefault();

  if (ev.target.nodeName !== "IMG") {
    return;
  }
  let lightbox = new SimpleLightbox(".gallery a", {
    fadeSpeed: "250",
    scrollZoom: "true",
    animationSpeed: "250",
  });

  lightbox.show();

  galleryEl.addEventListener("keydown", (ev) => {
    if (ev.code === "Escape") {
      lightbox.close();
    }
  });
}
