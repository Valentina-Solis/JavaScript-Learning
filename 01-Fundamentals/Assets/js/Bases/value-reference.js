
let a = 10;
let b = a;
a = 30;

console.log({ a, b });


let juan = { name: 'Juan' };
// Spread parameter:
// separate the elements, breaks object reference in JS
let ana = { ...juan }; 
ana.name = 'Ana';

console.log({ juan, ana });

// Rest parameter as argument: 
// put together all arguemnts in a single variable and transforms it to an array
// const changeName = ( ..person ) => {
const changeName = ( {...person} ) => {
    person.name = 'Tony';
    return person;
}

let peter = {name: 'Peter'};
let tony = changeName( peter ); //Objects pass by reference 

console.log({ peter, tony }); //Tony, Tony

//Arrays
const fruits = ['Apple', 'Pear', 'Pineapple'];

console.time('Spread');
const otherFruits2 = [...fruits]; //Creates new array breaking reference relation
console.timeEnd('Spread');

console.time('Slice');
const otherFruits = fruits.slice();
console.timeEnd('Slice');

otherFruits.push('Mango');

console.table({ fruits, otherFruits });