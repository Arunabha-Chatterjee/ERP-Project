import React from 'react';
import {useParams} from "react-router-dom";
import useCustomerInvoices from "../../../hook/useCustomer/useCustomerInvoices.js";
import Message from "../../common/Message.jsx";
import {formatINR} from "../../../utills/formatINR.js";
import getPaymentStatusClass from "../../common/getPaymentStatusClass.js";

const CustomerInvoices = () => {

    const {customerId}  = useParams();
    const {customerInvoices,
        customerInvoiceError,
        isFetchingCustomerInvoices} = useCustomerInvoices(customerId);

    if (isFetchingCustomerInvoices) return <Message message={"Loading..."}/>
    if (customerInvoiceError) return <Message message={customerInvoiceError} />;
    if(!customerInvoices.length) return <Message message="No sales activity has been made." />;
    return (
        <div className='h-full flex flex-col'>

            <div className='w-full h-auto text-sm font-semibold pl-3 pt-4 pb-2 '>Invoice Details</div>

            <div className='flex-1 text-sm overflow-y-auto
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    dark:[&::-webkit-scrollbar-thumb]:bg-gray-400'>
                <table className='w-full table-auto'>
                    <thead>
                    <tr className='border-b border-gray-800 bg-black sticky top-0'>
                        <th className='py-2 pl-3 font-semibold text-gray-200 text-sm text-left'>#</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Id</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Amount</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Status</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Date</th>
                    </tr>
                    </thead>

                    <tbody className='text-sm text-gray-300 border-b border-gray-900'>
                    {customerInvoices.map((invoice, index) => (
                        <tr key={invoice.invoiceId} className='border-b border-gray-900 '>
                            <td className='py-1 pl-3'>{index+1}</td>
                            <td className='py-1'>{invoice.invoiceId}</td>
                            <td className='py-1'>{formatINR(invoice.totalAmount)}</td>
                            <td className={`py-1 ${getPaymentStatusClass(invoice.status)}`}>{invoice.status}</td>
                            <td className='py-1'>{invoice.date}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerInvoices;