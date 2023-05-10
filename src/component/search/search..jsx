import React, { useContext, useState } from "react";
import "./search.scss";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import RouteList from "../topRouteList/routeList";
import altImg from "../../images/altImg.png";
import "./search.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import MultiLingualContext from "../../context/multiLingualContext";

const Search = () => {
    const { searchProducts, setSearchPrducts } = useContext(DarkModeContext)
    const [notFound, setNotFound] = useState(false)

    return (
        <div className="search">
            <Navbar />
            <div className="searchContainer">
                <RouteList main="Baş sahypa" categoryName="Search"/>
                <div className="searchBox">
                    <div className="searchName">
                        <h2><MultiLingualContext contentId='search'></MultiLingualContext></h2>
                    </div>
                    
                    {!searchProducts.length && (
                     <div className="searchNotFound">
                        <h2>Gözlenilýän haryt tapylmady...</h2>
                     </div>
                    )}

                    <div className="searchItems">
                        {searchProducts.map((s) => (
                            <div className="sItem" key={s.id}>
                                <div className="searchItem">
                                    <Link to="/card">
                                        <img
                                            className="searchImg"
                                            src={s.product_image ? s.product_image : altImg}
                                            alt="product"
                                        />
                                    </Link>
                                    <p className="searchName">{s.product_name}</p>
                                    <h3 className="searchPrice">{s.product_price}TMT</h3>
                                    <p className="searchInform">{s.about_product.slice(0, 55)}...</p>
                                </div>
                            </div>
                        ))}                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search;