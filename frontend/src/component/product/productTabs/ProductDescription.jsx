import useProduct from "../../../hook/useProduct/useProduct.js";
import {useParams} from "react-router-dom";
import Message from "../../common/Message.jsx";

const ProductDescription = () => {
    const {productId} = useParams();
    const {
        product,
        isProductFetching,
        productError
    } = useProduct(productId)

    if(isProductFetching) return <Message message={"Loading..."}/>
    if(productError) return <Message message={productError} />
    return (
        <div className="w-full h-auto py-2 pl-3 border-b border-gray-900">
            <table>
                <tbody>
                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Id:</td>
                    <td className='py-1 pl-4'>{product.productId}</td>
                </tr>
                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Unit Price:</td>
                    <td className='py-1 pl-4'>{product.price}</td>
                </tr>
                <tr>
                    <td className='py-1 font-semibold text-gray-400'>Description:</td>
                    <td className='py-1 pl-4'>{product.description}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductDescription;
