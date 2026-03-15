import {useNavigate} from "react-router-dom";

const ProductListRow = ({product}) => {
    const navigate = useNavigate();
    return (
        <button className='grid grid-rows-2 w-full h-auto py-1 px-4 border-y border-gray-800
                               hover:bg-[#0d0d0d] gap-1 cursor-pointer'
        onClick={()=>navigate(`/products/${product.productId}/description`)}>

            <div className='text-left justify-self-start'>
                <div className='text-gray-300 font-semibold text-base max-w-xs truncate'>{product.name}</div>
            </div>
            <div className='text-xs text-gray-400 justify-self-start'>
                {product.productId}
            </div>
        </button>
    );
};

export default ProductListRow;