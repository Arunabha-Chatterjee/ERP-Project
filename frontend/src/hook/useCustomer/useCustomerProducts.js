import {useEffect, useState} from "react";
import {getCustomerProducts as getCustomerProductsService} from "../../api";

const useCustomerProducts = (customerId) => {
    const [customerProducts, setCustomerProducts] = useState([]);
    const [customerProductsError, setCustomerProductsError] = useState(null);
    const [isFetchingCustomerProducts, setIsFetchingCustomerProducts] = useState(true);

    useEffect(() => {
        const fetchCustomerProducts = async (customerId) => {
            setCustomerProductsError(null);
            setIsFetchingCustomerProducts(true);

            try {
                const data = await getCustomerProductsService(customerId);
                setCustomerProducts(data);
            } catch (error) {
                setCustomerProductsError(error.response.data || "Error in fetch customer's products")
            } finally {
                setIsFetchingCustomerProducts(false)
            }
        };
        fetchCustomerProducts(customerId);
    }, [customerId])

    return {
        customerProducts,
        customerProductsError,
        isFetchingCustomerProducts
    }

};

export default useCustomerProducts;