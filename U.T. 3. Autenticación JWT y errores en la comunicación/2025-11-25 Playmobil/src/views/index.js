import { decodeToken } from '/views/utils/decode-token.lib.js';

setup();

function setup() {
    checkSession();
}

function checkSession() {
    const token = window.localStorage.getItem('token-playmobil');
    // Habria que comprobar si el token ha cadudado

    if (token) {
        try {
            const decodedToken = decodeToken(token);
            document.querySelector('#tDivFullname').textContent = 
                `${decodedToken.firstname} ${decodedToken.lastname}`;
        } catch (e) {
            alert(e.message);
            return;
        }
    } else {

    }
}