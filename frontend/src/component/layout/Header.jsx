import React from 'react';
import Logo from '../../assets/Logo';

const Header = () => {
    return (
            <div className='bg-[#101828] border-b border-gray-700 text-white grid grid-cols-3'>
                <div className='py-3 h-auto w-auto pl-4'>
                    <Logo />
                </div>

                <div className='py-3 flex text-gray-300
                    items-center justify-between font-bold font-mono'>
                    <div>Dashboard</div>
                    <div>POS</div>
                    <div>Returns</div>
                    <div>Customers</div>
                </div>

                <div className='py-3 flex justify-end items-center pr-4'>
                    <div className='bg-gray-500 w-8.5 h-8.5 rounded-full'>

                    </div>
                </div>
            </div>
    );
};

export default Header;