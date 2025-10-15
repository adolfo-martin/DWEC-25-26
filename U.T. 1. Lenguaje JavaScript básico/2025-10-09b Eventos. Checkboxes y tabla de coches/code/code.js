import { cars } from './data.js';

fillDivWithCars(cars);

function fillDivWithCars(cars) {
    const nDiv = document.getElementById('tDivCars');

    cars.forEach(car => {
        const nCheckbox = document.createElement('input');
        nDiv.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('id', `tChk${car.key}`);
        nCheckbox.setAttribute('value', car.key);
        nCheckbox.setAttribute('data-model', car.model);
        nCheckbox.setAttribute('data-photo', car.photo);
        // nCheckbox.setAttribute('onchange', `addCarToTable("${car.key}")`);
        nCheckbox.addEventListener('change', addCarToTable);
    
        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tChk${car.key}`);
    
        const nText = document.createTextNode(car.model);
        nLabel.appendChild(nText);
    });
}


function addCarToTable(e) {
    const nCheckbox = e.target;
    const carId = nCheckbox.value;
    if (nCheckbox.checked) {
        console.log(carId);
    }

    const nTable = document.getElementById('tTabCars');

    const nTr = document.createElement('tr');
    nTable.appendChild(nTr);

    const nTdModel = document.createElement('td');
    nTr.appendChild(nTdModel);
    
    // const nTextModel = document.createTextNode(nCheckbox.dataset.model);
    // nTdModel.appendChild(nTextModel);
    nTdModel.textContent = nCheckbox.dataset.model;

    const nTdImg = document.createElement('td');
    nTr.appendChild(nTdImg);

    const nImg = document.createElement('img');
    nTdImg.appendChild(nImg);
    nImg.setAttribute('src', `./photos/${nCheckbox.dataset.photo}`);
    nImg.setAttribute('style', 'width: 100px');


}