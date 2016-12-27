var {StyleSheet} = require('react-native');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#44FF00',
        alignItems: 'center',
        flexWrap: 'nowrap'
    },
    simpleText: {
        fontSize: 15,
        color: '#00e'
    },
    button: {
        padding: 10,
        backgroundColor: 'orange',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#fea',
        borderRadius: 3,
    }
});
