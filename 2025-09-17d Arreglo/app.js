'use strict';

// Primera forma. Literal de arreglo
let diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
];

console.clear();
console.log(diasSemana);
console.table(diasSemana);

// Segunda forma. Indicando la posición
const frutas = [];
frutas[0] = 'Pera';
frutas[1] = 'Manzana';
frutas[2] = '🍌';
frutas[5] = 'Kiwi';
frutas[6] = '🍉';

console.table(frutas);

// Tercera forma. Clase Array
const alumnos = new Array();
alumnos.push('Oualid');
alumnos.push('Pablo');
alumnos.push('Cristian', 'David', 'Alejandro', 'Javier', 'Pedro José');
alumnos.push('Ángeles');
alumnos.unshift('Ramón', 'Agustín', 'Rubén', 'Sebastián');

console.table(alumnos);

// Cuarta forma. Array asociativo
let mesesDelAño = [];
mesesDelAño['en'] = 'Enero';
mesesDelAño['fe'] = 'Febrero';
mesesDelAño['ma'] = 'Marzo';
mesesDelAño['ab'] = 'Abril';
mesesDelAño['my'] = 'Mayo';

console.table(mesesDelAño);
console.log(mesesDelAño['fe']);
console.log(mesesDelAño[1]);