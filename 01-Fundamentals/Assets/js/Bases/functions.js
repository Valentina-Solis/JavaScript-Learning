
function greet( name ) {
    console.log( arguments );
    console.log('Hello ' + name );
    return [1, 2, 3, 4];

    console.log('I am a code after return'); //This will not be executed
}

//Anonimous Function
// const greet2 = function() {
//     console.log('Hello World');
// }


//Const ensures it will not be redefined and makes debug easier
const greetArrow = ( name ) => {
    console.log('Hello Arrow ' + name );
}

// const greetReturn = greet('Fernando');
// console.log({ greetReturn }); 

// greetArrow('Fernando');

function sum( a, b){
    return a + b;
}

// const sum2 = (a,b) => {
//     return a + b;
// }

const sum2 = (a,b) => a + b;

function getAleatory() {
    return Math.random();
}

//Arrow function without curly brackets
const getAleatory2 = () => Math.random();

console.log( getAleatory2() );