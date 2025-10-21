import React from 'react';

const ProductSummery = () => {
    return (
        <div className='w-full h-auto pl-2 py-2'>
            <table>
                <tbody>
                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Sales:</td>
                    <td className='py-1 pl-4'>₹4587428.00</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Unit Sale:</td>
                    <td className='py-1 pl-4'>345</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Customers:</td>
                    <td className='py-1 pl-4'>100</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ProductSummery;