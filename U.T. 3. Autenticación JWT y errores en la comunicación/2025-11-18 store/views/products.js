import StoreService from "../services/store.service.js";

setup();


async function setup() {
    setupCartButton();

    const categoryId = getCategoryFromUrl();
    const token = getToken();

    showCategoryOnTitle(categoryId);
    const products = await getProductsOfCategoryWithDetails(categoryId, token);
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


async function getProductsOfCategoryWithDetails(categoryId, token) {
    const service = new StoreService();
    const products = await service.getProductsByCategory(categoryId, token);
    const promises = products.map(product => service.getProduct(product.id, token));
    const productsWithDetails = await Promise.all(promises);
    return productsWithDetails;
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

        const nButton = nCard.appendChild(document.createElement('button'));
        nButton.textContent = 'Añadir';
        nButton.addEventListener('click', addProductToCart);
        nButton.setAttribute('data-product-as-json', JSON.stringify(product));
    });
}

function addProductToCart(e) {
    const product = JSON.parse(e.target.dataset.productAsJson);
    let cart = JSON.parse(window.sessionStorage.getItem('shopping-cart')); // ?? []
    if (!cart) cart = []; 
    // Items on cart has this structure: { quantity: number, product: object }
    if (cart.some(item => item.product.id === product.id)) {
        const item = cart.find(item => item.product.id === product.id);
        item.quantity += 1;
    } else {
        cart.push({ quantity: 1, product});
    }
    window.sessionStorage.setItem('shopping-cart', JSON.stringify(cart));
}


function setupCartButton() {
    const nCart = document.querySelector('#tDivCart');
    nCart.addEventListener('mouseover', e => {
        const nTable = nCart.querySelector('.cart-details__products');
        nTable.classList.remove('hidden');
        const nTotal = nCart.querySelector('.cart-details__total');
        nTotal.classList.remove('hidden');

        let cart = JSON.parse(window.sessionStorage.getItem('shopping-cart')); // ?? []
        if (!cart) cart = []; 
        if (cart.length === 0) {
            nTotal.textContent = 0;
        } else {
            cart.forEach(item => {
                const nTr = document.createElement('tr');
                nTable.appendChild(nTr);

                nTr.appendChild(document.createElement('td')).appendChild(document.createElement('img')).src = item.product.image;
                nTr.appendChild(document.createElement('td')).textContent = item.quantity;
                nTr.appendChild(document.createElement('td')).textContent = item.product.price;
            });

            const total = cart.reduce((acc, cur) => acc += cur.quantity * cur.product.price, 0);
            nTotal.textContent = total;
        }
    });

    nCart.addEventListener('mouseout', e => {
        const nTable = nCart.querySelector('.cart-details__products');
        nTable.classList.add('hidden');
        nTable.innerHTML = '';
        const nTotal = nCart.querySelector('.cart-details__total');
        nTotal.classList.add('hidden');
    });
}