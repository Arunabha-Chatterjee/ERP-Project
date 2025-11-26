import React from 'react';

const InvoiceSummery = () => {
    return (
        <div className='w-full border border-t-0 border-gray-700 grid grid-cols-2'>

            <div className='self-center pl-2'>
                <textarea
                className='w-[60%] border border-gray-700 px-2'
                defaultValue="Thanks for your busniess."/>
            </div>

            <table className='border-l border-gray-700 w-fit justify-self-end'>
                <tbody>
                <tr className='bg-black text-white'>
                    <td colSpan={2} className='pl-2 py-1 font-semibold'>
                        Summery
                    </td>
                </tr>
                <tr className='border-b border-gray-700'>
                    <td className='py-1 pl-1 pr-24'>Subtotal:</td>
                    <td className='py-1 pl-5 pr-2'>4588</td>
                </tr>

                <tr className='border-b border-gray-700'>
                    <td className='py-1 pl-1 pr-20'>Discount:</td>
                    <td className='py-1 pl-5 pr-2'>
                        <input
                            className='outline-none'
                            type='number'
                            min={0}
                            defaultValue={0}
                        />
                    </td>
                </tr>

                <tr className='border-b border-gray-700'>
                    <td className='py-1 pl-1 pr-20'>Tax:</td>
                    <td className='py-1 pl-5 pr-2'>
                        <input
                            className='outline-none'
                            type='number'
                            min={0}
                            defaultValue={0}
                        />
                    </td>
                </tr>

                <tr className='border-b border-gray-700 font-bold'>
                    <td className='py-1 pl-1 pr-20'>Total:</td>
                    <td className='py-1 pl-5 pr-2'>3598</td>
                </tr>

                <tr>
                    <td className='py-1 pl-1 pr-20'>Due Amount:</td>
                    <td className='py-1 pl-5 pr-2'>
                        <input
                            className='outline-none'
                            type='number'
                            min={0}
                            defaultValue={0}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceSummery;