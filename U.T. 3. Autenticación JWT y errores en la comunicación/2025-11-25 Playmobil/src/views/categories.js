const token = window.localStorage.getItem('token-playmobil');
if (!token) {
    alert('Debe iniciar sesión');
    window.location = '/views/index.html';
}