import {useEffect, useState} from 'react';
import {getDashboardSummery as getDashboardSummeryService} from "../../api/index.js";

const useDashboardSummery = (duration) => {
    const [dashboardSummery, setDashboardSummery] = useState();
    const [isDashboardSummery, setIsDashboardSummery] = useState(true);
    const [dashboardError, setDashboardError] = useState(null);

    useEffect(() => {
        const getDashboardSummery = async (duration) => {
            setDashboardError(null);
            setIsDashboardSummery(true);
            try {
                const data = await getDashboardSummeryService(duration);
                setDashboardSummery(data);
            }catch(error) {
                setDashboardError(error.response.data || "Error in fetching dashboard");
            }finally {
                setIsDashboardSummery(false);
            }
        };
        getDashboardSummery(duration);
    },[duration])

    return{
        dashboardSummery,
        setDashboardSummery,
        isDashboardSummery,
        dashboardError
    }
};
export default useDashboardSummery;