import { job } from "../../database.js";

export const getUpdate = (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    const jobData = getJobById(jobId); // Fetch the job data by ID
    console.log(jobData)

    if (job) {
        res.render('jobupdate', { jobData: jobData, userEmail: req.session.userEmail });
    } else {
        res.status(404).send('Job not found');
    }
}

function getJobById(jobId) {
    return job.find(job => job.id === jobId);
}



export const updateJob = (id, newData) => {
    const jobIndex = job.findIndex(j => j.id === id);

    if (jobIndex === -1) {
        return { success: false, message: 'Job not found' };
    }

    // Update the job data
    job[jobIndex] = { ...job[jobIndex], ...newData };

    return { success: true, message: 'Job updated successfully', job: job[jobIndex] };
};

export const jobUpdateController = (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    const newData = req.body;

    const result = updateJob(jobId, newData);

    if (result.success) {
        res.json(result);
    } else {
        res.status(404).json(result);
    }
}