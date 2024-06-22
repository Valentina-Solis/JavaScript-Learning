let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Length', games.length);

let first = games[ 0 ];
let last = games[ games.length - 1 ];

console.log( {first, last} );

games.forEach( (element, index, arr) => {
    console.log({ element, index, arr })
} );

let newLength = games.push( 'F-Zero' ); //Add to the end
console.log( {newLength, games} );

newLength = games.unshift( 'Fire Emblem' ); //Add to the start
console.log( {newLength, games} );

let deletedGame = games.pop(); //Delete last element
console.log( {deletedGame, games} );

console.log( games );
let pos = 1;
let deletedGames = games.splice( pos, 2); //Delete n elements from n  position
console.log( {deletedGames, games} );

let metroidIndex = games.indexOf('Metroid'); //Case Sensitive
console.log( {metroidIndex});