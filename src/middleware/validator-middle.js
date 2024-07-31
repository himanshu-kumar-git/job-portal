export const validateApplyForm = (req, res, next) => {
    // Validate the request body here
    // Example: Check if all required fields are present
    const id = req.params.id;
    const { name, email, contact, resume } = req.body;

    if (!name || !contact || !email) {
        return res.render('applyForm', { id, result: false });
    }


    next();
};
export const validateLoginForm = (req, res, next) => {

    const { email, password } = req.body;

    if (!password || !email) {
        return res.render('recruter-login', { result: false });
    }


    next();
};

export const validateRegister = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!password || !email || !name) {
        return res.render('recruter-register', { result: false });
    }

    next();
}