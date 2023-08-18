const {faker} = require('@faker-js/faker');

function createRandomMedal() {
    return {
        id: faker.string.uuid(),
        name: "testName", 
        requirements: "testRequeriments",
        image: faker.image.avatar(),
        dificulty: faker.number.int({min:1, max:5})
    };
}

module.exports = faker.helpers.multiple(createRandomMedal(), {
    count: 5,
})

