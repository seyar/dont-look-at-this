'use strict';

var React = require('react');
var {
    View,
    Text,
    Picker,
    TouchableOpacity
} = require('react-native');
var {Actions} = require('react-native-router-flux');
import {bindActionCreators} from 'redux';
import settingsActions from '../actions/settings'
import {connect} from 'react-redux';

var styles = require('./../styles/style');
var i18n = require('../i18n/ru');

class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{i18n.settings}</Text>
                <TouchableOpacity onPress={Actions.launch}>
                    <Text style={styles.button}>{i18n.back}</Text>
                </TouchableOpacity>
                <Picker
                    selectedValue={this.props.settings.language || 'ru'}
                    onValueChange={(language) => this.props.saveSettings({language: language})}
                >
                    <Picker.Item label="Русский" value="ru" />
                    <Picker.Item label="Английский" value="en" />
                </Picker>
            </View>
        );
    }
}

Settings.propTypes = {
    settings: React.PropTypes.object,
    saveSettings: React.PropTypes.func.isRequired
};

module.exports = connect(
    (state) => ({settings: state.routes.settings}),
    (dispatch) => ({
        saveSettings: bindActionCreators(settingsActions.saveSettings, dispatch)
    })
)(Settings);
