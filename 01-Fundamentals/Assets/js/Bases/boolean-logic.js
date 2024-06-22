

const returnTrue = () => {
    console.log('Return true');
    return true;
}

const returnFalse = () => {
    console.log('Return false');
    return false;
}

console.warn('Not or the negation');
console.log( true );
console.log( !true );
console.log( !false );

console.log( !returnFalse() );


console.warn('And'); // True if all values are true
console.log( true && true ); // true
console.log( true && !false ); // true

console.log('==========');
console.log( returnFalse() && returnTrue() ); // false, only executes first since it is already false
console.log( returnTrue() && returnFalse() );

console.log('===== && =====');
returnFalse() && returnTrue();

console.log( '4 Conditions', true && true && true && false ); // false


console.warn('OR'); //At least one true
console.log( true || false );
console.log( false || false );

console.log( returnTrue() || returnFalse() );
console.log( '4 Conditions', true || true || true || false ); // true 


console.warn('Assignments');
const iAmUndefined = undefined;
const iAmNull = null;
const iAmFalse = false;

const a1 = false && 'Hello World' && 150; // 150
const a2 = 'Hello' && 'World' && iAmFalse && true; // false
const a3 = iAmFalse || 'I am no longer false'; // I am no longer false
const a4 = iAmFalse || iAmUndefined || iAmNull || 'I am no longer false again' || true; // I am ...
const a5 = iAmFalse || iAmUndefined || returnTrue() || 'I am no longer false again' || true; // true

console.log({ a1, a2, a3, a4, a5 });

if ( returnFalse() && returnTrue() && (true || false || true) ) {
    console.log('Do something');
} else {
    console.log('Do other thing');
}