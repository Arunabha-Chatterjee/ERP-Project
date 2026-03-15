import {formatINR} from "../../../utills/formatINR.js";
import {useNavigate} from "react-router-dom";
import getPaymentStatusClass from "../../common/getPaymentStatusClass.js";

const InvoiceListRow = ({invoice}) => {
    const navigate = useNavigate();
    return (
            <button className='grid grid-rows-2 w-full h-auto py-1 px-4 border-y border-gray-800
                               hover:bg-[#0d0d0d] gap-1 cursor-pointer'
            onClick={() => {navigate(`/invoices/${invoice.invoiceId}/description`)}}>

                <div className='flex gap-2 items-center text-left justify-self-start'>
                    <div className='text-gray-300 font-semibold text-base max-w-xs truncate'>{invoice.invoiceId}</div>
                    <div className={`text-green-600 text-xs font-semibold ${getPaymentStatusClass(invoice.status)}`}>
                        {invoice.status}</div>
                </div>
                <div className='text-xs text-gray-400 justify-self-start'>
                    {formatINR(invoice.totalAmount)}
                </div>
            </button>
    );
};

export default InvoiceListRow;