import { useForm } from "react-hook-form";
import Input from "../common/Input.jsx";
import Button from "../common/Button.jsx";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hook/useAuth/useLogin.js";
import toast from "react-hot-toast";

const LoginFrom = () => {
    const navigate = useNavigate();
    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();

    const {
        isLogin,
        login
    } = useLogin();

    const onSubmit = async(data) => {
        try{
            await login(data);
            reset();
            navigate("/")
        }catch(error){
            toast.error(error.response.data || "Error in login");
        }
    }

    return (
        <div className={"w-screen h-screen bg-[#101828] " +
            "flex flex-col justify-center items-center text-white"}>

            <div>
                <p className={"text-2xl font-bold mb-9 tracking-tight"}>Sign in to your account</p>
            </div>

            <form className={"h-auto w-full  " +
                "flex flex-col items-center sm:w-md"}
                autoComplete={"off"}
                onSubmit={handleSubmit(onSubmit)}>

                <div className="w-[90%]">
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


                <div className="mt-2 w-[90%] flex flex-col relative">
                    <div className="w-full ">
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

                    {/* <div className={"w-[90%] text-right pr-1 absolute top-0 right-0.5"}>
                        <a href={"#"} className={"text-xs font-bold text-indigo-400 " +
                            "hover:text-indigo-300"}>Forgot Password</a>
                    </div> */}
                </div>

                <button className={"bg-[#615fff] cursor-pointer w-[91%] mt-3 h-9.5 rounded-md " +
                    "hover:bg-[#5756e6] active:bg-[#615fff] font-medium"}
                    type="submit">
                    {isLogin ? "Loding..." : "Sign In"}</button>

                <div className='mt-2 w-[90%] text-xs'><span className='text-gray-300'>Not have an account? </span>
                    <button className='text-blue-500 font-bold tracking-wider cursor-pointer hover:text-blue-600 active:text-blue-500 '
                        type="button"
                        onClick={() => navigate("/registration")}>Sign Up</button></div>
            </form>
        </div>
    );
};

export default LoginFrom;