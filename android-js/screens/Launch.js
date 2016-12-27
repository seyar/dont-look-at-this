'use strict';

var React = require('react');
var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} = require('react-native');
var {Actions} = require('react-native-router-flux');

var styles = require('./../styles/style');

class Launch extends React.Component {
    render(){
        return (
            <View style={styles.container} refreshing>
                <Text style={styles.simpleText}>Initial page</Text>
                <TouchableOpacity onPress={Actions.game}>
                    <Text style={styles.button}>Играть</Text>
                </TouchableOpacity>
                <TouchableHighlight onPress={Actions.game}>
                    <Text>Продолжить</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={Actions.settings}>
                    <Text>Настройки</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = Launch;
