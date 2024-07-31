import { Result } from "postcss";

const getLogin = (req, res) => {

    return res.render('recruter-login', { userEmail: req.session.userEmail, result: true });
}

export default getLogin;