import {useEffect, useState} from "react";
import {getProductSummery as getProductSummeryService} from "../../api/index.js";

const useProductSummery = (productId) => {
    const [productSummery, setProductSummery] = useState();
    const [isProductSummeryFetching, setIsProductSummeryFetching]= useState(true);
    const [productSummeryError, setProductSummeryError] = useState(null);

    useEffect(() => {
        const fetchProductSummery = async (productId) => {
            setProductSummeryError(null);
            setIsProductSummeryFetching(true)
            try {
                const data = await getProductSummeryService(productId)
                setProductSummery(data);
            }catch (error) {
                setProductSummeryError(error.response.data || "Error in fetching summery");
            }finally {
                setIsProductSummeryFetching(false)
            }
        };
        fetchProductSummery(productId);
    },[productId])

    return {
        productSummery,
        isProductSummeryFetching,
        productSummeryError
    }
};

export default useProductSummery;