import StoreService from "../services/store.service.js";
import { decodeToken } from "../utils/utils.library.js";
import { openSpinner, closeSpinner } from "../utils/spinner-waiting.lib.js";

setup();


async function setup() {
    checkSessionOpened();
    setupButtonLogin();

    openSpinner();
    await showCategories();
    closeSpinner();
}


async function showCategories() {
    const token = window.sessionStorage.getItem('token-store');
    const service = new StoreService();
    const categories = await service.getCategories(token);

    const promises = categories.map(category => service.getProductsByCategory(category.id, token));
    const productsOfAllCategories = await Promise.all(promises);


    const nContainer = document.querySelector('#tDivCategories');
    productsOfAllCategories.forEach( async (products, i) => {
        const nCard = document.createElement('div');
        nContainer.appendChild(nCard);
        nCard.classList.add('card-category');
        nCard.addEventListener('click', _ => window.location = `./products.html?category=${categories[i].id}`);

        const nHeader = document.createElement('header');
        nCard.appendChild(nHeader);
        nHeader.textContent = categories[i].name;

        const nImage = document.createElement('img');
        nCard.appendChild(nImage);
        nImage.src = products[0].image;
    });
}


function checkSessionOpened() {
    const token = window.sessionStorage.getItem('token-store');
    
    if (!token) {
        alert('Debes haber iniciado sesión para ver esta página.\nSeras rediridido a la página principal.');
        window.location = './index.html';
    } 
}


function setupButtonLogin() {
    const token = window.sessionStorage.getItem('token-store');
    const decodedToken = decodeToken(token);
    const nButton = document.querySelector('.header-app>.login');
    nButton.style.backgroundImage = `url(${decodedToken.image})`;
    nButton.dataset.fullname = `${decodedToken.firstName} ${decodedToken.lastName}`;
}