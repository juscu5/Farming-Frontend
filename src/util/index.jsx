import moment from 'moment';

export const TrackerColumns = [
    {
        name: 'ID',
        selector: row => row.farming_ident,
        sortable: true,
        width: '60px',
        wrap: true,
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
    {
        name: 'Site',
        selector: row => row.sites_ref.site_name,
        sortable: true,
        width: '150px',
        wrap: true,
		filterable: true,
		reorder: true,
    },
    {
        name: 'Client',
        selector: row => row.client_ref.client_name,
        sortable: true,
        width: '200px',
        filterable: true,
        wrap: true,

    },
    {
        name: 'Seating Requirement',
        selector: row => row.seat_req,
        sortable: true,
        width: '180px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Type',
        selector: row => row.type_ref.type_name,
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Need',
        selector: row => row.need,
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
        conditionalCellStyles: [
			{
				when: row => row.status === "Resolve",
				style: {
                    fontWeight: 600,
					color: 'rgba(63, 195, 128, 92)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
			{
				when: row => row.status === "In Progress",
				style: {
                    fontWeight: 600,
					color: 'rgba(248, 148, 6, 0.9)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
            {
				when: row => row.status === "In progress",
				style: {
                    fontWeight: 600,
					color: 'rgba(248, 148, 6, 0.9)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
		],
    },
    {
        name: 'Owner',
        selector: row => row.user_ref.last_name,
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },
    {
        name:  'Requested Date',
        selector: row => moment(row.requested_date).isValid() ? moment(row.requested_date).format("l") : row.requested_date || "N/A",
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Target Date',
        selector: row => moment(row.target_date).isValid() ? moment(row.target_date).format("l") : row.target_date || "N/A",
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Resolved Date',
        selector: row => moment(row.resolved_date).isValid() ? moment(row.resolved_date).format("l") : row.resolved_date || "N/A",
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Remarks',
        selector: row => row.remarks,
        sortable: true,
        width: '250px',
    },
    {
        name: 'Solution',
        selector: row => row.solution,
        sortable: true,
        width: '250px',
    },
    {
        name: 'Email Trail',
        selector: row => row.email_trail,
        sortable: true,
        width: '250px',
    },
];

export const RfpColumns = [
    {
        name: 'ID',
        selector: row => row.farming_ident,
        sortable: true,
        width: '100px',
        wrap: true,
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
    {
        name: 'Site',
        selector: row => row.sites_ref.site_name,
        sortable: true,
        width: '180px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Client',
        selector: row => row.client_ref.client_name,
        sortable: true,
        width: '200px',
        wrap: true,
        filterable: true,

    },
    {
        name: 'Type',
        selector: row => row.type_ref.type_name,
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    // {
    //     name: 'Status',
    //     selector: row => row.status,
    //     sortable: true,
    //     width: '110px',
    //     wrap: true,
    // },
    {
        name: 'Requestor',
        selector: row => row.requestor === null ? "N/A" : row.requestor,
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },

    {
        name:  'Requested Date',
        selector: row => moment(row.requested_date).isValid() ? moment(row.requested_date).format("l") : row.requested_date || "N/A",
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Target Date',
        selector: row => moment(row.target_date).isValid() ? moment(row.target_date).format("l") : row.target_date || "N/A",
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Remarks',
        selector: row => row.remarks,
        sortable: true,
        width: '305px',
    },
    {
        name: 'Email Trail',
        selector: row => row.email_trail,
        sortable: true,
        width: '305px',
    },
];

export const WorkloadColumns = [
    {
        name: 'ID',
        selector: row => row.farming_ident,
        sortable: true,
        width: '60px',
        wrap: true,
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
    {
        name: 'Site',
        selector: row => row.sites_ref.site_name,
        sortable: true,
        width: '150px',
        wrap: true,
		filterable: true,
		reorder: true,
    },
    {
        name: 'Client',
        selector: row => row.client_ref.client_name,
        sortable: true,
        width: '200px',
        filterable: true,
        wrap: true,

    },
    {
        name: 'Type',
        selector: row => row.type_ref.type_name,
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
        conditionalCellStyles: [
			{
				when: row => row.status === "Resolve",
				style: {
                    fontWeight: 600,
					color: 'rgba(63, 195, 128, 92)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
			{
				when: row => row.status === "In Progress",
				style: {
                    fontWeight: 600,
					color: 'rgba(248, 148, 6, 0.9)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
            {
				when: row => row.status === "In progress",
				style: {
                    fontWeight: 600,
					color: 'rgba(248, 148, 6, 0.9)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
		],
    },
    {
        name: 'Owner',
        selector: row => row.user_ref.last_name,
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },
    {
        name:  'Requested Date',
        selector: row => moment(row.requested_date).isValid() ? moment(row.requested_date).format("l") : row.requested_date || "N/A",
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Target Date',
        selector: row => moment(row.target_date).isValid() ? moment(row.target_date).format("l") : row.target_date || "N/A",
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Resolved Date',
        selector: row => moment(row.resolved_date).isValid() ? moment(row.resolved_date).format("l") : row.resolved_date || "N/A",
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Comments',
        selector: row => row.comments_progress === null ? "N/A" : row.comments_progress,
        sortable: true,
        width: '250px',
    },
];

export const UserColumns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
        width: '100px',
        wrap: true,
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
    {
        name: 'CCMS ID',
        selector: row => row.ccms_id,
        sortable: true,
        width: '150px',
        wrap: true,
		reorder: true,
        filterable: true,
    },
    {
        name: 'Username',
        selector: row => row.login_id,
        sortable: true,
        width: '150px',
        wrap: true,
        filterable: true,

    },
    {
        name: 'Full Name',
        selector: row => row.employee_full_name,
        sortable: true,
        width: '200px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
        width: '350px',
        wrap: true,
        filterable: true,
    },
    {
        name:  'User Role',
        selector: row => row.user_role,
        sortable: true,
        width: '140px',
        wrap: true,
        filterable: true,
    },
    {
        name: 'Status',
        selector: row => row.status === "active" ? "Active" : "Inactive",
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
        conditionalCellStyles: [
			{
				when: row => row.status === "active",
				style: {
                    fontWeight: 600,
					color: 'rgba(63, 195, 128, 92)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
            {
				when: row => row.status === "inactive",
				style: {
                    fontWeight: 600,
					color: 'rgb(255, 99, 71)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
		],
    },
];

export const ClientColumns = [
    {
        name: 'ID',
        selector: row => row.client_id,
        sortable: true,
        width: '200px',
        wrap: true,
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
    {
        name: 'Client Name',
        selector: row => row.client_name,
        sortable: true,
        width: '300px',
        wrap: true,
        filterable: true,

    },
    {
        name: 'Status',
        selector: row => row.is_active === true ? "Active" : "Inactive",
        sortable: true,
        width: '130px',
        wrap: true,
        filterable: true,
        conditionalCellStyles: [
			{
				when: row => row.is_active === true,
				style: {
                    fontWeight: 600,
					color: 'rgba(63, 195, 128, 92)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
            {
				when: row => row.is_active === false,
				style: {
                    fontWeight: 600,
					color: 'rgb(255, 99, 71)',
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
		],
    },
];

export const EmployeeColumns = [
    {
        name: 'CCMS ID',
        selector: row => row.employee_ident,
        sortable: true,
        width: '200px',
        wrap: true,
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
    {
        name: 'Employee Name',
        selector: row => row.employee_common_name,
        sortable: true,
        width: '250px',
        wrap: true,
    },
    {
        name: 'Username',
        selector: row => row.login_id,
        sortable: true,
        width: '250px',
        wrap: true,
    },
    {
        name: 'Email',
        selector: row => row.email1,
        sortable: true,
        width: '250px',
        wrap: true,
    },
];

export function trackerItems(data = [], filterText) {
    if (!Array.isArray(data)) {
        return [];
    }
    return data.filter(item =>
        item.farming_ident && item.farming_ident.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.sites_ref.site_name && item.sites_ref.site_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.client_ref.client_name && item.client_ref.client_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.seat_req && item.seat_req.toLowerCase().includes(filterText.toLowerCase()) ||
        item.requested_date && item.requested_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.target_date && item.target_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.resolved_date && item.resolved_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.status && item.status.toLowerCase().includes(filterText.toLowerCase()) ||
        item.remarks && item.remarks.toLowerCase().includes(filterText.toLowerCase()) ||
        item.solution && item.solution.toLowerCase().includes(filterText.toLowerCase()) ||
        item.email_trail && item.email_trail.toLowerCase().includes(filterText.toLowerCase()) ||
        item.user_ref.last_name && item.user_ref.last_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.type_ref.type_name && item.type_ref.type_name.toLowerCase().includes(filterText.toLowerCase())
    );
}

export function rfpItems(data = [], filterText) {
    if (!Array.isArray(data)) {
        return [];
    }
    return data.filter(item =>
        item.farming_ident && item.farming_ident.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.sites_ref.site_name && item.sites_ref.site_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.client_ref.client_name && item.client_ref.client_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.requested_date && item.requested_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.target_date && item.target_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.status && item.status.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.remarks && item.remarks.toLowerCase().includes(filterText.toLowerCase()) ||
        item.email_trail && item.email_trail.toLowerCase().includes(filterText.toLowerCase()) ||
        item.user_ref.last_name && item.user_ref.last_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.type_ref.type_name && item.type_ref.type_name.toLowerCase().includes(filterText.toLowerCase())
    );
}

export function workloadItems(data = [], filterText) {
    if (!Array.isArray(data)) {
        return [];
    }
    return data.filter(item =>
        item.farming_ident && item.farming_ident.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.sites_ref.site_name && item.sites_ref.site_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.client_ref.client_name && item.client_ref.client_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.requested_date && item.requested_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.target_date && item.target_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.resolved_date && item.resolved_date.toLowerCase().includes(filterText.toLowerCase()) ||
        item.status && item.status.toLowerCase().includes(filterText.toLowerCase()) ||
        item.comments_progress && item.comments_progress.toLowerCase().includes(filterText.toLowerCase())
    );
}

export function userItems(data = [], filterText) {
    if (!Array.isArray(data)) {
        return [];
    }
    return data.filter(item =>
        item.id && item.id.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.login_id && item.login_id.toLowerCase().includes(filterText.toLowerCase()) ||
        item.ccms_id && item.ccms_id.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.employee_full_name && item.employee_full_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.email && item.email.toLowerCase().includes(filterText.toLowerCase()) ||
        item.user_role && item.user_role.toLowerCase().includes(filterText.toLowerCase()) ||
        item.status && item.status.toLowerCase().includes(filterText.toLowerCase())
    );
}

export function clientItems(data = [], filterText) {
    if (!Array.isArray(data)) {
        return [];
    }
    return data.filter(item =>
        item.client_id && item.client_id.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.client_name && item.client_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.is_active && item.is_active.toLowerCase().includes(filterText.toLowerCase()) 
    );
}

export function employeeItems(data = [], filterText) {
    if (!Array.isArray(data)) {
        return [];
    }
    return data.filter(item =>
        item.employee_ident && item.employee_ident.toString().toLowerCase().includes(filterText.toLowerCase()) ||
        item.employee_common_name && item.employee_common_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.login_id && item.login_id.toLowerCase().includes(filterText.toLowerCase()) ||
        item.email1 && item.email1.toLowerCase().includes(filterText.toLowerCase()) 
    );
}