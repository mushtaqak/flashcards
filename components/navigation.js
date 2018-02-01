import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import DeckList from './deck_list'
import CreateDeck from './create_deck'
import AddCard from './add_card'
import DeckDetail from './deck_detail'
import Quiz from './quiz'

import { appColor, purple, white } from './../utils/colors'


export const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Deck List',
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name='list' size={30} color={tintColor} />
            )
        }
    },
    CreateDeck: {
        screen: CreateDeck,
        navigationOptions: {
            tabBarLabel: 'Create Deck',
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name='plus-square' size={30} color={tintColor} />
            )
        }
    },
}, {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: white,
            style: {
                height: 56,
                backgroundColor: appColor,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    });

export const Navigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: appColor
            }
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: appColor
            }
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: appColor
            }
        }
    }
});
