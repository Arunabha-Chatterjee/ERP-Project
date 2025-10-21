import React from 'react';
import Logo from '../../assets/Logo';
import Input from '../common/Input'
import { useForm } from "react-hook-form";
import { useState } from 'react';

const InvoiceHeader = () => {

    return (
            <div className='w-full font-mono
            flex flex-col justify-center items-center py-2 border border-gray-700'>
                <div className='font-bold text-4xl'>Tech Heaven</div>
                <div className='text-sm'>India, Karnataka, Begaluru, 560066</div>
                <div  className='text-sm'>gelectronics@gmail.com</div>
                <div  className='text-sm'>+91-6245784351</div>
            </div>
    );
};

export default InvoiceHeader;