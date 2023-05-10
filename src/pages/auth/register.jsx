import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./auth.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailed, loginStart, loginSuccess } from "../../redux/userSlice";
import MultiLingualContext from "../../context/multiLingualContext";

const Register = () => {
    const [data, setData] = useState({
        phone_number: "",
        password: ""
    })
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setData((p) => ({ ...p, [e.target.name]: e.target.value }))
    }


        useEffect(() => {
            const phonePattern = /^[+][9][9][3][6]\d{7}$/;
            const isPhoneValid = phonePattern.test(data.phone_number);
            const isPasswordValid = data.password.length >= 8;        
            setIsValid(isPhoneValid && isPasswordValid);
          }, [data]);

    const RegisterBtn = async (e) => {
        e.preventDefault();
        if (!isValid) return;
        dispatch(loginStart())
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/signup/users/', data)
            dispatch(loginSuccess(res.data));
            alert("Üstünlikli goşuldy!")
            history.push('/profil/add')
        } catch (err) {
            dispatch(loginFailed())
            alert("Täzeden synanyşyň!")
            setError(true);
        }
    }

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

    return (
        <div className="auth">
            <div className="authTop">
                <img src={logo} alt="logo" className="logoImg" />
                <p>Присоединиться к TürkmenTelekeçi.com</p>
            </div>
            <form onSubmit={RegisterBtn} className="form">
                <div className="logoForMobile"><img src={logo} alt="logo" /></div>
                <h3>Register</h3>
                <div className="formControl">
                    <div className="formGroup">
                        <label htmlFor="phone"><MultiLingualContext contentId='tel'></MultiLingualContext></label><br />
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
                            minLength="8"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formBottomLink">
                        <div className="formBottom">
                            <p>Already user?</p>
                            <Link to="/login" className="link">
                                <p>Click to Login</p>
                            </Link>
                        </div>
                    </div>
                    <div className="formSubmit">
                        <button onClick={RegisterBtn}>Goshulmak</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Register;