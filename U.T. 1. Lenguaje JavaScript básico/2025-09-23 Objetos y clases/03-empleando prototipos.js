'use strict';

var persona1 = Object.create(Object);
persona1.prototype.nombre = 'Adolfo';
persona1.prototype.apellido = 'Martín';
persona1.prototype.nombreCompleto = function() {
    return `${this.nombre} ${this.apellido}`;
}

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.nombreCompleto());