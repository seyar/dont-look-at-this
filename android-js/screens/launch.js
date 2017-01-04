'use strict';

var React = require('react');
var {
    View,
    Text,
    TouchableOpacity
} = require('react-native');
var {Actions} = require('react-native-router-flux');
import teamActions from '../actions/teams'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

var styles = require('./../styles/style');
var i18n = require('../i18n/i18n');

class Launch extends React.Component {
    constructor(props) {
        super(props);
        if (i18n.getLanguage() !== props.settings.language) {
            i18n.setLanguage(props.settings.language || 'ru');
        }
    }

    _startNewGame() {
        this.props.deleteTeams();
        Actions.gameLauncher();
    }

    render() {
        return (
            <View style={styles.container} refreshing>
                <TouchableOpacity onPress={this._startNewGame.bind(this)}>
                    <Text style={styles.button}>{i18n.get('start')}</Text>
                </TouchableOpacity>
                {this.props.teams ?
                    <TouchableOpacity onPress={Actions.game}>
                        <Text style={styles.button}>{i18n.get('continue')}</Text>
                    </TouchableOpacity> :
                    null
                }
                <TouchableOpacity onPress={Actions.settings}>
                    <Text style={styles.button}>{i18n.get('settings')}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Launch.propTypes = {
    teams: React.PropTypes.arrayOf(React.PropTypes.object),
    deleteTeams: React.PropTypes.func.isRequired
};

module.exports = connect(
    (state) => ({
        teams: state.routes.teams,
        settings: state.routes.settings
    }),
    (dispatch) => ({
        deleteTeams: bindActionCreators(teamActions.deleteTeams, dispatch)
    })
)(Launch);
