import PlaymobilService from "../services/playmobil.service.js";
import { closeSpinner, openSpinner } from "./utils/spinner-waiting.lib.js";

await setup();


async function setup() {
    const token = checkToken();
    const decodedToken = decodeToken(token);
    document.querySelector('#tSpnFullname').textContent = `${decodedToken.firstname} ${decodedToken.lastname}`;

    const serieId = checkSerieFromUrl();
    await showSerieName(serieId, token);

    const boxes = await getBoxes(serieId, token);
    fillContainerBoxes(boxes);
}


async function getBoxes(serieId, token) {
    try {
        openSpinner();
        const service = new PlaymobilService();
        const boxesIds = await service.getBoxesBySerie(serieId, token);

        const promises = boxesIds.map(boxId => service.getBoxByUuid(boxId, token));
        const boxes = await Promise.all(promises);
        return boxes;
    } catch (e) {
        alert('Hay un problema al recuperar las cajas:' + e.message);
    } finally {
        closeSpinner();
    }
}


function fillContainerBoxes(boxes) {
    const nDiv = document.querySelector('#tDivBoxes');

    boxes.forEach(box => {
        nDiv.innerHTML += `
            <input type="checkbox" id="tChk${box.uuid}" value="${box.uuid}">
            <label for="tChk${box.uuid}">${box.denomination}</label>
        `;
    });


    document.querySelector('#tButSend').addEventListener('click', e => {
        const selected = document.querySelectorAll('input[type=checkbox]:checked');
        window.location = './figures.html?boxes=' + JSON.stringify(selected);
    })

}




async function showSerieName(serieId, token) {

    try {
        openSpinner();
        const serie = await (new PlaymobilService()).getSerieByUuid(serieId, token);
        document.querySelector('#tSpnSerie').textContent = serie.denomination;
    } catch (e) {
        alert('Hay un problema al recuperar la serie:' + e.message);
    } finally {
        closeSpinner();
    }

}


function checkToken() {
    const token = window.localStorage.getItem('token-playmobil');
    if (!token) {
        alert('No ha iniciado sesión. Se le enviará a la página de login.')
        window.location = './login.html';
    }
    return token;
}


function checkSerieFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const serieUuid = params.get('serie');
    if (!serieUuid) {
        alert('Debe seleccionar una serie de productos de Playmobil. Se le enviará al inicio.');
        window.location = './index.html';
    }
    return serieUuid;
}


function decodeToken(token) {
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
    }
    const tokenDecodificado = parseJwt(token);
    return tokenDecodificado;
}