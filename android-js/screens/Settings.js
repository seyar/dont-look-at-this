'use strict';

var React = require('react');
var {View, Text, TouchableOpacity} = require('react-native');
var {Actions} = require('react-native-router-flux');

var styles = require('./../styles/style');

class Register extends React.Component {
    render(){
        return (
            <View>
                <Text>Settings page</Text>
                <TouchableOpacity onPress={Actions.launch}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = Register;
