import DummyService from "./services/dummy.service.js";

await setup();

async function setup() {

    
    
    try {
        showSpinnerLoading();
        
        const service = new DummyService();
        const categories = await service.getCategories();
        fillSelectCategories(categories);

        const nSelect = document.querySelector('#tSecCategories');
        nSelect.addEventListener('change', handlerCategoryChanged); // manejador
    } catch (e) {
        alert('Se ha producido algún tipo de incidencia.\nSi la incidencia persiste póngase en contacto con el servicio técnico.\n' + e.message);
        // return;
    } finally {
        closeSpinnerLoading();
        // return;
    }
}


async function handlerCategoryChanged(e) {
    try {
        const nSelect = e.target;
        const category = nSelect.value;

        showSpinnerLoading();
        const service = new DummyService();
        const products = await service.getProductsByCategoryId(category);
        fillContainerCards(products);
    } catch (e) {
        alert('Se ha producido algún tipo de incidencia.\nSi la incidencia persiste póngase en contacto con el servicio técnico.\n' + e.message);        
    } finally {
        closeSpinnerLoading();
    }
}


function fillSelectCategories(categories) {
    const nSelect = document.querySelector('#tSecCategories');

    for (const category of categories) {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', category.id);
        nOption.textContent = category.name;
    }
}


function fillContainerCards(products) {
    const nContainer = document.querySelector('.container-cards');

    // while (nContainer.hasChildNodes()) {
    //     nContainer.removeChild(nContainer.lastChild);
    // }
    nContainer.innerHTML = '';

    for (const product of products) {
        const nArticle = document.createElement('article');
        nContainer.appendChild(nArticle);
        nArticle.setAttribute('class', 'card');
    
        const nHeader = document.createElement('header');
        nArticle.appendChild(nHeader);
        nHeader.textContent = product.name;
    
        const nParagraphTitle = document.createElement('p');
        nArticle.appendChild(nParagraphTitle);
        nParagraphTitle.textContent = 'Crema para la cara';
    
        const nParagraphPrice = document.createElement('p');
        nArticle.appendChild(nParagraphPrice);
        nParagraphPrice.textContent = '25.50€';
    }
}



function showSpinnerLoading() {
    const nDialog = document.querySelector('#tDlgLoading');
    nDialog.showModal();
}

function closeSpinnerLoading() {
    const nDialog = document.querySelector('#tDlgLoading');
    nDialog.close();
}