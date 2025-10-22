import axios from "axios";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { hideLoader, messageError } from "./render-functions";

const form = document.querySelector('.form');

const url = "https://pixabay.com/api/";
const myAPI_KEY = "52805725-7d516d36c1804a9cebba9806b";

export function getImagesByQuery(queryWord) {
    return axios(url, {
        params: {
            key: myAPI_KEY,
            q: queryWord,                // слово з пошукового поля
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 18
        }
    })
        .then(response => {
            if (response.data.hits.length > 0) {
                return response.data.hits;
            } else {
                messageError();
                return null;
            }
        })
        .catch(error => iziToast.show({
        message: error.message,
        position: `topRight`,
        messageColor: '#fffc3aff',
        backgroundColor: "#ec3939",
    })) 
        .finally(() => {
            hideLoader();
        })
};