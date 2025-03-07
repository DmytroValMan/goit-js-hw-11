import * as render from './js/render-functions';
import * as pixabay from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import icon from './img/bi_x-octagon.svg';

const form = document.querySelector('.form');
const input = document.querySelector('.request');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();
  render.galleryList.innerHTML = '';
  const inputText = input.value.trim();
  if (!inputText) {
    input.value = '';
    return addErrorMessage('Search field must not be empty. Please, fill it!');
  }
  loader.style.display = 'block';

  pixabay.requestPixabay(inputText).finally(() => {
    loader.style.display = 'none';
    input.value = '';
  });
});

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
