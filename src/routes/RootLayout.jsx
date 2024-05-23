import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/organisms/Sidebar';
import { useSelector } from 'react-redux';
import { selectUserList } from '../redux/auth/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
    const userRole = useSelector(selectUserList);

    const navlist = [
        {
            TITLE: "Workload",
            HREF: "/ph-farming/dashboard",
            CLASSNAME: "bi bi-clipboard-data-fill",
        },
        {
            TITLE: "Submit Form",
            HREF: "/ph-farming/submit-form",
            CLASSNAME: "bi bi-file-text-fill",
        },
        {
            TITLE: "Tracker",
            HREF: "/ph-farming/tracker",
            CLASSNAME: "bi bi-file-spreadsheet-fill",
        },
        {
            TITLE: "RFP",
            HREF: "/ph-farming/rfp",
            CLASSNAME: "bi bi-file-earmark-text-fill",
        },
        {
            TITLE: "Cost Savings",
            HREF: "/ph-farming/cost-savings",
            CLASSNAME: "bi bi-cash-stack",
        },
    ];

    if (userRole === 'ADMIN') {
        navlist.push(
            {
                TITLE: "Client",
                HREF: "/ph-farming/client",
                CLASSNAME: "bi bi-building-fill-add",
            },
            {
                TITLE: "User",
                HREF: "/ph-farming/user",
                CLASSNAME: "bi bi-people-fill",
            }
        );
    }

    return (
        <Sidebar navlist={navlist} navTitle={"PH Farming"}>
            <Outlet />
            <ToastContainer />
        </Sidebar>
    );
};

export default RootLayout;