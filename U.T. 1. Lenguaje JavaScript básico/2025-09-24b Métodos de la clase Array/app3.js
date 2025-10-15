const frutas = [
    'platano',
    'kiwi',
    'limón',
    'tomate',
    'melocotón',
    'cereza',
    'uva',
    'manzana',
];

const frutasOrdenadas = frutas.sort();
console.log(frutasOrdenadas);
console.log(frutas);

function comparadorPorLongitud(fruta1, fruta2) {
    if (fruta1.length === fruta2.length) {
        return 0;
    } else if (fruta1.length < fruta2.length) {
        return -1;
    } else {
        return +1;
    }
}

console.log(frutas.sort(comparadorPorLongitud));