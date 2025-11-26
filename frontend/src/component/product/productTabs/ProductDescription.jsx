import React from 'react';

const ProductDescription = () => {
    return (
        <div className='w-full h-auto py-2 pl-3 border-b border-gray-900'>
            <table className=''>
                <tbody>
                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Id:</td>
                    <td className='py-1 pl-2'>782858</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Unit Price:</td>
                    <td className='py-1 pl-2'>50000</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Description:</td>
                    <td className='py-1 pl-2'>Good Product</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ProductDescription;