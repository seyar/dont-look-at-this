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
var i18n = require('../i18n/ru');

class Launch extends React.Component {
    _startNewGame() {
        this.props.deleteTeams();
        Actions.gameLauncher();
    }

    render() {
        return (
            <View style={styles.container} refreshing>
                <TouchableOpacity onPress={this._startNewGame.bind(this)}>
                    <Text style={styles.button}>{i18n.start}</Text>
                </TouchableOpacity>
                {this.props.teams ?
                    <TouchableOpacity onPress={Actions.game}>
                        <Text style={styles.button}>{i18n.continue}</Text>
                    </TouchableOpacity> :
                    null
                }
                <TouchableOpacity onPress={Actions.settings}>
                    <Text style={styles.button}>{i18n.settings}</Text>
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
    (state) => ({teams: state.routes.teams}),
    (dispatch) => ({
        deleteTeams: bindActionCreators(teamActions.deleteTeams, dispatch)
    })
)(Launch);
