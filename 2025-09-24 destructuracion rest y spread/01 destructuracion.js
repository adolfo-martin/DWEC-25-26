'use strict';

/* La destructuración permite extraer a una variable partes de un objeto o arreglo */

const person = {
    firstname: 'Adolfo',
    lastname: 'Martín',
    age: 36,
    eyes: 'green',
    height: 195,
    weight: 84,
}

// const height = person.height;
// const weight = person.weight;

const { height: altura, weight: masa } = person; /* deconstrucción de objetos */
console.log('ALTURA:', altura, 'PESO:', masa);

const watches = [
    'Casio',
    'Rolex',
    'Seiko',
];

watches.push('Timex', 'Tudor', 'Citizen', 'Orient');
watches[7] = 'Longines';
console.clear();
console.table(watches);

// const firstWatch = watches[0];
// const secondWatch = watches[1];
// const thirdWatch = watches[2];

/* Deconstrucción de arrays */
// const [ firstWatch, secondWatch, thirdWatch ] = watches;
// console.log(firstWatch, secondWatch, thirdWatch);

/* Operador rest - el resto ...Permite guardar en una variable el resto de elementos del arraglo */
const [ firstWatch, secondWatch, thirdWatch, ...nextWatches ] = watches;
console.log(nextWatches);

/* Operador spread - extender ... Permite descomponer un arreglo en sus elementos individuales */
console.log(...nextWatches);

const pupurri = ['limón', 'platano', 'ciruela', ...watches, 'kiwi', 'sandia'];
console.log(pupurri);