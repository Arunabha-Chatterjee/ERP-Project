import React from 'react';
import Header from '../../component/layout/Header';
import DashboardStats from '../../component/dashboard/DashboardStats';
import InvoiceItem from '../../component/invoice/InvoiceItem';

const Dashboard = () => {
    return (
        <div className='h-screen w-screen bg-black text-white'>
            <Header />
            <DashboardStats />
            <div className='w-full grid grid-cols-2'>

                <div className='text-lg font-semibold py-3 pl-4'>
                    Today
                </div>

                <div className='text-base justify-self-end py-3 text-[#7c86ff] pr-4'>
                    All Items
                </div>
            </div>
            <InvoiceItem/>
        </div>
    );
};

export default Dashboard;