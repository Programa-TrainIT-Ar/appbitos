import { Medal } from "../../types/medals"


export async function getMedals() : Promise<Medal[]> {

  const BASE_URL = 'http://localhost:3004'


  return await fetch(`${BASE_URL}/api/medals`)
  .then(res => res.json())


}
