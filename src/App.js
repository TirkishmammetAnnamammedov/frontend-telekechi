import React, { useContext, useState } from "react";
import Home from "./pages/home/home";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";  
import New from "./pages/categories/new";
import FruitVegtble from "./pages/categories/fruitVegtble";
import All from "./pages/categories/all";
import Card from "./pages/card/card";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Logout from "./pages/auth/logout";
import PasswordResetVerify from "./pages/auth/password-reset-account-verify";
import About from "./pages/services/about/about";
import Rule from "./pages/services/rule/rule";
import Use from "./pages/services/howUse/use";
import MyProduct from "./pages/customer/myProduct/myProduct";
import Favourite from "./pages/customer/favourite/favourite";
import AddProduct from "./pages/customer/addProduct/addProduct";
import Search from "./component/search/search.";
import Categories from "./pages/categories/category/categories";
import NotFound from "./pages/notFound/notFound";
import {LanguageContext} from "./context/langContext"

function App(){
  const {darkMode} = useContext(DarkModeContext);
  const [language, setLanguage] = useState("Türkmen")
  function toggleLanguage(){
    setLanguage((language) => (language === 'Türkmen' ? 'Русский' : 'Türkmen'));
  }

    return(
        <div className= {darkMode ? "app dark" : "app"}>
          <LanguageContext.Provider value={{language, toggleLanguage}}>
             <Router>
                 <Switch>
                   <Route path ="/" exact><Home/></Route>  
                   <Route path ="/home/all" exact><All/></Route> 
                   <Route path ="/home/new" exact><New/></Route> 
                   <Route path ="/home/fruitVegetable" exact><FruitVegtble/></Route>  
                   <Route path="/categories" exact><Categories/></Route> 
                   <Route path ="/card/:id" exact><Card/></Route>
                   <Route path="/register" exact><Register/></Route> 
                   <Route path="/login" exact><Login/></Route>
                   <Route path="/logout" exact><Logout/></Route>
                   <Route path="/password-reset-account-verify" exact><PasswordResetVerify/></Route>    
                   <Route path="/about" exact><About/></Route>  
                   <Route path="/about/use" exact><Use/></Route> 
                   <Route path="/about/rule" exact><Rule/></Route> 
                   <Route path="/profil/add" exact><AddProduct/></Route>                
                   <Route path="/profil/myProduct" exact><MyProduct/></Route>  
                   <Route path="/profil/favourite" exact><Favourite/></Route>
                   <Route path="/search" exact><Search/></Route>  
                   <Route path="/notFound" exact><NotFound/></Route>       
                   <Redirect to="/notFound"/>
                 </Switch>
             </Router> 
          </LanguageContext.Provider> 
        </div>
    )        
    }


export default App;