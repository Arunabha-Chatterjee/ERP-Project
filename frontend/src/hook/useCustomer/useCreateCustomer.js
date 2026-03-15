import { useState } from "react";
import { addCustomer as addCustomerService } from "../../api";

const useCreateCustomer = () => {
    const [isCustomerCreating, setIsCustomerCreating] = useState(false);

    const createCustomer = async (customerData) => {
        setIsCustomerCreating(true)
        try {
            const response = await addCustomerService(customerData);
            return response;
        } catch (error) {
            throw error
        } finally {
            setIsCustomerCreating(false)
        }
    }

    return {
        createCustomer,
        isCustomerCreating
    }
};

export default useCreateCustomer;