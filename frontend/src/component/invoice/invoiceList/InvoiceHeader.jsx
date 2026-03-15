import {NavLink, useParams} from "react-router-dom";
import Message from "../../common/Message.jsx";
import useInvoice from "../../../hook/useInvoice/useInvoice.js";
import {formatINR} from "../../../utills/formatINR.js";

const InvoiceHeader = () => {
    const {invoiceId} = useParams();
    const {
            invoice,
            invoiceError,
            isInvoiceFetching
    } = useInvoice(invoiceId);

    if (!invoiceId) return <Message message="Select one invoice"/>
    if (isInvoiceFetching) return <Message message="Loading..." />
    if (invoiceError) return <Message message={invoiceError} />;

    return (
        <div className='h-auto w-full'>
            <div className='w-full py-2.5 pl-3'>
                <div className='text-lg font-semibold'>{invoice.invoiceId}</div>
                <div className='text-xs text-gray-400'>{formatINR(invoice.totalAmount)}</div>
            </div>

            <div className='w-full px-3 flex py-2 border-t border-t-gray-600 border-b border-b-gray-900
                                gap-16 text-sm tracking-wide font-semibold text-gray-400'>

                <NavLink to={`/invoices/${invoice.invoiceId}/description`}
                         className={({isActive})=>(isActive?
                             'text-white':'hover:text-white')}>Description</NavLink>
                <NavLink to={`/invoices/${invoice.invoiceId}/products`}
                         className={({isActive})=>(isActive?
                             'text-white':'hover:text-white')}>Products</NavLink>

            </div>
        </div>
    );
};

export default InvoiceHeader;