import {User} from "../types/user";

const BASE_URL = 'http://localhost:3004'

const UsersService = {
    getUsers: async (): Promise<User[]> => {
        return fetch(`${BASE_URL}/users`, {cache: "no-cache"})
            .then(res => res.json())
    },
    getUserDetails: async (): Promise<User> => {
        return fetch(`${BASE_URL}/user-details`, {cache: "no-cache"})
            .then(res => res.json())
    },
    createUser: async (user: User): Promise<User> => {
        throw new Error('Not Implemented');
    }
}

export default UsersService