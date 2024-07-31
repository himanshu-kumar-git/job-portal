import { addApplicants } from "../models/add-job-model.js";

export const getApplyForm = (req, res) => {
    const id = req.params.id;

    return res.render('applyForm', { id, result: true })
}

export const handleApplyForm = (req, res) => {
    const id = req.params.id;

    const result = addApplicants(req.body, id);
    if (result) {
        res.redirect('/')
    } else {
        res.status(401).send('Try after some time');
    }
}