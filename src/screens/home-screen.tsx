import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startTabs from './main-tab';

export default class HomeScreen extends Component {

    onButtonPress = () => {
        startTabs();
    }

    render(){
        return (
            <View>
                <Text> HOme Screen </Text>
                <Button title="Tab nav" onPress = { this.onButtonPress } />
            </View>
        )
    }
}