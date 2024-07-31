import { userAuth } from "../models/users-auth-model.js";



export const handleLoginMiddle = (req, res, next) => {

    const { email, password } = req.body;
    const result = userAuth(req.body);


    if (result) {

        req.session.userEmail = email;
        res.locals.userEmail = req.session.userEmai;


        next();
    } else {
        res.send(`
            <script>
                alert('Invalid credentials');
                window.location.href = '/login';  // Redirect back to the login page
            </script>
        `);
    }

}

