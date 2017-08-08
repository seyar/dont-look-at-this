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
    gameBg: {
        yard: {
          display:flex;
          width: 80%;
          height: 300px;
          background: green;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: space-between;
          align-content: space-between;
        },
        field: {
          background: green;
          border: 1px solid yellow;
          border-radius: 4px;
          margin: 5px;
          height: 40px;
          width: 40px;
          flex-basis: 40px;
          font-size: 20px;
          text-align: center;
          vertical-align: middle;
          position: relative;
          z-index: 2;
        },
        fieldBefore {
          content: '';
          width: 1px;
          background: yellow;
          height: 40px;
          position: absolute;
          top:100%;
          left: 50%;
          z-index: 1;
        }

        .field:nth-child(10n-5):before {
          background: yellow;
          height: 1px;
          width: 100px;
          top: 50%;
          left: 100%;
        }

        .field:nth-child(10n):before {
          display: none;
        }

        .field:nth-child(10n-4):after {
          content: '';
          position: absolute;
          background: yellow;
          height: 1px;
          width: 100px;
          top: 50%;
          left: 100%;
        }
    },
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
