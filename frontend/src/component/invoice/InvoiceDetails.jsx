import React from 'react';
import Input from "../common/Input.jsx";
import Select from "../common/Select.jsx";
import {useForm} from "react-hook-form";

const InvoiceDetails = () => {
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm({
        defaultValues: {
            email: "pre-filled@example.com",
            role: "customer"
        },
    });
    return (
        <div className='flex w-fit gap-5 pl-3
                h-fit self-center'>
            <div className='w-fit flex flex-col gap-2'>
                <div>Invoice No:</div>
                <div>Invoice Date:</div>
                <div>Due Date:</div>
                <div>Payment Mode:</div>
            </div>

            <div className='flex flex-col gap-0.5'>
                <div>
                    784524
                </div>
                <input
                    className='w-full h-auto border py-0.5'
                    type="date"
                />
                <input
                    className='w-full h-auto border py-0.5'
                    type="date"
                />
                <div>
                    <Select
                        optionList={[
                            {value: "", name: "Select"},
                            {value: "cash", name: "Cash"},
                            {value: "upi", name: "Upi"},
                            {value: "bankTransfer", name: "Bank Transfer"}
                        ]}
                        register={register}
                        name="paymentMethod"
                        rules={{
                            required: 'Payment Method is required',
                        }}

                        errorClassName='mt-1 text-red-500 text-xs'
                        error={errors.paymentMethod?.message}

                        componentClassName='w-fit h-auto'
                        selectClassName='w-full px-2 border py-0.5'
                    />
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetails;