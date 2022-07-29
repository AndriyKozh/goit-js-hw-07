import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleriItem = addImegViport(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleriItem);

function addImegViport(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryEl.addEventListener("click", onClickImegesItem);

function onClickImegesItem(ev) {
  ev.preventDefault();

  if (ev.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${ev.target.dataset.source}" width="800" height="600">

`);

  instance.show();

  galleryEl.addEventListener("keydown", (ev) => {
    if (ev.code === "Escape") {
      instance.close();
    }
  });
}
