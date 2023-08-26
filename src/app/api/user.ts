import { User } from "../../types/user";

const BASE_URL = 'http://localhost:3004'

export async function getUser() : Promise<User[]> {
    return await fetch(`${BASE_URL}/users`)
    .then(res => res.json())
  }