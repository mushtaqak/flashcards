import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'

import { addCard } from '../actions';
import { addCardToDeck } from '../utils/api';
import { styles } from '../utils/styles';


class AddCard extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Card'
        }
    };

    state = {
        question: '',
        answer: ''
    }

    handleAddToDeck = () => {
        if (this.state.question && this.state.answer) {
            const { question, answer } = this.state;
            const card = { question, answer };
            const { deck } = this.props.navigation.state.params;
            const { title } = deck;


            addCardToDeck(title, card)
                .then(() => {
                    this.props.addCard(title, card);
                });

            this.setState({ question: '', answer: '' });

            this.props.navigation.navigate(
                'DeckDetail',
                {
                    deck: { title, questions: deck.questions.concat(card) },
                },
                Keyboard.dismiss()
            );
        }
    };

    render() {
        const { deck } = this.props.navigation.state.params;
        const { title } = deck;
        return (
            <View style={styles.container}>
                <Text style={styles.text16}>Add card to {title}</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={question => this.setState({ question })}
                    value={this.state.question}
                    placeholder="Question"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={answer => this.setState({ answer })}
                    value={this.state.answer}
                    placeholder="Answer"
                />
                <TouchableOpacity onPress={this.handleAddToDeck} style={styles.buttonBig}>
                    <Text>Add card</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addCard: (title, card) => dispatch(addCard(title, card))
})

export default connect(null, mapDispatchToProps)(AddCard);