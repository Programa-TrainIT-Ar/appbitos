import { Goal } from "../types/goals";

const BASE_URL = 'http://localhost:3004'

export const goalsService = {

  getGoals: async (): Promise<Goal[]> => {
    return await fetch(`${BASE_URL}/goals`)
      .then(res => res.json())
  },

  createGoal: async (data: Goal): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  deleteGoal: async (gid: string): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${gid}`, {
      method: "DELETE",
    }).then(res => res.json())
  }





};
