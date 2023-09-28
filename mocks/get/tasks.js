const { faker } = require("@faker-js/faker");

function createRandomTasks() {
  return {
    id: faker.string.uuid(),
    taskName: faker.lorem.words(2),
    relatedGoal: faker.lorem.words(2),
  };
}

module.exports = {
  path: '/tasks',
  method: 'GET',
  template: faker.helpers.multiple(createRandomTasks, {
    count: 5,
  })
}
