import * as render from './js/render-functions';
import * as pixabay from './js/pixabay-api';

const form = document.querySelector('.form');
const input = document.querySelector('.request');
const loader = document.querySelector('.loader-wrapper');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputText = input.value;
  if (!inputText) {
    return render.addErrorMessage(
      'Search field must not be empty. Please, fill it!'
    );
  }
  loader.style.display = 'flex';

  pixabay.requestPixabay(inputText).finally(() => {
    loader.style.display = 'none';
    input.value = '';
  });
});
