import React from "react";
import "./home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import OwlCarousel from "../../component/homePageComponents/owlCarousel/owlCarousel";
import CategoryCarousel from "../../component/homePageComponents/categoryCarousel/categorySlider";
import CardItem from "../../component/homePageComponents/cardItem/cardItem";

function Home () {
  const [mainItems, setMainItems] = useState([]);

  useEffect(() => {
   async function getMainItems(){
      try {
         const mainItems = await axios.get('http://127.0.0.1:8000/api/products/')                                     
         setMainItems(mainItems.data)
      } catch (error) {
         console.log(error);
      }
   }
   getMainItems()
  }, [])


  const [newItems, setNewItems] = useState([]);
  useEffect(() => {
   async function getNewItems(){
      try {
         const newItems = await axios.get('http://127.0.0.1:8000/api/newproducts/')
         setNewItems(newItems.data)
      } catch (error) {
         console.log(error);
      }
   }
     getNewItems()
  }, [])

    return(  
       <div className = "home">
          <Navbar/>
         <div className = "homeContainer">
           <div className="carusel">
             <OwlCarousel/>
           </div>
             <CategoryCarousel/>
             <CardItem items={mainItems} title="Gök önümler we miweler"/>
             <CardItem items={newItems} title="Täze harytlar"/>
          </div>
          <Footer/>
        </div>
     )
}

export default Home;