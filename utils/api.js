import { AsyncStorage } from 'react-native';
const DECK_STORAGE_KEY = 'flashcard:decks'


const initialDecks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((decks) => {
            return decks ? JSON.parse(decks) : initialDecks // or {}
        });
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(
        DECK_STORAGE_KEY,
        JSON.stringify({ [title]: { title, questions: [] } })
    )
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((decks) => {
            const allDecks = decks ? JSON.parse(decks) : initialDecks; // or {};
            allDecks[title].questions.push(card);
            AsyncStorage.mergeItem(
                DECK_STORAGE_KEY,
                JSON.stringify(allDecks)
            );
        });
}
