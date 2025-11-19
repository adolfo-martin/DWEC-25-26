import { decodeToken } from "../utils/utils.library.js";

setup();


function setup() {
    checkSessionOpened();
    setupButtonLogin();
}


function checkSessionOpened() {
    const token = window.sessionStorage.getItem('token-store');
    
    if (!token) {
        alert('Debes haber iniciado sesión para ver esta página.\nSeras rediridido a la página principal.');
        window.location = './index.html';
    } 
}


function setupButtonLogin() {
    const token = window.sessionStorage.getItem('token-store');
    const decodedToken = decodeToken(token);
    const nButton = document.querySelector('.header-app>.login');
    nButton.style.backgroundImage = `url(${decodedToken.image})`;
    nButton.dataset.fullname = `${decodedToken.firstName} ${decodedToken.lastName}`;
}