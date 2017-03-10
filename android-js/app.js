import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
var {Router, Scene, Modal} = require('react-native-router-flux');
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

var Launch = require('./screens/launch');
var Settings = require('./screens/settings');
var GameLauncher = require('./screens/game-launcher');
var Game = require('./screens/game');
var ModalError = require('./screens/modal-error');

var RouterWithRedux = connect()(Router);

var middleware = [thunk, createLogger()];
var store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene
                            key="launch"
                            component={Launch}
                            initial={true}
                            title="Launch"
                            hideNavBar={true}
                            direction="leftToRight"
                            duration={100}
                        />
                        <Scene
                            key="settings"
                            component={Settings}
                            title="Settings"
                            hideNavBar={true}
                            type="replace"
                            duration={100}
                        />
                        <Scene
                            key="gameLauncher"
                            component={GameLauncher}
                            hideNavBar={true}
                            title="Game"
                            direction="rightToLeft"
                            duration={100}
                        />
                        <Scene
                            key="game"
                            component={Game}
                            hideNavBar={true}
                            title="Game"
                            direction="rightToLeft"
                            duration={100}
                        />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;
