import DummyService from "../services/dummy.service.js";

await setup();

async function setup() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('category');
    const categoryName = params.get('category-name');

    // document.querySelector('h1').textContent = `Productos de la categoría ${categoryName}`;


    //Recuperar los productos de la categoria
    const service = new DummyService();
    const products = await service.getProductsByCategory(categoryId);
    showProducts(products);
}

/**
 * 
 * @param {number[]} productsIds 
 */
async function showProducts(productsIds) {
    const nContainer = document.querySelector('.container-products');
    const service = new DummyService();

    const promises = productsIds.map(id => service.getProductById(id));
    const products = await Promise.all(promises);
    
    for (const product of products) {    
        const nCard = document.createElement('div');
        nContainer.appendChild(nCard);
        nCard.classList.add('card-product')
    
        const nHeader = document.createElement('header');
        nCard.appendChild(nHeader);
        nHeader.textContent = product.name;
    
        const nImage = document.createElement('img');
        nCard.appendChild(nImage);
        nImage.src = product.image;
    
        const nParagraph = document.createElement('p');
        nCard.appendChild(nParagraph);
        nParagraph.textContent = product.price;
    }   
}