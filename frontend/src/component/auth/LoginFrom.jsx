import { useForm } from "react-hook-form";
import Input from "../common/Input.jsx";
import Button from "../common/Button.jsx";

const LoginFrom = () => {
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
                <p className={"text-2xl font-bold mb-12 tracking-tight"}>Sign in to your account</p>
            </div>

            <form className={"h-auto w-full  " +
                "flex flex-col items-center sm:w-md"}
                autoComplete={"off"}
                onSubmit={handleSubmit(onSubmit)}>

                <Input
                    label="Email address"
                    register={register}
                    name="email"

                    rules={{
                        required: 'Email is required',
                        minLength: { value: 3, message: "Email must be at least 3 characters" }
                    }}
                    error={errors.email?.message}

                    componentClassName={"w-[90%] flex flex-col"}
                    inputClassName={"w-full h-8.5 px-2 bg-[#232c3b] rounded-sm mt-2 " +
                        "border border-gray-700 focus:outline-none focus:border-blue-400"}
                    errorClassName={"mt-1 text-red-500 text-xs h-5"}
                />

                <div className="mt-3 w-[90%] flex flex-col relative">
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

                        componentClassName={"w-full"}
                        inputClassName={"w-full h-8.5 px-2  bg-[#232c3b] rounded-sm mt-2 " +
                            "border border-gray-700 focus:outline-none focus:border-blue-400 autocomplete=off "}
                        errorClassName={"mt-1 text-red-500 text-xs h-5 "}
                    />

                    <div className={"w-[90%] text-right pr-1 absolute top-0 right-0.5"}>
                        <a href={"#"} className={"text-xs font-bold text-indigo-400 " +
                            "hover:text-indigo-300"}>Forgot Password</a>
                    </div>
                </div>

                <Button
                    text="Sign In"
                    buttonClassName={"bg-[#615fff] w-[91%] mt-5.5 h-9.5 rounded-md hover:bg-[#5756e6] active:bg-[#615fff] " +
                        "font-medium"}
                    onClick={onSubmit} />
            </form>
        </div>
    );
};

export default LoginFrom;