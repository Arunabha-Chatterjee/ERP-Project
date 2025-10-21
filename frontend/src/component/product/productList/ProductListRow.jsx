import React from 'react';

const ProductListRow = () => {
    return (
        <button className='grid grid-rows-2 w-full h-auto py-1 px-4 border-y border-gray-800
                               hover:bg-[#0d0d0d] gap-1'>

            <div className='text-left justify-self-start'>
                <div className='text-gray-300 font-semibold text-base max-w-xs truncate'>Laptop HP Victus</div>
            </div>
            <div className='text-xs text-gray-400 justify-self-start'>
                5455448
            </div>
        </button>
    );
};

export default ProductListRow;