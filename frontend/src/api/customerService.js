import {apiClient} from "./apiClient.js";

export const addCustomer = async (data)=>{
    const response = await apiClient.post(
        "/customers/add-customer",data);
    return response.data;
}

export const updateCustomer = async (customerId, data)=>{
    const response = await apiClient.put(
        `/customers/update-customer/${customerId}`,data);
    return response.data;
}

export const getAllCustomers = async ()=>{
    const response = await apiClient.get(`/customers/get-all`);
    return response.data;
}

export const getCustomerById = async (customerId)=>{
    const response = await apiClient.get(`/customers/get-customer-byId/${customerId}`);
    return response.data;
}

export const getCustomerSummery = async (customerId)=>{
    const response = await apiClient.get(`/customers/get-summery/${customerId}`);
    return response.data;
}

export const getCustomerProducts = async (customerId)=>{
    const response = await apiClient.get(`/customers/get-products/${customerId}`);
    return response.data;
}

export const getCustomerInvoices = async (customerId)=>{
    const response = await apiClient.get(`/customers/get-invoices/${customerId}`);
    return response.data;
}