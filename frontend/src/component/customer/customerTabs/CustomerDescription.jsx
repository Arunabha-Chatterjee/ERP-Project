import {useParams} from "react-router-dom";
import useCustomer from "../../../hook/useCustomer/useCustomer.js";
import Message from "../../common/Message.jsx";

const CustomerDescription = () => {
    const {customerId} = useParams();
    const {
        customer,
        customerError,
        isCustomerFetching,
    } = useCustomer(customerId);

    if (isCustomerFetching) return <Message message={"Loading..."}/>
    if(customerError) return <Message message={customerError} />
    if (!customer && !isCustomerFetching)
        return <Message message="Customer not found" />;

    return (
        <div className='w-full h-auto'>
            <table>
                <tbody>
                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-400'>Id:</td>
                    <td className='py-1 pl-10'>{customer.customerId}</td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-400'>Email:</td>
                    <td className='py-1 pl-10'>
                        {customer.email}
                    </td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-400'>Mobile:</td>
                    <td className='py-1 pl-10'>{customer.mobile}</td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-400'>Address:</td>
                    <td className='py-1 pl-10'>{customer.address}</td>
                </tr>

                <tr >
                    <td className='py-1 pl-2 font-semibold text-gray-400 '>City:</td>
                    <td className='py-1 pl-10'>{customer.city}</td>
                </tr>

                <tr>
                    <td className='py-1 pl-2 font-semibold text-gray-400'>Pin:</td>
                    <td className='py-1 pl-10'>{customer.pin}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomerDescription;