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
          return { message: "Ha ocurrido un error", details: error.message, status: 400 }
        }
      }
    }
  },
  {
    path: "/goals/:gid",
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.addComposedTask(params.gid, body)
          return { status: 200, message: "Composed task Added" }
        } catch (error) {
          return { message: "Ha ocurrido un error, posiblemente no se encontro la meta", details: error.message, status: 400 }
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
          return { status: 200, message: "Simple task Added" }
        } catch (error) {
          return { message: "Ha ocurrido un error, posiblemente no se encontro la tarea compuesta", details: error.message, status: 400 }
        }
      }

    }
  }

]
