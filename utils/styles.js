import { StyleSheet } from 'react-native'
import { appColor, white, cardColor } from './colors'


export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    text16: {
        fontSize: 16
    },
    text20: {
        fontSize: 20
    },
    button: {
        marginTop: 10,
        padding: 10,
        width: 150,
        alignItems: 'center',
        backgroundColor: appColor
    },
    buttonBig: {
        marginTop: 10,
        padding: 10,
        width: 300,
        alignItems: 'center',
        backgroundColor: appColor
    },
    textInput: {
        width: 300,
        height: 40,
        padding: 5,
        borderWidth: 1,
        borderColor: appColor,
        borderRadius: 5,
        backgroundColor: white,
        margin: 15,
    },
});

export const deckListStyles = StyleSheet.create({
    flatListItem: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: appColor
    },
    rowElement: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const deckDetailStyles = StyleSheet.create({
    deckContainer: {
        height: 200,
        width: 300,
        backgroundColor: cardColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const quizStyles = StyleSheet.create({
    questionContainer: {
        height: 200,
        width: 300,
        backgroundColor: cardColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})