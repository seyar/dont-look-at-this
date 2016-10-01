var React = require('react-native');
var {View} = React;
var {
    Router,
    Route,
    Animations,
    Schema
} = require('react-native-redux-router');
var Launch = require('./components/Launch');
var Register = require('./components/Register');
var Home = require('./components/Home');
var Login = require('./components/Login');
var Error = require('./components/Error');
var {NavBar, NavBarModal} = require('./components/NavBar');

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