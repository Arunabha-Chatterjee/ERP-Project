import React from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen bg-black flex flex-col justify-center items-center gap-10'>

            <div className='flex flex-col flex-col items-center justify-center'>
                <div className='text-white font-bold text-6xl pb-5'>
                    Page not found
                </div>
                <div className='text-gray-400 text-base font-medium'>
                    Sorry, we couldn’t find the page you’re looking for.
                </div>
            </div>
            <button className="text-white bg-[#615fff] py-2 px-5 rounded-md
            hover:bg-[#5756e6] active:bg-[#615fff] font-medium cursor-pointer"
                    onClick={() => {
                        navigate('/')
                    }}>
                Go Back Home
            </button>
        </div>
    );2
};

export default NotFound;