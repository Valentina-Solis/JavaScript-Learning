
const cars = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while( i < cars.length ) {
//     console.log( cars[i] );
//     i++;
// }

console.warn('While');
// considered as false:
// undefined
// null
// false

while( cars[i] ) {
    if( i === 1 ) {
        // break;
        i++;
        continue; // Keep executing next line
    }
    console.log( cars[i] );
    i++;
}


console.warn('Do While');
// executes internal block once 

let j = 0;
// If j = 10, undefined is printed

do {
    console.log( cars[j] );
    j++;
} while ( cars[j] );