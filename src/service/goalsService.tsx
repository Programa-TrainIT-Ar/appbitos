import { ComposedTask, Goal, SimpleTask } from "../types/goals";

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

  createComposedTask: async (gid: string, data: ComposedTask): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${gid}`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  createSimpleTask: async (gid: string, cid: string, data: SimpleTask): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${gid}/${cid}`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  deleteGoal: async (gid: string): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${gid}`, {
      method: "DELETE",
    }).then(res => res.json())
  },

  deleteComposedTask: async (gid: string, cid: string): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${gid}/${cid}`, {
      method: "DELETE",
    }).then(res => res.json())
  },

  deleteSimpleTask: async (gid: string | undefined, cid: string | undefined, sid: string | undefined): Promise<Object> => {
    return await fetch(`${BASE_URL}/goals/${gid}/${cid}/${sid}`, {
      method: "DELETE",
    }).then(res => res.json())
  }

};
