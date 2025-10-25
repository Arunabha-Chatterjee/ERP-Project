import CustomerInvoices from "../../component/customer/CustomerInvoices.jsx";
import CustomerList from "../../component/customer/customerList/CustomerList.jsx";
import CustomerHeader from "../../component/customer/CustomerHeader.jsx";
import CustomerDescription from "../../component/customer/CustomerDescription.jsx";
import CustomerProducts from "../../component/customer/CustomerProducts.jsx";
import CustomerSummery from "../../component/customer/CustomerSummery.jsx";

const Customer = () => {

    return (
        <div className='w-full h-full bg-black text-white flex'>
            <div className='w-[35%] h-full'>
                <CustomerList/>
            </div>

            <div className='h-full flex-1 flex flex-col'>
                <CustomerHeader/>
                <div className='flex-1 overflow-y-auto'>
                    <CustomerDescription/>
                </div>
            </div>
        </div>

    );
};

export default Customer;