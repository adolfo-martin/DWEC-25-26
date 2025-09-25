import { empleados } from './empleados.js';

/* map (mapear) filter (filtrar) reduce (reducir) */

/* Mapear devuelve un nuevo array en el que cada elemento original se cambia por un nuevo elemento */

// function obtenerNombreCompleto(empleado) {
//     return `${empleado.nombre} ${empleado.apellido}`;
// }

// const nombres = empleados.map(obtenerNombreCompleto);
// console.table(nombres);

// const obtenerNombreCompleto = empleado => `${empleado.nombre} ${empleado.apellido}`;
// const obtenerNombreCompleto = empleado => `${empleado.nombre} ${empleado.apellido}`;
// const obtenerNombreCompleto = ({nombre, apellido}) => `${nombre} ${apellido}`;

// const nombres = empleados.map(obtenerNombreCompleto);
// console.table(nombres);

/* Obtener nombre completo (nombre y apellido) y salario de los gerentes */
console.clear();

// function obtenerNombreCompletoConSalario(empleado) {
//     const nombreCompleto = `${empleado.nombre} ${empleado.apellido}`;
//     const salario = empleado.salarioBruto;
//     return { nombre: nombreCompleto, salario: salario }; /* object literal */
// }

// const obtenerNombreCompletoConSalario = empleado => ({ 
//     nombre: `${empleado.nombre} ${empleado.apellido}`, 
//     salario: empleado.salarioBruto 
// });

// const esGerente = empleado => empleado.categoria === 'gerente';

// const gerentes = empleados
//     .filter(esGerente)
//     .map(obtenerNombreCompletoConSalario);

// console.log(gerentes);

/* Vamos a jugar un partido de futbol. Necesitamos el nombre completo, edad y correo electrónico de los hombres entre 20 y 40 años */

const esJoven = ({ edad }) => edad >= 20 && edad <=40; 
const esHombre = ({ sexo }) => sexo === 'hombre';
const obtenerNombreEdadCorreo = ({nombre, apellido, edad, correoElectronico}) => ({
    nombre: `${apellido} ${nombre}`,
    edad: edad,
    correo: correoElectronico,
})

const jugadores = empleados
    .filter(esHombre)
    .filter(esJoven)
    .map(obtenerNombreEdadCorreo);

console.log(jugadores);

function compararEdades(jugador1, jugador2) {
    if (jugador1.edad === jugador2.edad) 
        return 0;
    else if (jugador1.edad < jugador2.edad) 
        return -1;
    else 
        return +1;
}

console.clear();
console.log(jugadores.sort(compararEdades));

/* Reduce es un super método que me permite obtener cualquier cosa */
/* Calcular el salario medio */
console.clear();

function calcularMasaSalarial(acumulador, actual, i) {
    acumulador = (actual * i) / (i+1);
    return acumulador / (i+1);
}

const masaSalarial = empleados
    .map(empleado => empleado.salarioBruto)
    .reduce(calcularMasaSalarial, 0);

console.table(masaSalarial);