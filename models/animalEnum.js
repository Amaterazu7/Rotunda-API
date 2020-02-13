class AnimalEnum {
    constructor() {
        this.LION = 'LION';
        this.TIGER = 'TIGER';
        this.PANTHER = 'PANTHER';
    }
}

module.exports = Object.freeze(new AnimalEnum());
