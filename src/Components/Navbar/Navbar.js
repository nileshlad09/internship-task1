import React from 'react'
import { useNavigate } from "react-router-dom";
import './navbar.css'
const Navbar = () => {

  var navigate = useNavigate();

  return (
    <div  className='navbarSection'>
      <div className="logo">
        <span>SOME LOGO</span>
      </div>
      <div className="login-logout">
        <p>USER NAME</p>
        <button className='logout-btn' onClick={()=>{
          navigate('/')
        }}>Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
