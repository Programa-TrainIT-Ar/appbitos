const goals = [];

const createGoal = (title, description, task) => {
  const newGoal = {
    title,
    description,
    task
  }
  goals.push(newGoal);
  return newGoal;
}

const getGoals = () => {
  return goals;
}

module.exports = {
  createGoal,
  getGoals
};