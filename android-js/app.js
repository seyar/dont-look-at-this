import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
var {Router, Scene} = require('react-native-router-flux');
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';

var Launch = require('./screens/Launch');
var Register = require('./screens/Register');
var Settings = require('./screens/Settings');
var Game = require('./screens/Game');

var RouterWithRedux = connect()(Router);

var middleware = [];
var store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="launch" component={Launch} initial={true} title="Launch" hideNavBar={true}/>
                        <Scene key="register" component={Register} title="Register"/>
                        <Scene
                            key="settings"
                            component={Settings}
                            title="Settings"
                            type="replace"
                        />
                        <Scene key="game" component={Game} title="Game"/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;
