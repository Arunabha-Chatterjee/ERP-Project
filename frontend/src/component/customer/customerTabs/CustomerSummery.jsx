import React from 'react';

const CustomerSummery = () => {
    return (
        <div className='w-full h-auto pl-2 py-2'>
            <table>
                <tbody>
                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Invoices:</td>
                    <td className='py-1 pl-4'>45</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Billed:</td>
                    <td className='py-1 pl-4'>₹3,45,000</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Due:</td>
                    <td className='py-1 pl-4'>10000</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total item purchase:</td>
                    <td className='py-1 pl-4'>150</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default CustomerSummery;