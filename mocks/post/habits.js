

module.exports = [
  {
    path: '/goals',
    template: {
      response: function(params, query, body) {
        try {
          return { status: 200, message: "Goal Added" }
        } catch (error) {
          return { message: "Ha ocurrido un error", details: error.message, status: 400 }
        }
      }
    }
  },]
