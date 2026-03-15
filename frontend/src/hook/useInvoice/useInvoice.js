import {useEffect, useState} from "react";
import {getInvoiceById as getInvoiceIdService} from "../../api/index.js";

const useInvoice = (invoiceId) => {
    const [invoice, setInvoice] = useState();
    const [isInvoiceFetching, setIsInvoiceFetching] = useState(true);
    const [invoiceError, setInvoiceError] = useState(null);

    useEffect(() => {
        const getInvoice = async (invoiceId) => {
            setInvoiceError(null);
            setIsInvoiceFetching(true);
            try {
                const data= await getInvoiceIdService(invoiceId);
                setInvoice(data);
            }catch(error) {
                setInvoiceError(error.response.data || "Error in fetching invoice");
            }finally {
                setIsInvoiceFetching(false);
            }
        };
        getInvoice(invoiceId);
    },[invoiceId]);

    return{
        invoice,
        invoiceError,
        isInvoiceFetching
    }
};

export default useInvoice;