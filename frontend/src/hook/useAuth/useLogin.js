import { useState } from "react";
import { loginService } from "../../api";

const useLogin = () => {
    const [isLogin, setIsLogin] = useState();

    const login = async (data) => {
        setIsLogin(true);
        try {
            const response = await loginService(data);
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", response.username);
        } catch (error) {
            throw error
        } finally {
            setIsLogin(false);
        }
    }

    return {
        isLogin,
        login
    }
};

export default useLogin;