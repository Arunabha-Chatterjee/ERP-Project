import React from 'react';
import Input from "../common/Input.jsx";
import {useForm} from "react-hook-form";

const CustomerSection = () => {
    return (
        <div className='flex flex-col gap-0.5 border-r border-gray-700 py-2 pl-2'>
            <input
                className='w-[60%] px-2 py-1 border border-gray-700'
                placeholder="Find & add customer"
            />
            <div className='font-semibold text-base mt-2'>Bill To:</div>
            <div>Arunabha Chatterjee</div>
            <div className='text-sm tracking-wide'>India, Kolkata, 700014</div>
            <div className='text-sm tracking-wide'>arunabha@gmail.com</div>
            <div className='text-sm tracking-wide'>+91 6289864512</div>
        </div>
    );
};

export default CustomerSection;