const users = require("./data/users")
const medals = require("./data/medals")

module.exports = () => {
  const data = { users: [] }

  return {
    users,
    medals
  }
}
