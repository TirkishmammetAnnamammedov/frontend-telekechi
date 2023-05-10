import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from '@material-ui/icons';

const ImageSlider = ({ imgData }) => {
  const [slideRef, setSlideRef] = useState(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: -1,
    cssEase: "linear",
    arrows: false,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
        }
      }
    ]
  }

  return (
    <div className="imgSlider">
      <div className="imgSlider-button">
        <button onClick={slideRef?.slickPrev} className="left-button">
          <ArrowLeft />
        </button>
        <button onClick={slideRef?.slickNext} className="right-button">
          <ArrowRight />
        </button>
      </div>
      <Slider ref={setSlideRef} {...settings}>
        {imgData.map((img, index) => (
          <div className="owl-wrapper" key={index}>
            <div className="owl-image">
              <img src={img.img} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider;