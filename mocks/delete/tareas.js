const { mockActions } = require('../get/tareas');

module.exports = {
    path: '/calendario/deleteTask',
    method: 'DELETE',
    template: {
        response: (params, query, body) => {
            mockActions.deletTask(body.id);
            return { status: 200, message: 'Task Deleted' };
        }
    }
};
