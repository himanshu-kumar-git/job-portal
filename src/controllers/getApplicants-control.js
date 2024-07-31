import { getDataFromIdToJob } from "../models/add-job-model.js";


export const getApplicants = (req, res) => {
    const id = req.params.id;
    const applicantsData = getDataFromIdToJob(id);
    const applicants = applicantsData.applicants;


    if (applicants) {

        res.render('applicant', { applicants, userEmail: req.session.userEmail })

    } else {
        res.send('you are not authentiacted..');
    }

}