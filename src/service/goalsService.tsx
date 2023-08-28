import { Goal } from "../types/goals";

const BASE_URL = 'http://localhost:3004'

export const goalsService = {

  getGoals: async (): Promise<Goal[]> => {
    return await fetch(`${BASE_URL}/goals`)
      .then(res => res.json())
  }

};
