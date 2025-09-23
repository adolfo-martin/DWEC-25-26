'use strict';

const person = {
    firstname: 'Adolfo',
    lastname: 'Martin',
    fullname1() {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname2: function() {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname3: () => `${this.firstname} ${this.lastname}`
}

console.log(person);
console.log(person.fullname1());
console.log(person.fullname2());
console.log(person.fullname3());

console.log(person.firstname);
console.log(person['firstname']);