import { useState } from 'react'
import './App.css'

import Customer from "./pages/staff/Customer.jsx";
import Product from "./pages/staff/Product.jsx";
import Invoice from "./component/invoice/Invoice.jsx";

function App() {

  return (
    <div className='w-screen h-screen'>
        <Invoice/>
    </div>
  )
}

export default App
