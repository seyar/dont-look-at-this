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
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../bg.png')}>
                    <ScrollView contentContainerStyle={styles.gameBg} horizontal>

                        <TouchableOpacity onPress={Actions.launch}>
                            <Text style={styles.button}>{i18n.get('back')}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Image>
            </View>
        );
    }
}

module.exports = Game;
