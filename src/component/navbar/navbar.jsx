import React from "react";
import "./navbar.scss";
import {SearchOutlined,LanguageOutlined,DarkModeOutlined,PersonOutline,Login, Home} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext";
import DropDown from "./menuDropDown";
import ProfilDropDown from "./profilDropDown";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/langContext";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import MultiLingualContext from "../../context/multiLingualContext";

function Navbar () {
    const {dispatch} = useContext(DarkModeContext);
    const {language, toggleLanguage} = useContext(LanguageContext);
    const [isActiveProfil, setIsActiveProfil] = useState(false);
    const history = useHistory();
    const [search,setSearch] = useState('')
    const {searchProducts,setSearchPrducts} = useContext(DarkModeContext)
    const searchClick = async()=>{
     try {
       const res = await axios.get(`http://127.0.0.1:8000/api/products/search/?product_name=${search}`)
       setSearchPrducts(res.data)
       history.push('/search')
     } catch (err) {
      alert("bular yaly haryt tapylmady")
       console.log(err);
     }
    }

    const [logo, setLogo] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/mainapi/')
           .then((resp) => {
            setLogo(resp.data[0].logos);
        })
           .catch ((error) => {
             console.log(error);
        });
    }, []);
 
    return(
      <div className="navbar">
        <div className = "navbarTop">
          <div className = "wrapper">
            <div className = "logoTop">
                <Link to = "/" style={{textDecoration:"none"}}>
                <span>
                  <img src={logo} alt="logo" className="logo"/>
                </span>
                </Link>
            </div>
            <div className = "header-search">
              <div className="form">                     
               <input type="search" name="Search" placeholder="Gözle..." required="" onChange={(e)=>setSearch(e.target.value)}/>
               <button type="submit" className="btn btn-default"  aria-label="Left Align" onClick={searchClick}>
                    <SearchOutlined className="searchIcon"/>
               </button>
              </div>   
             
            </div>
            <div className = "items">
                <div className ="item">
                   <div className="langClick"><LanguageOutlined className ="icon" onClick={toggleLanguage}/>  
                        {/* <div className="langOut">
                            <p>Русский</p>
                            <p>Türkmen</p>                            
                        </div> */}                        
                    </div>
                     <span>{language}</span>                        
                </div>
                <div className ="item darkMode">
                    <p><DarkModeOutlined 
                      className ="icon" 
                      onClick={() => dispatch({type: "TOGGLE"})}
                    />  </p>
                    <span>Dark mode </span>                
                </div>
                <Link to = "/login" className="topSign">
                <div className ="item">              
                     <p><Login className="signIcon"/> </p>
                     Login
                </div>   
                </Link>               
            </div>
          </div>
        </div>

        <div className="navbarBottom">
           <div className="left">
            {/*  Menyu */}
              <div className="navbarContent category">
                <DropDown/>
              </div>
              
              {/*  Home page */}
              <Link to="/" style={{textDecoration: "none"}}>
                 <div className="navbarContent category">
                     <p className="orange"><Home/></p>
                     <p className="no mobile orange"><MultiLingualContext contentId='main'></MultiLingualContext></p>
                  </div>
              </Link>

              {/* Products */}
              <Link to="/home/fruitVegetable" style={{textDecoration: "none"}}>
                 <div className="navbarContent no tablet"><p><MultiLingualContext contentId='fruits'></MultiLingualContext></p></div>
              </Link>

              {/* All */}
              <Link to="/home/all" style={{textDecoration: "none"}}>
                 <div className="navbarContent"><p><MultiLingualContext contentId='all'></MultiLingualContext></p></div>
              </Link>

              {/* New */}
              <Link to="/home/new" style={{textDecoration: "none"}}>
                 <div className="navbarContent"><p><MultiLingualContext contentId='new'></MultiLingualContext></p></div>
              </Link>

              {/* Login for mobile */}
              <Link to = "/login" className="topSign">
                <div className ="item mobile">              
                     <p><Login className="signIcon"/> </p>
                     <p className="no mobile">Login</p>
                </div>   
              </Link> 
           </div>
           {/* Right My profil */}
           <div className="right">
              <div className="rightBtn" onClick={() => setIsActiveProfil(!isActiveProfil)}>
                   <p><PersonOutline className="rightIcon"/></p>
                   <div className="rightContent"><MultiLingualContext contentId='profil'></MultiLingualContext></div>
              </div>
             <ProfilDropDown isActiveProfil={isActiveProfil} setIsActiveProfil={setIsActiveProfil}/>
           </div>
 
        </div>
    </div>
    );
};

export default Navbar;