import { empleados } from './empleados.js';

// console.log(empleados.length);

/* bucle forach de toda la vida */
// for (const empleado of empleados) {
//     if (empleado.categoria === 'informatico')
//         console.log(empleado.nombre);
// }

// function mostrarNombreCompleto(empleado) {
//     console.log(`${empleado.nombre} ${empleado.apellido}`)
// }

// empleados.forEach(mostrarNombreCompleto);

// empleados.forEach( empleado => console.log(`${empleado.nombre} ${empleado.apellido}`) );

// function esInformatico(empleado) {
//     if (empleado.categoria === 'informatico') {
//         return true;
//     } else {
//         return false;
//     }
// }

// const informaticos = empleados.filter(esInformatico);

// function esInformatico(empleado) {
//     if (empleado.categoria === 'informatico') {
//         return true;
//     } else {
//         return false;
//     }
// }

// const informaticos = empleados.filter( empleado => empleado.categoria === 'informatico');

// console.table(informaticos.length);

// Mostrar el nombre completo de todos los administrativos que tengan los ojos azules 
// const resultado = empleados
//     .filter(empleado => empleado.categoria === 'administrativo')
//     .filter(empleado => empleado.colorOjos === 'azul')
//     .forEach(empleado => console.log(`${empleado.nombre} ${empleado.apellido}`));

const resultado = empleados
    .filter(({ categoria }) => categoria === 'administrativo')
    .filter(({ colorOjos }) => colorOjos === 'azul')
    .forEach( ({ nombre, apellido }) => console.log(`${nombre} ${apellido}`));