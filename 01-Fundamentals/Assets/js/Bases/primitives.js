
let name = 'Peter Parker';
console.log( name );

name = 'Ben Parker';
console.log( name );

name = "Uncle May";
name = `Uncle May`;

console.log( typeof name); //String




name = 123;
console.log( typeof name);




let isMarvel = true;
console.log( typeof isMarvel); //Boolean




let age = 33;
console.log( typeof age); //Number

age = 33.001;
console.log( typeof age); //Number




let superPower;
console.log( typeof superPower); //Undefined

let IamNull = null;
console.log( typeof IamNull); //Object



let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log( typeof symbol1); 

console.log( symbol1 == symbol2); //false, they are different

//Primitives in Javascript
/*
1. String
2. Number
3. Boolean
4. Object = Null
5. Symbol
6. Undefined
*/