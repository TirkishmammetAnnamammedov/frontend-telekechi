import ImageSlider from "./imageSlider";
import "./owlCarousel.css";
import { imgData } from "./ImgData2";
 
const OwlCarousel = () => {
  return(
    <div className="owlCarousel carousel">
        <ImageSlider imgData = {imgData}/>
    </div>
  )
}

export default OwlCarousel;