const Enum = require('../models/animalEnum');
const Tiger = require('../models/tiger');
const Lion = require('../models/lion');
const Panther = require('../models/panther');

class AnimalFactory {

    static createAnimals(animalType) {
        switch (animalType) {
            case Enum.LION:
                return new Lion(Enum.LION);

            case Enum.TIGER:
                return new Tiger(Enum.TIGER);

            case Enum.PANTHER:
                return new Panther(Enum.PANTHER);

            default:
                throw new Error(`:: The value is not a valid ANIMAL_ENUM :: >> " ${animalType} " `);
        }
    }

}

module.exports = AnimalFactory;
