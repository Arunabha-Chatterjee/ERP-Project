const getPaymentStatusClass = (status) => {
    switch (status) {
        case "PAID":
            return "text-green-700";
        case "PENDING":
            return "text-yellow-400";
        case "DUE":
            return "text-red-700 tracking-wider";
        default:
            return "text-gray-400";
    }
};

export default getPaymentStatusClass;