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
          return { message: "Ha ocurrido un error" }
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
          return { message: "Ha ocurrido un error" }
        }
      }

    }
  },
  {
    path: "/goals/tasks/:tid",
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.addSimpleTasks(params.tid, body)
          return { status: 200, message: "Goal Added" }
        } catch (error) {
          return { message: "Ha ocurrido un error" }
        }
      }

    }
  }

]
