import React from 'react';
import InvoiceHeader from '../../component/invoice/invoiceForm/InvoiceHeader.jsx';
import ProductDetails from "../../component/invoice/invoiceForm/ProductDetails.jsx";
import CustomerSection from "../../component/invoice/invoiceForm/CustomerSection.jsx";
import InvoiceDetails from "../../component/invoice/invoiceForm/InvoiceDetails.jsx";
import InvoiceSummery from "../../component/invoice/invoiceForm/InvoiceSummery.jsx";
import Header from "../../component/layout/Header.jsx";

const InvoiceForm = () => {
    return (
        <div className='w-screen h-screen bg-black text-white'>
            <Header/>
            <InvoiceHeader/>
            <div className='w-full grid grid-cols-2 border border-t-0 border-gray-700'>
                <CustomerSection/>
                <InvoiceDetails/>
            </div>

            <ProductDetails/>
            <InvoiceSummery/>
        </div>
    );
};

export default InvoiceForm;