import { useNavigate, useParams } from "react-router-dom";
import useUpdateProduct from "../../../hook/useProduct/useUpdateProduct";
import useProduct from "../../../hook/useProduct/useProduct";
import { useForm } from "react-hook-form";
import Message from "../../common/Message";
import { useEffect } from "react";
import toast from "react-hot-toast";

const UpdateProductForm = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { product, isProductFetching, productError } = useProduct(productId);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (product) {
            reset({
                name: product.name,
                description: product.description,
                price: product.price
            });
        }
    }, [product, reset]);

    const { updateProduct, isProductUpdating } = useUpdateProduct();

    const onSubmit = async (data) => {
        try {
            const response = await updateProduct(productId, data);
            navigate(`/products/${productId}/description`)
            toast.success(response);
        } catch (error) {
            toast.error(error.response.data || "Error in update product");
        }
    }

    return (
        <div className='w-screen h-screen font-mono bg-black flex justify-center items-center tex-white'>

            <div className="w-[34%] h-auto border border-gray-700 ">
                {isProductFetching ? (<Message message={"Loading"} />)
                    : productError ? (<Message message={productError} />)
                        : (
                            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-1 items-center flex-col">
                                <div
                                    className='w-full py-1.5 pl-2 pr-1 bg-black text-white flex justify-between border-b border-gray-700'>
                                    <span>Update Product - {productId}</span>
                                    <button className='text-lg px-3 h-full
                    hover:bg-red-600 cursor-pointer'
                                        type="button"
                                        onClick={() => navigate(`/products/${productId}/description`)}>X
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
                                                value: 2,
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
                        cursor-pointer hover:bg-gray-800'
                                    type="submit">
                                    {isProductUpdating ? "Loading..." : "UPDATE Product"}
                                </button>

                            </form>)}
            </div>
        </div>
    );
};

export default UpdateProductForm;