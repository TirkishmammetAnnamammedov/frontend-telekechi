import React, { useEffect } from "react";
import "./customerProduct.scss";
import { DeleteOutlined, KeyboardArrowDown } from "@mui/icons-material";
import { AddCircleOutline, Add } from "@mui/icons-material";
import altImg from "../../images/altImg.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import MultiLingualContext from "../../context/multiLingualContext";

const CustomerProduct = () => {
    const [userProduct, setUserProduct] = useState([])
    const { currentUser } = useSelector((state) => state.user)
    const [a, setA] = useState(false)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/login/' + currentUser?.phone_number + '/' + currentUser?.password)
                setUserProduct(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [a])

    const DeleteBtn = value => async () => {
        try {
            await axios.delete('http://127.0.0.1:8000/api/products/' + value + '/')
            setA(!a)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="customerProduct">
            <div className="cstTop">
                <div className="cstTopName">
                    <h3><MultiLingualContext contentId='my_product'></MultiLingualContext></h3>
                    <KeyboardArrowDown className="cstArrowDown" />
                </div>
                <Link to="/profil/add" style={{ textDecoration: "none", color: 'black' }}>
                    <div className="topRightAdd">
                        <p><AddCircleOutline className="add" /></p>
                        <h3><MultiLingualContext contentId='add'></MultiLingualContext></h3>
                    </div>
                </Link>
            </div>
            <div className="cstProducts">
                {userProduct.length ? (
                    <div>
                        {userProduct?.map((i) => (
                            <div className="cstProduct" key={i.id}>
                                <Link to={`/card/${i.id}`}>
                                    <img
                                        className="cstProductImg"
                                        src={i.product_image ? i.product_image : altImg}
                                        alt="Product"
                                    />
                                </Link>
                                <div className="cstProductBox">
                                    <div className="cstProductInform">
                                        {i.about_product.slice(0, 85)}
                                    </div>
                                    <h2>{i.product_name}</h2>
                                    <h4>{i.product_price} TMT</h4>
                                    <p>{i.product_address} {i.joined_date}</p>
                                </div>
                                <div className="cstProductRight">
                                    <DeleteOutlined className="delete" onClick={DeleteBtn(i.id)} />
                                </div>
                            </div>
                        ))}
                    </div>
                )
                    : (
                        <div className="notProduct">
                            <img className="notProductImg" src={altImg} alt="no photo" />
                            <p><MultiLingualContext contentId='cardInform'></MultiLingualContext></p>
                        </div>
                    )
                }
            </div>
            <Link to="/profil/add" style={{ textDecoration: "none", color: 'black' }}>
                <div className="bottomAddMobile">
                    <p><Add /></p>
                </div>
            </Link>
        </div>
    )
}

export default CustomerProduct;