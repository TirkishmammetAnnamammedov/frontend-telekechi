import React from "react";
import "./footer.scss";
import { Call, Home, Textsms, LockClock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
    FacebookShareButton, TwitterShareButton,
    FacebookIcon, TwitterIcon, EmailShareButton, EmailIcon
} from "react-share";
import { useState, useEffect } from "react";
import axios from "axios";
import MultiLingualContext from "../../context/multiLingualContext";

const Footer = () => {

    const [service, setServise] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/mainapi/')
            .then((resp) => {
                setServise(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="footer">
            <div className="fLists">

                {service.map((serv) => (
                    <div className="bottomLogo" key={serv.id}>
                        <div className="bottomLogoTop">
                            <h2>Habarlaşmak</h2>
                            <img className="bottomLogoImg" src={serv.logos} alt="logo" />
                        </div>
                        <div className="flogoItem">
                            <Call className="bottomIcon" /> {serv.telekechi_phone_numbers}
                        </div>
                        <div className="flogoItem">
                            <Textsms className="bottomIcon" />  turkmentelekeci@gmail.com
                        </div>
                        <div className="flogoItem">
                            <LockClock className="bottomIcon" /><MultiLingualContext contentId='clock'></MultiLingualContext>
                        </div>
                        <div className="flogoItem">
                            <Home className="bottomIcon" /> {serv.addresses}
                        </div>
                    </div>
                ))}

                <div className="fList">
                    <h3 className="fListTop"><MultiLingualContext contentId='about'></MultiLingualContext></h3>
                    <Link to="/about" className="fListLink">
                        <li className="fListItem"><MultiLingualContext contentId='about'></MultiLingualContext></li>
                    </Link>
                    <Link to="/about/use" className="fListLink">
                        <li className="fListItem"><MultiLingualContext contentId='how_use'></MultiLingualContext></li>
                    </Link>
                    <Link to="/about/rule" className="fListLink">
                        <li className="fListItem"><MultiLingualContext contentId='rule'></MultiLingualContext></li>
                    </Link>
                    <Link to="" className="fListLink">
                        <li className="fListItem"><MultiLingualContext contentId='question'></MultiLingualContext></li>
                    </Link>
                </div>

                <div className="fList">
                    <h3 className="fListTop"><MultiLingualContext contentId='services'></MultiLingualContext></h3>
                    <li className="fListItem">Lorem ipsum dolor Lorem ipsum dolor</li>
                    <li className="fListItem">Lorem ipsum dolor</li>
                    <li className="fListItem">Lorem ipsum dolor</li>
                    <li className="fListItem">Lorem ipsum dolor</li>
                </div>
            </div>

            <div className="fBottomLink" >
                <FacebookShareButton
                    url={'http://blabla'}
                    quote={'yredfgyui'}
                    hashtag={'#hashtag'}
                    description={'Share with facebook'}
                >
                    <FacebookIcon size={30} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={'http://blabla'}
                    quote={'yredfgyui'}
                    hashtag={'#hashtag'}
                    description={'Share with twitter'}
                >
                    <TwitterIcon size={30} round />
                </TwitterShareButton>
                <EmailShareButton
                    url={'http://blabla'}
                    quote={'yredfgyui'}
                    hashtag={'#hashtag'}
                    description={'Share with email'}
                >
                    <EmailIcon size={30} round />
                </EmailShareButton>
            </div>

            <div className="fBottom">
                <p>Copyright &copy; {(new Date().getFullYear())} Türkmen Telekeçi </p>
            </div>
        </div>
    )
}

export default Footer;