
import { Habit } from "../types/habits"

const BASE_URL = 'http://localhost:3004'

const MedalsService = {

  postHabit: async (data: Habit): Promise<Object> => {

    return await fetch(`${BASE_URL}/habits`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json())
  },


}

export default MedalsService

