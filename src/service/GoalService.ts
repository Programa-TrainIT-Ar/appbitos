import { Goal } from "../types/goals"

const BASE_URL = 'http://localhost:3004'

const GoalServices = {
  
  createGoal: async (goal: Goal): Promise<Goal> => {
    return await fetch(`${BASE_URL}/goals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(goal),
    })
      .then(res => res.json())
  }
}

export default GoalServices;
