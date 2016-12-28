'use strict';

var React = require('react');
var {
    View,
    Text,
    TouchableOpacity,
    Picker
} = require('react-native');
var {Actions} = require('react-native-router-flux');

var styles = require('./../styles/style');

class Register extends React.Component {
                  // selectedValue={this.state.language}
    render(){
        return (
            <View style={styles.container}>
                <Text>Settings page</Text>
                <TouchableOpacity onPress={Actions.launch}>
                    <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
                <Picker
                  onValueChange={(value) => ''}>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                </Picker>
            </View>
        );
    }
}

module.exports = Register;
