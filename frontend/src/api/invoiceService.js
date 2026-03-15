import {apiClient} from "./apiClient.js";


export const addInvoice = async (data)=>{
    const response = await apiClient.post(
        'invoices/add-invoice', data
    )
    return response.data;
}

export const getInvoices = async ()=>{
    const response = await apiClient.get('/invoices/get-invoices');
    return response.data;
}

export const getInvoiceById = async(invoiceId)=>{
    const response = await apiClient.get(`/invoices/get-invoice/${invoiceId}`);
    return response.data;
}

export const getInvoiceProducts = async(invoiceId)=>{
    const response = await apiClient.get(`/invoices/get-products/${invoiceId}`);
    return response.data;
}

