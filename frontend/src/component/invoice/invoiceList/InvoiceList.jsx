import React from 'react';
import InvoiceListHeader from "./InvoiceListHeader.jsx";
import InvoiceListRow from "./InvoiceListRow.jsx";


const InvoiceList = () => {
    return (
        <div className='border-r border-gray-600 w-full h-full flex flex-col'>
            <InvoiceListHeader/>

            <div className='overflow-auto flex-1 min-h-0'>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
                <InvoiceListRow/>
            </div>
        </div>
    );
};

export default InvoiceList;