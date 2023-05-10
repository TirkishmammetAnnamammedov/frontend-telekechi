import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Logout = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/mainapi/')
      .then((resp) => {
        setLogo(resp.data[0].logos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const logout = () => {
    localStorage.clear()
  }

  return (
    <div className="auth">
      <div className="authTop">
        <img src={logo} alt="logo" className="logoImg" />
        <p>Присоединиться к TürkmenTelekeçi.com</p>
      </div>
      <form action="" className="form">
        <div className="logoForMobile"><img src={logo} alt="logo" /></div>
        <h3>Logout</h3>
        <div className="formControl">
          <div className="formGroup">
            <label htmlFor="phone">Telefon nomeriňiz</label><br />
            <input name="phone" type="tel" placeholder="Telefon" />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label><br />
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="formBottomLink">
            <div className="formBottom">
              <Link to="/login" className="link">
                <p>Back to Login</p>
              </Link>
            </div>
          </div>
          <div className="formSubmit">
            <button onClick={logout}>Chykmak</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Logout;