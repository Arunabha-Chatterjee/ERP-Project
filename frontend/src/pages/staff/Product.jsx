import React from 'react';
import CustomerList from "../../component/customer/customerList/CustomerList.jsx";

import CustomerProducts from "../../component/customer/CustomerProducts.jsx";
import ProductHeader from "../../component/product/ProductHeader.jsx";
import ProductInvoices from "../../component/product/ProductInvoices.jsx";
import ProductList from "../../component/product/productList/ProductList.jsx";

const Product = () => {
    return (
        <div className='w-full h-full bg-black text-white flex'>
            <div className='w-[35%] h-full'>
                <ProductList/>
            </div>

            <div className='h-full flex-1 flex flex-col'>
                <ProductHeader/>
                <div className='flex-1 overflow-y-auto'>
                    <ProductInvoices/>
                </div>
            </div>
        </div>
    );
};

export default Product;