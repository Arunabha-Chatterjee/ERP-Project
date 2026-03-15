import { useState } from "react";
import { updateProduct as updateProductService } from "../../api";

const useUpdateProduct = () => {
    const [isProductUpdating, setIsProductUpdating] = useState(false);
    const updateProduct = async (productId, productData)=>{
        setIsProductUpdating(true);
        try{
            const response = await updateProductService(productId, productData);
            return response;
        }catch(error){
            throw error;
        }finally{
            setIsProductUpdating(false);
        }
    }

    return{
        updateProduct,
        isProductUpdating
    }
};

export default useUpdateProduct;