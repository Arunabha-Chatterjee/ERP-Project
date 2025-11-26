import Header from "../../component/layout/Header.jsx";
import InvoiceList from "../../component/invoice/invoiceList/InvoiceList.jsx";
import InvoiceHeader from "../../component/invoice/invoiceList/InvoiceHeader.jsx";
import CustomerDescription from "../../component/customer/customerTabs/CustomerDescription.jsx";
import React from "react";

import InvoiceDetails from "../../component/invoice/invoiceForm/InvoiceDetails.jsx";
import InvoiceProducts from "../../component/invoice/invoiceTabs/InvoiceProducts.jsx";
import ProductInvoices from "../../component/product/productTabs/ProductInvoices.jsx";
import ProductDescription from "../../component/product/productTabs/ProductDescription.jsx";
import Input from "../../component/common/Input.jsx";

const Customer = () => {

    return (
        <div className='w-screen h-screen flex flex-col bg-black text-white'>
            <Header/>

            <div className='flex-1 min-h-0 flex'>
                <div className='w-[35%] h-full'>
                    <InvoiceList/>
                </div>

                <div className='h-full min-h-0 flex-1 flex flex-col'>
                    <InvoiceHeader/>
                    <div className='flex-1 overflow-y-auto min-h-0'>
                        <CustomerDescription/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;