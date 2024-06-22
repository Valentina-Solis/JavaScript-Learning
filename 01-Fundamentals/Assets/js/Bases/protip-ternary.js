
const theGreatest = (a, b) => ( a > b ) ? a : b;

const hasMembership = ( member ) => (member) ? '2 Dollars' : '10 Dollars';


console.log( theGreatest(10, 15) );
console.log( hasMembership(false) );

const friend = false;
const friendsArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
    (()=> 'Nick Furry')(), // Auto-invocation
    theGreatest(10, 15)
];

console.log( friendsArr );


const grade = 82.5; // A+, A, B+
const letter =  grade >= 95 ? 'A+' :
                grade >= 90 ? 'A' :
                grade >= 85 ? 'B+' :
                grade >= 80 ? 'B' :
                grade >= 75 ? 'C+' :
                grade >= 70 ? 'C' : 'F';

console.log({grade, letter});