import React from 'react';

const ProductHeader = () => {
    return (
        <div className='h-auto w-full'>
            <div className='w-full py-2.5 pl-3'>
                <div className='text-lg font-semibold'>Laptop HP Victus</div>
                <div className='text-xs text-gray-400'>867699</div>
            </div>

            <div className='w-full px-3 flex py-2 border-t border-t-gray-600 border-b border-b-gray-900
                                gap-16 text-sm tracking-wide font-semibold text-gray-300'>
                <button className='hover:text-white cursor-pointer'>Description</button>
                <button className='hover:text-white cursor-pointer'>Summery</button>
                <button className='hover:text-white cursor-pointer'>Invoices</button>
            </div>
        </div>
    );
};

export default ProductHeader;