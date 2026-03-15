import React from 'react';
import useCustomerSummery from "../../../hook/useCustomer/useCustomerSummery.js";
import {useParams} from "react-router-dom";
import Message from "../../common/Message.jsx";
import {formatINR} from "../../../utills/formatINR.js";

const CustomerSummery = () => {
    const {customerId} = useParams();
    const {
        customerSummery,
        customerSummeryError,
        isCustomerSummeryFetching
    } = useCustomerSummery(customerId)

    if(isCustomerSummeryFetching) return <Message message={"Loading..."}/>
    if (customerSummeryError) return <Message message={customerSummeryError} />
    if(!customerSummery) return <Message message={"No sales activity has been made."} />


    return (
        <div className='w-full h-auto pl-2 py-2'>
            <table>
                <tbody>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Billed:</td>
                    <td className='py-1 pl-4'>{formatINR(customerSummery.totalBilled)}</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Due:</td>
                    <td className='py-1 pl-4'>{formatINR(customerSummery.totalDue)}</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total items purchase:</td>
                    <td className='py-1 pl-4'>{customerSummery.totalItems}</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Invoices:</td>
                    <td className='py-1 pl-4'>{customerSummery.totalInvoices}</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default CustomerSummery;