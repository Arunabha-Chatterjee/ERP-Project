import React from 'react';
import InvoiceHeader from './InvoiceHeader.jsx';
import ProductDetails from "./ProductDetails.jsx";
import CustomerSection from "./CustomerSection.jsx";
import InvoiceDetails from "./InvoiceDetails.jsx";
import InvoiceSummery from "./InvoiceSummery.jsx";

const Invoice = () => {
    return (
        <div className='w-full h-full px-2 py-3 bg-black text-white'>
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

export default Invoice;