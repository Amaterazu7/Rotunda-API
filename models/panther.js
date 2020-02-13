const Animal = require('./animal');
const _ = require('lodash');

class Panther extends Animal {
    constructor(name) {
        super(name);
        this.wakanda = 'wakanda';
    }

    speak(input) {
        const arrayInput = _.words(input, /[^, ]+/g);
        _.forEach(arrayInput, (word) => {
            this.sound = this.sound.concat(word, ` ${this.wakanda} `);
        });
        return _.trimEnd(this.sound);
    }
}

module.exports = Panther;
