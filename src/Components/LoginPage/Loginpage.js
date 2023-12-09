import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './loginpage.css'

const Loginpage = () => {
    const navigate = useNavigate();

    const [crediantial, setCrediantial] = useState({ email: "", password: "" });
    const [passVis, setPassVis] = useState(false);
    const [warning, setWarning] = useState("");

    // eslint-disable-next-line
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleclick = async (e) => {
        e.preventDefault();
        if (crediantial.password === undefined || crediantial.email === undefined) {
           setWarning("All fields are required");
       }
        else if (!crediantial.email.match(mailformat)) {
            setWarning("invalid email address");
        }else if(crediantial.password.replaceAll(' ', '').length < 8){
            setWarning("minimun length of password should be 8");
        } 
        else {
            setWarning("");
            navigate('/dashboard');
        }
    }
    const onChange = (e) => {
        setCrediantial({ ...crediantial, [e.target.name]: e.target.value });
    }

    return (
        <div className="loginContainer">
            <div className='loginpage'>
                <form onSubmit={handleclick}>
                    <h2 className="login-heading">Login</h2>
                    <div className="inputbox">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            name="email"
                            value={crediantial.email}
                            onChange={onChange}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='inputbox'>
                        <input
                             type={
                                passVis ? "text" : "password"
                            }
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={onChange}
                            value={crediantial.password}
                            minLength="5"
                            placeholder='password'
                        />
                        <div className="password-show" style={{ display: passVis?"block":"none"}} onClick={()=>{ 
                            setPassVis(!passVis)
                        }}>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <div className="password-hide" style={{ display: passVis?"none":"block"}} onClick={()=>{ 
                            setPassVis(!passVis)
                        }}>
                            <i class="fa-regular fa-eye-slash"></i>
                        </div>
                    </div>
                    <div className="warningDiv">
                        <p className='warning-msg'>{warning}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Loginpage
