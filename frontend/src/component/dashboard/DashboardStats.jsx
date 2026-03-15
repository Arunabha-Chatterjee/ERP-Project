import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useDashboardSummery from "../../hook/useDashboard/useDashboardSummery.js";
import Message from "../common/Message.jsx";
import { formatINR } from "../../utills/formatINR.js";

const DashboardStats = () => {
    const navigate = useNavigate();
    const [duration, setDuration] = useState("today");
    const {
        dashboardSummery,
        isDashboardSummery,
        dashboardError
    } = useDashboardSummery(duration);

    if (!duration) return <Message message="Select a duration" />;
    if (dashboardError) return <Message message={dashboardError} />;

    return (
        <div className='w-full h-auto py-10 flex flex-col justify-between gap-5 items-center'>

            <div className='grid grid-cols-2 w-full'>

                <div className='flex gap-13 pl-2 '>

                    <div className={'font-bold text-xl border-r-2 border-gray-800 pr-2 ' +
                        'flex justify-center items-center'}>
                        Statistics
                    </div>

                    <div className={`flex justify-center items-center font-semibold cursor-pointer tracking-wider
                    ${duration === "today" ? "text-white" : "text-gray-400"}`}
                        onClick={() => setDuration("today")}>
                        Today
                    </div>

                    <div className={`flex justify-center items-center font-semibold cursor-pointer
                    ${duration === "week" ? "text-white" : "text-gray-400"}`}
                        onClick={() => setDuration("week")}>
                        Week
                    </div>

                    <div className={`flex justify-center items-center font-semibold cursor-pointer
                    ${duration === "month" ? "text-white" : "text-gray-400"}`}
                        onClick={() => setDuration("month")}>
                        Month
                    </div>

                    <div className={`flex justify-center items-center font-semibold cursor-pointer
                    ${duration === "year" ? "text-white" : "text-gray-400"}`}
                        onClick={() => setDuration("year")}>
                        Year
                    </div>

                    <div className={`flex justify-center items-center font-semibold cursor-pointer
                        ${duration === "all" ? "text-white" : "text-gray-400"}`}
                        onClick={() => setDuration("all")}>
                        All time
                    </div>

                </div>

                <div className='justify-self-end pr-7'>
                    <button className='font-semibold bg-gray-800 py-1.5 px-2 text-white
                    rounded-sm hover:bg-gray-900 cursor-pointer'
                        onClick={() => navigate("add-invoice")}>
                        + New Invoice
                    </button>
                </div>
            </div>

            <div className='w-full border-t border-b
             border-gray-700 h-auto'>

                {/* Loading */}
                {isDashboardSummery && (
                    <div className="py-4"><Message message="Loading..." /></div>
                )}

                {/* Not loading + no data */}
                {!isDashboardSummery && !dashboardSummery && (
                    <div className="py-4"><Message message={`No sales activity has been recorded for ${duration}`} /></div>
                )}

                {/* Not loading + data exists */}
                {!isDashboardSummery && dashboardSummery && (
                    <div className="w-full grid grid-cols-4 h-auto">
                        <div className='border-r border-gray-700 flex flex-col justify-center px-6 py-5'>
                            <div>Sales</div>
                            <div className='text-3xl mt-1 font-semibold'>
                                {formatINR(dashboardSummery.totalSales)}
                            </div>
                        </div>

                        <div className='border-r border-gray-700 flex flex-col justify-center px-5 py-5'>
                            <div>Total Due</div>
                            <div className='text-3xl mt-1 font-semibold'>
                                {formatINR(dashboardSummery.totalDue)}
                            </div>
                        </div>

                        <div className='border-r border-gray-700 flex flex-col justify-center px-5 py-5'>
                            <div>Total Items</div>
                            <div className='text-3xl mt-1 font-semibold'>
                                {dashboardSummery.totalItems}
                            </div>
                        </div>

                        <div className='flex flex-col justify-center px-5 py-5'>
                            <div>Total Invoice</div>
                            <div className='text-3xl mt-1 font-semibold'>
                                {dashboardSummery.totalInvoices}
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}
    ;

export default DashboardStats;