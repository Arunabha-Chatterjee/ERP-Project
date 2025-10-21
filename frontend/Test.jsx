import React, { useState } from "react";

const Test = () => {
  const [activeTab, setActiveTab] = useState("details");

  const customer = {
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main Street",
    totalInvoices: 3,
    totalAmount: "₹20,000",
    invoices: [
      { id: "INV001", amount: "₹5,000" },
      { id: "INV002", amount: "₹10,000" },
      { id: "INV003", amount: "₹5,000" },
    ],
    products: [
      { name: "Product A", quantity: 5 },
      { name: "Product B", quantity: 2 },
    ],
  };

  const tabs = ["details", "summary", "invoices", "products"];

  return (
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <h2 className="text-xl font-semibold">{customer.name}</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {tabs.map((tab) => (
              <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 text-sm capitalize font-medium transition-colors
              ${
                      activeTab === tab
                          ? "bg-white border-b-2 border-blue-500 text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {tab}
              </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 text-gray-700 text-sm">
          {activeTab === "details" && (
              <div className="space-y-2">
                <p><span className="font-semibold">Email:</span> {customer.email}</p>
                <p><span className="font-semibold">Phone:</span> {customer.phone}</p>
                <p><span className="font-semibold">Address:</span> {customer.address}</p>
              </div>
          )}

          {activeTab === "summary" && (
              <div className="space-y-2">
                <p><span className="font-semibold">Total Invoices:</span> {customer.totalInvoices}</p>
                <p><span className="font-semibold">Total Amount:</span> {customer.totalAmount}</p>
              </div>
          )}

          {activeTab === "invoices" && (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border">
                  <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3">Invoice #</th>
                    <th className="py-2 px-3">Amount</th>
                  </tr>
                  </thead>
                  <tbody>
                  {customer.invoices.map((inv) => (
                      <tr key={inv.id} className="border-t hover:bg-gray-50">
                        <td className="py-2 px-3">{inv.id}</td>
                        <td className="py-2 px-3">{inv.amount}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
          )}

          {activeTab === "products" && (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border">
                  <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3">Product</th>
                    <th className="py-2 px-3">Qty</th>
                  </tr>
                  </thead>
                  <tbody>
                  {customer.products.map((prod, i) => (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="py-2 px-3">{prod.name}</td>
                        <td className="py-2 px-3">{prod.quantity}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
          )}
        </div>
      </div>
  );
};

export default Test;
