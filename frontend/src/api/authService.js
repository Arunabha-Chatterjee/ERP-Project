import {apiClient} from "./apiClient.js";

export const loginService= async (data)=>{
    const response = await apiClient.post("/login", data);
    return response.data;
}

export const registerService= async (data)=>{
    const response = await apiClient.post("/registration", data);
    return response.data;
}

export const logoutService=  ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
}