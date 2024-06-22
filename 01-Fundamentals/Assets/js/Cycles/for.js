
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('Traditional For');
for( let i = 0; i < heroes.length ; i++ ) {
    console.log( heroes[i] );
}

// var put value in a global level, AVOID!!

console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of'); // Extracts each value of heroes into heroe
for( let heroe of heroes) {
    console.log( heroe );
}