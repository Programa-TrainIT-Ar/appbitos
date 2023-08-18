import { Medal } from "../../types/medals"



export async function getMedals() : Promise<Medal[]> {


  return await fetch('http://localhost:3004/api/medals')
  .then(res => res.json())


}
