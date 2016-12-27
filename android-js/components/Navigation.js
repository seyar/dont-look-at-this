// 'use strict';
// import React from 'react';
// import {
//     StyleSheet,
//     View,
//     Navigator
// } from 'react-native';
//
// class Navigation extends React.Component {
//    // onPrev(){
//    //     var Actions = this.props.routes;
//    //     if (this.props.onPrev){
//    //         this.props.onPrev();
//    //         return;
//    //     }
//    //     if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
//    //         Actions.pop();
//    //     }
//    // }
//    render() {
//        var Actions = this.props.routes;
//        console.log("Actions2 = ", Actions);
//        console.log("this.props = ", this.props);
//                // style={styles.navBar}
//                // statusBar= {{style:'light-content', hidden: false}}
//                // prevTitle={this.props.initial ? " " : null}
//
//        return (
//            <Navigator
//                initialRoute={{ title: 'Awesome Scene', index: 0 }}
//                renderScene={this.props.renderScene}
//                 title={'this is a test'}
//                 height={44}
//                 titleColor={'#fff'}
//                 backgroundColor={'#149be0'}
//                 leftButtonTitle={'back'}
//                 leftButtonTitleColor={'#fff'}
//                 onLeftButtonPress={()=>{}}
//                 rightButtonTitle={'forward'}
//                 rightButtonTitleColor={'#fff'}
//                 onRightButtonPress={()=>{}}
//             />
//        )
//    }
// }
// // class NavBar extends React.Component {
// //    render() {
// //      var Actions = this.props.routes;
// //        return <NavBarBase
// //            customNext={<View/>} {...this.props}
// //            leftButtonTitle='Left'
// //            onLeftButtonPress={this.props.onPrev || Actions.pop}
// //        />
// //    }
// // }
//
// // var styles = StyleSheet.create({
// //    navBar: {
// //        backgroundColor: '#0db0d9'
// //    },
// // });
//
//
// module.exports = Navigation;
