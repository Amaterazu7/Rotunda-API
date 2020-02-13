const Animal = require('./animal');
const _ = require('lodash');

class Tiger extends Animal {
    constructor(name) {
        super(name);
        this.grrr = 'grrr';
    }

    speak(input) {
        const arrayInput = _.words(input, /[^, ]+/g);
        _.forEach(arrayInput, (word) => {
            this.sound = this.sound.concat(word, ` ${this.grrr} `);
        });
        return _.trimEnd(this.sound);
    }
}

module.exports = Tiger;
