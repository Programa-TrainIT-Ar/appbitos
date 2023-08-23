import { Medal } from "../../types/medals"

const BASE_URL = 'http://localhost:3004'

export async function getMedals() : Promise<Medal[]> {



  return await fetch(`${BASE_URL}/medals`)
  .then(res => res.json())


}
