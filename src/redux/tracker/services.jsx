import instance from '../../config/instance';

export const getTracker = () => {
    return instance.get(`/api/tracker/projects/`);
};

export const editTracker = (editData) => {

    const requestedDate = new Date(editData['Requested Date']);
    const targetDate = editData['Target Date'] === "N/A" ? null : new Date(editData['Target Date']);
    const resolvedDate = editData['Resolved Date'] === "N/A" ? null : new Date(editData['Resolved Date']);

    const finalEditData = {
        type_ref: editData.Type,
        sites_ref: editData.Site,
        client_ref: editData.Client,
        user_ref: editData.User,
        seat_req: editData['Seating Requirement'],
        requested_date: requestedDate,
        target_date: targetDate,
        resolved_date: resolvedDate,
        status: editData.Status,
        remarks: editData.Remarks,
        solution: editData.Solution,
        email_trail: editData['Email Trail'],
        updated_dt_utc: new Date(),
        created_dt_utc: new Date(),
        critical_item: "Low",
        last_updated_by: "Junel"
    }
    return instance.put(`/api/tracker/project/update/`+ editData['Tracking ID'] + `/`, finalEditData);
};

export const deleteTracker = (deleteData) => {
    const lastUpdatedby = {
        last_updated_by: deleteData.last_updated_by
    }
    return instance.put(`/api/tracker/project/freeze/`+ deleteData.farming_ident + `/`, lastUpdatedby);
};