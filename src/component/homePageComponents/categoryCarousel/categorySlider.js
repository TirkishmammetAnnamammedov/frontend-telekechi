import React from "react";
import "./categorySlider.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowForward } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import altImg from "../../../images/altImg.png";

const CategoryCarousel = () => {
  const [isVip, setIsVip] = useState([]);
  useEffect(() => {
    async function getProductVip() {
      try {
        const resp = await axios.get('http://127.0.0.1:8000/api/vipproducts/')
        setIsVip(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProductVip()
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    onPauseHover: false,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  return (
    <div className="categoryCarousel crsl">
      <div className="nextIcon">
        <h2>Lorem ipsum dolor</h2>
        <ArrowForward className="nextIconHref" />
      </div>
      <Slider {...settings} className='ctgSlider'>
        {isVip.map((vip) => (
          <div className="ctgWrapper" key={vip.id}>
            <div className="ctg" >
              <img className="ctgImg" src={vip.product_image ? vip.product_image : altImg} />
              <div className="ctgItems">
                <h3>{vip.product_name}</h3>
                <p>{vip.about_product}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategoryCarousel;