import React from 'react';

const CustomerDescription = () => {
    return (
        <div className='w-full h-auto py-2 pl-3 border-b border-gray-900'>
            <table className=''>
                <tbody>
                <tr >
                    <td className='py-1 font-semibold text-gray-400'>Id:</td>
                    <td className='py-1 pl-2'>782858</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Email:</td>
                    <td className='py-1  pl-2'>
                        arunabha@gmail.com
                    </td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Mobile:</td>
                    <td className='py-1 pl-2'>7845127845</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Address:</td>
                    <td className='py-1 pl-2'>123 Park Street</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>City:</td>
                    <td className='py-1 pl-2'>Kolkata</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Pin:</td>
                    <td className='py-1 pl-2'>700014</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomerDescription;