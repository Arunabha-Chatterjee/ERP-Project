import React from 'react';

const CustomerDescription = () => {
    return (
        <div className='w-full h-auto'>
            <table className='w-full table-auto border border-gray-800'>
                <tbody>
                <tr className='border-b border-gray-800'>
                    <td className='py-1 pl-2 font-semibold text-gray-300 border-r border-gray-800'>Id</td>
                    <td className='py-1 pl-2'>782858</td>
                </tr>

                <tr className='border-b border-gray-800'>
                    <td className='py-1 pl-2 font-semibold text-gray-300 border-r border-gray-800'>Email</td>
                    <td className='py-1 pl-2'>
                        arunabha@gmail.com
                    </td>
                </tr>

                <tr className='border-b border-gray-800'>
                    <td className='py-1 pl-2 font-semibold text-gray-300 border-r border-gray-800'>Mobile</td>
                    <td className='py-1 pl-2'>7845127845</td>
                </tr>

                <tr className='border-b border-gray-800'>
                    <td className='py-1 pl-2 font-semibold text-gray-300 border-r border-gray-800'>Address</td>
                    <td className='py-1 pl-2'>123 Park Street</td>
                </tr>

                <tr className='border-b border-gray-800'>
                    <td className='py-1 pl-2 font-semibold text-gray-300 border-r border-gray-800'>City</td>
                    <td className='py-1 pl-2'>Kolkata</td>
                </tr>

                <tr className='border-b border-gray-800'>
                    <td className='py-1 pl-2 font-semibold text-gray-300 border-r border-gray-800'>Pin</td>
                    <td className='py-1 pl-2'>700014</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomerDescription;