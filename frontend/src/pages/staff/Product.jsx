import React from 'react';
import CustomerList from "../../component/customer/customerList/CustomerList.jsx";

import CustomerProducts from "../../component/customer/customerTabs/CustomerProducts.jsx";
import ProductHeader from "../../component/product/productList/ProductHeader.jsx";
import ProductInvoices from "../../component/product/productTabs/ProductInvoices.jsx";
import ProductList from "../../component/product/productList/ProductList.jsx";
import ProductDescription from "../../component/product/productTabs/ProductDescription.jsx";
import ProductSummery from "../../component/product/productTabs/ProductSummery.jsx";
import Header from "../../component/layout/Header.jsx";

const Product = () => {
    return (
        <div className='w-screen h-screen bg-black text-white flex flex-col'>
            <Header/>

            <div className='w-full flex flex-1 min-h-0'>
                <div className='w-[35%] h-full min-h-0'>
                    <ProductList/>
                </div>

                <div className='h-full min-h-0 flex-1 flex flex-col'>
                    <ProductHeader/>
                    <div className='flex-1 overflow-y-auto min-h-0'>
                        <ProductInvoices/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;