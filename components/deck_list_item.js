import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles, deckListStyles } from '../utils/styles';

export default class DeckListItem extends Component {
    render() {
        const { deck } = this.props
        return (
            <TouchableOpacity style={deckListStyles.flatListItem} onPress={this.props.goToDeck}>
                <View style={deckListStyles.rowElement}>
                    <Text style={styles.text16}>{deck.title}</Text>
                    <Text style={styles.text16}>{deck.questions ? deck.questions.length : 0}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
