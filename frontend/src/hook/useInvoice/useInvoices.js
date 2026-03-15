import {useEffect, useState} from 'react';
import {getInvoices as getInvoicesService} from "../../api/index.js";

export const UseInvoices = () => {
    const [invoices, setInvoices] = useState([]);
    const [isInvoiceFetching, setIsInvoiceFetching] = useState(false);
    const [invoicesError, setInvoicesError] = useState(null);

    useEffect(() => {
        const fetchInvoices = async () => {
            setIsInvoiceFetching(true);
            setInvoicesError(null);
            try {
                const data = await getInvoicesService();
                setInvoices(data);
                console.log(data);
            }catch (error) {
                setInvoicesError(error.response.data || "Error in fetching invoices");
            }finally {
                setIsInvoiceFetching(false);
            }
        };
        fetchInvoices();
    }, []);

    return{
        invoices,
        isInvoiceFetching,
        invoicesError,
    }
};

export default UseInvoices;