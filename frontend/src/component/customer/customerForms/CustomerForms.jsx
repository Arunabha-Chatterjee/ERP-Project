import { useContext } from "react";
import { UIFormContext } from "../../../context/UIFormContext";
import AddCustomerForm from "./AddCustomerForm";
import UpdateCustomerForm from "./UpdateCustomerForm";


const CustomerForms = ({ selectedCustomer }) => {
    const { activeForm } = useContext(UIFormContext);

    if (!activeForm) return null;

    return (
        <div className='fixed top-0 z-[100] w-screen h-screen font-mono backdrop-blur-lg flex justify-center items-center tex-white'>
            {activeForm === "addCustomer" && <AddCustomerForm />}
            {(activeForm === "updateCustomer" && selectedCustomer) &&
                <UpdateCustomerForm selectedCustomer={selectedCustomer} />}
        </div>
    )

};

export default CustomerForms;