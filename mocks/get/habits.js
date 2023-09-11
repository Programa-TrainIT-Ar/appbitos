const { faker } = require("@faker-js/faker");

function createRandomHabit() {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    frequency: faker.lorem.words(2),
    goals: faker.lorem.words(3),
    tags: faker.helpers.multiple(faker.person.firstName),
  };
}

module.exports = {
  path: '/habits',
  method: 'GET',
  template: createRandomHabit(),
};
