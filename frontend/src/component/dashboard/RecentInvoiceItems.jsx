import useDashBoardInvoices from "../../hook/useDashboard/useDashBoardInvoices.js";
import Message from "../common/Message.jsx";
import getPaymentStatusClass from "../common/getPaymentStatusClass.js";

const RecentInvoiceItems = () => {

    const {
        dashboardInvoices,
            isDashboardInvoicesFetching,
            dashboardInvoicesError
    } = useDashBoardInvoices()


    return (
        <div className='w-full h-auto px-2'>

            <table className='w-full table-auto'>
                <thead>
                <tr className='border-b border-gray-700 text-sm'>
                    <th className='py-2 px-3 font-semibold text-left'>#</th>
                    <th className='py-2 px-3 font-semibold text-left'>Invoice Id</th>
                    <th className='py-2 px-3 font-semibold text-left'>Total Amount</th>
                    <th className='py-2 px-3 font-semibold text-left'>Total Items</th>
                    <th className='py-2 px-3 font-semibold text-left'>Status</th>
                    <th className='py-2 px-3 font-semibold text-left'>Date</th>
                </tr>
                </thead>

                <tbody className='w-full'>

                {!dashboardInvoices.length && !isDashboardInvoicesFetching ?
                    <tr><td  colSpan="6"><Message message={"No sales activity has been made"} /></td></tr>

                    : dashboardInvoices.map((invoice, index) => (
                    <tr className='border-b border-gray-900 text-sm'
                        key={index}>
                        <td className='py-1.5 px-3  text-left'>{index+1}</td>
                        <td className='py-1.5 px-3  text-left'>
                            {invoice.invoiceId}
                        </td>
                        <td className='py-1.5 px-3 text-left'>
                            {invoice.totalAmount}
                        </td>
                        <td className='py-1.5 px-3 text-left'>
                            {invoice.totalItems}
                        </td>
                        <td className={`py-1.5 px-3 text-left ${getPaymentStatusClass(invoice.status)}`}>
                            {invoice.status}
                        </td>
                        <td className='py-1.5 px-3 text-left'>
                            {invoice.date}
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>
            {isDashboardInvoicesFetching && <Message message="Loading..."/>}
            {dashboardInvoicesError && <Message message={dashboardInvoicesError}/>}
        </div>
    );
};

export default RecentInvoiceItems;