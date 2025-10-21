import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";

const form = document.querySelector('.form');
const imageInput = form.querySelector('input[name="search-text"]');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    showLoader();
    clearGallery();
    if (!imageInput.value.trim()) {
        hideLoader();
        return;    
    }
    showLoader();
    getImagesByQuery(imageInput.value).then(images => {
        if (images) {
            createGallery(images);
        }
    });
        
    hideLoader();
    event.target.reset()
}