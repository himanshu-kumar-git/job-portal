import { addUser } from "../models/add-job-model.js";

export const userRegister = (req, res) => {

    try {
        addUser(req.body);
        res.redirect('/login')
    } catch (err) {
        res.status(401).send('fail to register, Try again Later/!!');
    }
}
