import useProductInvoices from "../../../hook/useProduct/useProductInvoices.js";
import {useParams} from "react-router-dom";
import Message from "../../common/Message.jsx";
import getPaymentStatusClass from "../../common/getPaymentStatusClass.js";

const ProductInvoices = () => {
    const {productId} = useParams();
    const {
        productInvoices,
        isProductInvoicesFetching,
        productInvoicesError
    } = useProductInvoices(productId);

    if(isProductInvoicesFetching) return <Message message={"Loading..."}/>
    if(productInvoicesError) return <Message message={productInvoicesError} />;
    if(!productInvoices.length) return <Message message="No sales activity has been made." />;

    return (
        <div className='h-full flex flex-col'>

            <div className='w-full h-auto text-sm font-semibold pl-3 pt-4 pb-2 '>Invoice Details</div>

            <div className='flex-1 text-sm overflow-y-auto min-h-0'>
                <table className='w-full table-auto '>
                    <thead>
                    <tr className='border-b border-gray-800 bg-black sticky top-0'>
                        <th className='py-2 pl-3 font-semibold text-gray-200 text-sm text-left'>#</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Id</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Amount</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Customer Name</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Status</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Date</th>
                    </tr>
                    </thead>

                    <tbody className='text-sm text-gray-300 border-b border-gray-900'>
                    {productInvoices.map((invoice, index) => (
                        <tr key={index} className='border-b border-gray-900'>
                            <td className='py-1.5 pl-3'>{index+1}</td>
                            <td className='py-1.5'>{invoice.invoiceId}</td>
                            <td className='py-1.5'>{invoice.totalAmount}</td>
                            <td className='py-1.5'>{invoice.customerName}</td>
                            <td className={`py-1.5 ${getPaymentStatusClass(invoice.status)}`}>{invoice.status}</td>
                            <td className='py-1.5'>{invoice.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductInvoices;