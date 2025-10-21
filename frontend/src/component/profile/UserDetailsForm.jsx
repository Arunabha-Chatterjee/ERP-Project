import React from 'react';
import Input from '../common/Input';
import { useForm } from "react-hook-form";
import Select from "../common/Select.jsx";
import TextArea from '../common/TextArea.jsx';

const UserDetailsForm = () => {
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm({
            defaultValues: {
                email: "pre-filled@example.com",
                role: "customer"
            },
        });

    const role = watch('role');

    return (
        <div className={"w-screen h-screen bg-[#101828] text-white " +
            "flex flex-col items-center"}>

            <form className={"w-[55%] h-auto my-8 grid grid-cols-2 " +
                "gap-x-10 gap-y-7.5"} >

                <div className={"flex flex-col col-span-2 h-auto mb-3"}>
                    <span className={"text-lg font-bold col-span-2"}>Personal Information</span>
                    <span className={"text-sm text-gray-500"}>
                        Please fill out your personal information carefully to
                        ensure everything is correct.</span>
                </div>


                <Input
                    label="Name"
                    register={register}
                    name="name"
                    value="Pre-filled data"
                    readOnly
                    rules={{
                        required: 'Name is required',
                        minLength: { value: 3, message: "Name must be at least 3 characters" }
                    }}
                    error={errors.name?.message}

                    componentClassName={"w-full h-auto flex flex-col justify-self-start"}
                    inputClassName={"w-full px-2 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 h-8.5 focus:outline-none focus:border-blue-400 text-gray-400"}
                    errorClassName={"mt-1 text-red-500 text-xs"}
                />

                <Input
                    label="Email"
                    register={register}
                    name="email"

                    rules={{
                        required: 'Email is required',
                        minLength: { value: 3, message: "Email must be at least 3 characters long" },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address"
                        }
                    }}
                    error={errors.email?.message}

                    componentClassName={"w-full h-auto flex flex-col justify-self-end"}
                    inputClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400"}
                    errorClassName={"mt-1 text-red-500 text-xs"}
                />

                <Input
                    label="Pin Code"
                    register={register}
                    name="pincode"
                    rules={{
                        required: 'Pin Code is required',
                    }}
                    type="number"
                    error={errors.pincode?.message}
                    componentClassName={"w-full h-auto flex flex-col justify-self-end"}
                    inputClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400"}
                    errorClassName={"mt-1 text-red-500 text-xs"}
                />

                <Select
                    label="City"
                    optionList={[
                        { value: "sirakol", name: "Sirakol" },
                        { value: "amtala", name: "Amtala" },
                        { value: "joka", name: "Joka" }
                    ]}
                    register={register}
                    name="city"
                    rules={{
                        required: 'City is required',
                    }}

                    error={errors.city?.message}

                    componentClassName={"w-full h-auto flex flex-col justify-self-end"}
                    optionClassName={"bg-[#232c3b] hover:bg-red-600"}
                    selectClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400"}
                />

                <Input
                    label="State"
                    register={register}
                    name="state"
                    rules={{ required: 'State is required' }}
                

                    error={errors.state?.message}
                    componentClassName={"w-full h-auto flex flex-col justify-self-end"}
                    inputClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400 autofill:bg-yellow-200"}
                    errorClassName={"mt-1 text-red-500 text-xs"}
                />

                <Input
                    label="District"
                    register={register}
                    name="district"
                    rules={{ required: 'District is required' }}

                    error={errors.district?.message}
                    componentClassName={"w-full h-auto flex flex-col justify-self-end"}
                    inputClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400 autofill:bg-yellow-200"}
                    errorClassName={"mt-1 text-red-500 text-xs"}
                />

                <div className='w-full h-auto'>
                    <Input
                        label="Country"
                        register={register}
                        name="country"
                        rules={{ required: 'Country is required' }}

                        error={errors.country?.message}
                        componentClassName={"w-full h-auto flex flex-col justify-self-end"}
                        inputClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                            "border border-gray-700 focus:outline-none focus:border-blue-400"}
                        errorClassName={"mt-1 text-red-500 text-xs"}
                    />

                    <div className='mt-2'>
                        <p>Register as a</p>
                        <div className="flex gap-11 mt-3">

                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    {...register("role", { required: true })}
                                    value="customer"
                                    className="appearance-none w-4 h-4 rounded-full border border-gray-700
                                       bg-[#1c2433] checked:border-blue-600 checked:border-5 checked:bg-white "
                                />
                                <span className="ml-2">Customer</span>
                            </label>


                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    {...register("role", { required: true })}
                                    value="seller"
                                    className="appearance-none w-4 h-4 rounded-full border border-gray-700
                                       bg-[#1c2433] checked:border-blue-600 checked:border-5 checked:bg-white "
                                />
                                <span className="ml-2">Seller</span>
                            </label>
                        </div>
                    </div>

                </div>

                <TextArea
                    label="Landmark"
                    register={register}
                    name="landmark"
                    rules={{ required: 'Landmark is required' }}
                    error={errors.landmark?.message}

                    componentClassName={"w-full h-auto flex flex-col justify-self-end border border-white"}
                    inputClassName={"w-full px-2 py-1 h-20 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400"}
                    errorClassName={"mt-1 text-red-500 text-xs"}
                />


                {role === "seller" &&
                    <div className='col-span-2 w-full flex justify-between gap-10'>
                        <Input
                            label="Shop Name"
                            register={register}
                            name="shopName"
                            rules={{ required: 'Shop Name is required' }}

                            error={errors.shopName?.message}
                            componentClassName={"flex-1 h-auto flex flex-col"}
                            inputClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                                "border border-gray-700 focus:outline-none focus:border-blue-400"}
                            errorClassName={"mt-1 text-red-500 text-xs"}
                        />

                        <Select
                            label="Category"
                            optionList={[
                                { value: "sirakol", name: "Sirakol" },
                                { value: "amtala", name: "Amtala" },
                                { value: "joka", name: "Joka" }
                            ]}
                            register={register}
                            name="city"
                            rules={{
                                required: 'City is required',
                            }}

                            error={errors.city?.message}

                            componentClassName={"flex-1 h-auto flex flex-col"}
                            optionClassName={"bg-[#232c3b] hover:bg-red-600"}
                            selectClassName={"w-full px-2 h-8.5 bg-[#232c3b] rounded-sm mt-2 " +
                                "border border-gray-700 focus:outline-none focus:border-blue-400"}
                        />

                    </div>
                }



            </form>
        </div>
    );
};

export default UserDetailsForm;