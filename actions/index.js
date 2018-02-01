export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'


export function addCard(title, card) {
    return {
        type: ADD_CARD,
        title,
        card
    };
}


export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    };
}

export function getAllDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    };
}

