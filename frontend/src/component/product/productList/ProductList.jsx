import React from 'react';
import ProductListRow from "./ProductListRow.jsx";
import ProductListHeader from "./ProductListHeader.jsx";

const ProductList = () => {
    return (
        <div className='border-r border-gray-600 w-full h-full flex flex-col'>
            <ProductListHeader/>

            <div className='overflow-x-auto flex-1
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    dark:[&::-webkit-scrollbar-thumb]:bg-gray-400'>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
                <ProductListRow/>
            </div>
        </div>
    );
};

export default ProductList;