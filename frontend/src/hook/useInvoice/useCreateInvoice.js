import React, { useState } from 'react';
import { addInvoice as addInvoiceService } from '../../api/invoiceService';

const useCreateInvoice = () => {
    const [isInvoiceCreating, setIsInvoiceCreating] = useState(false);

    const createInvoice = async (invoiceData) => {
        setIsInvoiceCreating(true);
        try {
            const response = await addInvoiceService(invoiceData)
            return response
        } catch (error) {
            throw error
        } finally {
            setIsInvoiceCreating(false);
        }
    }

    return {
        createInvoice,
        isInvoiceCreating
    }
};

export default useCreateInvoice;