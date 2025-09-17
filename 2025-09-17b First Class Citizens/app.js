'use strict';

console.clear();
console.log('Las funciones son ciudadanos de primera clase.');

function devolverSiete() {
    return 7;
}

console.log(devolverSiete());
console.log(devolverSiete);

let seven = devolverSiete;
console.log(seven());
console.log(seven);

//------------------------------------
console.clear();

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function operarYMostrarResultado(operacion, numero1, numero2) {
    let resultado = operacion(numero1, numero2);
    console.log(resultado);
}

// callback: función que se pasa como argumento a otra función.
operarYMostrarResultado(sumar, 10, 15);
operarYMostrarResultado(restar, 10, 15);