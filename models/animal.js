const uuid = require('uuid/v4');

const toBeImplemented = () => {
    throw `Subclass needs to be implement this function!`;
};

class Animal {
    constructor(name) {
        this.id = uuid();
        this.name = name;
        this.sound = '';
    }

    speak(input) {
        toBeImplemented();
    }

    getId() {
        return this.id;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }
}

module.exports = Animal;
