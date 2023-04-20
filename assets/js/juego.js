/**
 * 2C = Two fo Clubs
 * 2D = Two fo Diamonds
 * 2H = Two fo Hearts
 * 2S = Two fo Spade
 */

let deck            = [];
const tipos         = ['C', 'D', 'H', 'S'];
const especiales    = ['A', 'J', 'Q', 'K'];

//Esta funcion crea una bueva baraja
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

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}

crearDeck();

//Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if(deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;

}
//pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return  (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;

}

const valor = valorCarta(pedirCarta());
console.log({valor});