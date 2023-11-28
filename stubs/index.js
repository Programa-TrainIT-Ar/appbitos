const users = require("./data/users");
const medals = require("./data/medals");
const { createGoal, getGoals } = require("./data/goals");

module.exports = () => {
  const data = { users: [] }

  return {
    users,
    medals,
    goals: { createGoal, getGoals }
  }
}