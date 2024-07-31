import { job } from "../../database.js";


export const deleteJob = (id) => {
    const jobIndex = job.findIndex(j => j.id === id);

    if (jobIndex === -1) {
        return { success: false, message: 'Job not found' };
    }

    // Remove the job from the array
    job.splice(jobIndex, 1);

    return { success: true, message: 'Job deleted successfully' };
};

export const handleJObDelete = (req, res) => {
    const jobId = parseInt(req.params.id, 10);

    const result = deleteJob(jobId);

    if (result.success) {
        res.json(result);
    } else {
        res.status(404).json(result);
    }
}

