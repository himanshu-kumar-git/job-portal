export const handleIdOfApplicantsData = (req, res) => {

    const id = req.params.id;
    const applicantsData = getDataFromIdToJob(id);

    if (applicantsData) {

        next();

    } else {
        res.send('you are not authentiacted..');
    }

}