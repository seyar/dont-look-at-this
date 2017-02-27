'use strict';

var React = require('react');
var {
    View,
    Text,
    TouchableHighlight
} = require('react-native');
var {Actions} = require('react-native-router-flux');

var styles = require('./../styles/style');
var i18n = require('../i18n/i18n');

class ModalError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: true
        };
    }

    componentDidMount() {
        if (this.state.hide !== this.props.hide) {
            this.setState({hide: !this.state.hide});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.hide !== nextProps.hide) {
            this.setState({hide: !this.state.hide});
        }
    }

    _dismissModal() {
        this.setState({hide: true});
    }

    render() {
        if (this.state.hide) {
            return (
                <View/>
            );
        } else {
            return (
                <TouchableHighlight style={styles.modalContainer} onPress={this._dismissModal.bind(this)}>
                    <View style={styles.modalContent}>
                        <Text>{this.props.message}</Text>
                    </View>
                </TouchableHighlight>
            );
        }
    }
}

ModalError.propTypes = {
    message: React.PropTypes.string.isRequired,
    hide: React.PropTypes.bool
};

module.exports = ModalError;
