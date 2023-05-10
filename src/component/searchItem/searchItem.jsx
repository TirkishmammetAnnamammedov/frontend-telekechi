import React from "react";
import "./searchItem.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import { places } from "./placeSource";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Switch } from "@mui/material";
import MultiLingualContext from "../../context/multiLingualContext";

const SearchItem = () => {
   const [isClick, setIsClick] = useState(false);
   const [isClick2, setIsClick2] = useState(false);
   const [categories, setCategories] = useState([]);

   const clearFilter = () => {
      setFilterProducts({
         category: '',
         location: '',
         delivery: false,
         credit: false
      })
   }

   useEffect(() => {
      async function getAllCategories() {
         try {
            const categories = await axios.get('http://127.0.0.1:8000/api/categories/')
            setCategories(categories.data)
         } catch (error) {
            console.log(error);
         }
      }
      getAllCategories()
   }, [])

   const { dispatch } = useContext(DarkModeContext);
   const { filterProducts, setFilterProducts } = useContext(DarkModeContext)

   return (
      <div className="searchItem">
         <div className="searchInput">
            <div className="input" onClick={(e) => setIsClick(!isClick)}>
               <p className="searchMainName"><MultiLingualContext contentId='choose_category'></MultiLingualContext></p>
               <KeyboardArrowDown />
            </div>
            {isClick &&
               <div className="output">
                  {categories.map((category) => (
                     <ul key={category.id}>
                        <li className="list2" onClick={() => setFilterProducts({ ...filterProducts, category: category.category_name })} name='category'>{category.category_name}</li>
                     </ul>
                  ))}
               </div>
            }
         </div>

         <div className="searchInput">
            <div className="input" onClick={(e) => setIsClick2(!isClick2)}>
               <p className="searchMainName"><MultiLingualContext contentId='choose_place'></MultiLingualContext></p>
               <KeyboardArrowDown />
            </div>
            {isClick2 &&
               <div className="output">
                  {places.map((place, index) => (
                     <li key={index}>
                        <p className="listName">
                           <p className="listPlaceName">{place.title} <p><KeyboardArrowDown /></p></p>
                           <ul>
                              {place.content.map((c, i) => (
                                 <li key={i} className="list" onClick={() => setFilterProducts({ ...filterProducts, location: c.name })} name='location'>{c.name}</li>
                              ))}
                           </ul>
                        </p>
                     </li>
                  ))}
               </div>
            }
         </div>

         <div className="searchChoose">
            <p className="searchMainName"><MultiLingualContext contentId='deliveri'></MultiLingualContext></p>
            <div>
               <Switch checked={filterProducts.delivery} onClick={(e) => setFilterProducts({ ...filterProducts, delivery: e.target.checked })} />
               <label htmlFor="eltipBermek"><MultiLingualContext contentId='yes'></MultiLingualContext></label>
            </div>
         </div>

         <div className="searchPrice">
            <p className="searchMainName"><MultiLingualContext contentId='pay'></MultiLingualContext></p>
            <div>
               <Switch checked={filterProducts.credit} onClick={(e) => setFilterProducts({ ...filterProducts, credit: e.target.checked })} />
               <label htmlFor="kredit"><MultiLingualContext contentId='credit'></MultiLingualContext></label>
            </div>
         </div>

         <div className="searchButton" onClick={clearFilter}>
             <MultiLingualContext contentId='arassala'></MultiLingualContext>
         </div>

      </div>
   )
}

export default SearchItem;