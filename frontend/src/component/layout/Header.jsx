import React, { useState } from 'react';
import Logo from '../../assets/Logo';
import { NavLink, useNavigate, } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate("/login");
    const username = localStorage.getItem("username");
    const [dropDownOpen, setDropDownOpen] = useState();

    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        navigate("/login")
    }

    return (
        <div className='bg-[#101828] w-full border-b border-gray-700 text-white grid grid-cols-3'>
            <div className='py-3 h-auto w-auto pl-4'>
                <Logo />
            </div>

            <div className='py-3 flex text-gray-400
                    items-center justify-between font-bold font-mono'>

                <NavLink to={'/'}
                    className={({ isActive }) => (isActive ?
                        'text-white' : '')}>
                    Dashboard
                </NavLink>

                <NavLink to={'/products'}
                    className={({ isActive }) => (isActive ?
                        'text-white' : '')}>
                    Products
                </NavLink>

                <NavLink to={'/customers'}
                    className={({ isActive }) => (isActive ?
                        'text-white' : '')}>Customers</NavLink>

                <NavLink to={'/invoices'}
                    className={({ isActive }) => (isActive ?
                        'text-white' : '')}>Invoices</NavLink>
            </div>

            <div className='flex justify-end items-center pr-4 relative'
                onMouseEnter={() => setDropDownOpen(true)}
                onMouseLeave={() => setDropDownOpen(false)}>
                <button className='border-2  border-gray-800 px-2.5  rounded-sm  text-2xl  text-gray-200 cursor-pointer hover:text-gray-400'>
                    {username?.charAt(0).toUpperCase()}
                </button>
                {dropDownOpen &&
                    <div className='absolute top-12 backdrop-blur-xl border border-gray-700 w-50 rounded-sm'>
                        <div className='px-3 py-1 border-b border-gray-700 truncate'>{username}</div>
                        <button className='px-3 py-1 cursor-pointer hover:text-gray-200 active:text-white w-full text-left'
                            type='button'
                            onClick={() => logout()}
                        >Logout</button>
                    </div>}

            </div>
        </div>
    );
};

export default Header;