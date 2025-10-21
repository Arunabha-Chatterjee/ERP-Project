import React from 'react';

const DashboardStats = () => {

    const amount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    }).format(74562);

    return (
        <div className='w-full h-auto py-10 flex flex-col justify-between gap-5 items-center'>

            <div className='grid grid-cols-3 w-full'>

                <div className='grid grid-cols-4 '>
                    <div className='font-bold text-xl border-r-2 border-gray-800
                        flex justify-center items-center'>
                        Statistics
                    </div>
                    <div className='flex justify-center items-center font-semibold'>
                        Last 7 Days
                    </div>
                    <div className='flex justify-center items-center font-semibold'>
                        Last 30 Days
                    </div>
                    <div className='flex justify-center items-center font-semibold'>
                        All time
                    </div>

                </div>

                <div></div>

                <div className='justify-self-end pr-7'>
                    <button className='font-semibold bg-black py-1.5 px-2 text-white
                        rounded-sm hover:bg-gray-800 cursor-pointer'>
                        + New Invoice
                        </button>
                </div>
            </div>

            <div className='w-full border-t border-b
             border-gray-700 grid grid-cols-3 h-auto'>

                <div className='border-r border-gray-700 flex flex-col justify-center px-6 py-5'>
                    <div >Sales</div>
                    <div className='text-3xl mt-1 font-semibold'>{amount}</div>
                </div>

                <div className='border-r border-gray-700 flex flex-col justify-center px-5 py-5'>
                    <div >Transctions</div>
                    <div className='text-3xl mt-1 font-semibold'>250</div>
                </div>

                <div className='flex flex-col justify-center px-5 py-5'>
                    <div>Returns</div>
                    <div className='text-3xl mt-1 font-semibold'>50</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;