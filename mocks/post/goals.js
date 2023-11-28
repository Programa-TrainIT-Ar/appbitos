<<<<<<< HEAD
=======
const { goalsFunctions } = require('../get/tasks')


>>>>>>> master
module.exports = [
  {
    path: '/goals',
    template: {
      response: function(params, query, body) {
        try {
<<<<<<< HEAD
          return { status: 200, message: "¡Has añadido una nueva meta!", goalAdded: body }
=======
          goalsFunctions.addGoal(body)
          return { status: 200, message: "Goal Added" }
>>>>>>> master
        } catch (error) {
          return { message: "Ha ocurrido un error", details: error.message, status: 400 }
        }
      }
    }
  },
<<<<<<< HEAD
]

=======
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
>>>>>>> master
