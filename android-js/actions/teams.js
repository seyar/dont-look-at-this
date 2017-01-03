var {AsyncStorage} = require('react-native');
var SETTINGS_KEY = 'Game.teams';

var actions = {
    saveTeams: function (teams) {
        return (dispatch) => {
            AsyncStorage
                .setItem(SETTINGS_KEY, JSON.stringify(teams))
                .then(() => {
                    dispatch({
                        type: 'MERGE',
                        payload: {
                            teams: teams
                        }
                    });
                })
            ;
        }
    },

    savePlayer: function (teamId) {
        return (dispatch) => {
            AsyncStorage
                .setItem(SETTINGS_KEY, '')
                .then(this.getTeams);
        }
    },

    getTeams: function () {
        return (dispatch) => dispatchTeams(dispatch)
    },

    deleteTeams: function () {
        return (dispatch) => {
            AsyncStorage
                .removeItem(SETTINGS_KEY)
                .then(() => {
                    dispatch({
                        type: 'MERGE',
                        payload: {
                            teams: null
                        }
                    });
                })
        }
    }

};

function dispatchTeams(dispatch) {
    AsyncStorage.getItem(SETTINGS_KEY)
        .then((teams) => {
            dispatch({
                type: 'MERGE',
                payload: {
                    teams: teams ? JSON.parse(teams) : [{}]
                }
            });
        });
}

export default actions;
