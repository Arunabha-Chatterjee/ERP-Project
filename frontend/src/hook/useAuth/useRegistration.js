import { useState } from "react";
import { registerService } from "../../api";

const useRegistration = () => {
    const [isRegistration, setisRegistration] = useState();

    const registration= async(data)=>{
        setisRegistration(true);
        try{
            const response = await registerService(data);
            return response;
        }catch(error){
            throw error;
        }finally{
            setisRegistration(false);
        }
    }

    return{
        isRegistration,
        registration
    }
};

export default useRegistration;