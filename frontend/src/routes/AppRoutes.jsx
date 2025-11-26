import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/staff/Dashboard.jsx";
import RegistrationForm from "../component/auth/RegistrationForm.jsx";
import LoginFrom from "../component/auth/LoginFrom.jsx";
import NotFound from "../pages/staff/NotFound.jsx";
import Customer from "../pages/staff/Customer.jsx";
import ProductList from "../component/product/productList/ProductList.jsx";
import Product from "../pages/staff/Product.jsx";
import App from "../App.jsx";
import InvoiceForm from "../pages/staff/InvoiceForm.jsx";
import InvoiceListRow from "../component/invoice/invoiceList/InvoiceListRow.jsx";
import Invoice from "../pages/staff/Invoice.jsx";
import CustomerDescription from "../component/customer/customerTabs/CustomerDescription.jsx";
import CustomerInvoices from "../component/customer/customerTabs/CustomerInvoices.jsx";
import CustomerProducts from "../component/customer/customerTabs/CustomerProducts.jsx";
import CustomerSummery from "../component/customer/customerTabs/CustomerSummery.jsx";
import ProductDescription from "../component/product/productTabs/ProductDescription.jsx";
import ProductInvoices from "../component/product/productTabs/ProductInvoices.jsx";
import ProductSummery from "../component/product/productTabs/ProductSummery.jsx";

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Dashboard/>
            },
            {
                path: 'register',
                element:<RegistrationForm/>
            },
            {
                path: 'login',
                element:<LoginFrom/>
            },
            {
                path:'customers',
                element:<Customer/>,
                children:[
                    {
                        path:'summery',
                        element:<CustomerSummery/>
                    },
                    {
                        path:'description',
                        element:<CustomerDescription/>
                    },
                    {
                        path:'invoice',
                        element:<CustomerInvoices/>
                    },
                    {
                        path:'products',
                        element:<CustomerProducts/>
                    }
                ]
            },
            {
                path:'products',
                element:<Product/>,
                children:[
                    {
                        path:'description',
                        element: <ProductDescription/>
                    },
                    {
                        path: 'summery',
                        element: <ProductSummery/>
                    },
                    {
                        path: 'invoice',
                        element: <ProductInvoices/>
                    }
                ]
            },
            {
                path:'new-invoice',
                element:<InvoiceForm/>
            },
            {
                path:'invoices',
                element:<Invoice/>,
                children:[
                    {
                        path: 'description',

                    }
                ]
            }
        ]
    },

    {
        path:'*',
        element:<NotFound/>
    },
])
export default AppRoutes;