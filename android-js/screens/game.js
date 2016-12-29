'use strict';

var React = require('react');
var {View, Text, TouchableOpacity} = require('react-native');
var {Actions} = require('react-native-router-flux');

var styles = require('./../styles/style');
var i18n = require('./../i18n/ru');

class Register extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.simpleText}>{i18n.gameCaption}</Text>
                <TouchableOpacity onPress={Actions.launch}>
                    <Text style={styles.button}>{i18n.back}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = Register;
