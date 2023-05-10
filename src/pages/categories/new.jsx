import React, { useContext } from "react";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import SearchItem from "../../component/searchItem/searchItem";
import RouteList from "../../component/topRouteList/routeList";
import "./categories.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import altImg from "../../images/altImg.png";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const New = () => {
   const [newProducts, setNewProducts] = useState([]);
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
      async function getNewProduct() {
         try {
            if (JSON.stringify(filterProducts) !== JSON.stringify(a)) {
               const newProducts = await axios.get(`http://127.0.0.1:8000/api/products/filter/?product_address=${filterProducts?.location}&credit=${filterProducts?.credit}&delivery=${filterProducts?.delivery}&product_category=${filterProducts.category}`)
               setNewProducts(newProducts.data)
            }
            else {
               const newProducts = await axios.get('http://127.0.0.1:8000/api/newproducts/')
               setNewProducts(newProducts.data)
            }
            setIsloading(false)
         } catch (error) {
            console.log(error);
            setNotFound(true)
         }
      }
      getNewProduct()
   }, [filterProducts])

   return (
      <div className="categories">
         <Navbar />
         <div className="categoryContainer">
            <RouteList main="Baş sahypa" categoryName="Täze goşulanlar" />
            <div className="ctgryList">
               <div className="ctgryWrapper">
                  <div className="leftSearchList">
                     <SearchItem />
                  </div>
                  <div className="rightCategoryList">
                     <div className="categoriesList">
                        <h2 className="сardsName">Täze goşulanlar</h2>

                        {isLoding ? <div className="loaderOut"><span className="productsLoading"></span> </div> :
                           <>
                              {newProducts.length ? (
                                 <div className="cards">
                                    {newProducts.map((newProduct) => (
                                       <div key={newProduct.id} className="cardItem">
                                          <div className="topLeft">
                                             {/* {item.new && <div className="topLeftNew">täze</div>} */}
                                          </div>
                                          {/* <div className="topRight">
                                             <FavoriteBorder className="favouriteIcon"/>
                                           </div>     */}
                                          <Link to={`/card/${newProduct.id}`}>
                                             <img
                                                className="imgCard"
                                                src={newProduct.product_image ? newProduct.product_image : altImg}
                                                alt="" />
                                          </Link>
                                          <p className="cardName">{newProduct.product_name}</p>
                                          <h3 className="cardPrice">{newProduct.product_price} TMT</h3>
                                          <p className="cardInform">{newProduct.about_product.slice(0, 55)}...</p>
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

export default New;