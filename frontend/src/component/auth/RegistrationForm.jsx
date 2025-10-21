import React from 'react';
import { useForm } from "react-hook-form";
import Input from "../common/Input.jsx";
import Button from "../common/Button.jsx";

const RegistrationForm = () => {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={"w-screen h-screen bg-[#101828] " +
            "flex flex-col justify-center items-center text-white"}>

            <div>
                <p className={"text-2xl font-bold mb-12 tracking-tight"}>Sign up for an account</p>
            </div>

            <form className={"h-auto w-full  " +
                "flex flex-col items-center sm:w-md"}
                autoComplete={"off"}
                onSubmit={handleSubmit(onSubmit)}>

                <Input
                    label="Name"
                    register={register}
                    name="name"
                    rules={{
                        required: 'Name is required',
                        minLength: { value: 3, message: "Name must be at least 3 characters" }
                    }}
                    error={errors.name?.message}

                    componentClassName={"w-[90%] flex flex-col"}
                    inputClassName={"w-full h-8.5 px-2 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400"}
                    errorClassName={"mt-1 text-red-500 text-xs h-5"}
                />

                <Input
                    label="Email address"
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

                    componentClassName={"mt-2 w-[90%] flex flex-col"}
                    inputClassName={"w-full h-8.5 px-2 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400"}
                    errorClassName={"mt-1 text-red-500 text-xs h-5"}
                />

                <Input
                    label="Password"
                    register={register}
                    name="password"
                    type="password"
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 8, message: "Password must be 8 character long" }
                    }}
                    error={errors.password?.message}

                    componentClassName={"mt-2 w-[90%] flex flex-col"}
                    inputClassName={"w-full h-8.5 px-2  bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400 autocomplete=off"}
                    errorClassName={"mt-1 text-red-500 text-xs h-5"}
                />

                <Button
                    text="Sign Up"
                    buttonClassName={"bg-[#615fff] w-[91%] mt-7 h-9.5 rounded-md " +
                        "hover:bg-[#5756e6] active:bg-[#615fff] font-medium"
                        }
                    onClick={onSubmit} />
            </form>
        </div>
    );
};

export default RegistrationForm;