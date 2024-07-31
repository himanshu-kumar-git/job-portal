import { users } from "../../database.js";


export const userAuth = (user) => {

    const { email, password } = user;

    const result = users.find(u => u.email == email.trim() && u.password == password);

    return result;
}


