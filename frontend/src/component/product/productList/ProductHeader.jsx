import { NavLink, useNavigate, useParams } from "react-router-dom";
import useProduct from "../../../hook/useProduct/useProduct.js";
import Message from "../../common/Message.jsx";
import { FaPen } from "react-icons/fa";

const ProductHeader = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const {
        product,
        isProductFetching,
        productError
    } = useProduct(productId);

    if (!productId) return <Message message="Select one product" />
    if (isProductFetching) return <Message message="Loading..." />;
    if (productError) return <Message message={productError} />;


    return (
        <div className='h-auto w-full'>
            <div className='w-full flex justify-between items-center px-3'>
                <div className='py-2.5'>
                    <div className='text-lg font-semibold'>{product.name}</div>
                    <div className='text-xs text-gray-400'>{product.productId}</div>
                </div>
                <button className=' font-medium tracking-wide text-gray-300 hover:text-gray-400 cursor-pointer active:text-white'
                    onClick={() => navigate(`/update-product/${product.productId}`)}>
                    <FaPen />
                </button>
            </div>

            <div className='w-full px-3 flex py-2 border-t border-t-gray-600 border-b border-b-gray-900
                                gap-16 text-sm tracking-wide font-semibold text-gray-400'>
                <NavLink to={`/products/${product.productId}/description`}
                    className={({ isActive }) => (isActive ?
                        'text-white' : 'hover:text-white')}>Description</NavLink>

                <NavLink to={`/products/${product.productId}/summery`} className={({ isActive }) => (isActive ?
                    'text-white' : 'hover:text-white')}>Summery</NavLink>

                <NavLink to={`/products/${product.productId}/invoice`} className={({ isActive }) => (isActive ?
                    'text-white' : 'hover:text-white')}>Invoices</NavLink>
            </div>
        </div>
    );
};

export default ProductHeader;