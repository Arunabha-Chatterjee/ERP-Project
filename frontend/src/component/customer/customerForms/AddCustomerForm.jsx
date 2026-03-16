import { useForm } from "react-hook-form";
import useCreateCustomer from "../../../hook/useCustomer/useCreateCustomer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCustomerForm = () => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {
        createCustomer,
        isCustomerCreating,
    } = useCreateCustomer();

    const onSubmit = async (data) => {
        try {
            const result = await createCustomer(data)
            toast.success(result)
            reset();
        } catch (error) {
            toast.error(error.response.data || "Error in add customer")
        }
    }


    return (
        <div className='w-screen h-screen font-mono bg-black flex justify-center items-center text-white '>

            <div className="w-[34%] h-auto border border-gray-700 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                        className='w-full py-1.5 pl-2 pr-1 bg-black text-white flex justify-between border-b border-gray-700'>
                        <span>Add Customer</span>
                        <button className='text-lg px-3 h-full
                    hover:bg-red-600 cursor-pointer'
                    type="button"
                            onClick={() => navigate("/customers")}>X
                        </button>
                    </div>

                    <div className='grid grid-cols-2 gap-x-1 gap-y-2 py-4 px-3 text-white'>
                        <div className='col-span-2'>
                            <input
                                className='w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500'
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
                            <p className='text-red-600 text-xs min-h-4'>{errors.name?.message || ""}</p>
                        </div>


                        <div>
                            <input
                                className='w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500'
                                {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                                        message: "Enter a valid email address",
                                    }
                                })}
                                type='text'
                                placeholder='Email'
                            />
                            <p className='text-red-600 text-xs min-h-4'>{errors.email?.message || ""}</p>
                        </div>

                        <div>
                            <input
                                className="w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500"

                                {...register('mobile', {
                                    required: "Mobile is required",
                                    minLength: {
                                        value: 10,
                                        message: "Enter a valid mobile number"
                                    }
                                })}
                                type="number"
                                placeholder="Mobile"
                            />
                            <p className='text-red-600 text-xs min-h-4'>{errors.mobile?.message || ""}</p>
                        </div>

                        <div className="col-span-2">
                            <input
                                className="w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500"
                                {...register('address', {
                                    required: "Address is required",
                                    minLength: {
                                        value: 5,
                                        message: "At least 5 character long"
                                    }
                                })}
                                placeholder='Address'
                            />
                            <p className='text-red-600 text-xs min-h-4'>{errors.address?.message || ""}</p>
                        </div>

                        <div>
                            <input
                                className="w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500"
                                {...register('city', {
                                    required: "City is required",
                                    minLength: {
                                        value: 3,
                                        message: "At least 3 character long"
                                    }
                                })}
                                placeholder='City'
                            />
                            <p className='text-red-600 text-xs min-h-4'>{errors.city?.message || ""}</p>
                        </div>

                        <div>
                            <input
                                className="w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500"
                                type="number"
                                {...register('pin', {
                                    required: "Pin code is required",
                                    minLength: {
                                        value: 6,
                                        message: "Enter a valid pin code"
                                    }
                                })}
                                placeholder='Pin Code'
                            />
                            <p className='text-red-600 text-xs min-h-4'>{errors.pin?.message || ""}</p>
                        </div>

                        <button className='border-2 border-gray-700 py-2 px-2 col-span-2 bg-[#101828] text-white
                        cursor-pointer hover:bg-gray-800'
                    type="submit">
                            {isCustomerCreating ? "Loading" : "ADD CUSTOMER"}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomerForm;