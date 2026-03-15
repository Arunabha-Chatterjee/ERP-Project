import {useParams} from "react-router-dom";
import useInvoiceProducts from "../../../hook/useInvoice/useInvoiceProducts.js";
import Message from "../../common/Message.jsx";
import {formatINR} from "../../../utills/formatINR.js";

const InvoiceProducts = () => {
    const {invoiceId} = useParams();

    const{
        invoiceProducts,
        isInvoiceProductsFetching,
        invoiceProductsError
    } = useInvoiceProducts(invoiceId);

    if (isInvoiceProductsFetching) return <Message message="Loading..."/>
    if(invoiceProductsError) return <Message message={invoiceProductsError} />;
    if(!invoiceProducts.length) return <Message message="No sale has been made"/>

    return (
        <div className='h-full flex flex-col'>

            <div className='w-full h-auto text-sm font-semibold pl-3 pt-4 pb-2 '>Product Details</div>

            <div className='flex-1 text-sm overflow-y-auto
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    dark:[&::-webkit-scrollbar-thumb]:bg-gray-400'>
                <table className='w-full table-auto'>
                    <thead>
                    <tr className='border-b border-gray-800 bg-black sticky top-0'>
                        <th className='py-2 pl-3 font-semibold text-gray-200 text-sm text-left'>#</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Id</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Name</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left pl-4'>Unit Price</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Quantity</th>
                        <th className='py-2 font-semibold text-gray-200 text-sm text-left'>Total</th>
                    </tr>
                    </thead>

                    <tbody className='text-sm text-gray-300 border-b border-gray-900'>
                    {invoiceProducts.map((product, index) => (
                        <tr className='border-b border-gray-900' key={index}>
                            <td className='py-1 pl-3'>{index+1}</td>
                            <td className='py-1'>{product.productId}</td>
                            <td className='py-1 max-w-10 truncate'>{product.productName}</td>
                            <td className='py-1 pl-4'>{formatINR(product.unitPrice)}</td>
                            <td className='py-1'>{product.quantity}</td>
                            <td className='py-1'>{formatINR(product.total)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceProducts;