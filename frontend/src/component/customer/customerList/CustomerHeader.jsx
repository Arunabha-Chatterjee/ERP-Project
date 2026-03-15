import { NavLink, useNavigate, useParams } from "react-router-dom";
import useCustomer from "../../../hook/useCustomer/useCustomer.js";
import Message from "../../common/Message.jsx";
import { FaPen } from "react-icons/fa";

const CustomerHeader = () => {
    const { customerId } = useParams();
    const navigate = useNavigate();
    const {
        customer,
        customerError,
        isCustomerFetching,
    } = useCustomer(customerId);


    if (!customerId) return <Message message={"Select one customer"} />
    if (isCustomerFetching) return <Message message={"Loading..."} />
    if (customerError) return <Message message={customerError} />;

    return (
        <div className='h-auto w-full'>
            <div className='w-full flex justify-between items-center px-3'>
                <div className='py-2.5'>
                    <div className='text-lg font-semibold'>{customer.name}</div>
                    <div className='text-xs text-gray-400'>{customer.customerId}</div>
                </div>
                <button className=' font-medium tracking-wide text-gray-300 hover:text-gray-400 cursor-pointer active:text-white'
                    onClick={() => navigate(`/update-customer/${customer.customerId}`)}>
                    <FaPen />
                </button>
            </div>
            
            <div className='w-full px-3 flex py-2 border-t border-t-gray-600 border-b border-b-gray-900
                                gap-16 text-sm tracking-wide font-semibold text-gray-400'>
                <NavLink to={`/customers/${customer.customerId}/description`}
                    className={({ isActive }) => (isActive ?
                        'text-white' : 'hover:text-white')}>Description</NavLink>

                <NavLink to={`/customers/${customer.customerId}/summery`} className={({ isActive }) => (isActive ?
                    'text-white' : 'hover:text-white')}>Summery</NavLink>

                <NavLink to={`/customers/${customer.customerId}/invoices`} className={({ isActive }) => (isActive ?
                    'text-white' : 'hover:text-white')}>Invoices</NavLink>

                <NavLink to={`/customers/${customer.customerId}/products`} className={({ isActive }) => (isActive ?
                    'text-white' : 'hover:text-white')}>Products</NavLink>
            </div>
        </div>
    );
};

export default CustomerHeader;