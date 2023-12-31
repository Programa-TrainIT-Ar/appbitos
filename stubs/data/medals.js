const { faker } = require('@faker-js/faker');

function createRandomImage() {

  const randomMedals = [
    "https://www.svgrepo.com/show/178828/medal-medal.svg",
    "https://www.svgrepo.com/show/180473/medal-medal.svg",
    "https://www.svgrepo.com/show/180485/chevron-military.svg",
    "https://www.svgrepo.com/show/180482/target-target.svg",
    "https://www.svgrepo.com/show/180494/signal-connection.svg",
    "https://www.svgrepo.com/show/180523/diploma-interface.svg",
    "https://www.svgrepo.com/show/180522/chevron-military.svg"

  ]

  return randomMedals[faker.number.int({ min: 0, max: 6 })]

}


function createRandomMedal() {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.words(2),
    requirements: faker.lorem.words(15),
    image: createRandomImage(),
    dificulty: faker.number.int({ min: 1, max: 5 }),
    obtained: faker.datatype.boolean()

  };
}

module.exports = faker.helpers.multiple(createRandomMedal, {
  count: 100,
})


