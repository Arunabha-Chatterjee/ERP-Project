import { createBrowserRouter } from "react-router-dom";
import RegistrationForm from "../component/auth/RegistrationForm.jsx";
import LoginFrom from "../component/auth/LoginFrom.jsx";
import NotFound from "../pages/staff/NotFound.jsx";
import Customer from "../pages/staff/Customer.jsx";
import Product from "../pages/staff/Product.jsx";
import App from "../App.jsx";
import Invoice from "../pages/staff/Invoice.jsx";
import CustomerDescription from "../component/customer/customerTabs/CustomerDescription.jsx";
import CustomerInvoices from "../component/customer/customerTabs/CustomerInvoices.jsx";
import CustomerProducts from "../component/customer/customerTabs/CustomerProducts.jsx";
import CustomerSummery from "../component/customer/customerTabs/CustomerSummery.jsx";
import ProductDescription from "../component/product/productTabs/ProductDescription.jsx";
import ProductInvoices from "../component/product/productTabs/ProductInvoices.jsx";
import ProductSummery from "../component/product/productTabs/ProductSummery.jsx";
import InvoiceProducts from "../component/invoice/invoiceTabs/InvoiceProducts.jsx";
import InvoiceDescription from "../component/invoice/invoiceTabs/InvoiceDescription.jsx";
import Dashboard from "../pages/staff/Dashboard.jsx";
import AddCustomerForm from "../component/customer/customerForms/AddCustomerForm.jsx";
import AddProductForm from "../component/product/productForms/AddProductForm.jsx";
import CreateInvoiceForm from "../component/invoice/invoiceForm/CreateInvoiceForm.jsx";
import UpdateCustomer from "../component/customer/customerForms/UpdateCustomerForm.jsx";
import UpdateProductForm from "../component/product/productForms/UpdateProductForm.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'registration',
                element: <RegistrationForm />
            },
            {
                path: 'login',
                element: <LoginFrom />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '',
                        element: <Dashboard />
                    },
                    {
                        path: 'customers',
                        element: <Customer />,
                        children: [
                            {
                                path: ':customerId/description',
                                element: <CustomerDescription />
                            },
                            {
                                path: ':customerId/summery',
                                element: <CustomerSummery />
                            },
                            {
                                path: ':customerId/invoices',
                                element: <CustomerInvoices />
                            },
                            {
                                path: ':customerId/products',
                                element: <CustomerProducts />
                            }
                        ]
                    },
                    {
                        path: 'products',
                        element: <Product />,
                        children: [
                            {
                                path: ':productId/description',
                                element: <ProductDescription />
                            },
                            {
                                path: ':productId/summery',
                                element: <ProductSummery />
                            },
                            {
                                path: ':productId/invoice',
                                element: <ProductInvoices />
                            }
                        ]
                    },
                    {
                        path: 'invoices',
                        element: <Invoice />,
                        children: [
                            {
                                path: ':invoiceId/description',
                                element: <InvoiceDescription />
                            },
                            {
                                path: ':invoiceId/products',
                                element: <InvoiceProducts />
                            }
                        ]
                    },


                    {
                        path: "add-customer",
                        element: <AddCustomerForm />
                    },
                    {
                        path: "update-customer/:customerId",
                        element: <UpdateCustomer />
                    },

                    {
                        path: "add-product",
                        element: <AddProductForm />
                    },
                    {
                        path: "update-product/:productId",
                        element: <UpdateProductForm />
                    },

                    {
                        path: "add-invoice",
                        element: <CreateInvoiceForm />
                    },
                ]
            }

        ]
    },

    {
        path: '*',
        element: <NotFound />
    },
])
export default AppRoutes;