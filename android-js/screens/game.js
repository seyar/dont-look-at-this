'use strict';

var React = require('react');
var {
    View,
    Text,
    TouchableOpacity/*,
    TextInput*/
} = require('react-native');
var {Actions} = require('react-native-router-flux');
// import * as teamActions from '../actions/settings'
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

var styles = require('./../styles/style');
var i18n = require('../i18n/ru');

class Game extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{i18n.game}</Text>
                <TouchableOpacity onPress={Actions.launch}>
                    <Text style={styles.button}>{i18n.back}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = Game;
