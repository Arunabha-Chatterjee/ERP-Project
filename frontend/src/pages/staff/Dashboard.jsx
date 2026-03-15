import React, {useState} from 'react';
import Header from '../../component/layout/Header';
import DashboardStats from '../../component/dashboard/DashboardStats';
import RecentInvoiceItems from '../../component/dashboard/RecentInvoiceItems.jsx';
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen bg-black text-white'>
            <Header />
            <DashboardStats />
            <div className='w-full h-auto grid grid-cols-2'>

                <div className='text-lg font-semibold py-3 pl-4'>
                    Recent Invoices
                </div>

                <button className='text-base justify-self-end py-3 text-[#7c86ff] pr-4
                hover:text-blue-600 cursor-pointer'
                onClick={()=>navigate("/invoices")}>
                    All Invoices
                </button>
            </div>
            <RecentInvoiceItems/>
        </div>
    );
};

export default Dashboard;