import {apiClient} from "./apiClient.js";

export const addProduct = async(productData)=>{
    const response = await apiClient.post('/products/add-product', productData);
    return response.data;
}

export const updateProduct = async(productId, productData) =>{
    const response = await apiClient.put(`products/update-product/${productId}`, productData);
    return response.data;
}

export const getAllProducts = async () => {
    const response = await apiClient.get('/products/get-all');
    return response.data;
}

export const getProductById = async (productId) => {
    const response = await apiClient.get(`/products/get-by-id/${productId}`);
    return response.data;
}

export const getProductSummery = async (productId) => {
    const response = await apiClient.get(`/products/get-product-summery/${productId}`);
    return response.data;
}

export const getProductInvoices= async (productId) => {
    const response = await apiClient.get(`/products/get-invoices/${productId}`);
    return response.data;
}