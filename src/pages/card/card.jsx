import React from "react";
import "./card.scss";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import RouteList from "../../component/topRouteList/routeList";
import altImg from "../../images/altImg.png";
import { ArrowLeft, ArrowRight, Call, Close, FavoriteBorder } from "@mui/icons-material";
import {
  FacebookShareButton, TwitterShareButton,
  FacebookIcon, TwitterIcon, EmailShareButton, EmailIcon
} from "react-share";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MultiLingualContext from "../../context/multiLingualContext";

const Card = () => {
  const location = useLocation().pathname.split('/')[2];
  const [card, setCard] = useState([]);
  const photos = [
    { src: card.product_image },
    { src: card.product_image2 },
    { src: card.product_image3 },
    { src: card.product_image4 },
  ]
  const [slider, setSlider] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/products/' + location + '/')
        setCard(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProduct()
  }, [location])

  const handleOpen = (i) => {
    setSlider(i);
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlider;
    if (direction === "l") {
      newSlider = slider === 0 ? 3 : slider - 1;
    } else {
      newSlider = slider === 3 ? 0 : slider + 1;
    }
    setSlider(newSlider)
  };


  return (
    <div className="card">
      {open && <div className="slider">
        <Close className='imgClose' onClick={() => setOpen(false)} />
        <ArrowLeft className="imgArrow" onClick={() => handleMove('l')} />
        <div className="slideWrapper">
          <img src={photos[slider].src} className="sliderImg" />
        </div>
        <ArrowRight className="imgArrow" onClick={() => handleMove('r')} />
      </div>
      }
      <Navbar />
      <div className="cardContainer">
        <RouteList main="Baş sahypa" categoryName="Products" products={location} cardName={card.product_name} />
        <div key={card.id}>
          <div className="cardList">

            <div className="left">
              <div className="topMainImg">
                <FavoriteBorder className="topFavourite"/>
                <img
                  className="cardImg"
                  src={card.product_image ? card.product_image : altImg}
                  alt="Product photo"
                />
              </div>

              <p className="imgBottomText">Giňişleýin maglumat üçin suratlar</p>
              <div className="bottomImgs">
                {photos.map((photo, i) => (
                  <img
                    onClick={() => handleOpen(i)}
                    className="bottomImg"
                    src={photo.src ? photo.src : altImg}
                    alt="Product photo"
                  />
                ))}
              </div>
            </div>
            <div className="right">
              <div className="rightTop">
                <h2 className="featureName">{card.product_name}</h2>
                <Link to="" style={{ textDecoration: "none" }} />
                <div className="favourite">
                  <FavoriteBorder className="cardIcon" />
                  <p><MultiLingualContext contentId='addFavourite'></MultiLingualContext></p>
                </div>
              </div>

              <div className="featureContent">
                <div className="feature">
                  <div className="featureLeft"><MultiLingualContext contentId='place'></MultiLingualContext>:</div>
                  <div className="featureRight">{card.product_address}</div>
                </div>
                <div className="feature">
                  <div className="featureLeft"><MultiLingualContext contentId='ctg'></MultiLingualContext>:</div>
                  <div className="featureRight">{card.product_category}</div>
                </div>
                <div className="feature">
                  <div className="featureLeft"><MultiLingualContext contentId='habarlashmak'></MultiLingualContext>:</div>
                  <div className="featureRight">{card.phone_number}</div>
                </div>

                <h2 className="anotherName"><MultiLingualContext contentId='giňişleýin'></MultiLingualContext></h2>

                <div className="featureAnother">
                  <div className="leftAnother">
                    <p><MultiLingualContext contentId='cost'></MultiLingualContext>:</p>
                    <p><MultiLingualContext contentId='amount'></MultiLingualContext>:</p>
                    <p><MultiLingualContext contentId='deliveri'></MultiLingualContext>:</p>
                    <p><MultiLingualContext contentId='credit'></MultiLingualContext>:</p>
                  </div>
                  <div className="rightAnother">
                    <p>{card.product_price}TMT</p>
                    <p>{card.product_quantity}</p>
                    <p style={{ fontWeight: 'bolder' }}>{card.delivery ? '✓' : 'X'}</p>
                    <p style={{ fontWeight: 'bolder' }}>{card.credit ? '✓' : 'X'}</p>
                  </div>
                </div>

                <div className="btnBottom">
                  <div className='cardLinks'>
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
                  <div className="call">
                    <a href="tel:+99362811245">
                      <div className="animationCall">
                        <Call className="cardIcon" />
                        <p><MultiLingualContext contentId='call'></MultiLingualContext></p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bottom">
                  {card.product_address}.{card.joined_date}
                </div>

              </div>
            </div>
          </div>
          <div className="cardBottom">
            <h3 className="cardBottomName"><MultiLingualContext contentId='description'></MultiLingualContext></h3>
            <p>{card.about_product}</p>
          </div>
        </div>

        {/* <div className="mainContent">
                  <CardItem items={card}  title="Meňzeş bildirişler"/>
            </div> 
        */}
      </div>
      <Footer />
    </div>
  )
}

export default Card;