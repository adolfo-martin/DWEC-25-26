import { closeSpinner, openSpinner } from "./utils/spinner-waiting.lib.js";
import PlaymobilService from "/services/playmobil.service.js";

await setup();

async function setup() {
    checkUser();
    setupButtonGoToBoxes();
    renderSeries();
}


async function renderSeries() {
    const token = window.localStorage.getItem('token-playmobil');
    
    let series;
    try {
        openSpinner();
        series = await new PlaymobilService().getSeries(token);
    } catch (e) {
        alert('ERROR: ' + e.message);
        return;
    } finally {
        closeSpinner();
    }

    const nContainer = document.querySelector('#tDivSeries');

    series.forEach(({uuid, denomination}) => {
        const nRadio = document.createElement('input');
        nContainer.appendChild(nRadio);
        nRadio.setAttribute('type', 'radio');
        nRadio.setAttribute('name', 'serie');
        nRadio.setAttribute('value', uuid);
        nRadio.setAttribute('id', `tRad${uuid}`);
        nRadio.setAttribute('data-serie-name', denomination);
        nRadio.addEventListener('change', _ => {
            document.querySelector('#tButShowBoxes').removeAttribute('disabled');
        });

        const nLabel = document.createElement('label');
        nContainer.appendChild(nLabel).textContent = denomination;
        nLabel.setAttribute('for', `tRad${uuid}`);
    });
}



function checkUser() {
    const token = window.localStorage.getItem('token-playmobil');
    if (!token) {
        alert('Debe iniciar sesión');
        window.location = '/views/index.html';
    }
}


function setupButtonGoToBoxes() {
    const nButton = document.querySelector('#tButShowBoxes');
    nButton.addEventListener('click', _ => {
        const nRadio = document.querySelector('input[type=radio][name=serie]:checked');
        if (nRadio) {
            window.location = '/views/boxes.html?serie=' + nRadio.value;
        }
    });
}