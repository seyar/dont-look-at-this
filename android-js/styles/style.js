var {StyleSheet} = require('react-native');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#44FF01'
    },
    simpleText: {
        fontSize: 15,
        color: '#00e'
    },
    button: {
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: 'orange',
        borderRadius: 3
    },
    input: {},
    gameBg: {},
    modalContainer: {
        position: 'absolute',
        justifyContent: 'center',
        right: 0,
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 55, 55, 0.7)'
    },
    modalContent: {
        backgroundColor: 'rgba(0, 255, 255, 1.0)'
    },
    fishka: {
        width: 10,
        height: 10
    }
});
