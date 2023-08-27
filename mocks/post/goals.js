const { goalsFunctions } = require('../get/tasks')


module.exports = [
  {
    path: '/goals',
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.addGoal(body)
          return { status: 200, message: "Goal Added" }
        } catch (error) {
          return error.message
        }
      }
    }
  },
  {
    path: "/goals/:cid",
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.addComposedTask(params.cid, body)
          return { status: 200, message: "Goal Added" }
        } catch (error) {
          return error.message
        }
      }

    }
  },
  {
    path: "/goals/:gid/:tid",
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.addSimpleTasks(params.gid, params.tid, body)
          return { status: 200, message: "Goal Added" }
        } catch (error) {
          return error.message
        }
      }

    }
  }

]
