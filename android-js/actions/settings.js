var {AsyncStorage} = require('react-native');
var SETTINGS_KEY = 'Game.settings';

var actions = {
    saveSettings: function (settings) {
        return (dispatch) => {
            AsyncStorage
                .setItem(SETTINGS_KEY, JSON.stringify(settings))
                .then(() => {
                    dispatch({
                        type: 'MERGE',
                        payload: {
                            settings: settings
                        }
                    });
                })
            ;
        }
    }
};

export default actions;
