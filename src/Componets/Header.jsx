import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import {toast} from 'react-hot-toast'

{/* <script src="https://kit.fontawesome.com/1e26d3ee93.js" crossorigin="anonymous"></script> */}

const Header = () => {
  const router = useNavigate();

  const [userName,setUserName] = useState();

  useEffect(()=>{
    const dbUser = JSON.parse(localStorage.getItem("userData"));
    // console.log(dbUser)
    if(dbUser){
      setUserName(dbUser.name)
    }
  },[])

  function logout()
  {
    localStorage.removeItem("userData");
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("cartProducts");
    setUserName("");
    toast.success("Logged Out...");
  }

  return (
  
      <div id="screen1">
        <div id="navbar"> 
        <div>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipcart"/>
        </div>
        <div>
          <input type="text" placeholder='Search for products, brands and more'/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
              <h3>{userName ? userName : "Profile"}</h3>
        </div>
        <div>
          <h3 style={{cursor:"pointer"}} onClick={logout}>{userName ? "Logout" : ""}</h3>
        </div>
        <div>
        <button onClick={()=>router('/wishlist')}>Wishlist</button>
        </div>
        <div>
        <button onClick={()=>router('/cart')}>Cart</button>
        </div>
      </div>
      </div>
  
  )
}

export default Header
