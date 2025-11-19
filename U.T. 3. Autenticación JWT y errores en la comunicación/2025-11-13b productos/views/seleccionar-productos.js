import DummyService from "../services/dummy.service.js";

setup();


async function setup() {
    const cesta = [];
    window.sessionStorage.setItem('shopping-cart', JSON.stringify(cesta));

    const service = new DummyService();
    const products = await service.getProducts();
    fillContainerProducts(products);
}


function fillContainerProducts(products) {
    const nContainer = document.querySelector('#tDivProducts');

    products.forEach(product => {
        const nCheckbox = document.createElement('input');
        nContainer.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('id', `tChk${product.id}`);
        nCheckbox.setAttribute('data-id', product.id);
        nCheckbox.dataset.title = product.title;
        nCheckbox.dataset.price = product.price;
        nCheckbox.addEventListener('change', handlerCheckboxProductChange);

        const nLabel = document.createElement('label');
        nContainer.appendChild(nLabel);
        nLabel.textContent = product.title;
        nLabel.setAttribute('for', `tChk${product.id}`);

        const nDiv = document.createElement('div');
        nContainer.appendChild(nDiv);
        nDiv.textContent = product.price;
    }); 
}


function handlerCheckboxProductChange(e) {
    const nCheckbox = e.target; /* currentTarget */
    const product = {
        id: nCheckbox.dataset.id,
        title: nCheckbox.dataset.title,
        price: nCheckbox.getAttribute('data-price'),
    };

    const cart = JSON.parse(window.sessionStorage.getItem('shopping-cart'));
    cart.push(product);
    window.sessionStorage.setItem('shopping-cart', JSON.stringify(cart));
}