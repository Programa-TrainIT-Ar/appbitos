import { ComposedTask, Goal, SimpleTask } from "../types/goals";

const BASE_URL = 'http://localhost:3004'

export const GoalsService = {

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

  createComposedTask: async (goalId: string, data: ComposedTask): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${goalId}`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  createSimpleTask: async (goalId: string, ComposedTaskId: string, data: SimpleTask): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${goalId}/${ComposedTaskId}`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  deleteGoal: async (goalId: string): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${goalId}`, {
      method: "DELETE",
    }).then(res => res.json())
  },

  deleteComposedTask: async (goalId: string, ComposedTaskId: string): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${goalId}/${ComposedTaskId}`, {
      method: "DELETE",
    }).then(res => res.json())
  },

  deleteSimpleTask: async (goalId: string | undefined, ComposedTaskId: string | undefined, SimpleTaskId: string | undefined): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${goalId}/${ComposedTaskId}/${SimpleTaskId}`, {
      method: "DELETE",
    }).then(res => res.json())
  }

};
