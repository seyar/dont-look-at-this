import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './android-js/app';
class AwesomeProject extends Component {
    render() {
        return <App />;
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
