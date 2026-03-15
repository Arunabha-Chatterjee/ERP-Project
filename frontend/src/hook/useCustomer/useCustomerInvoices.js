import { useEffect, useState } from "react";
import { getCustomerInvoices as getCustomerInvoicesService } from "../../api";

const useCustomerInvoices = (customerId) => {
    const [customerInvoices, setCustomerInvoices] = useState([]);
    const [customerInvoiceError, setCustomerInvoiceError] = useState(null);
    const [isFetchingCustomerInvoices, setIsFetchingCustomerInvoices] = useState(true);

    useEffect(() => {
        const fetchCustomerInvoices = async (customerId) => {
            setIsFetchingCustomerInvoices(true);
            setCustomerInvoiceError(null);
            try {
                const data = await getCustomerInvoicesService(customerId);
                setCustomerInvoices(data);
            } catch (error) {
                setCustomerInvoiceError(error.response.message || "Error in fetching customer's invoices");
            } finally {
                setIsFetchingCustomerInvoices(false);
            }
        };

        fetchCustomerInvoices(customerId);
    }, [customerId])

    return {
        customerInvoices,
        customerInvoiceError,
        isFetchingCustomerInvoices
    }
};

export default useCustomerInvoices;