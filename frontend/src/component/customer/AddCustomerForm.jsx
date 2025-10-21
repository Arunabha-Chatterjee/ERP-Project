import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../common/Input';
import Button from '../common/Button'

const AddCustomerForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data)=>{
        reset()
        console.log(data);
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>

        <div className="w-[34%] h-auto border border-gray-300">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full py-1.5 pl-2 pr-1 bg-black text-white flex justify-between'>
                    <span>Add Customer</span>
                    <button className='text-lg px-3 h-full
                    hover:bg-red-600 cursor-pointer'>X</button>
                </div>

                <div className='grid grid-cols-2 gap-x-1 gap-y-5 py-4 px-3'>
                    <div className='col-span-2'>
                    <input
                        className='w-full border-2 py-1 px-2'
                        type='text'
                        placeholder='Name'
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters",
                            }
                        })}
                    />
                        {errors.name?.message && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
                    </div>


                    <div className='flex flex-col'>
                    <input
                        className='border-2 py-1 px-2 w-full'
                        {...register('email',{
                            pattern:{
                                value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                                message:"Enter a valid email address",
                            }
                        })}
                        type='text'
                        placeholder='Email'
                    />
                        {errors.email?.message && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                    </div>

                    <input
                        className='border-2 h-9 px-2'
                        name='number'
                        type='number'
                        placeholder='Mobile Number'
                    />


                    <input
                        className='border-2 py-1 px-2 col-span-2'
                        name='address'
                        type='text'
                        placeholder='Address'
                    />

                    <input
                        className='border-2 py-1 px-2'
                        name='city'
                        type='text'
                        placeholder='City'
                    />
                    <input
                        className='border-2 py-1 px-2'
                        name='pin'
                        type='number'
                        placeholder='Pin Code'
                    />

                    <button className='border-2 py-2 px-2 col-span-2 bg-black text-white
                        cursor-pointer hover:bg-gray-800'>
                        Add
                    </button>

                </div>
            </form>
        </div>
        </div>
    );
};

export default AddCustomerForm;