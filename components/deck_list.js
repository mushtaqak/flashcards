import React from 'react';

import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import DeckListItem from './deck_list_item'
import { getDecks } from '../utils/api';
import { getAllDecks } from '../actions';
import { styles } from '../utils/styles';


class DeckList extends React.Component {

    componentDidMount() {
        getDecks()
            .then((decks) => {
                this.props.getDecks(decks);
            });
    }


    renderItems = ({ item }) => {
        console.log(item)

    }

    render() {
        const { decks } = this.props;
        return (
            <View>
                {
                    Object.keys(decks).length > 0 ?
                        <FlatList
                            data={Object.values(decks)}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => (
                                <DeckListItem key={item}
                                    deck={item}
                                    goToDeck={() => this.props.navigation.navigate('DeckDetail', { deck: item })}
                                />
                            )}
                        />
                        :
                        <Text style={styles.text16}>Create a new deck.</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = decks => ({ decks })
const mapDispatchToProps = dispatch => ({
    getDecks: (decks) => dispatch(getAllDecks(decks))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
