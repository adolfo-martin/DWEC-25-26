import DummyService from '../services/dummy.service.js';

setup();

async function setup() {
    const service = new DummyService();
    const categories = await service.getCategories();
    fillListCategories(categories);
}

function fillListCategories(categories) {
    const nOl = document.querySelector('#tOlCategories');

    categories.forEach(category => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.innerText = category.name;
        // nLi.setAttribute('data-category-id', category.id);
        nLi.dataset.categoryId = category.id;
        nLi.addEventListener('click', handlerClickCategory); /* manejador */
    });
}


async function handlerClickCategory(e) {
    const nLi = e.target; /* currentTarget */
    const categoryId = nLi.dataset.categoryId;
    const service = new DummyService();
    const products = await service.getProductsByCategory(categoryId);
    await fillListProducts(products);
}


async function fillListProducts(products) {
    const nOl = document.querySelector('#tOlProducts');
    const service = new DummyService();

    // while (nOl.hasChildNodes()) {
    //     nOl.removeChild(nOl.lastChild);
    // }
    nOl.innerHTML = '';

    // for (const productId of products) {
    //     const nLi = document.createElement('li');
    //     nOl.appendChild(nLi);

    //     const product = await service.getProductById(productId);

    //     nLi.innerText = product.title;
    //     nLi.dataset.productId = product.id;
    // };

    const promises = products.map(productId => service.getProductById(productId));
    const products2 = await Promise.all(promises);

    for (const product of products2) {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.innerText = product.title;
        nLi.dataset.productId = product.id;
    };
}