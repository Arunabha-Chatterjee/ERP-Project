import ProductHeader from "../../component/product/productList/ProductHeader.jsx";
import Header from "../../component/layout/Header.jsx";
import {Outlet} from "react-router-dom";
import ProductList from "../../component/product/productList/ProductList.jsx";


const Product = () => {
    return (
        <div className='w-screen h-screen bg-black text-white flex flex-col'>
            <Header/>

            <div className='w-full flex flex-1 min-h-0'>
                <div className='w-[35%] h-full min-h-0'>
                    <ProductList/>
                </div>

                <div className='h-full min-h-0 flex-1 flex flex-col'>
                    <ProductHeader/>
                    <div className='flex-1 overflow-y-auto min-h-0'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;