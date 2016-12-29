module.exports = {
    get: function (key) {
        return require('./' + key + '.js');
    }
};
