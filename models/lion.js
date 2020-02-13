const Animal = require('./animal');
const _ = require('lodash');

class Lion extends Animal {
    constructor(name) {
        super(name);
        this.roar = 'roar';
    }

    speak(input) {
        const arrayInput = _.words(input, /[^, ]+/g);
        _.forEach(arrayInput, (word) => {
            this.sound = this.sound.concat(word, ` ${this.roar} `);
        });
        return _.trimEnd(this.sound);
    }
}

module.exports = Lion;
