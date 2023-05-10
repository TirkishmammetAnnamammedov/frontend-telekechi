import React, { useContext } from "react";
import Footer from "../../../component/footer/footer";
import Navbar from "../../../component/navbar/navbar";
import SearchItem from "../../../component/searchItem/searchItem";
import RouteList from "../../../component/topRouteList/routeList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import altImg from "../../../images/altImg.png";
import { DarkModeContext } from "../../../context/darkModeContext";
import "./category.scss";

const Categories = () => {
   const { category, setCategory } = useContext(DarkModeContext)
   const [products, setProducts] = useState([]);
   const [notFound, setNotFound] = useState(false)
   const { filterProducts, setFilterProducts } = useContext(DarkModeContext);
   const [a, setA] = useState({
      category: '',
      location: '',
      delivery: false,
      credit: false
   })

   useEffect(() => {
      async function getProduct() {
         try {
            if (JSON.stringify(filterProducts) !== JSON.stringify(a)) {
               const response = await axios.get(`http://127.0.0.1:8000/api/products/filter/?product_address=${filterProducts?.location}&credit=${filterProducts?.credit}&delivery=${filterProducts?.delivery}&product_category=${filterProducts.category}`)
               setProducts(response.data)
            }
            else {
               const resp = await axios.get(`http://127.0.0.1:8000/api/products/filter/?product_category=${category}`)
               setProducts(resp.data)
            }
         }
         catch (error) {
            console.log(error);
         }
      }
      getProduct()
   }, [category, filterProducts])

   return (
      <div className="categories">
         <Navbar />
         <div className="categoriesContainer">
            <RouteList main="Baş sahypa" categoryName="Kategoriýalar" products={category} />
            <div className="ctgArea">
               <div className="ctgLeft">
                  <SearchItem />
               </div>
               <div className="ctgRight">

                  <div className="categoriesList">
                     <h2 className="сardsName">{category}</h2>

                     {!products.length && (
                        <div className="categoryNotFound">
                           <h2>Gözlenilýän haryt tapylmady...</h2>
                        </div>
                     )}

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
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Categories;