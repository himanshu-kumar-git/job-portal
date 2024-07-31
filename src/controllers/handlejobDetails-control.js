import { job } from "../../database.js";

export const handlejobDetails = (req, res) => {

    const jobId = parseInt(req.params.id, 10);
    const jobData = job.find(j => j.id === jobId);

    if (jobData) {
        return res.render('jobDetail', { jobData, userEmail: req.session.userEmail });
    } else {
        return res.status(404).send('Job not found');
    }

}

