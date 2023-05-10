import React, { Component } from 'react';
import "./addProduct.scss";
import Navbar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import altImg from "../../../images/altImg.png";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';
import { places } from './citiesSource';
import MultiLingualContext from "../../../context/multiLingualContext";


const AddProduct = () => {
   const { currentUser } = useSelector((state) => state.user)

   const [state, setState] = useState({
      product_adder: currentUser?.phone_number,
      phone_number: '',
      product_address: '',
      product_category: '',
      product_name: '',
      product_price: '',
      product_quantity: '',
      about_product: '',
      product_image: null,
      product_image2: null,
      product_image3: null,
      product_image4: null,
      delivery: false,
      credit: false
   });

   const handleChange = (e) => {
      setState({
         ...state,
         [e.target.id]: e.target.value
      })
   };

   const [image, setImage] = useState()
   const handleImageChange = (e) => {
      setState({
         ...state,
         product_image: e.target.files[0]
      })
      setImage(URL.createObjectURL(e.target.files[0]));
   };

   const [image2, setImage2] = useState()
   const handleImageChange2 = (e) => {
      setState({
         ...state,
         product_image2: e.target.files[0]
      })
      setImage2(URL.createObjectURL(e.target.files[0]));
   };

   const [image3, setImage3] = useState()
   const handleImageChange3 = (e) => {
      setState({
         ...state,
         product_image3: e.target.files[0]
      })
      setImage3(URL.createObjectURL(e.target.files[0]));
   };

   const [image4, setImage4] = useState()
   const handleImageChange4 = (e) => {
      setState({
         ...state,
         product_image4: e.target.files[0]
      })
      setImage4(URL.createObjectURL(e.target.files[0]));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(state);
      let form_data = new FormData();
      if (state.product_image && state.product_image.name) {
         form_data.append('product_image', state.product_image, state.product_image.name);
      }
      if (state.product_image2 && state.product_image.name2) {
         form_data.append('product_image2', state.product_image2, state.product_image2.name);
      }
      if (state.product_image3 && state.product_image.name3) {
         form_data.append('product_image3', state.product_image3, state.product_image3.name);
      }
      if (state.product_image4 && state.product_image.name4) {
         form_data.append('product_image4', state.product_image4, state.product_image4.name);
      }
      form_data.append('phone_number', state.phone_number);
      form_data.append('product_adder', state.product_adder);
      form_data.append('product_address', state.product_address);
      form_data.append('product_category', state.product_category);
      form_data.append('product_name', state.product_name);
      form_data.append('product_price', state.product_price);
      form_data.append('product_quantity', state.product_quantity);
      form_data.append('about_product', state.about_product);
      form_data.append('delivery', state.delivery);
      form_data.append('credit', state.credit);

      let url = 'http://localhost:8000/api/products/';
      axios.post(url, form_data, {
         headers: {
            'content-type': 'multipart/form-data'
         }
      })
         .then(res => {
            console.log(res.data);
         })
         .catch(err => console.log(err))
   };


   const [category, setCategory] = useState([]);
   useEffect(() => {
      async function getAllCategory() {
         try {
            const category = await axios.get('http://127.0.0.1:8000/api/categories/')
            setCategory(category.data)
         } catch (error) {
            console.log(error);
         }
      }
      getAllCategory()
   }, [])

   return (
      <div className='addProduct'>
         <Navbar />
         <div className="addProductContainer">
            <form onSubmit={handleSubmit} className="addPrdct">
               <h2><MultiLingualContext contentId='add'></MultiLingualContext></h2>
               <div className="addArea">

                  <div className="addLeft">
                     <div className="addInput">
                        <label htmlFor="name"><MultiLingualContext contentId='name'></MultiLingualContext>:</label>
                        <input
                           className="addInt"
                           id='product_name'
                           type="text"
                           name="product_name"
                           placeholder="Saýlanmadyk"
                           value={state.product_name}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="addInput">
                        <label htmlFor="category"><MultiLingualContext contentId='choose_category'></MultiLingualContext>:</label>
                        <input
                           type="text"
                           onChange={handleChange}
                           value={state.product_category}
                           className="addInt"
                           list="category"
                           name="product_category"
                           id='product_category'
                           placeholder="Saýlanmadyk"
                           required
                        />
                        <datalist id="category">
                           {category.map((c) => (
                              <option key={c.id}>{c.category_name}</option>
                           ))}
                        </datalist>
                     </div>

                     <div className="addInput">
                        <label htmlFor="name"><MultiLingualContext contentId='cost'></MultiLingualContext>:</label>
                        <input
                           className="addInt"
                           id='product_price'
                           type="text"
                           name="product_price"
                           placeholder="Saýlanmadyk"
                           value={state.product_price}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="addInput">
                        <label htmlFor="product_quantity"><MultiLingualContext contentId='amount'></MultiLingualContext>:</label>
                        <input
                           className="addInt"
                           id='product_quantity'
                           type="text"
                           name="product_quantity"
                           placeholder="Saýlanmadyk"
                           value={state.product_quantity}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="addInput">
                        <label htmlFor="product_address"><MultiLingualContext contentId='place'></MultiLingualContext>:</label>
                        <input
                           className="addInt"
                           id='product_address'
                           type="text"
                           list='place'
                           name="product_address"
                           placeholder="Saýlanmadyk"
                           value={state.product_address}
                           onChange={handleChange}
                           required
                        />
                        <datalist id="place">
                           {places.map((p) => (
                              <option key={p.id}>{p.title}</option>
                           ))}
                        </datalist>
                     </div>

                     <div className="addInput">
                        <label htmlFor="phone_number"><MultiLingualContext contentId='tel'></MultiLingualContext>:</label>
                        <input
                           className="addInt"
                           type="tel"
                           name="phone_number"
                           placeholder="+99362636389"
                           pattern="[+9936]{5}[0-9]{7}"
                           title="Nomer turkmen standardynda girizmeli"
                           id='phone_number'
                           value={state.phone_number}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <div className="addCheckbox">
                        <label htmlFor="eltme"><MultiLingualContext contentId='deliveri'></MultiLingualContext>:</label>
                        <input
                           type="checkbox"
                           name="eltme"
                           defaultChecked={state.delivery}
                           onClick={(e) => setState({ ...state, delivery: e.target.checked })}
                        />
                     </div>

                     <div className="addCheckbox">
                        <label htmlFor="credit"><MultiLingualContext contentId='credit'></MultiLingualContext>:</label>
                        <input
                           type="checkbox"
                           name="credit"
                           defaultChecked={state.credit}
                           onClick={(e) => setState({ ...state, credit: e.target.checked })}
                        />
                     </div>

                     <div className="addInput">
                        <label htmlFor="about_product"><MultiLingualContext contentId='cardDescription'></MultiLingualContext>:</label>
                        <textarea
                           value={state.about_product}
                           onChange={handleChange}
                           type="text"
                           className="addInt"
                           id='about_product'
                           name="about_product"
                           placeholder="Doly ady we ş.m..."
                           required
                        />
                     </div>

                  </div>
                  <div className="addRight">
                     <label htmlFor="product_image" className="icon"> <p><MultiLingualContext contentId='choose_img'></MultiLingualContext>:</p> <DriveFolderUploadOutlined className="file" /></label>
                     <input
                        type="file"
                        id="product_image"
                        name='product_image'
                        accept='image/png, image/jpeg'
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                     />
                     <div className="addRightImg">
                        <div className="topMainImg">
                           <img
                              src={image ? image : altImg}
                              alt="no image" />
                        </div>

                        <p><MultiLingualContext contentId='add_img'></MultiLingualContext></p>

                        <div className="bottomAnyImg">
                           <div className="ImgBottom">
                              <label htmlFor="product_image2">
                                 <input
                                    type="file"
                                    id="product_image2"
                                    name='product_image2'
                                    accept='image/png, image/jpeg'
                                    onChange={handleImageChange2}
                                    style={{ display: "none" }}
                                 />
                                 <img
                                    src={image2 ? image2 : altImg}
                                    alt="no image"
                                 />
                              </label>
                           </div>

                           <div className="ImgBottom">
                              <label htmlFor="product_image3">
                                 <input
                                    type="file"
                                    id="product_image3"
                                    name='product_image3'
                                    accept='image/png, image/jpeg'
                                    onChange={handleImageChange3}
                                    style={{ display: "none" }}
                                 />
                                 <img
                                    src={image3 ? image3 : altImg}
                                    alt="no image"
                                 />
                              </label>
                           </div>

                           <div className="ImgBottom">
                              <label htmlFor="product_image4">
                                 <input
                                    type="file"
                                    id="product_image4"
                                    name='product_image4'
                                    accept='image/png, image/jpeg'
                                    onChange={handleImageChange4}
                                    style={{ display: "none" }}
                                 />
                                 <img
                                    src={image4 ? image4 : altImg}
                                    alt="no image"
                                 />
                              </label>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
               <button className="addProductButton"> <MultiLingualContext contentId='addBtn'></MultiLingualContext> </button>
            </form>
         </div>
         <Footer />
      </div>
   );
}

export default AddProduct;
