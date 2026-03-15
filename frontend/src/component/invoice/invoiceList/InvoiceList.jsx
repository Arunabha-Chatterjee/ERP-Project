import InvoiceListHeader from "./InvoiceListHeader.jsx";
import InvoiceListRow from "./InvoiceListRow.jsx";
import useGetAllInvoices, { UseInvoices } from "../../../hook/useInvoice/useInvoices.js";
import Message from "../../common/Message.jsx";
import { useState } from "react";

const InvoiceList = () => {
    const {
        invoices,
        isInvoiceFetching,
        invoicesError,
    } = UseInvoices();

    const [searchInvoiceList, setSearchInvoiceList] = useState("");
    console.log(invoices);

    const filterInvoiceList = invoices.filter((item) => {
        const search = searchInvoiceList.toLowerCase();
        return (
            item.invoiceId.toLowerCase().includes(search) ||
            item.customerId.toLowerCase().includes(search)
        );
    })

    return (
        <div className='border-r border-gray-600 w-full h-full flex flex-col'>
            <InvoiceListHeader setSearchInvoiceList={setSearchInvoiceList} />

            <div className='overflow-auto flex-1 min-h-0'>
                {isInvoiceFetching ? (<Message message={"Loading..."} />
                ) : invoicesError ? (<Message message={invoicesError} />

                ) : filterInvoiceList.length > 0 ?
                    (filterInvoiceList.map((invoice => (
                        <InvoiceListRow key={invoice.invoiceId}
                            invoice={invoice} />
                    )))
                    ) : <Message message={"No invoices found"} />
                }
            </div>
        </div>
    );
};

export default InvoiceList;