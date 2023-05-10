import React from "react";
import "./cardItem.scss";
import { ArrowForward} from "@mui/icons-material";
import { Link } from "react-router-dom";
import altImg from "../../../images/altImg.png";

const CardItem = ({ items, title }) => {
  return (
    <div className="newItem">
      <div className="nextIcon">
        <h2>{title}</h2>
        <ArrowForward className="nextIconHref" />
      </div>
      <div className="newCards">
        <div className="newCard">
          {items?.slice(0, 10).map((item) => (
            <div key={item.id} className="newCardItem">
              <Link to={`/card/${item.id}`}>
                <img className="imgCard" src={item.product_image ? item.product_image : altImg} alt="product" />
              </Link>
              <p className="cardName">{item.product_name}</p>
              <h3 className="cardPrice">{item.product_price}TMT</h3>
              <p className="cardInform">{item.about_product.slice(0, 60)}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardItem;