import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const imageInput = form.querySelector('input[name="search-text"]');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const queryWord = imageInput.value;
    if (!queryWord.trim().length) {   
        iziToast.show({
            message: 'Input field is empty',
            position: `topRight`,
            messageColor: '#fffc3aff',
            backgroundColor: "#ec3939",
        });
        hideLoader();
        return; 
    }

    clearGallery();
    showLoader();
    
    getImagesByQuery(queryWord).then(images => {
        if (images) {
            createGallery(images);
        }
    })
        .catch(error => iziToast.show({
        message: error.message,
        position: `topRight`,
        messageColor: '#fffc3aff',
        backgroundColor: "#ec3939",
    }));
    hideLoader();
    event.target.reset()
}