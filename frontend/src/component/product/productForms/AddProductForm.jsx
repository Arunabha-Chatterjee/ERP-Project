import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UIFormContext } from "../../../context/UIFormContext";
import toast from "react-hot-toast";
import useCreateProduct from "../../../hook/useProduct/useCreateProduct";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {
        isProductCreating,
        createProduct
    } = useCreateProduct();

    const onSubmit = async (data) => {
        try {
            const result = await createProduct(data)
            toast.success(result)
            reset();
        } catch (error) {
            toast.error(error.response.data || "Error in add product")
        }
    }



    return (
        <div className='w-screen h-screen font-mono bg-black flex justify-center items-center tex-white'>

            <div className="w-[34%] h-auto border border-gray-700 ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-1 items-center flex-col">
                    <div
                        className='w-full py-1.5 pl-2 pr-1 bg-black text-white flex justify-between border-b border-gray-700'>
                        <span>Add Product</span>
                        <button className='text-lg px-3 h-full
                    hover:bg-red-600 cursor-pointer'
                            onClick={() => navigate("/products")}>X
                        </button>
                    </div>
                    <div className="w-[96%] mt-2">
                        <input
                            className='w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500 outline-none text-white'
                            type='text'
                            placeholder='Name'
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters long",
                                }
                            })}
                        />
                        <p className='text-red-600 text-xs min-h-4'>{errors.name?.message || ""}</p>
                    </div>

                    <div className="w-[96%]">
                        <input
                            className='w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500 outline-none text-white'
                            type='text'
                            placeholder='Description'
                            {...register("description", {
                                required: "Description is required",
                            })}
                        />
                        <p className='text-red-600 text-xs min-h-4'>{errors.description?.message || " "}</p>
                    </div>

                    <div className="w-[96%]">
                        <input
                            className='w-full border-2 border-gray-800 py-1 px-2 placeholder-gray-500 outline-none text-white'
                            type='number'
                            placeholder='Price'
                            {...register("price", {
                                required: "Price is required",
                            })}
                        />
                        <p className='text-red-600 text-xs min-h-4 '>{errors.price?.message || " "}</p>
                    </div>

                    <button className='w-[95%] border-2 mb-2 border-gray-700 py-2 col-span-2 bg-[#101828] text-white
                        cursor-pointer hover:bg-gray-800'>
                        {isProductCreating ? "Loading" : "ADD Product"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddProductForm;