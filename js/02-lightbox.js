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
      alt="${description}"
      />
      </a>
      </li>`
    ).join('');
    
}

list.insertAdjacentHTML("beforeend", createMarkupitems(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
gallery.on('show.simplelightbox', function () {   
        
}); 

