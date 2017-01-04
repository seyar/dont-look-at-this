var ru = require('./ru.js');
var en = require('./en.js');

class I18n {
    constructor() {
        this._allLanguages = {
            ru,
            en
        };

        this._language = 'ru';
        this._keys = ru;
    }

    getLanguage() {
        return this._language;
    }

    setLanguage(language) {
        if (!this._allLanguages[language]) {
            throw Error('No lang ' + language);
        }
        this._language = language;
        this._keys = this._allLanguages[language];
    }

    get(key) {
        return this._keys[key] || key;
    }
}

module.exports = new I18n();
