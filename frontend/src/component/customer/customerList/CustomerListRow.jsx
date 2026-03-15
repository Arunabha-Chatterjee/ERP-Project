import { useNavigate } from 'react-router-dom';

const CustomerListRow = ({ customer }) => {

    const navigate = useNavigate();

    return (
        <button className='grid grid-rows-2 w-full h-auto py-1 px-4 border-y border-gray-800
                               hover:bg-[#0d0d0d] gap-1 cursor-pointer'
            onClick={() => navigate(`/customers/${customer.customerId}/description`)}>

            <div className='text-left justify-self-start'>
                <div className='text-gray-300 font-semibold text-base max-w-xs truncate'>{customer.name}</div>
            </div>
            <div className='text-xs text-gray-400 justify-self-start'>
                {customer.customerId}
            </div>
        </button>
    );
};

export default CustomerListRow;
