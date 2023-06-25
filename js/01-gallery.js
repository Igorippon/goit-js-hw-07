import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

function createMarkupitems(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </li>`
    ).join('');
    
}

list.insertAdjacentHTML("beforeend", createMarkupitems(galleryItems));
list.addEventListener('click', handlerClickImg);

function handlerClickImg(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return;
    };

    const imgItem = evt.target;
    const obj = findImgItem(imgItem);

    const instance = basicLightbox.create(createMarkupModal(obj), document.addEventListener("keydown", handlerKeydownEsc));
    instance.show();

    function handlerKeydownEsc(evt) {
        if (evt.key !== 'Escape') {
            return
        }
         instance.close()
         document.removeEventListener("keydown", handlerKeydownEsc)
        
    }
   
}

function findImgItem(item) {
     const  original  = item.dataset.source;
     const currentImg = galleryItems.find(({ original: imgoriginal }) => imgoriginal === original);
     return currentImg
    
}

function createMarkupModal({preview, original, description} = {}) {
     return `<img
      src="${original}"
      alt="${description}"
      />` 
}

