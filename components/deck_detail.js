import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { styles, deckDetailStyles } from '../utils/styles';
import { white } from '../utils/colors';


export default class DeckDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.deck.title,
            headerLeft: (
                <FontAwesome
                    name='arrow-left'
                    size={20}
                    color={white}
                    style={{ marginLeft: 20 }}
                    onPress={() => navigation.navigate('DeckList')}
                />
            )
        }
    };

    render() {
        const { deck } = this.props.navigation.state.params;
        const totalCards = deck.questions ? deck.questions.length : 0;
        return (
            <View style={styles.container}>
                <View style={deckDetailStyles.deckContainer}>
                    <Text style={styles.text16}>{deck.title}</Text>
                    <Text style={styles.text16}>{totalCards} cards</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard', { deck })} style={styles.buttonBig}>
                    <Text> Add Card </Text>
                </TouchableOpacity>
                {totalCards > 0 &&
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz', { deck })} style={styles.buttonBig}>
                        <Text> Start a Quiz </Text>
                    </TouchableOpacity>}
            </View>
        );
    }
}
