import CustomerListHeader from "./CustomerListHeader.jsx";
import CustomerListRow from "./CustomerListRow.jsx";
import Message from "../../common/Message.jsx";
import useCustomers from "../../../hook/useCustomer/useCustomers.js";
import { useState } from "react";

const CustomerList = () => {

    const { customers, customersError, isCustomersFetching } = useCustomers();
    const [customerListSearch, setCustomerListSearch] = useState("");

    const filteredCustomersList = customers.filter((item) => {
        const search = customerListSearch.toLowerCase();
        return (
            item.customerId.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search)
        )
    })

    return (
        <div className='border-r border-gray-600 w-full h-full flex flex-col'>
            <CustomerListHeader customerListSearch={customerListSearch} setCustomerListSearch={setCustomerListSearch} />

            <div className='overflow-auto flex-1 min-h-0'>
                {isCustomersFetching ? (
                    <Message message="Loading..." />
                ) : customersError ? (
                <Message message={customersError} />
                ) : filteredCustomersList?.length > 0 ? (
                    filteredCustomersList.map((customer) => (
                        <CustomerListRow
                            key={customer.customerId}
                            customer={customer}
                        />
                    ))
                ) : (
                    <Message message="No customers found" />
                )}

            </div>
        </div>
    );
};

export default CustomerList;