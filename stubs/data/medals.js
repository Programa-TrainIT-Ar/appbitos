const {faker} = require('@faker-js/faker');

function createRandomMedal() {
    return {
        id: faker.string.uuid(),
        name: faker.lorem.words(1),
        requirements: faker.lorem.words(5),
        image: 'https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg',
        dificulty: faker.number.int({min:1, max:5}),
        obtainedDate: faker.date.anytime()
    
    };
}

module.exports = faker.helpers.multiple(createRandomMedal, {
    count: 5,
})


