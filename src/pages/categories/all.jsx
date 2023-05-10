import React, { useContext } from "react";
import Navbar from "../../component/navbar/navbar";
import SearchItem from "../../component/searchItem/searchItem";
import RouteList from "../../component/topRouteList/routeList";
import Footer from "../../component/footer/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "./categories.scss";
import altImg from "../../images/altImg.png";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const All = () => {
  const [products, setProducts] = useState([]);
  const [isLoding, setIsloading] = useState(false);
  const [notFound, setNotFound] = useState(false)
  const { filterProducts, setFilterProducts } = useContext(DarkModeContext)
  const [a, setA] = useState({
    category: '',
    location: '',
    delivery: false,
    credit: false
  })

  useEffect(() => {
    setIsloading(true)
    async function getProduct() {
      try {
        if (JSON.stringify(filterProducts) !== JSON.stringify(a)) {
          const response = await axios.get(`http://127.0.0.1:8000/api/products/filter/?product_address=${filterProducts?.location}&credit=${filterProducts?.credit}&delivery=${filterProducts?.delivery}&product_category=${filterProducts.category}`)
          setProducts(response.data)
        }
        else {
          const products = await axios.get('http://127.0.0.1:8000/api/products/')
          setProducts(products.data)
        }
        setIsloading(false)
      } catch (error) {
        console.log(error);
        setNotFound(true)
      }
    }
    getProduct()
  }, [filterProducts])

  return (
    <div className="categories">
      <Navbar />
      <div className="categoryContainer">
        <RouteList main="Baş sahypa" categoryName="Ähli bildirişler" />
        <div className="ctgryList">
          <div className="ctgryWrapper">
            <div className="leftSearchList">
              <SearchItem />
            </div>
            <div className="rightCategoryList">

              <div className="categoriesList">
                <h2 className="сardsName">Ählisi</h2>

                {isLoding ? <div className="loaderOut"><span className="productsLoading"></span> </div> :
                  <>
                    {products.length ? (
                      <div className="cards">
                        {products.map((product) => (
                          <div key={product.id} className="cardItem">
                            <Link to={`/card/${product.id}`}>
                              <img
                                className="imgCard"
                                src={product.product_image ? product.product_image : altImg}
                                alt="" />
                            </Link>
                            <p className="cardName">{product.product_name}</p>
                            <h3 className="cardPrice">{product.product_price} TMT</h3>
                            <p className="cardInform">{product.about_product.slice(0, 55)}...</p>
                          </div>
                        ))}
                      </div>

                    ) : (
                      <div className="productNotFound"><h2>Gözlenilýän haryt tapylmady...</h2></div>
                    )}
                  </>
                }
              </div>


            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default All;