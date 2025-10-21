import React from 'react';
import { HiShoppingBag } from "react-icons/hi";

const Logo = () => {
    return (
        <div className='flex items-center justify-center gap-0.5 w-fit'>
            <HiShoppingBag className='text-3xl text-[#00bcff]'/>
            <div className='text-xl font-semibold font-mono'>
                <span className='text-white'>Retail</span>
                <span className='text-sm text-[#00bcff]'>ONE</span>
            </div>
        </div>
    );
};

export default Logo;