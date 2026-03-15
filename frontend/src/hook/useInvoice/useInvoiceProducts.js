import {useEffect, useState} from "react";
import {getInvoiceProducts} from "../../api/index.js";

const useInvoiceProducts = (invoiceId) => {
    const [invoiceProducts, setInvoiceProducts] = useState([])
    const [isInvoiceProductsFetching, setIsInvoiceProductsFetching] = useState(true)
    const [invoiceProductsError, setInvoiceProductsError] = useState()

    useEffect(() => {
        const fetchInvoiceProducts = async (invoiceId) => {
            setInvoiceProductsError(null);
            setIsInvoiceProductsFetching(true);
            try {
                const data = await getInvoiceProducts(invoiceId);
                setInvoiceProducts(data);
            }catch (error) {
                setInvoiceProductsError(error.response.data || "Error in fetching products");
            }finally {
                setIsInvoiceProductsFetching(false);
            }
        };
        fetchInvoiceProducts(invoiceId);
    },[invoiceId]);

    return {
        invoiceProducts,
        isInvoiceProductsFetching,
        invoiceProductsError
    }
};

export default useInvoiceProducts;