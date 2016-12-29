'use strict';

var React = require('react');
var {
    View,
    Text,
    TouchableOpacity,
    TextInput
} = require('react-native');
var {Actions} = require('react-native-router-flux');
import * as settingsActions from '../actions/settings'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

var styles = require('./../styles/style');
var i18n = require('../i18n/ru');

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: this.props.teams
        };
    }

    componentDidMount() {
        this.props.settingsActions.getSettings();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({teams: nextProps.teams});
    }

    componentWillUnmount() {
        this._saveTeams();
    }

    _saveTeams() {
        this.props.settingsActions.saveTeams(this.state.teams);
    }

    _onTeamChange(i, value) {
        var teams = this.state.teams.slice();
        teams[i] = Object.keys(teams[i]).length ? teams[i] : {};
        teams[i].name = value;
        this.setState({teams: teams});
    }

    _onPlayerChange(teamId, playerId, value) {
        var teams = this.state.teams.slice();
        if (Object.keys(teams[teamId]).length) {
            teams[teamId].players = teams[teamId].players || [];

            teams[teamId].players[playerId] = {name: value};
            this.setState({teams: teams});
        }
    }

    _renderTeam(team, i) {
        var players = team.players && Object.keys(team.players).length ? team.players : [{}];
        return (
            <View key={i}>
                <TextInput
                    style={styles.input}
                    placeholder={i18n.commandTitle}
                    value={team.name || ''}
                    onBlur={this._saveTeams.bind(this)}
                    onChange={(event) => this._onTeamChange(i, event.nativeEvent.text)}
                />
                {players.map((player, j) => this._renderPlayer(player, i, j))}
            </View>
        );
    }

    _renderPlayer(player, teamId, playerId) {
        return (
            <TextInput
                key={[teamId, playerId].join(',')}
                style={styles.input}
                placeholder={i18n.playerName + " " + (playerId + 1)}
                value={player.name || ''}
                onBlur={this._saveTeams.bind(this)}
                onChange={(event) => this._onPlayerChange(teamId, playerId, event.nativeEvent.text)}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{i18n.settings}</Text>
                <TouchableOpacity onPress={Actions.launch}>
                    <Text style={styles.button}>{i18n.back}</Text>
                </TouchableOpacity>
                {this.state.teams.map(this._renderTeam.bind(this))}
                <TouchableOpacity onPress={Actions.launch}>
                    <Text style={styles.button}>{i18n.addCommand}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = connect(
    (state) => ({teams: state.routes.teams}),
    (dispatch) => ({settingsActions: bindActionCreators(settingsActions, dispatch)})
)(Settings);
