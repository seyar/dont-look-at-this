import React from 'react';
import { View } from 'react-native';
var {
    Router,
    Route,
    Animations,
    Schema
} = require('react-native-redux-router');
// var {NavBar, NavBarModal} = require('./components/NavBar');

var Launch = require('./screens/Launch');
// var Register = require('./screens/Register');
// var Home = require('./screens/Home');
// var Login = require('./screens/Login');
// var Error = require('./screens/Error');

class App extends React.Component {
    /*<Route name="register" component={Register} title="Register"/>
    <Route name="home" component={Home} title="Home" type="replace"/>

    <Route name="error" component={Error} schema="popup"/>

    */
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
                <Router>
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>
                    <Schema name="withoutAnimation" navBar={NavBar}/>
                    <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
                    <Schema name="tab" navBar={NavBar}/>

                    <Route name="launch" component={Launch} initial={true} hideNavBar={true} title="Launch"/>
                    <Route name="login" component={Login} schema="modal"/>
                    <Route name="register2" component={Register} schema="withoutAnimation"/>
                </Router>
            </View>
        );
    }
}

export default App;