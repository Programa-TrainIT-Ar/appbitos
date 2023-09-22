const { faker } = require('@faker-js/faker');

function createDatesCalendar() {
    return {
        id: faker.string.uuid(),
        startDate: faker.date.future(),
        allDay: Math.random() * 10 > 5,
        title: faker.string.nanoid({ min: 10, max: 30 }),
        description: faker.string.sample({ min: 30, max: 250 }),
        priority: faker.string.fromCharacters(['low', 'medium', 'high']),
        etiquette: {
            name: faker.string.fromCharacters(['etiqueta1', 'etiqueta2', 'etiqueta3']),
            color: faker.string.hexadecimal({ length: 6, casing: 'mixed', prefix: '' })
        }
    };
}

const mock = {
    user: {
        id: faker.string.uuid(),
        username: faker.internet.userName()
    },
    dates: [
        ...faker.helpers.multiple(createDatesCalendar, {
            count: 2
        }),
        {
            startDate: '2023-01-12T20:45:25.369Z',
            title: '2VOap3wJyujBr',
            description: 'GrU#(}k/nI5^HAL2VwH.ZHm@/$C?kClK;*E)0lVEGex.B|Fk-ZhrJnimuP9Zt`UqY:pfr=]<EBRTBDFHFtXx1&Vw4FKNY6CF>/>DAn#y5;Gx.Z`>FT$9".t?qN/}gc?3iY`.]%"Xw+7TRwP-A6+|o:c(=D\'ox"#s,\\6)x88igBvQ$@9f^ng$/',
            priority: 'medium'
        },

        {
            title: 'task 1 ',
            startDate: '2023-09-19T03:00:00.000Z',
            endDate: '2023-09-20T03:00:00.000Z',
            id: 'af9f6dc6-e6f9-4615-821d-bd20dab447be',
            allDay: true,
            priority: 'low'
        },
        {
            title: 'tarea 2 ',
            startDate: '2023-09-26T03:00:00.000Z',
            endDate: '2023-09-26T20:25:00.000Z',
            id: '12c480ee-fe67-489e-a76c-84d65f60ca76',
            allDay: false,
            rRule: 'RRULE:INTERVAL=1;FREQ=DAILY;COUNT=15',
            priority: 'low'
        }
    ]
};

const mockActions = {
    addTask: (task) => {
        mock.dates.push(task);
    },
    deletTask: (taskId) => {
        const filter = mock.dates.filter((task) => taskId !== task.id);
        mock.dates = filter;
    },
    editTask: (idWidthEdition) => {
        const edited = mock.dates.map((task) => {
            const id = Object.keys(idWidthEdition)[0];
            if (task.id !== id) {
                return task;
            } else {
                return { ...task, ...idWidthEdition[id] };
            }
        });
        mock.dates = edited;
    }
};

module.exports = {
    path: '/calendario',
    method: 'GET',
    template: mock,
    cache: false,
    mockActions
};
