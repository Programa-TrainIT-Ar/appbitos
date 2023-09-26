<<<<<<< HEAD
module.exports = [
    {
      path: '/goals',
      template: {
        response: function(params, query, body) {
          try {
            return { status: 200, message: "¡Has añadido una nueva meta!", goalAdded: body }
          } catch (error) {
            return { message: "Ha ocurrido un error", details: error.message, status: 400 }
          }
        }
      }
    },
  ]
=======


module.exports = [
  {
    path: '/goals',
    template: {
      response: function(params, query, body) {
        try {
          return { status: 200, message: "¡Has añadido una nueva meta!", goalAdded: body }
        } catch (error) {
          return { message: "Ha ocurrido un error", details: error.message, status: 400 }
        }
      }
    }
  },
]
>>>>>>> fccd8dcd4f9f21d2893294408b46aff42108573f
