import React from 'react';
import Logo from '../../assets/Logo';
import {NavLink, } from "react-router-dom";

const Header = () => {
    return (
            <div className='bg-[#101828] w-full border-b border-gray-700 text-white grid grid-cols-3'>
                <div className='py-3 h-auto w-auto pl-4'>
                    <Logo />
                </div>

                <div className='py-3 flex text-gray-400
                    items-center justify-between font-bold font-mono'>

                    <NavLink to={'/'}
                            className={({isActive})=>(isActive?
                                'text-white':'')}>
                        Dashboard
                    </NavLink>

                    <NavLink to={'/products'}
                             className={({isActive})=>(isActive?
                                 'text-white':'')}>
                        Products
                    </NavLink>

                    <NavLink to={'/customers'}
                             className={({isActive})=>(isActive?
                                 'text-white':'')}>Customers</NavLink>

                    <NavLink to={'/invoices'}
                             className={({isActive})=>(isActive?
                                 'text-white':'')}>Invoices</NavLink>
                </div>

                <div className='py-3 flex justify-end items-center pr-4'>
                    <div className='bg-gray-500 w-8.5 h-8.5 rounded-full'>

                    </div>
                </div>
            </div>
    );
};

export default Header;