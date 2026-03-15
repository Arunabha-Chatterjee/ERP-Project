import {useEffect, useState} from "react";
import {getProductInvoices as getProductInvoicesService} from "../../api/index.js";

const useProductInvoices = (productId) => {
    const [productInvoices, setProductInvoices] = useState([])
    const [isProductInvoicesFetching, setIsProductInvoicesFetching] = useState(true)
    const [productInvoicesError, setProductInvoicesError] = useState(null)

    useEffect(() => {
        const fetchProductInvoices = async (productId) => {
            setIsProductInvoicesFetching(true);
            setProductInvoicesError(null);
            try {
                const data = await getProductInvoicesService(productId);
                setProductInvoices(data);
            }catch (error) {
                setProductInvoicesError(error.response.data || "Error in fetching invoices");
            }finally {
                setIsProductInvoicesFetching(false);
            }
        };
        fetchProductInvoices(productId);
    },[productId])

    return{
        productInvoices,
        isProductInvoicesFetching,
        productInvoicesError
    }
};

export default useProductInvoices;