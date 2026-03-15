import { getCustomerById as getCustomerByIdService } from "../../api/index.js";
import { useEffect, useState } from "react";

const useCustomer = (customerId) => {

    const [customer, setCustomer] = useState();
    const [customerError, setCustomerError] = useState(null);
    const [isCustomerFetching, setIsCustomerFetching] = useState(true);

    const getCustomer = async (customerId) => {
        if (!customerId) return;

        setCustomerError(null);
        setIsCustomerFetching(true);
        try {
            const data = await getCustomerByIdService(customerId);
            setCustomer(data);
        } catch (error) {
            setCustomerError(error.response.data || "Error in fetch customer data");
        } finally {
            setIsCustomerFetching(false);
        }
    };

    useEffect(() => {
        getCustomer(customerId);
    }, [customerId]);

    return {
        customer,
        getCustomer,
        customerError,
        isCustomerFetching
    }
};

export default useCustomer;