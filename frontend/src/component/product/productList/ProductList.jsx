import ProductListRow from "./ProductListRow.jsx";
import ProductListHeader from "./ProductListHeader.jsx";
import useProducts from "../../../hook/useProduct/useProducts.js";
import Message from "../../common/Message.jsx";
import { useState } from "react";

const ProductList = () => {
    const { products, isProductsFetching, productsError } = useProducts();
    const [searchProductList, setSearchProductList] = useState("");

    const filterProductList = products.filter((item)=>{
        const search = searchProductList.toLowerCase();
        return (
            item.productId.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search)
        )
    })

    return (
        <div className='border-r border-gray-600 w-full h-full flex flex-col'>
            <ProductListHeader setSearchProductList={setSearchProductList}/>

            <div className='overflow-auto flex-1 min-h-0'>
                {isProductsFetching ? (
                    <Message message="Loading..." />
                ) : productsError ? (
                    <Message message={productsError} />
                ) : filterProductList?.length > 0 ? (
                    filterProductList.map((product) =>
                        <ProductListRow
                            key={product.productId}
                            product={product} />)
                ) : (
                    <Message message={"No products found"} />
                )}
            </div>
        </div>
    );
}

export default ProductList;