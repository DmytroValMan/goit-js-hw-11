import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { addErrorMessage } from '../main';

export const galleryList = document.querySelector('.gallery');

export const newGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

export const addGallery = imgObject => {
  if (imgObject.length === 0) {
    addErrorMessage(
      'Sorry, there are no images matching your search query. Please, try again!'
    );
  } else {
    const imagesGallary = imgObject
      .map(
        item =>
          `<li class="gallery-item"><a class="gallery-link" href="${item.largeImageURL}"><img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}" width="640" height="360"/></a>
        <div class="gallery-item-wrapper">
        <p class="galery-item-propety">Likes<span class="galery-item-value">${item.likes}</span></p>
        <p class="galery-item-propety">Views<span class="galery-item-value">${item.views}</span></p>
        <p class="galery-item-propety">Comments<span class="galery-item-value">${item.comments}</span></p>
        <p class="galery-item-propety">Downloads<span class="galery-item-value">${item.downloads}</span></p>
        </div>
        </li>`
      )
      .join('');
    galleryList.innerHTML = imagesGallary;
    newGallery.refresh();
  }
};
