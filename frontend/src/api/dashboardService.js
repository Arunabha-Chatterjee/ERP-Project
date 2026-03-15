import {apiClient} from "./apiClient.js";

export const getDashboardSummery = async (duration) => {
    const response = await apiClient.get(`/dashboards/get-summery/${duration}`);
    return response.data;
}

export const getRecentInvoices = async () => {
    const response = await apiClient.get(`/dashboards/get-recent-invoices`);
    return response.data;
}