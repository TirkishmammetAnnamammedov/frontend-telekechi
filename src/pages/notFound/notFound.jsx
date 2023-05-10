import React from "react";
import notFound from "../../images/notProduct.jpg";
import './notFound.scss';
import { Link } from "react-router-dom";
import MultiLingualContext from "../../context/multiLingualContext";

const Notound = () => {

    return(
        <div className="notfound">
            <div className="notContainer">
                <img className="notImg" src={notFound} alt="Not Found"/>
                <h1><MultiLingualContext contentId='notFound'></MultiLingualContext></h1>
                <div className="backHomeBtn">
                  <Link to='/' style={{textDecoration: 'none'}}>
                    <p><MultiLingualContext contentId='notFound2'></MultiLingualContext></p>
                  </Link>
                </div>
            </div>
        </div>
    )
}

export default Notound;