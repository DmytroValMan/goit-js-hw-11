import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import icon from '../img/bi_x-octagon.svg';

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
    galleryList.insertAdjacentHTML('beforeend', imagesGallary);
    newGallery.refresh();
  }
};

export const addErrorMessage = message => {
  iziToast.show({
    message: message,
    messageColor: '#fafafb',
    messageSize: '16px',
    messageLineHeight: '1.5',
    backgroundColor: '#ef4040',
    theme: 'dark',
    iconUrl: icon,
    position: 'topRight',
  });
};
