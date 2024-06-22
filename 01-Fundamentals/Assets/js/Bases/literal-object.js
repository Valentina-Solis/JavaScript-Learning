//Literal object have pairs of values name:value inside curly brackets
let celebrity = {
    name: 'Tony Stark',
    codeName: 'Ironman', 
    alive: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    direction: {
        zip: '10880, 90265',
        location: 'Malibu, California'
    },
    'last-movie': 'Infinity War'
};

console.log( celebrity );
console.log('Name', celebrity.name);
console.log('Name', celebrity['name']);
console.log('Age', celebrity.age);
console.log('Lat', celebrity.coords.lat);

console.log('No. suits', celebrity.suits.length);
console.log('Last suit', celebrity.suits[celebrity.suits.length - 1]);

const x = 'alive';
console.log('Alive', celebrity[x]);
console.log('Last Movie', celebrity['last-movie']);


//More details
delete celebrity.age;
console.log( celebrity );

celebrity.married = true;


const pairEntries = Object.entries( celebrity );
console.log( pairEntries );

Object.freeze( celebrity ); //Block changes at that point

celebrity.money = 100000;
celebrity.married = false;
console.log( celebrity );


const properties = Object.getOwnPropertyNames( celebrity ); 
const values = Object.values( celebrity ); 
console.log( {properties, values} );