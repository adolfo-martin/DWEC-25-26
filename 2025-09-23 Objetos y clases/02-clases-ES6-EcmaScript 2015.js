'use strict';

class Person {

    #age // propiedad privada de verdad

    constructor(firstname, lastname) {
        this._firstname = firstname; // propiedad privada falsa
        this._lastname = lastname;
        // this.#age = 18;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        // if (value < 0) 
        //     this.#age = 0;
        // else
        //     this.#age = value;

        // this.#age = value < 0 ? 0 : value;

        if (value < 0)
            throw new Error('El valor introducido para la edad es incorrecto');

        // el else no es necesario porque throw provoca la salida anticipada del método
        this.#age = value;

    }

}

const person1 = new Person('Adolfo', 'Martín');
console.log(person1);
console.log(person1.firstname);
console.log(person1._lastname);
person1.firstname = 'ADOLFO';
console.log(person1.firstname);

try {
    person1.age = -25;
    console.log(person1.age);
} catch (error) {
    console.error(`Se ha producido una EXCEPCIÓN: ${error.message}`);
}

try {
    person1.age = 25;
    console.log(person1.age);
} catch (error) {
    console.error(`Se ha producido una EXCEPCIÓN: ${error.message}`);
}