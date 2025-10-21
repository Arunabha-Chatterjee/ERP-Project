import React from 'react';

const CustomerProducts = () => {
    return (
        <div className='h-full flex flex-col'>

            <div className='w-full h-auto text-sm font-semibold pl-3 pt-4 pb-2 '>Invoice Details</div>

            <div className='flex-1 text-sm overflow-y-auto
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    dark:[&::-webkit-scrollbar-thumb]:bg-gray-400'>
                <table className='w-full table-auto'>
                    <thead>
                    <tr className='border-b border-gray-800 bg-black sticky top-0'>
                        <th className='py-2 pl-3 font-semibold text-gray-200 text-sm text-left'>#</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Id</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Name</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left pl-4'>Unit Price</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Quantity</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Total</th>
                    </tr>
                    </thead>

                    <tbody className='text-sm text-gray-300 border-b border-gray-900'>
                    <tr className='border-b border-gray-900'>
                        <td className='py-1 pl-3'>1</td>
                        <td className='py-1'>7828624</td>
                        <td className='py-1 max-w-10 truncate'>Hp Victus 5600AX 16gb and 512gb SSD
                            Hp Victus 5600AX 16gb and 512gb SSD</td>
                        <td className='py-1 pl-4'>&#8377;8546</td>
                        <td className='py-1'>100</td>
                        <td className='py-1'>1000</td>
                    </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerProducts;