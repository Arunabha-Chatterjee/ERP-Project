import React from 'react';

const CustomerListHeader = () => {
    return (
        <div>
            <div className='text-xl font-semibold py-3 px-3 w-full h-auto'>Customers</div>

            <div className='px-3 pb-3.5 w-full'>
                <input
                    className='border-b border-gray-400 w-full outline-none py-1 '
                    type='text'
                    placeholder='Search Customer'/>
            </div>
        </div>
    );
};

export default CustomerListHeader;