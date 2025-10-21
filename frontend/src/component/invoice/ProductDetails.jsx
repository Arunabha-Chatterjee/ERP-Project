import React from 'react';
import Input from "../common/Input.jsx";
import {useForm} from "react-hook-form";

const ProductDetails = () => {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();
    return (
        <div className='w-full h-auto border-x border-gray-700'>
            {/*<div className='text-base font-semibold pt-2 pl-2 mb-1'>Product</div>*/}

            <div className='pt-4 pl-2'>
                <Input
                    register={register}
                    name="customer"
                    placeholder="Find & add product"

                    componentClassName={"w-[30%] h-auto flex"}
                    inputClassName='w-full px-2 py-1 border border-gray-700'
                />
            </div>

            <table className='w-full mt-4 '>
                <thead>
                <tr className='bg-black text-white'>
                    <th className='text-left pl-1 py-0.5 font-semibold'>#</th>
                    <th className='text-left pl-1 py-0.5 font-semibold'>Id</th>
                    <th className='text-left pl-1 py-0.5 font-semibold'>Name</th>
                    <th className='text-left pl-1 py-0.5 font-semibold'>Price</th>
                    <th className='text-left pl-1 py-0.5 font-semibold'>Quantity</th>
                    <th className='text-left pl-1 py-0.5 font-semibold'>Total</th>
                    <th className='text-left pl-1 py-0.5 font-semibold'>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr className='border-b border-gray-700'>
                    <td className='pl-1'>1</td>
                    <td>01458</td>
                    <td>Laptop</td>
                    <td>5000</td>
                    <td className='py-1'>
                        <input
                            className='outline-none'
                            type='number'
                            min={1}
                            defaultValue={1}
                        />
                    </td>
                    <td>1000</td>
                    <td>delete</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ProductDetails;