import { useEffect, useState } from 'react';
import { getCustomerSummery as getCustomerSummeryService } from '../../api';

const useCustomerSummery = (customerId) => {
    const [customerSummery, setCustomerSummery] = useState();
    const [customerSummeryError, setCustomerSummeryError] = useState(null);
    const [isCustomerSummeryFetching, setIsCustomerSummeryFetching] = useState(true);

    useEffect(() => {
        const fetchCustomerProducts = async (customerId) => {

            setCustomerSummeryError(null);
            setIsCustomerSummeryFetching(true);
            try {
                const data = await getCustomerSummeryService(customerId);
                setCustomerSummery(data);
            } catch (error) {
                setCustomerSummeryError(error.response.data || "Error in fetching customer's summery");
            } finally {
                setIsCustomerSummeryFetching(false);
            }
        };
        fetchCustomerProducts(customerId)
    }, [customerId])

    return{
        customerSummery,
        customerSummeryError,
        isCustomerSummeryFetching
    }
};

export default useCustomerSummery;