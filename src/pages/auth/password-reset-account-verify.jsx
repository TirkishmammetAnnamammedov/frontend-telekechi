import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import { useState, useEffect} from "react";
import axios from "axios";
import MultiLingualContext from "../../context/multiLingualContext";

const PasswordResetVerify = () => {
  const [logo, setLogo] = useState([]);
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/mainapi/')
         .then((resp) => {
          setLogo(resp.data[0].logos);
      })
         .catch ((error) => {
           console.log(error);
      });
  }, []);
   
  const [account, setAccount] = useState({
      phone_number: ""
  });

  const handleChange = (e) =>{
    setAccount((p)=>({...p,[e.target.name]:e.target.value}))
  }

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const phonePattern = /^[+][9][9][3][6]\d{7}$/;
    const isPhoneValid = phonePattern.test(account.phone_number);    
    setIsValid(isPhoneValid);
  }, [account]);
  
    const getAccountVerify = async (e) => {
      e.preventDefault();
      if (!isValid) return;
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/forgotpasswords/',account)
            alert("Üstünlikli ugradyldy.Siziň telefon nomeriňiz barlanyp biraz wagtdan şu nomeriňize parolyňyzy sms arkaly ugradarys!")
        } 
        catch (err) {
            console.log(err)
            alert("Bu nomerde ulanyjy tapylmady")
        }
    }

    return(
        <div className="auth">
            <div className="authTop">
                <img src={logo} alt="logo" className="logoImg"/>
                <p>Присоединиться к TürkmenTelekeçi.com</p>
            </div>
            <div className="form">
            <div className="logoForMobile"><img src={logo} alt="logo"/></div>
              <h3>Account verify</h3> 
              <div className="formControl">
                <div className="formGroup">
                    <label htmlFor="phone_number"><MultiLingualContext contentId='tel'></MultiLingualContext></label><br/>
                    <input 
                       onChange = {handleChange}
                       name="phone_number"
                       type="tel" 
                       placeholder="Telefon"
                       pattern="[+][9][9][3][0-9]\d{7}"
                       title="Nomer turkmen standardynda girizmeli"
                       defaultValue="+993"   
                       required
                    />
                </div>
                <div className="formBottomLink">
                  <div className="formBottom">
                    <Link to="/login" className="link">
                      <p>Back to Login</p>
                    </Link>
                  </div>
                </div>
                <div className="formSubmit">
                     <button onClick={getAccountVerify}>Girmek</button>
                </div>
            
             </div>
            </div>
        </div>
    )
}

export default PasswordResetVerify;