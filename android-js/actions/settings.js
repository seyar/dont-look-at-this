var {AsyncStorage} = require('react-native');
var SETTINGS_KEY = 'Settings.teams';

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
        return (dispatch, getState) => {
            AsyncStorage
                .setItem(SETTINGS_KEY, settings)
                .then(this.getSettings);
        }
    },

    getSettings: function () {
        return (dispatch) => dispatchSettings(dispatch)
    }
};

function dispatchSettings(dispatch) {
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

module.exports = actions;
