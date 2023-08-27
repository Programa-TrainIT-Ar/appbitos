const { goalsFunctions } = require('../get/tasks')


module.exports = [
  {
    path: '/goals/:gid',
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.removeGoal(params.gid)
          return { status: 200, message: "Goal Removed!" }
        } catch (error) {
          return error.message
        }
      }
    }
  },
  {
    path: "/goals/:gid/:cid",
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.removeComposedTask(params.gid, params.cid)
          return { status: 200, message: "Composed task Removed!" }
        } catch (error) {
          return error.message
        }
      }

    }
  },
  {
    path: "/goals/:gid/:cid/:sid",
    template: {
      response: function(params, query, body) {
        try {
          goalsFunctions.removeSimpleTask(params.gid, params.cid, params.sid)
          return { status: 200, message: "Simple task Removed!" }
        } catch (error) {
          return error.message
        }
      }

    }
  }

]
