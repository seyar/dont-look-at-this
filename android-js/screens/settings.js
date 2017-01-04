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
var i18n = require('../i18n/i18n');

class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{i18n.get('settings')}</Text>
                <TouchableOpacity onPress={Actions.launch}>
                    <Text style={styles.button}>{i18n.get('back')}</Text>
                </TouchableOpacity>
                <Picker
                    mode="dropdown"
                    selectedValue={this.props.settings.language || 'ru'}
                    onValueChange={(language) => this.props.saveSettings({language: language})}
                >
                    <Picker.Item label={i18n.get('ru')} value="ru" />
                    <Picker.Item label={i18n.get('en')} value="en" />
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
