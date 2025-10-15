import { cars } from './data.js';

fillupSelectCars();


function fillupSelectCars(_) {
    const nSelect = document.getElementById('tSelCars');
    nSelect.addEventListener('change', showCar);

    cars.forEach(car => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', car.key);
        const nText = document.createTextNode(car.model);
        nOption.appendChild(nText);
    });
}


function showCar(e) {
    // Uso la propiedad target del evento para conocer la etiqueta que lo lanzo.
    // Uso el value para conocer el código del elemento seleccionado.
    const nSelect = e.target;
    const carId = nSelect.value;
    console.log(carId);

    // let photo = undefined;
    // for (const car of cars) {
    //     if (car.key === carId) {
    //         photo = car.photo;
    //         break;
    //     }
    // }

    const photo = cars
        .find(car => car.key === carId)
        .photo;


    const nImage = document.getElementById('tImgCar');
    // nImage.setAttribute('src', `./photos/${photo}`);
    nImage.src = `./photos/${photo}`;
}