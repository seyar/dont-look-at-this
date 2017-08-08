'use strict';

var React = require('react');
var {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
    /*,
 TextInput*/
} = require('react-native');
var {Actions} = require('react-native-router-flux');
// import * as teamActions from '../actions/settings'
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

var styles = require('./../styles/style');
var i18n = require('../i18n/i18n');

class Game extends React.Component {
    componentDidMount() {
        this._fields = [];
        for(var i = 0; i <50 i++) {
            this._fields[i] = i;
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.gameBg} horizontal>
                    <TouchableOpacity onPress={Actions.launch}>
                        <Text style={styles.button}>{i18n.get('back')}</Text>
                    </TouchableOpacity>
                    <View style={styles.gameBg.yard}>
                        {this._fields.map((field) => {
                            return (
                                <View style={styles.gameBg.field}>
                                    <View style={styles.gameBg.fieldBefore}>
                                        {field}
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

module.exports = Game;
