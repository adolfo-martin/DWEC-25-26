// Conjuntos
const frutas = new Set();
frutas.add('manzana');
frutas.add('pera');
frutas.add('manzana');
frutas.add('pera');
frutas.add('melón');
frutas.add('fresa');

console.clear();
console.log(frutas.size);
console.table(frutas);

const frutasComoArreglo = Array.from(frutas);
console.clear();
console.table(frutasComoArreglo);

const equipos = new Map();
equipos.set('rm', "Real Madrid");
equipos.set('bc', 'Fútbol Club Barcelona');
equipos.set('am', 'Atlético de Madrid');

console.clear();
console.table(equipos);
console.log(equipos.get('bc'));


console.table(equipos.keys());
console.table(equipos.values());

const claves = Array.from(equipos.keys());
const valores = Array.from(equipos.values());
console.log(typeof(claves));
console.log(Array.from(equipos.entries()));


const elecciones = ['carne', 'pescado', 'carne', 'pasta', 'pescado', 'arroz', 'carne', 'pasta'];
const platos = new Set(elecciones);
console.table(platos);