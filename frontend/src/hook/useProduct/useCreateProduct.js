import { useEffect, useState } from "react";
import { addProduct as addProductService } from "../../api";
const useCreateProduct = () => {
    const[isProductCreating, setIsProductCreating]=useState(null);

    const createProduct = async(productData)=>{
        setIsProductCreating(true);
        try{
            const response = await addProductService(productData);
            return response;
        }catch(error){
            throw error;
        }finally{
            setIsProductCreating(false)
        }
    }
    
    return{
        isProductCreating,
        createProduct
    }
};

export default useCreateProduct;