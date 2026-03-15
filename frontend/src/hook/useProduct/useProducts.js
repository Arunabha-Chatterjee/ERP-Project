import {useEffect, useState} from "react";
import {getAllProducts as getAllProductsService} from "../../api/index.js";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isProductsFetching, setIsProductsFetching] = useState(true);
    const[productsError, setProductsError] = useState(null);

    const fetchProducts = async () => {
        setProductsError(null);
        setIsProductsFetching(true);
        try {
            const data = await getAllProductsService();
            setProducts(data);
        }catch (error) {
            setProductsError(error.response.data || "Error in fetching products");
        }finally {
            setIsProductsFetching(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])

    return{
        products,
        isProductsFetching,
        productsError,
        fetchProducts,
    }
};

export default useProducts;