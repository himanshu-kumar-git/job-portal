import { job } from "../../database.js"
import { addJob } from "../models/add-job-model.js"

export const getJobs = (req, res) => {
    return res.render('joblisting', { job, userEmail: req.session.userEmail })
}

export const newPostJob = (req, res) => {
    addJob(req.body);
    res.redirect('/jobs', { userEmail: req.session.userEmail })
}