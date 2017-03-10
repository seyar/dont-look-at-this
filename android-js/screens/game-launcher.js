'use strict';

var React = require('react');
var {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TextInput
} = require('react-native');
var {Actions} = require('react-native-router-flux');
import {bindActionCreators} from 'redux';
import teamActions from '../actions/teams'
import {connect} from 'react-redux';

var styles = require('./../styles/style');
var i18n = require('../i18n/i18n');

import modalError from './modal-error'

var DEFAULT_TEAM_SET = [
    {
        name: '',
        color: getRandomColor(),
        players: ['', '']
    },
    {
        name: '',
        color: getRandomColor(),
        players: ['', '']
    }
];

class GameLauncher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: DEFAULT_TEAM_SET
        };
    }

    _game() {
        if (validate(this.state.teams)) {
            this.props.saveTeams(this.state.teams);
            Actions.game();
        } else {
            // Popup about not enough players.
            this.setState({
                errorMessage: i18n.get('not-enough-players')
            });
        }
    }

    _back() {
        if (validate(this.state.teams)) {
            this.props.saveTeams(this.state.teams);
        }
        Actions.launch();
    }

    _dismissModal() {
        console.log('game-launcher.js::_dismissModal()');
        this.setState({errorMessage: ''});
    }

    _addTeam() {
        var teams = this.state.teams ? this.state.teams.slice() : [];
        teams.push({
            name: '',
            color: getRandomColor(),
            players: ['', '']
        });
        this.setState({teams: teams});
    }

    _addPlayer(teamId) {
        var teams = this.state.teams ? this.state.teams.slice() : [];
        if (teams[teamId] && Object.keys(teams[teamId]).length) {
            teams[teamId].players = teams[teamId].players || [];

            teams[teamId].players.push({});
            this.setState({teams: teams});
        }
    }

    _onTeamChange(i, value) {
        var teams = this.state.teams.slice();
        teams[i] = teams[i] && Object.keys(teams[i]).length ? teams[i] : {};
        teams[i].name = value;
        this.setState({teams: teams});
    }

    _onPlayerChange(teamId, playerId, value) {
        var teams = this.state.teams.slice();
        if (Object.keys(teams[teamId]).length) {
            teams[teamId].players = teams[teamId].players || [];

            teams[teamId].players[playerId] = value;
            this.setState({teams: teams});
        }
    }

    _renderTeam(team, i) {
        var players = team.players && Object.keys(team.players).length ? team.players : [];
        return (
            <View key={i}>
                <View style={{backgroundColor: team.color, width: 10, height: 10}}/>
                <TextInput
                    style={styles.input}
                    placeholder={i18n.get('commandTitle')}
                    value={team.name || ''}
                    onChange={(event) => this._onTeamChange(i, event.nativeEvent.text)}
                />
                {players.map((player, j) => this._renderPlayer(player, i, j))}
                <TouchableOpacity onPress={this._addPlayer.bind(this, i)}>
                    <Text style={styles.button}>{i18n.get('addPlayer')}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _renderPlayer(player, teamId, playerId) {
        return (
            <TextInput
                key={[teamId, playerId].join(',')}
                style={styles.input}
                placeholder={i18n.get('playerName') + " " + (playerId + 1)}
                value={player || ''}
                onChange={(event) => this._onPlayerChange(teamId, playerId, event.nativeEvent.text)}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>{i18n.get('settings')}</Text>
                    <TouchableOpacity onPress={this._back.bind(this)}>
                        <Text style={styles.button}>{i18n.get('back')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._game.bind(this)}>
                        <Text style={styles.button}>{i18n.get('play')}</Text>
                    </TouchableOpacity>
                    {this.state.teams.map(this._renderTeam.bind(this))}
                    <TouchableOpacity onPress={this._addTeam.bind(this)}>
                        <Text style={styles.button}>{i18n.get('addTeam')}</Text>
                    </TouchableOpacity>
                </ScrollView>
                {this.state.errorMessage ?
                    <TouchableOpacity style={styles.modalContainer} onPress={this._dismissModal.bind(this)}>
                        <View style={styles.modalContent}>
                            <Text>{this.state.errorMessage}</Text>
                        </View>
                    </TouchableOpacity> :
                    null
                }
            </View>
        );
    }
}

GameLauncher.propTypes = {
    teams: React.PropTypes.arrayOf(React.PropTypes.object),
    saveTeams: React.PropTypes.func.isRequired
};

function validate(teams) {
    return teams.every((team) =>
        team.name && team.players.length && team.players.every((player) => Boolean(player))
    );
}

function getRandomColor() {
    return '#' + '0123456789abcdef'
            .split('')
            .map((v, i, a) => (
                i > 5 ? null : a[Math.floor(Math.random() * 16)]
            )).join('');
}

module.exports = connect(
    (state) => ({teams: state.routes.teams}),
    (dispatch) => ({
        saveTeams: bindActionCreators(teamActions.saveTeams, dispatch)
    })
)(GameLauncher);
