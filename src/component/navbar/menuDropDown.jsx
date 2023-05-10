import React, { useContext } from "react";
import "./navbar.scss";
import { Menu } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import MultiLingualContext from "../../context/multiLingualContext";

const DropDown = () => {
   const [categories, setCategories] = useState([]);
   const { category, setCategory } = useContext(DarkModeContext)
   const [isActive, setIsActive] = useState(false);
   const history = useHistory()
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

   const [logo, setLogo] = useState([]);
   useEffect(() => {
     axios.get('http://127.0.0.1:8000/api/mainapi/')
       .then((resp) => {
         setLogo(resp.data[0].logos);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);

   return (
      <>
         <div className="dropDownBtn" onClick={() => setIsActive(!isActive)}>
            <p><Menu className="menuIcon" /></p>
            <p className="no mobile"><MultiLingualContext contentId='category'></MultiLingualContext></p>
         </div>
         <div className={isActive ? "dropDown active" : "dropDown"} onClick={() => setIsActive(false)}>
            <div className="blur"></div>
            <div className="dropDownContent" onClick={e => e.stopPropagation()}>
               <Link to='/'>
                    <div className="catgLogo">
                       <img src={logo} alt='logo' className="ctgLogoImg"/>
                    </div>
               </Link>
               {categories.map((category) => (
                  <Link to='/categories' style={{textDecoration: "none", color: "black"}}>
                     <div className="dropDownItem" key={category.id}>
                        <div className="dpItem">
                           <div className="dpItemList" onClick={() => setCategory(category.category_name)}>{category.category_name}</div>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </>
   )
}

export default DropDown;


