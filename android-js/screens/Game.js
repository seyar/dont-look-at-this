'use strict';

var React = require('react');
var {View, Text, StyleSheet, TouchableHighlight} = require('react-native');
var {Actions} = require('react-native-router-flux');

var styles = require('./../styles/style');

class Register extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.simpleText}>Game</Text>
                <TouchableHighlight onPress={Actions.launch}>
                    <Text style={styles.button}>Back</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = Register;
