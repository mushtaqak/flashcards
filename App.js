import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native'

import { Constants } from 'expo'
import { Navigator } from './components/navigation'
import { setLocalNotification } from './utils/helpers'
import { statusbarColor, white } from './utils/colors'
import decks from './reducers';
import { AsyncStorage } from 'react-native';

function FlashCardStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    );
}

export default class App extends Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(decks)}>
                <View style={{ flex: 1 }}>
                    <FlashCardStatusBar backgroundColor={statusbarColor} barStyle='light-content' />
                    <Navigator />
                </View>
            </Provider>
        );
    }
}
