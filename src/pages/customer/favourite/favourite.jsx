import React from "react";
import "./favourite.scss";
import Navbar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import {FavoriteBorder, KeyboardArrowDown, Add, DeleteOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import altImg from "../../../images/altImg.png";
import MultiLingualContext from "../../../context/multiLingualContext";

const Favourite = () => {

    return(
        <div className="favour">
             <Navbar/>
             <div className="favouriteContainer">
             <div className="customerProduct">
             <div className="cstTop">
                <div className="cstTopName">
                    <h3><MultiLingualContext contentId='favourite'></MultiLingualContext></h3>
                    <KeyboardArrowDown className="cstArrowDown" />
                </div>
             </div>
             <div className="cstProducts">
                    {/* <div className="cstProduct">
                        <img className="cstProductImg" src={altImg} alt="product photo" />
                        <div className="cstProductBox">
                            <div className="cstProductInform">
                               hnjchdbnc jhb
                            </div>
                            <h2>alma</h2>
                            <h4>232 TMT</h4>
                            <p>Ashgabat 4567890-0</p>
                        </div>
                        <div className="cstProductRight">
                            <DeleteOutlined className="delete" />
                        </div>
                    </div> */}
                    <div className="notProduct">
                       <img className="notProductImg" src={altImg} alt="no photo" />
                       <p><MultiLingualContext contentId='cardInform'></MultiLingualContext></p>
                    </div>             


            </div>
            <Link to="/add" style={{ textDecoration: "none", color: 'black' }}>
                <div className="bottomAddMobile">
                    <p><Add/></p>
                </div>
            </Link>
        </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Favourite;