<<<<<<< HEAD
const { faker } = require("@faker-js/faker");

function createRandomTasks() {
  return {
    id: faker.string.uuid(),
    taskName: faker.lorem.words(2),
    relatedGoal: faker.lorem.words(2),
  };
}

module.exports = {
  path: '/tasks',
  method: 'GET',
  template: faker.helpers.multiple(createRandomTasks, {
    count: 5,
  })
}
=======

const { faker } = require("@faker-js/faker");


const goalsTemplate =
  [
    {
      id: faker.string.uuid(),
      name: "Mejorar la salud",
      status: false,
      composedTasks: [
        {

          id: faker.string.uuid(),
          name: "Perder peso",
          status: false,
          simpleTasks: [
            {
              id: faker.string.uuid(),
              name: "Comer más sano",
              description: "Evitar alimentos procesados, azúcares y grasas saturadas",
              start_date: "2023-08-26",
              end_date: "2023-12-31",
              status: true
            },
            {
              id: faker.string.uuid(),
              name: "Hacer ejercicio regularmente",
              description: "Ir al gimnasio 3 veces por semana durante 30 minutos",
              start_date: "2023-08-26",
              end_date: "2023-12-31",
              status: false
            }
          ]
        },
        {

          id: faker.string.uuid(),
          name: "Dejar de fumar",
          status: false,
          simpleTasks: [
            {
              id: faker.string.uuid(),
              name: "Buscar alternativas",
              description: "Probar otro tipo de cigarrillo con menos nicotina",
              start_date: "2023-08-26",
              end_date: "2023-12-31",
              status: false
            }
          ]
        }
      ]
    },
    {
      id: faker.string.uuid(),
      name: "Viajar por el mundo",
      status: false,
      composedTasks: [
        {
          id: faker.string.uuid(),
          name: "Reunir dinero",
          status: false,
          simpleTasks: [
            {
              id: faker.string.uuid(),
              name: "Reducir gastos",
              description: "Gastar menos en comida preparada",
              start_date: "2023-08-26",
              end_date: "2023-12-31",
              status: true,

            },
            {
              id: faker.string.uuid(),
              name: "Tener un proyecto personal que genere dinero",
              description: "Generar un sitio web con anuncios",
              start_date: "2023-08-26",
              end_date: "2023-12-31",
              status: false,
            }
          ]
        },
        {
          id: faker.string.uuid(),
          name: "Investigar las mejores rutas",
          status: false,
          simpleTasks: [
            {
              id: faker.string.uuid(),
              name: "Buscar en internet propuestas",
              description: "Buscar en minimo 5 paginas rutas a seguir",
              start_date: "2023-12-31",
              end_date: "2024-04-21",
              status: false
            }
          ]
        }
      ]
    }
  ]


const goalsFunctions = {

  addGoal(goal) {
    goal.id = faker.string.uuid()
    goal.composedTasks = []
    goalsTemplate.push(goal)
  },
  addComposedTask(goalId, composedTask) {
    composedTask.id = faker.string.uuid()
    composedTask.simpleTasks = []
    const goal = goalsTemplate.find((g) => g.id === goalId);
    goal.composedTasks.push(composedTask);
  },
  addSimpleTasks(goalId, composedTaskId, simpleTask) {
    simpleTask.id = faker.string.uuid()
    const goal = goalsTemplate.find((el) => el.id === goalId)
    const composedTask = goal.composedTasks.find(el => el.id === composedTaskId)
    composedTask.simpleTasks.push(simpleTask)
  },
  removeGoal(goalId) {
    const goalIndex = goalsTemplate.findIndex((g) => g.id === goalId);
    if (goalIndex > -1) {
      goalsTemplate.splice(goalIndex, 1);
    } else throw new Error("Not Found")
  },
  removeComposedTask(goalId, composedTaskId) {
    const goal = goalsTemplate.find(goal => goal.id === goalId)
    const composedTaskIndex = goal.composedTasks.findIndex(el => el.id === composedTaskId)
    if (composedTaskIndex != -1) {
      goal.composedTasks.splice(composedTaskIndex, 1)
    } else {
      throw new Error("Composed task Not Found")

    }
  },
  removeSimpleTask(goalId, composedTaskId, simpleTaskId) {
    console.log(goalId, composedTaskId, simpleTaskId)
    const goal = goalsTemplate.find(goal => goal.id === goalId)
    const composedTask = goal.composedTasks.find(el => el.id === composedTaskId)
    const foundSimpleTask = composedTask.simpleTasks.findIndex(el => el.id === simpleTaskId)
    if (foundSimpleTask != -1) {
      composedTask.simpleTasks.splice(foundSimpleTask, 1)
    } else
      throw new Error("Simple task not Found")

  }

}

module.exports = {
  path: '/goals',
  method: 'GET',
  cache: false,
  template: goalsTemplate,
  goalsFunctions: goalsFunctions
};
>>>>>>> master
