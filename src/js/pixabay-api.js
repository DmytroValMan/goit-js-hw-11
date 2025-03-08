import axios from 'axios';

import { addErrorMessage, addGallery } from './render-functions';

export const requestPixabay = searchText => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49158274-90b67010582f237611193f20c',
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => {
      addGallery(response.data.hits);
    })
    .catch(error => addErrorMessage(error.message));
};
