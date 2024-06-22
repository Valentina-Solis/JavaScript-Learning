
// function createPerson( name, surname ) {
//     return { name, surname } //since argument and property name is the same
// }


const createPerson = ( name, surname ) => ({ name, surname })

const person = createPerson( 'Fernando', 'Herrera' );
console.log( person );

function printArguments() {
    console.log( arguments ); //Arrow functions do not have pre defined arguments as traditional functions
}

const printArguments2 = (age, ...args) => { //... creates an array of each element, no other argument can be included after args but it is allowed before
    //console.log( {age, args} );
    return args;
}

//To create a constant for each argument:
const  [ married, alive, name, greeting ] = printArguments2(10, true, false, 'Fernando', 'Hello');
console.log ( {married, alive, name, greeting} );


const { surname: newSurname } = createPerson( 'Fernando', 'Herrera' ); //create returns an object
console.log( { newSurname } );


const tony = {
    name: 'Tony Stark',
    codeName: 'Ironman', 
    alive: false,
    //age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const printProperties = ( celebrity ) => {
//     console.log('name', celebrity.name);
//     console.log('codeName', celebrity.codeName);
//     console.log('alive', celebrity.alive);
//     console.log('age', celebrity.age);
//     console.log('suits', celebrity.suits;
// }

const printProperties = ( {name, codeName, alive, age = 15, suits}) => {
    console.log({name});
    console.log({codeName});
    console.log({alive});
    console.log({age});
    console.log({suits});
}

printProperties(tony);