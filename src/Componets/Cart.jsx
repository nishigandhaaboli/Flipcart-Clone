import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
// import axios from 'axios'
import HeaderForCart from './HeaderForCart';


const Cart = () => {

    const [cartProducts,setCartProducts]  = useState();
    const router = useNavigate();

    useEffect(()=>{
        const cartProdFromStorage = JSON.parse(localStorage.getItem("cartProducts"));
        if(cartProdFromStorage)
        {
            setCartProducts(cartProdFromStorage);
        }
        else{
            toast.error("no products found")
        }
    },[])
    useEffect(()=>{
      const isUserLoggedIn = JSON.parse(localStorage.getItem("userData"))
      if(!isUserLoggedIn){
        router("/login")
      }
    },[])

    function deletePruduct(e){
      const cartStorageProd = JSON.parse(localStorage.getItem("cartProducts"))
      var newArray = [];
      for(var i =0; i<cartStorageProd.length; i++){
        if(e.title != cartStorageProd[i].title){
          newArray.push(cartStorageProd[i])
        }
      }
      localStorage.setItem("cartProducts",JSON.stringify(newArray));
      setCartProducts(newArray);
      toast.success("Product Deleted...");
    }

    return (
    <div id="mainCart">
      <div id="cartHeader">
      </div>
      <HeaderForCart/>
      {/* <button onClick={()=>router('/products')}>Products Page</button> */}
      <div id="cartScreen">
      <div id="right">
        <div id="right1">
          <p>Flipcart</p>
          <p>Grocery</p>
        </div>
        <div id="right2">
          <p>From Saved Adresses</p>
          <button>Enter Dilevery Pincode</button>
        </div>
        <div id="rightprod">
        {cartProducts && cartProducts.map((e,i)=>(
        <div key={i}>
            <div id="proDiv">
                  <img src={e.image} alt="movie"/>
                  <div id="info">
                      <h2>Details</h2>
                      <h3>Title :{e.title}</h3>
                      <p><b>Price</b> :{e.price}</p>
                      <p><b>Category</b> :{e.category}</p>
                      <button onClick={()=>deletePruduct(e)}>Delete</button>
                    </div>
            </div>
        </div>
      ))}
        </div>
      </div>
      <div id="left">
          <div>
          <h4>Price Details</h4>
          </div>
          <div>
            <p>Price </p>
            <p>Discount </p>
            <p>Delivery Charges </p>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default Cart
