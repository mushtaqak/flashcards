import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'

import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';
import { styles } from '../utils/styles';


class CreateDeck extends Component {
    state = {
        title: ''
    }

    handleCreateDeck = () => {
        if (this.state.title) {
            const { title } = this.state;
            const deck = { title, questions: [] };

            saveDeckTitle(title)
                .then(() => {
                    this.props.addDeck({ [title]: deck });
                });

            this.setState({ title: '' });

            this.props.navigation.navigate(
                'DeckDetail',
                {
                    deck: deck,
                },
                Keyboard.dismiss()
            );
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text16}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                    placeholder="New Deck"
                />
                <TouchableOpacity onPress={this.handleCreateDeck} style={styles.buttonBig}>
                    <Text>Create Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addDeck: (deck) => dispatch(addDeck(deck))
})

export default connect(null, mapDispatchToProps)(CreateDeck);
