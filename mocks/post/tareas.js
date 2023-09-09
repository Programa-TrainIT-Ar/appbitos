const { mockActions } = require('../get/tareas');

module.exports = [
    {
        path: '/calendario/addTask',
        method: 'POST',
        template: {
            response: (params, query, body) => {
                mockActions.addTask(body);
                return { status: 200, message: 'Task add' };
            }
        }
    },
    {
        path: '/calendario/editTask',
        method: 'POST',
        template: {
            response: (params, query, body) => {
                mockActions.editTask(body);
                return { status: 200, message: 'Task edited' };
            }
        }
    }
];
