import ThermomixService from "./services/thermomix.service.js";

setup();


async function setup() {
    const service = new ThermomixService();
    const books = await service.retrieveBooks();
    fillSelectBooks(books);
}


function fillSelectBooks(books) {
    const nSelect = document.querySelector('#tSelBooks');
    nSelect.addEventListener('change', fillTableDishes);

    for (const book of books) {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', book.clave);
        nOption.textContent = book.titulo;
    }
}


async function fillTableDishes(e) {
    const nSelect = e.target;
    const bookId = nSelect.value;

    const service = new ThermomixService();
    const dishes = await service.retrieveDishesByBook(bookId);

    const nBody = document.querySelector('#tTabDishes>tbody');

    for (const dish of dishes) {
        const nTr = document.createElement('tr');
        nBody.appendChild(nTr);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);
        nTdName.textContent = dish.nombre;

        const nTdPhoto = document.createElement('td');
        nTr.appendChild(nTdPhoto);

        const nImage = document.createElement('img');
        nTdPhoto.appendChild(nImage);
        nImage.setAttribute('src', 'http://127.0.0.1:99/fotos/' + dish.foto);
    }
}