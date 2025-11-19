const pais = 'España';
const superfice = 2505487879;
const estaLloviendo = false;

const persona = {
    id: 1,
    nombre: 'Adolfo',
    apellido: 'Martín'
}

const frutas = ['manzana', 'platano', 'naranga', '🍉'];

window.sessionStorage.setItem('pais', pais);
window.sessionStorage.setItem('superfice', superfice);
window.sessionStorage.setItem('llueve', estaLloviendo);

window.sessionStorage.setItem('profesor', JSON.stringify(persona));
window.sessionStorage.setItem('frutas', JSON.stringify(frutas));

const frutas2 = JSON.parse(window.sessionStorage.getItem('frutas'));
const persona2 = JSON.parse(window.sessionStorage.getItem('profesor'));

console.log(frutas2);
console.log(persona2);
console.log('55555');
console.log(JSON.parse(JSON.stringify(5555555)));