
import { ADD_CARD, ADD_DECK, GET_DECKS } from '../actions';


export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_CARD:
            const { title } = action
            return {
                ...state,
                [title]: {
                    ...state[title],
                    questions: [...state[title].questions, action.card]
                }
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            };
        case GET_DECKS:
            return action.decks;
        default:
            return state;
    }
}
