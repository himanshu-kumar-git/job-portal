export const auth = (req, res, next) => {
    if (req.session.userEmail) {
        next();
    } else {
        res.redirect('/login')
    }
}

export const authForLogin = (req, res, next) => {
    if (req.session.userEmail) {
        res.redirect('/jobs');
    } else {
        next();
    }
}
