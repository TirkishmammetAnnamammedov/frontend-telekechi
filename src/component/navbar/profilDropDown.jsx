import { Logout } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useSelector } from "react-redux";
import MultiLingualContext from "../../context/multiLingualContext";

const ProfilDropDown = ({ isActiveProfil, setIsActiveProfil }) => {
    const { currentUser } = useSelector((state) => state.user)

    const logout = () => {
        localStorage.clear()
        alert("Siz Web savdymyzyn registrasiya boluminde bellenmedik. Girmek uchin registrasiya sahypasyna gechin!")
    }

    return (
        <div className={isActiveProfil ? 'prfDp active' : 'prfDp'} onClick={() => setIsActiveProfil(false)}>
            <div className="prfBlur"></div>
            <div className="prfDpDown">
                <div className="prfDpContainer">
                    <div className="prfDpTop">
                    <MultiLingualContext contentId='welcome'></MultiLingualContext>
                    </div>
                    <div id="modalMobile" className="prfDpContent">
                        <h3><MultiLingualContext contentId='profil'></MultiLingualContext></h3>
                        <Link to={currentUser ? '/profil/add' : '/login'} style={{ textDecoration: "none" }}>
                            <p><MultiLingualContext contentId='add'></MultiLingualContext></p>
                        </Link>
                        <Link to={currentUser ? '/profil/myProduct' : '/login'} style={{ textDecoration: "none" }}>
                            <p><MultiLingualContext contentId='my_product'></MultiLingualContext></p>
                        </Link>
                        <Link to={currentUser ? '/profil/favourite' : '/login'} style={{ textDecoration: "none" }}>
                            <p><MultiLingualContext contentId='favourite'></MultiLingualContext></p>
                        </Link>
                        <Link to={currentUser ? '#' : '/login'} style={{ textDecoration: "none" }}>
                            <div className="logout" >
                                <Logout className="logoutIcon" />
                                {currentUser ?
                                    <div onClick={logout}>
                                        Logout
                                    </div>
                                    : 'Login'}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilDropDown;