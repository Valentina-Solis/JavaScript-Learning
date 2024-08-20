/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

// This function creates a new deck
const createDeck = () => {
    for(let i = 2; i <= 10; i++) {
        for(let type of types) {
            deck.push( i + type);
        }
    }

    for(let type of types) {
        for(let special of specials) {
            deck.push(special + type);
        }
    }

    deck = _.shuffle(deck);
    console.log( deck );
    return deck;
}

createDeck();


// This function allows me to take a card
const takeCard = () => {

    if(deck.length === 0) {
        throw 'There are no cards left in the deck';
    }

    const card = deck.pop(); // removes last item

    console.log(deck);
    console.log(card); // Card needs to be from the deck
    return card;
}

// takeCard();
const valueCard = ( card ) => {
    const value = card.substring(0, card.length - 1);
    console.log( {value} );
}

valueCard('10D');