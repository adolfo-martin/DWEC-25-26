import AuthService from '/services/auth.service.js';
import { openSpinner, closeSpinner } from '/views/utils/spinner-waiting.lib.js';

await setup();

async function setup() {
    document.querySelector('#tButValidateUser')
        .addEventListener('click', validateUser);
}


async function validateUser() {
    const username = document.querySelector('#tTxtUsername').value;
    const password = document.querySelector('#tPasPassword').value;
    // hay que asegurarse de alguna forma que no esten vacios
    if (!username || !password) {
        alert('Pon el usuario y la contraseña');
        return; // retorno anticipado
    }
    
    let token;
    try {
        openSpinner();
        const service = new AuthService();
        token = await service.validateUser(username, password);
    } catch (e) {
        alert('ERROR: ' + e.message);
        return;
    } finally {
        closeSpinner();
    }
    
    window.localStorage.setItem('token-playmobil', token);
    window.location = '/views/index.html';
}