'use strict';

// var NavigationBar = require('react-native-navigation-bar');
import { Navigation } from 'react-native-navigation';

var React = require('react-native');
var {StyleSheet,View} = React;
var {Router, Route, Animations, Schema} = require('react-native-redux-router');

class NavBarBase extends React.Component {
   // onPrev(){
   //     var Actions = this.props.routes;
   //     if (this.props.onPrev){
   //         this.props.onPrev();
   //         return;
   //     }
   //     if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
   //         Actions.pop();
   //     }
   // }
   render() {
       var Actions = this.props.routes;
               // style={styles.navBar}
               // statusBar= {{style:'light-content', hidden: false}}
               // prevTitle={this.props.initial ? " " : null}
       return (
           <NavigationBar
                title={'this is a test'}
                height={44}
                titleColor={'#fff'}
                backgroundColor={'#149be0'}
                leftButtonTitle={'back'}
                leftButtonTitleColor={'#fff'}
                onLeftButtonPress={()=>{}}
                rightButtonTitle={'forward'}
                rightButtonTitleColor={'#fff'}
                onRightButtonPress={()=>{}}
            />
       )
   }
}
class NavBar extends React.Component {
   render() {
     var Actions = this.props.routes;
       return <NavBarBase
           customNext={<View/>} {...this.props}
           leftButtonTitle='Left'
           onLeftButtonPress={this.props.onPrev || Actions.pop}
       />
   }
}


class NavBarModal extends React.Component {
   render() {
     var Actions = this.props.routes;
       return <NavBarBase
           customPrev={<View/>} nextTitle='Close'
           {...this.props}
           rightButtonTitle='Close'
           onRightButtonPress={this.props.onNext || Actions.pop}
       />
   }
}

var styles = StyleSheet.create({
   navBar: {
       backgroundColor: '#0db0d9'
   },
});


module.exports = {NavBar, NavBarModal};
