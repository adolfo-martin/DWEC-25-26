function generateRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function retrievePerson(name) {
    const miliseconds = generateRandom(1000, 5000);
    setTimeout(() => {
        console.log(name);
    }, miliseconds);
}

retrievePerson('Cristian');
retrievePerson('David');
retrievePerson('Ángeles');
console.log('🏁');