/**
 * 2C = Two fo Clubs
 * 2D = Two fo Diamonds
 * 2H = Two fo Hearts
 * 2S = Two fo Spade
 */

let deck            = [];
const tipos         = ['C', 'D', 'H', 'S'];
const especiales    = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {

    for(let i = 2; i <= 10; i++){

        for(let tipo of tipos){
            deck.push(i + tipo);
        }

    }

    for(let tipo of tipos) {
        for(let est of especiales){
            deck.push(est + tipo);
        }
    }

    console.log(deck);

}

crearDeck();