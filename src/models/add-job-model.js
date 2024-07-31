import { job, users } from "../../database.js";


export const addJob = (data) => {

    const newJob = { id: job.length + 1, ...data, jobposted: getFormattedDate(), applicants: [] }; // Adding a unique ID based on the array length

    job.push(newJob);


};

function getFormattedDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export const getDataFromIdToJob = (id) => {
    const result = job.find(j => j.id == id);
    return result;
}

export const addApplicants = (applicantData, id) => {
    const jobIndex = job.findIndex(j => j.id == id);
    applicantData["applicantid"] = job.length;

    job[jobIndex].applicants.push(applicantData)
    console.log(jobIndex)
    const result = job.find(j => j.id == id);
    return result;
}


export const addUser = (userData) => {


    const id = users.length;
    userData["id"] = id;
    users.push(userData);


}