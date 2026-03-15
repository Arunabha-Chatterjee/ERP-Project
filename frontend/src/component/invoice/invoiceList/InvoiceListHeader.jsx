import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const InvoiceListHeader = ({setSearchInvoiceList}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-between items-center pr-2'>
                <div className='text-xl w-fit font-semibold py-3 px-3 h-auto '>Invoices</div>
                <button className='inline'><FiPlus className="text-gray-200 text-3xl 
                                hover:text-gray-400 active:text-gray-200 cursor-pointer font-bold"
                                onClick={()=>navigate("/add-invoice")}/></button>
            </div>
            <div className='px-3 pb-3.5 w-full'>
                <input
                    className='border-b border-gray-400 w-full outline-none py-1'
                    type='text'
                    placeholder='Search Invoices' 
                    onChange={(e)=>setSearchInvoiceList(e.target.value)}/>
            </div>
        </div>
    );
};

export default InvoiceListHeader;