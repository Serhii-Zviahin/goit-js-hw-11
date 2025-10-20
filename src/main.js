import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, showLoader } from "./js/render-functions";

const myAPI_KEY = "52805725-7d516d36c1804a9cebba9806b";
const form = document.querySelector('.form');
const imageInput = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    showLoader();
    clearGallery();
    if (imageInput.value.length > 0) {
        const queryWord = imageInput.value;
    const option = {
            params: {
                key: myAPI_KEY,
                q: queryWord,                // слово з пошукового поля
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            }
    };
    getImagesByQuery(option);
    } else {
        return;
    }
    
}