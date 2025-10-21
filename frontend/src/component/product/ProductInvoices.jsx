import React from 'react';

const ProductInvoices = () => {
    return (
        <div className='h-full flex flex-col'>

            <div className='w-full h-auto text-sm font-semibold pl-3 pt-4 pb-2 '>Invoice Details</div>

            <div className='flex-1 text-sm overflow-y-auto
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    dark:[&::-webkit-scrollbar-thumb]:bg-gray-400'>
                <table className='w-full table-auto '>
                    <thead>
                    <tr className='border-b border-gray-800 bg-black sticky top-0'>
                        <th className='py-2 pl-3 font-semibold text-gray-200 text-sm text-left'>#</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Id</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Amount</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Customer Name</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Status</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Date</th>
                    </tr>
                    </thead>

                    <tbody className='text-sm text-gray-300 border-b border-gray-900'>
                    <tr className='border-b border-gray-900'>
                        <td className='py-1.5 pl-3'>1</td>
                        <td className='py-1.5'>7828624</td>
                        <td className='py-1.5'>&#8377;8546</td>
                        <td className='py-1.5'>Arunabha Chatterjee</td>
                        <td className='py-1.5 text-green-600'>Paid</td>
                        <td className='py-1.5'>19/04/2025</td>
                    </tr>
                    <tr className='border-b border-gray-900'>
                        <td className='py-1.5 pl-3'>1</td>
                        <td className='py-1.5'>7828624</td>
                        <td className='py-1.5'>&#8377;8546</td>
                        <td className='py-1.5'>Arunabha Chatterjee</td>
                        <td className='py-1.5 text-green-600'>Paid</td>
                        <td className='py-1.5'>19/04/2025</td>
                    </tr>
                    <tr className='border-b border-gray-900'>
                        <td className='py-1.5 pl-3'>1</td>
                        <td className='py-1.5'>7828624</td>
                        <td className='py-1.5'>&#8377;8546</td>
                        <td className='py-1.5'>Arunabha Chatterjee</td>
                        <td className='py-1.5 text-green-600'>Paid</td>
                        <td className='py-1.5'>19/04/2025</td>
                    </tr>
                    <tr className='border-b border-gray-900'>
                        <td className='py-1.5 pl-3'>1</td>
                        <td className='py-1.5'>7828624</td>
                        <td className='py-1.5'>&#8377;8546</td>
                        <td className='py-1.5'>Arunabha Chatterjee</td>
                        <td className='py-1.5 text-green-600'>Paid</td>
                        <td className='py-1.5'>19/04/2025</td>
                    </tr>
                    <tr className='border-b border-gray-900'>
                        <td className='py-1.5 pl-3'>1</td>
                        <td className='py-1.5'>7828624</td>
                        <td className='py-1.5'>&#8377;8546</td>
                        <td className='py-1.5'>Arunabha Chatterjee</td>
                        <td className='py-1.5 text-green-600'>Paid</td>
                        <td className='py-1.5'>19/04/2025</td>
                    </tr>
                    <tr className='border-b border-gray-900'>
                        <td className='py-1.5 pl-3'>1</td>
                        <td className='py-1.5'>7828624</td>
                        <td className='py-1.5'>&#8377;8546</td>
                        <td className='py-1.5'>Arunabha Chatterjee</td>
                        <td className='py-1.5 text-green-600'>Paid</td>
                        <td className='py-1.5'>19/04/2025</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductInvoices;