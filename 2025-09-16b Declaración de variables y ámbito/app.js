// Tenemos distintos tipos de declaración

// "use strict";

// {
//     edad1 = 10; // variable global
//     var edad2 = 20; // forma antigua
//     let edad3 = 30; 
//     const edad4 = 40;
// }

// console.log(edad1);
// console.log(edad2);
// console.log(edad3);
// console.log(edad4);


function testAmbito() {
    
    for (var i = 1; i <= 3; i++) {
        let edad1 = 10;
        console.log(edad1);
    }

    console.log(edad1);
}

// console.log(edad1);

testAmbito();