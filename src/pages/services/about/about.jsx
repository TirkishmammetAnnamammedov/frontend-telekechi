import React from "react";
import "./about.scss";
import Navbar from "../../../component/navbar/navbar";
import RouteList from "../../../component/topRouteList/routeList";
import Footer from "../../../component/footer/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import MultiLingualContext from "../../../context/multiLingualContext";

const About = () => {

    const [abouts, setAbout] = useState([]);
    useEffect(() => {
     async function getAbout(){
        try {
           const abouts = await axios.get('http://127.0.0.1:8000/api/mainapi/')
           setAbout(abouts.data)
        } catch (error) {
           console.log(error);
        }
     }
     getAbout()
    }, [])


    return(
        <div className="about">
            <Navbar/>
            <div className="aboutContainer">
                <RouteList main="Baş sahypa" categoryName="Biz barada"/>
                <div className="aboutArea">
                    <h2><MultiLingualContext contentId='about'></MultiLingualContext></h2>
                   {abouts.map((about) => (
                    <p key={about.id}>
                        {about.about_us}
                    </p>
                   ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;