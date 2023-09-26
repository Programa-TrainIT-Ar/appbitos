
import { Medal } from "../types/medals"

const BASE_URL = 'http://localhost:3004'

const MedalsService = {

  getMedals: async (): Promise<Medal[]> => {
    return await fetch(`${BASE_URL}/medals`)
      .then(res => res.json())
  }

}

export default MedalsService

