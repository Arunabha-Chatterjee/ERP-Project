import { getAllCustomers as getAllCustomersService } from "../../api/index.js";
import { useEffect, useState } from "react";

const useCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [customersError, setCustomersError] = useState(null);
    const [isCustomersFetching, setIsCustomersFetching] = useState(true);

    const fetchCustomers = async () => {
        setIsCustomersFetching(true)
        setCustomersError(null);
        try {
            const data = await getAllCustomersService();
            setCustomers(data)
        } catch (error) {
            setCustomersError(error.response.data || "Error in fetch customers list");
        } finally {
            setIsCustomersFetching(false)
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return { customers, customersError, isCustomersFetching };

};

export default useCustomers;