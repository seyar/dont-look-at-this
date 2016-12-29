import {ActionConst} from 'react-native-router-flux';
var initialState = {
    scene: {},
    teams: [{}]
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // focus action is dispatched when a new screen comes into focus
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene,
            };
        case 'MERGE':
            return Object.assign({}, {...state}, action.payload);

        default:
            return state;
    }
}
