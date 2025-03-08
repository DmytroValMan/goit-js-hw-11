import * as render from './js/render-functions';
import * as pixabay from './js/pixabay-api';

const form = document.querySelector('.form');
const input = document.querySelector('.request');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  render.galleryList.innerHTML = '';
  const inputText = input.value.trim();

  if (!inputText) {
    input.value = '';
    return render.addErrorMessage(
      'Search field must not be empty. Please, fill it!'
    );
  }
  loader.style.display = 'inline-block';

  pixabay.requestPixabay(inputText).finally(() => {
    loader.style.display = 'none';
    input.value = '';
  });
});
