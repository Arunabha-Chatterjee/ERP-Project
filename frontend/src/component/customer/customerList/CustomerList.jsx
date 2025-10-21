import React from 'react';
import CustomerListHeader from "./CustomerListHeader.jsx";
import CustomerListRow from "./CustomerListRow.jsx";

const CustomerList = () => {
    return (
        <div className='border-r border-gray-600 w-full h-full flex flex-col'>
            <CustomerListHeader/>

            <div className='overflow-x-auto flex-1
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    dark:[&::-webkit-scrollbar-thumb]:bg-gray-400'>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
                <CustomerListRow/>
            </div>
        </div>
    );
};

export default CustomerList;