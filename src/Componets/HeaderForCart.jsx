import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const router = useNavigate();

  return (
  
      <div id="screen1">
        <div id="navbar"> 
        <div>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipcart"/>
        </div>
        <div>
          <input type="text" placeholder='Search for products, brands and more'/>
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </div>
        <div>
              <h3>Profile</h3>
        </div>
        <div>
        <button onClick={()=>router('/products')}>Products</button>
        </div>
      </div>
      </div>
  
  )
}

export default Header
