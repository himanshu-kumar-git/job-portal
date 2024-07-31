
import { job } from "../../database.js";
export const getHome = (req, res) => {

    return res.render('home', { data: job, userEmail: req.session.userEmail });
}