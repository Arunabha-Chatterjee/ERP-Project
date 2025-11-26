import React from 'react';

const CustomerDescription = () => {
    return (
        <div className='w-full h-auto'>
            <table>
                <tbody>
                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-300'>Id:</td>
                    <td className='py-1 pl-10'>782858</td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-300'>Email:</td>
                    <td className='py-1 pl-10'>
                        arunabha@gmail.com
                    </td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-300'>Mobile:</td>
                    <td className='py-1 pl-10'>7845127845</td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-300'>Address:</td>
                    <td className='py-1 pl-10'>123 Park Street</td>
                </tr>

                <tr >
                    <td className='py-1 pl-2 font-semibold text-gray-300 '>City:</td>
                    <td className='py-1 pl-10'>Kolkata</td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-300'>Pin:</td>
                    <td className='py-1 pl-10'>700014</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomerDescription;