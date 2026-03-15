import useProductSummery from "../../../hook/useProduct/useProductSummery.js";
import Message from "../../common/Message.jsx";
import {useParams} from "react-router-dom";

const ProductSummery = () => {
    const {productId} = useParams();
    console.log(productId);
    const {
        productSummery,
            isProductSummeryFetching,
            productSummeryError
    } = useProductSummery(productId);

    if(isProductSummeryFetching) return <Message message="Loading..." />;
    if(productSummeryError) return <Message message={productSummeryError} />
    if(!productSummery) return <Message message="No sales activity has been made." />;

    console.log(productSummery);

    return (
        <div className='w-full h-auto pl-2 py-2'>
            <table>
                <tbody>
                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Sales:</td>
                    <td className='py-1 pl-4'>{productSummery.totalSales}</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Unit Sale:</td>
                    <td className='py-1 pl-4'>{productSummery.totalUnitSale}</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Customers:</td>
                    <td className='py-1 pl-4'>{productSummery.totalCustomers}</td>
                </tr>

                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Total Invoices:</td>
                    <td className='py-1 pl-4'>{productSummery.totalInvoices}</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ProductSummery;