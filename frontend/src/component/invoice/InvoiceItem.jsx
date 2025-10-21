import React from 'react';

const InvoiceItem = () => {

    const amount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    }).format(74562);

    return (
        <div className='w-full h-auto px-2'>
            <table className='w-full table-auto'>
                <thead>
                <tr className='border-b border-gray-700 text-sm'>
                    <th className='py-2 px-3 font-semibold text-left'>#</th>
                    <th className='py-2 px-3 font-semibold text-left'>Invoice</th>
                    <th className='py-2 px-3 font-semibold text-left'>Customer</th>
                    <th className='py-2 px-3 font-semibold text-left'>Amount</th>
                    <th className='py-2 px-3 font-semibold text-left'>Status</th>
                    <th className='py-2 px-3 font-semibold text-left'>Payment</th>
                    <th className='py-2 px-3 font-semibold text-left'>Action</th>
                </tr>
                </thead>

                <tbody className='w-full'>
                <tr className='border-b border-gray-700 text-sm'>
                    <td className='py-1.5 px-3  text-left'>1</td>
                    <td className='py-1.5 px-3  text-left'>
                        INV45678
                    </td>
                    <td className='py-1.5 px-3 text-left'>
                        <div className='w-50 truncate'>
                            Arunabha Chatterjee
                        </div>
                    </td>
                    <td className='py-1.5 px-3 text-left'>
                        {amount}
                    </td>
                    <td className='py-1.5 px-3 text-left'>
                        Paid
                    </td>
                    <td className='py-1.5 px-3 text-left'>
                        Cash
                    </td>
                    <td className='py-1.5 px-3 text-left'>
                        View
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceItem;