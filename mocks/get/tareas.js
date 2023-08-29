const { faker } = require('@faker-js/faker');

function createDatesCalendar() {
    return {
        id: faker.string.uuid(),
        date: faker.date.future(),
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
            count: 5
        }),
        {
            date: '2023-01-12T20:45:25.369Z',
            title: '2VOap3wJyujBr',
            description: 'GrU#(}k/nI5^HAL2VwH.ZHm@/$C?kClK;*E)0lVEGex.B|Fk-ZhrJnimuP9Zt`UqY:pfr=]<EBRTBDFHFtXx1&Vw4FKNY6CF>/>DAn#y5;Gx.Z`>FT$9".t?qN/}gc?3iY`.]%"Xw+7TRwP-A6+|o:c(=D\'ox"#s,\\6)x88igBvQ$@9f^ng$/',
            priority: 'medium'
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
    }
};

module.exports = {
    path: '/calendario',
    method: 'GET',
    template: mock,
    mockActions
};
