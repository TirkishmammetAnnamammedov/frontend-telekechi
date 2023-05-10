import React from "react";
import "./routeList.scss";
import { NavigateNext } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RouteList = ({ main, categoryName, products, cardName }) => {
  return (
    <div className="routeList">
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <p>{main}</p>
      </Link>
      <NavigateNext />
      <p>{categoryName}</p>
      {products &&
        <NavigateNext />
      }
      <p>{products}</p>
      {cardName &&
        <NavigateNext />
      }
      <p>{cardName}</p>
    </div>
  )
}

export default RouteList;