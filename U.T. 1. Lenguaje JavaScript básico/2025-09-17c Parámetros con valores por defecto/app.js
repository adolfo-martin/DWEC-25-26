'use strict';

console.clear();

/**
 * Esta función muestra un mensaje concatenando los parámetros.
 * @param {string} nombre 
 * @param {string} apellidos 
 * @param {string} poblacion 
 * @param {string} pais 
 */
function mostrarMensaje(
    nombre='Adolfo', 
    apellidos='Martín González', 
    poblacion='Lorca', 
    pais='España',
) {
    console.log(`Hola, soy ${nombre} ${apellidos}. Vivo en ${poblacion} y nací en ${pais}. `)
}

mostrarMensaje();
mostrarMensaje('María', 'Cánovas Vidal');
mostrarMensaje(undefined, 'Sánchez Jiménez', undefined, 'Francia');
mostrarMensaje('Pepe', 15);

// esto funciona en Python pero no en JavaScript
// mostrarMensaje(poblacion = 'Totana', pais = 'Alemania');