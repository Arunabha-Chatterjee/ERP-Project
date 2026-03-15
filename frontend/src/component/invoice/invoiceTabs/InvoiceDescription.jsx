import { useParams } from "react-router-dom";
import useInvoice from "../../../hook/useInvoice/useInvoice.js";
import Message from "../../common/Message.jsx";
import getPaymentStatusClass from "../../common/getPaymentStatusClass.js";

const InvoiceDescription = () => {
    const { invoiceId } = useParams();
    const {
        invoice,
        invoiceError,
        isInvoiceFetching
    } = useInvoice(invoiceId);


    if (isInvoiceFetching) return <Message message={"Loading..."} />
    if (invoiceError) return <Message message={invoiceError} />


    return (
        <div className='w-full h-auto'>
            <table className='border-gray-700'>
                <tbody>
                    <tr >
                        <td className='py-1 pl-2 font-semibold text-gray-300'>Customer Id:</td>
                        <td className='py-1 pl-10'>{invoice.customerId}</td>
                    </tr>

                    <tr>
                        <td className='py-1 pl-2 font-semibold text-gray-300'>Total Price:</td>
                        <td className='py-1 pl-10'>{invoice.totalAmount}</td>
                    </tr>

                    <tr>
                        <td className='py-1 pl-2 font-semibold text-gray-300'>Total Items:</td>
                        <td className='py-1 pl-10'>{invoice.totalItems}</td>
                    </tr>

                    <tr>
                        <td className='py-1 pl-2 font-semibold text-gray-300'>Date:</td>
                        <td className='py-1 pl-10'>{invoice.date}</td>
                    </tr>

                    <tr>
                        <td className='py-1 pl-2 font-semibold text-gray-300 '>Status:</td>
                        <td className={`py-1 pl-10 ${getPaymentStatusClass(invoice.status)}`}>{invoice.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceDescription;