import React, { useContext, useState } from 'react';
import { formatINR } from '../../../utills/formatINR';
import useCreateInvoice from '../../../hook/useInvoice/useCreateInvoice';
import useCustomers from '../../../hook/useCustomer/useCustomers';
import useProducts from '../../../hook/useProduct/useProducts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateInvoiceForm = () => {
    const navigate = useNavigate()

    const {
        createInvoice,
        isInvoiceCreating,
        invoiceCreateError
    } = useCreateInvoice();

    const { customers, customersError } = useCustomers();
    const { products, productsError } = useProducts()

    const [showCustomers, setShowCustomers] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState();
    const [invoiceList, setInvoiceList] = useState([]);
    const [status, setStatus] = useState("");
    const [productSearch, setProductSearch] = useState("")
    const [customerSearch, setCustomerSearch] = useState("")

    const [customerError, setCustomerError] = useState(false);
    const [invoiceListError, setInvoiceListError] = useState(false);
    const [statusError, setStatusError] = useState();

    const filteredProducts = products.filter((item) => {
        const search = productSearch.toLowerCase();
        return (
            item.productId.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search)
        )
    })

    const filteredCustomers = customers.filter((item) => {
        const search = customerSearch.toLowerCase();
        return (
            item.customerId.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search)
        )
    })

    const addInvoiceItem = (newItem) => {
        setInvoiceList((prevList) => {
            //check item exists
            const itemExist = prevList.find((item) => item.productId === newItem.productId)

            if (itemExist) {
                return prevList.map(item =>
                    item.productId === newItem.productId ?
                        {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: (item.quantity + 1) * item.price
                        } : item
                )
            } else {
                return [
                    ...prevList, {
                        ...newItem,
                        quantity: 1,
                        totalPrice: newItem.price
                    }];
            }
        })
    }

    const updateInvoiceItem = (itemProductId, newQuantity) => {
        setInvoiceList((prevList) => {
            return prevList.map(item =>
                itemProductId === item.productId ?
                    {
                        ...item,
                        quantity: newQuantity,
                        totalPrice: newQuantity * item.price
                    } :
                    item
            )
        })

    }

    const deleteInvoiceItem = (itemProductId) => {
        setInvoiceList((prevList) => {
            return prevList.filter(item => item.productId !== itemProductId)
        })
    }

    const getTotalAmount = (invoiceList) => {
        if (!invoiceList) {
            return 0;
        } else {
            return invoiceList.reduce((total, item) => {
                return total + item.totalPrice
            }, 0)
        }
    }

    const invoiceItemList = (invoiceList) => {
        return invoiceList
            .filter(item => item.quantity > 0)
            .map(item => ({
                productId: item.productId,
                quantity: item.quantity
            }))
    }

    const createInvoiceData = () => {
        const items = invoiceItemList(invoiceList);
        (!status) ? setStatusError("Select payment status") : setStatusError("");
        (!selectedCustomer) ? setCustomerError(true) : setCustomerError(false);
        (items.length === 0) ? setInvoiceListError(true) : setInvoiceListError(false);

        if (!status || !selectedCustomer || items.length === 0) {
            return;
        }
        return {
            customerId: selectedCustomer.customerId,
            status: status,
            invoiceItemList: items
        }
    }

    const addInvoice = async () => {
        const data = createInvoiceData();
        if (!data) {
            return;
        }
        try {
            const result = await createInvoice(data);
            toast.success(result)
            setSelectedCustomer(null)
            setInvoiceList([])
            setStatus("")
        } catch (error) {
            toast.error(error.response.data || "Error in add Invoice")
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center border-3 border-gray-800 bg-black font-mono text-white">

            {/* invoice header */}
            <div className="w-full bg-gray-900 h-9 flex flex-row justify-between items-center absolute top-0">
                <div className="pl-2 font-bold text-gray-300">Generate an Invoice</div>
                <button className="text-xl text-gray-300 px-3 border-none hover:bg-red-600 cursor-pointer"
                    onClick={() => navigate("/invoices")}>X
                </button>
            </div>

            {/* invoice footer */}
            <div
                className="w-full px-2 border-t border-gray-800 bg-gray-950 h-10 flex justify-between items-center absolute bottom-0">
                <div>
                    <div className='inline pr-2 text-md'>Status:</div>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className='outline-none focus:outline-none'>
                        <option value={""} className='bg-black text-gray-400 hover:bg-gray-950'>Select</option>
                        <option value={"PAID"} className='bg-black text-gray-400 hover:bg-gray-950'>PAID</option>
                        <option value={"DUE"} className='bg-black text-gray-400 hover:bg-gray-950'>DUE</option>
                    </select>
                    {(statusError && !status) &&
                        <div className='text-xs text-red-600 inline'> Select a payment status</div>}
                </div>

                {invoiceCreateError && <div className='text-red-600'>{invoiceCreateError}</div>}

                <button className="h-full px-3 bg-gray-900
                    cursor-pointer hover:bg-gray-800 active:bg-gray-900"
                    onClick={() => addInvoice()}>
                    {isInvoiceCreating ? "Loading..." : `Create Invoice (${formatINR(getTotalAmount(invoiceList))})`}
                </button>
            </div>

            <div className="w-full h-full px-3 overflow-auto">
                <form>
                    {/* Customer Selection Section */}
                    <div className="mt-12 mb-1">Add a customer</div>
                    <input
                        className="w-[40%] border-2 border-gray-800 py-1 px-2 placeholder-gray-500 block focus:outline-none"
                        placeholder='Search & Select a Customer'
                        value={customerSearch}
                        onFocus={() => setShowCustomers(true)}
                        onBlur={() => {
                            setShowCustomers(false)
                            setCustomerSearch("")
                        }}
                        onChange={(e) => setCustomerSearch(e.target.value)}
                    />
                    {customersError && <div className='text-red-600 inline text-sm font-bold'>{customersError}</div>}

                    <div className="relative w-[40%]">
                        {showCustomers && (
                            <div className="absolute top-full left-0 z-50 max-h-25 w-full overflow-y-auto border backdrop-blur-md
                            border-gray-700 border-t-0">
                                {filteredCustomers.map(customer => (
                                    <button className="py-1 w-full text-left px-2 border-b border-gray-800 text-gray-400
                                    hover:bg-gray-950 block cursor-pointer"
                                        key={customer.customerId}
                                        onMouseDown={() => {
                                            setShowCustomers(false)
                                            setSelectedCustomer(customer)
                                        }
                                        }>{customer.customerId} {customer.name}</button>
                                ))}
                            </div>
                        )}
                    </div>

                    <table className="w-full mt-5 border-b border-gray-950 table-fixed">
                        <thead>
                            <tr className='text-gray-400'>
                                <td className='border border-gray-800 pl-1 truncate'>Customer Id</td>
                                <td className='border border-gray-800 pl-1 truncate'>Name</td>
                                <td className='border border-gray-800 pl-1 truncate'>Mobile</td>
                                <td className='border border-gray-800 pl-1 truncate'>Email</td>
                                <td className='border border-gray-800 pl-1 truncate'>City</td>
                                <td className='border border-gray-800 pl-1 truncate'>Pin</td>
                                <td className='border border-gray-800 pl-1 truncate'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {!selectedCustomer && <tr>
                                <td colSpan={7} className={`border border-gray-800 py-1 pl-1 truncate text-center 
                                    ${customerError ? 'text-red-700' : 'text-gray-600'}`}>Select a customer
                                </td>
                            </tr>}

                            {selectedCustomer && <tr className="text-gray-400">
                                <td className='border border-gray-800 py-1 pl-1 truncate'>{selectedCustomer.customerId}</td>
                                <td className='border border-gray-800 py-1 pl-1 truncate'>{selectedCustomer.name}</td>
                                <td className='border border-gray-800 py-1 pl-1 truncate'>{selectedCustomer.mobile}</td>
                                <td className='border border-gray-800 py-1 pl-1 truncate'>{selectedCustomer.email}</td>
                                <td className='border border-gray-800 py-1 pl-1 truncate'>{selectedCustomer.city}</td>
                                <td className='border border-gray-800 py-1 pl-1 truncate'>{selectedCustomer.pin}</td>
                                <td className='border border-gray-800 py-1 pl-1 truncate'>
                                    <button className='hover:text-blue-600 cursor-pointer'
                                        onClick={() => setSelectedCustomer(null)}>Delete
                                    </button>
                                </td>
                            </tr>}
                        </tbody>
                    </table>


                    {/* Products Selection Section */}
                    <div className="mt-7 mb-1">Add Products</div>
                    <input
                        className="w-[40%] border-2 border-gray-800 py-1 px-2 placeholder-gray-500 block focus:outline-none"
                        placeholder='Search & Select a Product'
                        value={productSearch}
                        onFocus={() => setShowProducts(true)}
                        onBlur={() => {
                            setShowProducts(false)
                            setProductSearch("")
                        }}
                        onChange={(e) => setProductSearch(e.target.value)}
                    />
                    {productsError && <div className='text-red-600 inline text-sm font-bold'>{productsError}</div>}

                    <div className="relative w-[40%]">
                        {showProducts && (
                            <div className="absolute top-full left-0 z-50 max-h-25 w-full overflow-y-auto backdrop-blur-md
                            border border-gray-700 border-t-0">
                                {filteredProducts.map(product => (
                                    <button className="py-1 w-full text-left px-2 border-b border-gray-800 text-gray-400
                                    hover:bg-gray-950 block cursor-pointer"
                                        key={product.productId}
                                        onMouseDown={() => {
                                            setShowProducts(false)
                                            addInvoiceItem(product)
                                        }
                                        }>{product.productId} {product.name}</button>
                                ))}
                            </div>
                        )}
                    </div>

                    <table className="w-full mt-5 border-b border-gray-950 table-fixed">
                        <thead>
                            <tr className="text-gray-400">
                                <td className='border border-gray-800 pl-1 truncate'>Product Id</td>
                                <td className='border border-gray-800 pl-1 truncate'>Name</td>
                                <td className='border border-gray-800 pl-1 truncate'>Description</td>
                                <td className='border border-gray-800 pl-1 truncate'>Unit Price</td>
                                <td className='border border-gray-800 pl-1 truncate'>Quntity</td>
                                <td className='border border-gray-800 pl-1 truncate'>Total</td>
                                <td className='border border-gray-800 pl-1 truncate'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {!invoiceList.length && <tr>
                                <td colSpan={7} className={`border border-gray-800 py-1 pl-1 truncate 
                                text-center ${invoiceListError ? "text-red-700" : "text-gray-600"}`}>Add atleast one
                                    product
                                </td>
                            </tr>}

                            {invoiceList.map((invItem, index) => (
                                <tr className="text-gray-400"
                                    key={invItem.productId}>
                                    <td className='border border-gray-800 py-1 pl-1 truncate'>{invItem.productId}</td>
                                    <td className='border border-gray-800 py-1 pl-1 truncate'>{invItem.name}</td>
                                    <td className='border border-gray-800 py-1 pl-1 truncate'>{invItem.description}</td>
                                    <td className='border border-gray-800 py-1 pl-1 truncate'>{formatINR(invItem.price)}</td>
                                    <td className='border border-gray-800 py-1 pl-1 truncate'>
                                        <input type='number' min={1} className='outline-none' value={invItem.quantity}
                                            onChange={(e) => updateInvoiceItem(invItem.productId, Number(e.target.value))} />
                                    </td>
                                    <td className='border border-gray-800 py-1 pl-1 truncate'>{formatINR(invItem.totalPrice)}</td>

                                    <td className='border border-gray-800 py-1 pl-1 truncate'>
                                        <button className='hover:text-blue-600 cursor-pointer'
                                            onClick={() => deleteInvoiceItem(invItem.productId)}>Delete
                                        </button>
                                    </td>
                                </tr>))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default CreateInvoiceForm;