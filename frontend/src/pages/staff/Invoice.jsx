import Header from "../../component/layout/Header.jsx";
import InvoiceList from "../../component/invoice/invoiceList/InvoiceList.jsx";
import InvoiceHeader from "../../component/invoice/invoiceList/InvoiceHeader.jsx";
import {Outlet} from "react-router-dom";

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
                    <div className='flex-1 overflow-y-auto min-h-0 mt-2'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;