/* SISTEMA ANTIGUO */

function generateRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


function retrievePerson(name) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (generateRandom(1, 100) < 50) {
                resolve(name);
            } else {
                reject('ERROR. No hay nombre');
            }
        }, generateRandom(1000, 5000));
    });
    return promise;
}


retrievePerson('Adolfo Martín')
    .then(name => console.log(name))
    .then(() => retrievePerson('Darío Muñoz'))
    .then(name => console.log(name))
    .then(() => retrievePerson('José Manuel Martínez'))
    .then(name => console.log(name))
    .catch(error => console.error(error));




console.log('🏁');

