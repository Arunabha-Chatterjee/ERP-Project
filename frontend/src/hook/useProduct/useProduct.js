import { useEffect, useState } from "react";
import { getProductById as getProductByIdService } from "../../api/index.js";

const useProduct = (productId) => {
    const [product, setProduct] = useState();
    const [isProductFetching, setIsProductFetching] = useState(true);
    const [productError, setProductError] = useState(null);

    const getProduct = async (productId) => {
        
        setIsProductFetching(true);
        setProductError(null);
        try {
            const data = await getProductByIdService(productId);
            setProduct(data);
        } catch (error) {
            setProductError(error.response.data || "Error in fetching product");
        } finally {
            setIsProductFetching(false);
        }
    };

    useEffect(() => {
        getProduct(productId);
    }, [productId])

    return {
        product,
        isProductFetching,
        productError
    }
};

export default useProduct;