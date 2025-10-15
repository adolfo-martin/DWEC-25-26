/* SISTEMA MODERNO */

function generateRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


async function retrievePerson(name) {
    if (generateRandom(1, 100) <= 100) {
        return name;
    } else {
        throw new Error('ERROR. No hay nombre');
    }
}

try {
    const name1 = await retrievePerson('Adolfo Martín');
    console.log(name1)
    const name2 = await retrievePerson('Darío Muñoz');
    console.log(name2)
    const name3 = await retrievePerson('José Manuel Martínez');
    console.log(name3)
} catch(error) {
    console.error(error);
}

console.log('🏁');