import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

export function createGallery(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <p><span class="bold">Likes</span> ${likes}</p>
        <p><span class="bold">Views</span> ${views}</p>
        <p><span class="bold">Comments</span> ${comments}</p>
        <p><span class="bold">Downloads</span> ${downloads}</p>
    </li>`)
        .join('');
    
}

export function messageError() {
    iziToast.show({
        title: 'Sorry',
        message: ', there are no images matching your search query. Please try again!',
        position: `topRight`,
        messageColor: '#fffc3aff',
        backgroundColor: "#ec3939",
    });
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}

new SimpleLightbox('.gallery-link', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
});
