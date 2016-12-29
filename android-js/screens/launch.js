'use strict';

var React = require('react');
var {
    View,
    Text,
    TouchableOpacity
} = require('react-native');
var {Actions} = require('react-native-router-flux');

var styles = require('./../styles/style');
var i18n = require('../i18n/ru');

class Launch extends React.Component {
    render(){
        return (
            <View style={styles.container} refreshing>
                <TouchableOpacity onPress={Actions.game}>
                    <Text style={styles.button}>{i18n.start}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.game}>
                    <Text style={styles.button}>{i18n.continue}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.settings}>
                    <Text style={styles.button}>{i18n.settings}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = Launch;
