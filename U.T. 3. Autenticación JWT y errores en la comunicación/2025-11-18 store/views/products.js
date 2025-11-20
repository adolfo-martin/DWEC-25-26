import StoreService from "../services/store.service.js";

setup();


async function setup() {
    const categoryId = getCategoryFromUrl();
    const token = getToken();

    showCategoryOnTitle(categoryId);
    const products = await getProductsOfCategory(categoryId, token);
    await showProductsOfCategory(products);
}


function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category');
}


function showCategoryOnTitle(categoryId) {
    document.querySelector('#tSpnCategory').textContent = categoryId;
}


function getToken() {
    return window.sessionStorage.getItem('token-store');
}


async function getProductsOfCategory(categoryId, token) {
    const service = new StoreService();
    const products = await service.getProductsByCategory(categoryId, token);
    return products;
}


async function showProductsOfCategory(products) {
    const nContainer = document.querySelector('#tDivProducts');

    products.forEach(product => {
        const nCard = document.createElement('div');
        nContainer.appendChild(nCard);
        nCard.classList.add('card-product');

        nCard.appendChild(document.createElement('header')).textContent = product.name;
        nCard.appendChild(document.createElement('img')).src = product.image;
        nCard.appendChild(document.createElement('span')).textContent = product.brand;
        nCard.appendChild(document.createElement('span')).textContent = product.price;
        nCard.appendChild(document.createElement('button')).textContent = 'Añadir';
    });
}