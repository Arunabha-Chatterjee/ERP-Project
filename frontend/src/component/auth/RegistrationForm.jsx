import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useRegistration from "../../hook/useAuth/useRegistration.js";
import toast from "react-hot-toast";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();

    const {
        isRegistration,
        registration
    } = useRegistration();

    const onSubmit = async (data) => {
        try {
            const response = await registration(data);
            toast.success(response);
            navigate("/login");
        } catch (error) {
            toast.error(error.response.data || "Error in registration");
        }
    }



    return (
        <div className={"w-screen h-screen bg-gray-900 " +
            "flex flex-col justify-center items-center text-white"}>

            <form className={"h-auto w-[90%] " +
                "flex flex-col items-center sm:max-w-md"}
                autoComplete={"off"}
                onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <p className={"text-2xl font-bold mb-7 tracking-tight"}>Sign up for an account</p>
                </div>

                <div className="w-full ">
                    <label htmlFor="name">Name</label>
                    <input
                        className={"w-full h-8.5 px-2 bg-[#232c3b] rounded-sm mt-1 " +
                            "border border-gray-700 focus:outline-none focus:border-blue-400"}
                        id="name"
                        type='text'
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

                <div className="w-full mt-1">
                    <label htmlFor="email">Email</label>
                    <input
                        className={"w-full h-8.5 px-2 bg-[#232c3b] rounded-sm mt-1 " +
                            "border border-gray-700 focus:outline-none focus:border-blue-400"}
                        id="email"
                        type='text'
                        {...register("username", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address"
                            }
                        })}
                    />
                    <p className='text-red-600 text-xs min-h-4'>{errors.username?.message || ""}</p>
                </div>

                <div className="w-full mt-1">
                    <label htmlFor="password">Password</label>
                    <input
                        className={"w-full h-8.5 px-2 bg-[#232c3b] rounded-sm mt-1 " +
                            "border border-gray-700 focus:outline-none focus:border-blue-400"}
                        id="password"
                        type='password'
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be 8 character long"
                            }
                        })}
                    />
                    <p className='text-red-600 text-xs min-h-4'>{errors.password?.message || ""}</p>
                </div>

                <button className={"bg-[#615fff] cursor-pointer w-full mt-3 h-9.5 rounded-md " +
                    "hover:bg-[#5756e6] active:bg-[#615fff] font-medium"}
                    type="submit">
                    {isRegistration ? "Loding..." : "Sign Up"}</button>

                <div className='w-full text-xs mt-2'><span className='text-gray-300'>Already have an account? </span>
                    <button className='text-blue-500 font-bold tracking-wider cursor-pointer hover:text-blue-600 active:text-blue-500 '
                        type="button"
                        onClick={()=>{navigate("/login")}}>
                            Sign In
                    </button></div>
            </form>
        </div>
    );
};

export default RegistrationForm;