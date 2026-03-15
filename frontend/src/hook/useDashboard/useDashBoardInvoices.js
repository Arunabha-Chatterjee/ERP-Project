import {useEffect, useState} from "react";
import {getRecentInvoices as getRecentInvoicesService} from "../../api/index.js";

const useDashBoardInvoices = () => {
    const [dashboardInvoices, setDashboardInvoices] = useState([]);
    const [isDashboardInvoicesFetching, setIsDashboardInvoicesFetching] = useState(true);
    const [dashboardInvoicesError, setDashboardInvoicesError] = useState(null);

    useEffect(() => {
        const fetchDashboardInvoices = async () => {
            setDashboardInvoicesError(null);
            setIsDashboardInvoicesFetching(true);
            try {
                const data = await getRecentInvoicesService();
                setDashboardInvoices(data);
            }catch (e) {
                setDashboardInvoicesError(e.response.data || "Error in fetching invoices");
            }finally {
                setIsDashboardInvoicesFetching(false);
            }
        };
        fetchDashboardInvoices();
    }, []);

    return{
        dashboardInvoices,
        isDashboardInvoicesFetching,
        dashboardInvoicesError
    }
};

export default useDashBoardInvoices;