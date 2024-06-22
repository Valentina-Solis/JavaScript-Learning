
let a = 5;


if( a >= 10 ) {
    console.log('A is greater than or ewual to 10');
} else {
    console.log('A is less than 10');
}

//console.log('Program finished');

const today = new Date(); // {} object
let day = today.getDay(); // 0: Sunday, 1: Monday, ...


console.log({ day });

// ==: to compare only value 
// ===: to compare also type
if ( day === 0 ) {
    console.log('Sunday');
} else if ( day === 1) {
    console.log('Monday');
} else if ( day === 2) {
    console.log('Tuesday');
} else {
    console.log('It is not monday, tuesday or sunday');
}

//Without using If Else or Switch, just using objects
day = 3;

const dayLetters = { //Object
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}

const dayLetters2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Day of the week
console.log( dayLetters2[day] || 'Undefined day');