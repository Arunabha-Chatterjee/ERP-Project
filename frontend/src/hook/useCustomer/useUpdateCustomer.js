import { useState } from 'react';
import { updateCustomer as updateCustomerService } from '../../api';

const useUpdateCustomer = () => {
    const [isCustomerUpdating, setIsCustomerUpdating] = useState(false);

    const updateCustomer = async (customerId, data) => {
        setIsCustomerUpdating(true)
        try {
            const response = await updateCustomerService(customerId, data)
            return response;
        } catch (error) {
            throw error
        } finally {
            setIsCustomerUpdating(false)
        }
    }

    return {
        updateCustomer,
        isCustomerUpdating
    }
};

export default useUpdateCustomer;