import React from "react";
import "./myProduct.scss";
import Navbar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import CustomerProduct from "../../../component/customer/customerProduct";


const MyProduct = () => {
    return(
        <div className="myProduct">
             <Navbar/>
             <div className="myProductContainer">
                <CustomerProduct/>
             </div>
             <Footer/>
        </div>
    )
}

export default MyProduct;