import axios from "axios";
import { createGallery, hideLoader, messageError } from "./render-functions";

const url = "https://pixabay.com/api/";
const gallery = document.querySelector('.gallery');

export function getImagesByQuery(option) {

    axios(url, option)
        .then(response => {
            if (response.data.hits.length > 0) {
                createGallery(response.data.hits);
            } else {
                messageError();
            }
        })
        .catch(error => console.log(error)
        ) 
        .finally(() => {
            hideLoader();
        })
};

