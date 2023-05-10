import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./auth.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginFailed, loginStart, loginSuccess } from "../../redux/userSlice";
import MultiLingualContext from "../../context/multiLingualContext";

const Login = () => {
  const [logo, setLogo] = useState([]);

  const [userLogin, setUserLogin] = useState({
    phone_number: "",
    password: ""
  });
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const phonePattern = /^[+][9][9][3][6]\d{7}$/;
    const isPhoneValid = phonePattern.test(userLogin.phone_number);
    const isPasswordValid = userLogin.password.length >= 8;        
    setIsValid(isPhoneValid && isPasswordValid);
  }, [userLogin]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/mainapi/')
      .then((resp) => {
        setLogo(resp.data[0].logos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dispatch = useDispatch()
  const history = useHistory()
  const handleChange = (e) => {
    setUserLogin((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const [hasError, setError] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(false);

  const getUser = async (e) => {
    e.preventDefault();
    if (!isValid) return
    dispatch(loginStart())
    setIsloading(true);
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/islogin/' + userLogin.phone_number + '/' + userLogin.password)
      if (res.status === 417) {
        alert('password is correct');
      } else if (res.status === 401) {
        alert('phone number is correct');
      }
      else {
        dispatch(loginSuccess(res.data));
        history.push('/profil/add')
        alert("Üstünlikli goşuldy!")
      }
    } catch (error) {
      console.log(error)
      setError(true);
    }
    setIsloading(false);
  }


  return (
    <div className="auth">
      <div className="authTop">
        <img src={logo} alt="logo" className="logoImg" />
        <p>Присоединиться к TürkmenTelekeçi.com</p>
      </div>
      <div className="form">
        <div className="logoForMobile"><img src={logo} alt="logo" /></div>
        <h3>Login</h3>
        <div className="formControl">
          <div className="formGroup">
            <label htmlFor="phone_number"><MultiLingualContext contentId='tel'></MultiLingualContext></label><br />
            <input
              name="phone_number"
              type="tel"
              placeholder="Telefon"
              pattern="[+][9][9][3][0-9]\d{7}"
              title="Nomer turkmen standardynda girizmeli"
              defaultValue="+993"
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password"><MultiLingualContext contentId='password'></MultiLingualContext></label><br />
            <input
              name="password"
              type="password"
              pattern=".{8,}"
              title="Parolyňyz azyndan 8 simwoldan ybarat bolmaly"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="formBottomLink">
            <div className="formBottom">
              <p>New user?</p>
              <Link to="/register" className="link">
                <p>Click to Register</p>
              </Link>
            </div>
            <div className="rightBottom">
              <Link to="/password-reset-account-verify" className="link">
                <p>Забыли пароль?</p>
              </Link>
            </div>
          </div>
          <div className="formSubmit">
            <button onClick={getUser}>Girmek</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;