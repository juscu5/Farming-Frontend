import instance from '../../config/instance';

export const getRfp = () => {
    return instance.get(`/api/rfp/projects/`);
};

export const editRfp = (editData) => {
    const requestedDate = new Date(editData['Requested Date']);
    const targetDate = editData['Target Date'] === "N/A" ? null : new Date(editData['Target Date']);

    const finalEditData = {
        type_ref: editData.Type,
        sites_ref: editData.Site,
        client_ref: editData.Client,
        user_ref: editData.User,
        requestor: editData.Requestor,
        seat_req: editData['Seating Requirement'],
        target_date: targetDate,
        requested_date: requestedDate,
        status: "RFP",
        remarks: editData.Remarks,
        solution: editData.Solution,
        email_trail: editData['Email Trail'],
        updated_dt_utc: new Date(),
        created_dt_utc: new Date(),
        critical_item: "Low",
        last_updated_by: "Junel"
    }
    console.log(finalEditData)
    return instance.put(`/api/rfp/project/update/`+ editData['RFP ID'] + `/`, finalEditData);
};

export const deleteRfp = (deleteData) => {
    const lastUpdatedby = {
        last_updated_by: deleteData.last_updated_by
    }
    return instance.put(`/api/rfp/project/freeze/`+ deleteData.farming_ident + `/`, lastUpdatedby);
};