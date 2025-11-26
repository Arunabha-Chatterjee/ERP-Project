import CustomerInvoices from "../../component/customer/customerTabs/CustomerInvoices.jsx";
import CustomerList from "../../component/customer/customerList/CustomerList.jsx";
import CustomerHeader from "../../component/customer/customerList/CustomerHeader.jsx";
import CustomerDescription from "../../component/customer/customerTabs/CustomerDescription.jsx";
import CustomerProducts from "../../component/customer/customerTabs/CustomerProducts.jsx";
import CustomerSummery from "../../component/customer/customerTabs/CustomerSummery.jsx";
import Header from "../../component/layout/Header.jsx";
import ProductHeader from "../../component/product/productList/ProductHeader.jsx";
import ProductInvoices from "../../component/product/productTabs/ProductInvoices.jsx";
import React from "react";

const Customer = () => {

    return (
        <div className='w-screen h-screen flex flex-col bg-black text-white'>
            <Header/>

            <div className='flex-1 min-h-0 flex'>
                <div className='w-[35%] h-full'>
                    <CustomerList/>
                </div>

                <div className='h-full min-h-0 flex-1 flex flex-col'>
                    <CustomerHeader/>
                    <div className='flex-1 overflow-y-auto min-h-0'>
                        <CustomerInvoices/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;