/**
 * Weekdays open at 11
 * but Weekends open at 9
 */

// Enter to a website to check if it is open today ...
const day = 1; // 0: domingo... 1:Lunes....
const currentHour = 10;


let openingHour;
let message; // It is open, it is closed, today we open at XX
// if ( day === 0 || day === 6 ) {
// if ( [0,6].includes( day ) ) { 
//     console.log('Weekend');
//     openingHour = 9;
// } else {
//     console.log('Weekday');
//     openingHour = 11;
// }
openingHour = ( [0,6].includes( day ) ) ? 9 : 11;


// if ( currentHour >= openingHour ) {
//     message = 'It is open';
// } else {
//     message = `It is closed, today we open at ${ openingHour }`;
// }

message = ( currentHour >= openingHour ) ? 'It is open' : `It is closed, today we open at ${ openingHour }`;

 
console.log({ openingHour, message });